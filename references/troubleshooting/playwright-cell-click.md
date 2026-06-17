# Playwright(MCP)로 IBSheet 셀·버튼 클릭하기

IBSheet8 그리드를 Playwright(특히 MCP `browser_click`)로 자동 조작할 때, 일반 웹 요소처럼
`click()` 하면 **반응이 없거나 timeout** 난다. 원인은 두 가지이며, 둘 다 우회 패턴이 정해져 있다.

> 검증 출처: UIDT1260M00(자동검증-검사별검증기준) → 검사명 팝업(UILM1000P08) 돋보기 셀버튼 클릭
> + 조회조건 base-ui 콤보 조작 (2026-06-15, Playwright MCP 실측).

---

## 두 가지 장벽

### 장벽 1 — 포커스 오버레이가 pointer 를 가로챈다 (IBSheet 셀에서 확인)

IBSheet8 은 포커스된 행/커서 위에 **투명 오버레이 div** 를 깐다:
`.IBGYFocusRowBackground`, `.IBGYCursorBackground`, `#IBGYFocusCursors-*`.

이 오버레이가 셀(td) 위를 덮고 있어, Playwright 의 actionability 체크에서
`<div class="IBGYFocusRowBackground IBGYCursorBackground"> ... intercepts pointer events`
로그를 남기며 **클릭이 5초 timeout** 난다.

→ 해결: 클릭 직전 오버레이의 `pointer-events` 를 `none` 으로 무력화.

### 장벽 2 — 합성(untrusted) 이벤트는 무시된다 (base-ui 콤보에서 확인)

`page.evaluate(() => el.click())` 또는 `el.dispatchEvent(new PointerEvent('pointerdown'/'pointerup'/...))`
같은 **합성 이벤트는 base-ui Select 옵션 선택을 트리거하지 못한다**(무반응 실측).
IBSheet 의 셀버튼(onButtonClick) 도 IBSheet 내부 이벤트 위임을 타므로 동일하게 **신뢰(trusted) 입력**이 필요하다.

→ 해결: 실제 입력인 Playwright `locator.click()` / MCP `browser_click` 으로 클릭(좌표 아님, 셀렉터/ref).

---

## 표준 패턴 (3단계)

MCP `browser_click` 은 **좌표가 아니라 셀렉터/ref** 로 대상을 지정한다. IBSheet 셀에는 안정적인 고유
셀렉터가 없으므로, `evaluate` 로 대상을 찾아 **`data-pwtest` 마커를 박고** 그 셀렉터로 클릭한다.

```js
// ① evaluate — 대상에 마커 부여 + 포커스 오버레이 무력화 (한 번에)
await page.evaluate(() => {
  // (예) 검사명 셀의 돋보기 버튼 — background-image(btn_WF_EdiSch.png)로 식별
  const btns = [...document.querySelectorAll('*')].filter(el => {
    try { return /EdiSch/i.test(getComputedStyle(el).backgroundImage || '') } catch { return false }
  })
  // 위치로 대상 행/컬럼 선택 (가장 오른쪽 컬럼 + 첫 행 등)
  const sorted = btns.map(b => ({ b, r: b.getBoundingClientRect() })).filter(o => o.r.width > 0)
  const maxX = Math.max(...sorted.map(o => o.r.x))
  const target = sorted.filter(o => Math.abs(o.r.x - maxX) < 8).sort((a, b) => a.r.y - b.r.y)[0]
  target?.b.setAttribute('data-pwtest', 'cell-btn')

  // 포커스/커서 오버레이가 pointer 가로채는 것 차단
  document
    .querySelectorAll('[id^=IBGYFocusCursors], .IBGYFocusRowBackground, .IBGYCursorBackground')
    .forEach(l => { l.style.pointerEvents = 'none' })
})

// ② MCP browser_click — trusted 클릭, 마커 셀렉터로
//    browser_click({ element: '검사명 셀 돋보기', target: '[data-pwtest="cell-btn"]' })
```

---

## 셀 식별 팁

- **컬럼**: td 클래스가 `IBGYCell ... HideCol{idx}{Name}` 형태 (예: `HideCol1relTstCdView`).
  `[class*="relTstCdView"]` 로 특정 컬럼만 한정 가능. 단 행 구분은 안 되므로 행은 좌표로.
- **셀버튼(돋보기 등)**: `Button:'/images/btn_WF_EdiSch.png'` 류는 `<img>` 가 아니라 **background-image** 로
  렌더된다 → `getComputedStyle(el).backgroundImage` 에 파일명(`EdiSch` 등) 매칭으로 탐색.
  (편집모드에서만 표시되는 버튼이면 먼저 "수정" 진입 → 그 다음 탐색)
- **행**: `getBoundingClientRect().y` 로 위→아래 정렬해 N번째 행 선택.

---

## 콤보(base-ui Select) 옵션 선택 — 같은 원리

조회조건 콤보(`@base-ui` Select)는 옵션이 portal(`role=option`)에 렌더되고 **합성 click 으로는 선택 안 됨**.
동일하게 마커 + trusted click:

```js
// 트리거 열기: testid + select-trigger 슬롯
//   browser_click({ target: '[data-testid="uidt1260-cbo-cntr"] [data-slot="select-trigger"]' })

// 옵션에 마커
await page.evaluate(() => {
  const opt = [...document.querySelectorAll('[role=option]')].find(o => o.textContent.trim() === '서울본원')
  opt?.setAttribute('data-pwtest', 'opt-target')
})
//   browser_click({ target: '[data-pwtest="opt-target"]' })
```

- **다른 콤보 열기 전엔 `Escape`** 로 이전 드롭다운을 닫는다. 안 닫으면 이전 portal 의
  `<div role="presentation" data-base-ui-inert="">` 가 클릭을 가로채(`intercepts pointer events`) timeout.
- IBSheet 의 Enum 셀 편집 드롭다운은 IBSheet 자체(`.IBGYEnumMenuBody`)라 base-ui 와 별개.

---

## 검증된 에러 신호 → 원인 매핑

| timeout 로그에 보이는 요소 | 원인 | 해결 |
|---|---|---|
| `.IBGYFocusRowBackground` / `.IBGYCursorBackground` | IBSheet 포커스 오버레이 가로채기 | 오버레이 `pointer-events:none` |
| `div[role="presentation"][data-base-ui-inert]` | 이전 base-ui 드롭다운 미닫힘 | `Escape` 후 재클릭 |
| 클릭은 됐는데 아무 반응 없음 | 합성 이벤트(untrusted) 사용 | `evaluate(()=>el.click())` 대신 MCP/Playwright trusted click |

---

## 부수 주의 (이번 세션 실측)

- **HMR 세션 끊김**: 소스 `.tsx` 를 수정하면 Vite HMR 이 돌면서 MCP 브라우저 페이지가 닫히는 경우가 있다
  (`Target page, context or browser has been closed`). **검증은 수정 완료 후 재기동**해서 한 번에.
- **프로필 lock 좀비**: 세션 비정상 종료 시 `Browser is already in use ... ms-playwright-mcp`.
  해당 프로필 chrome 프로세스 종료 + 프로필 디렉토리의 `SingletonLock`/`SingletonCookie`/`SingletonSocket`
  제거 후 재기동하면 풀린다.
- **입력 vs 클릭 분리**: 텍스트 입력은 React controlled 라 native setter + `input`/`change` dispatch 로,
  클릭(셀/버튼/옵션/라디오)은 trusted MCP click 으로 — 이렇게 나누면 가장 안정적.
  (네비게이션 직후 trusted click 도 간헐 무반응한 사례 있음 — 프로젝트 메모리 참조)
