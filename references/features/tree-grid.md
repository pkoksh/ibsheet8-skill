# 트리 그리드

## 기본 설정

`MainCol`에 트리를 표시할 열 이름을 지정합니다. 하나의 열만 트리가 될 수 있습니다.

```javascript
Cfg: {
    MainCol: "sProduct",     // "sProduct" 열에 트리 표시
    NoTreeLines: true        // 노드 연결선 숨김 (선택)
}
```

---

## 데이터 규격

### Items 기반 계층 구조 (권장)

```javascript
var treeData = {
    "Data": [
        {
            sProduct: "내부 시스템 개발 사업", sCustomer: "B사",
            Items: [
                { sProduct: "글로벌 통합 인사시스템", sKind: "프로젝트", sPrice: "192" },
                {
                    sProduct: "E-HR시스템", sKind: "유지보수",
                    Items: [
                        { sProduct: "물산 E-HR시스템", sKind: "기타", sPrice: "4" },
                        { sProduct: "제조 E-HR시스템", sKind: "기타", sPrice: "4" }
                    ]
                }
            ]
        }
    ]
};

sheet.loadSearchData(treeData);
```

### Level 기반 평면 구조

`Level` 값으로 계층을 표현합니다. 최상위는 `0`, 하위는 부모보다 1씩 증가합니다.
`IBSheet.v7.convertTreeData()`로 Items 기반 구조로 변환하여 사용합니다.
`IBSheet.v7.convertTreeData()`함수는 `/plugins/ibsheet-common.js`파일에 정의 되어 있습니다.

```javascript
var treeData = {
    "Data": [
        { Level: 0, sProduct: "병원 개발/CDP 구축", sKind: "프로젝트", sPrice: "29" },
        { Level: 1, sProduct: "성능개량사업", sKind: "프로젝트", sPrice: "15.5" },
        { Level: 2, sProduct: "SHE시스템 구축", sKind: "프로젝트", sPrice: "79" },
        { Level: 2, sProduct: "Cost Quotation System", sKind: "프로젝트", sPrice: "3" }
    ]
};

var convertData = IBSheet.v7.convertTreeData(treeData);
sheet.loadSearchData(convertData);
```

---

## 펼침/접기

```javascript
// 레벨 단위 펼침/접기
sheet.showTreeLevel(3);           // 3레벨까지 펼침
sheet.showTreeLevel(1);           // 최상위만 표시 (모두 접기)
sheet.showTreeLevel(3, 1);        // 3레벨까지 펼침, 이벤트 미호출
sheet.showTreeLevel(3, 0, 1);     // 3레벨까지 펼침, 하위 모두 접음
sheet.showTreeLevel(3, 0, 2);     // 3레벨까지 펼침, 하위 모두 펼침

// 특정 행 펼침/접기
sheet.setExpandRow(row);              // 토글
sheet.setExpandRow(row, null, 1);     // 펼치기
sheet.setExpandRow(row, null, 0);     // 접기

// 펼침 상태 확인
var isExpanded = sheet.getAttribute(row, null, "Expanded");
```

---

## 이벤트 활용

```javascript
Events: {
    // 펼침 전 제어 (true 리턴 시 중단)
    onBeforeExpand: function(evtParam) {
        if (evtParam.row["Level"] > 4) {
            return true;  // 펼침 중단
        }
    },
    // 펼침 후 처리
    onAfterExpand: function(evtParam) {
        console.log("펼쳐진/접힌 행:", evtParam.row);
    }
}
```

---

## 동적 로딩 (HaveChild)

자식이 없는 행에 `HaveChild: true`를 설정하면 접힌 트리 아이콘이 표시됩니다.

```javascript
// 데이터에 HaveChild 설정
Items: [{ sProduct: "카테고리A", HaveChild: true }]

// onBeforeExpand에서 동적 로드
Events: {
    onBeforeExpand: function(evtParam) {
        var row = evtParam.row;
        if (row.firstChild) return;  // 이미 자식 있으면 통과

        sheet.doSearch({
            url: "/api/tree/children",
            param: "parentId=" + sheet.getValue(row, "id"),
            parent: row
        });
        return true;
    }
}
```

---

## 체크박스 동기화 (TreeCheckSync)

`Icon: "Check"` 컬럼에서 부모-자식 간 체크 상태를 자동 동기화합니다.

```javascript
Cfg: {
    MainCol: "sProduct",
    TreeCheckSync: 1   // 0: 개별체크, 1: 자동동기화(?표시), 2: 자동동기화(v표시)
}
```

---

## React 환경 트리 그리드 패턴

위 API(`showTreeLevel` / `setExpandRow` / `onAfterExpand`)를 React 에서 쓸 때 자주 겪는 타이밍·race·동기화 함정 모음. (vanilla 기본은 위 섹션 참조)

### 🚨 `loadSearchData` 직후 `showTreeLevel` 호출은 무시된다 — `onSearchFinish` 에서 적용

`loadSearchData` 직후 즉시 `showTreeLevel` 을 호출하면 트리 노드가 아직 렌더되기 전이라 펼침이 적용되지 않는다. **펼침 레벨 적용은 `onSearchFinish` 시점**으로 미룬다.

```tsx
const pendingToggleRef = useRef(false)
const grdToggleRef = useRef('5')   // 펼침 레벨 라디오 현재 값

const applyToggle = (sheet, lvlStr) => {
  sheet.showTreeLevel(Number(lvlStr) || 99, 1, 1)
  sheet.calculate()   // ⚠️ 필수 — showTreeLevel 은 IconFormula 등 속성 Formula 를 자동 재계산 안 함
}

// ❌ 무시됨 — 트리 렌더 전 호출
sheet.loadSearchData(payload)
applyToggle(sheet, grdToggleRef.current)

// ✅ 조회 시 예약 → onSearchFinish 에서 실행
const fn_search = useCallback(async (isFirst) => {
  // ...
  sheet.loadSearchData(payload)
  if (isFirst) pendingToggleRef.current = true   // 첫 페이지만 (페이징 시 사용자 펼침 상태 보존)
}, [])

Events: {
  onSearchFinish: (evt) => {
    if (pendingToggleRef.current) {
      applyToggle(evt.sheet, grdToggleRef.current)
      pendingToggleRef.current = false
    }
  },
}

// 라디오 변경은 트리가 이미 렌더된 뒤라 즉시 호출 OK
const handleToggleChange = (lvl) => { grdToggleRef.current = lvl; applyToggle(sheetRef.current, lvl) }
```

**진단 단서**: "라디오로 펼침 레벨 바꾸면 정상인데 조회 버튼만 누르면 전체 펼침/접힘이 어긋난다" → 100% 이 함정(`loadSearchData` 직후 직접 호출). `onSearchFinish` 로 옮긴다. (페이징 없는 단순 조회 화면이면 `isFirst` 분기 없이 매 조회마다 `pendingToggleRef.current = true` 예약)

### `setExpandRow` — `Expanded` 는 readonly

행 attribute `Expanded` 는 **readonly** 라 `setAttribute` 로 못 바꾼다. 단일 행 펼침/접힘 write 는 `setExpandRow(row, col, expand)` 만 동작. read 는 `row.Expanded` / `getAttribute(row, null, 'Expanded')` 둘 다 가능.

```tsx
// ❌ readonly 라 무동작 (더블클릭해도 토글 안 됨)
sheet.setAttribute(row, undefined, 'Expanded', 1)

// ✅ 정식 write API — 두 번째 인자 col 은 '' 또는 null
const isExpanded = Boolean(row.Expanded)
sheet.setExpandRow(row, '', isExpanded ? 0 : 1)

// 단말노드(자식 없음)는 펼침 무의미 → 가드
if ((sheet.getChildRows?.(row)?.length ?? 0) === 0) return
```

### 트리 탐색 API — `getParentRows` / `getChildRows`

드래그 직후 `IBRow.Level` 은 일시적으로 부정확할 수 있으므로 부모/자식 판정은 공식 API 사용.

```tsx
const parents = sheet.getParentRows(row)          // [부모, 조부모, ...]
const level = parents.length + 1                  // 1-based
const descendants = sheet.getChildRows(row)       // 모든 후손
const directChildren = sheet.getChildRows(row, 1) // 직계 자식만
```

### 좌/우 트리 펼침 동기화 — `syncingExpandRef` 무한루프 가드

좌/우 트리가 같은 키를 공유해 한쪽 펼침을 반대편에 미러링할 때 3가지 주의:

1. `onAfterExpand` 는 펼침·접힘 **둘 다** 발화 → `getAttribute(row, null, 'Expanded') === 1` 일 때만 동기화(접기 무시)
2. 프로그램적 `setExpandRow` 가 반대편 `onAfterExpand` 를 **다시 트리거** → `syncingExpandRef` 플래그로 무한루프 차단
3. 대상 노드만 펼쳐도 부모가 닫혀 있으면 안 보임 → `getParentRows(target)` 로 조상 경로까지 펼침

```tsx
const syncingExpandRef = useRef(false)

const syncExpandToOther = (otherSheet, key) => {
  const target = otherSheet?.getDataRows()?.find((r) => String(otherSheet.getValue(r, 'deptCd')) === key)
  if (!target) return
  if (otherSheet.getAttribute(target, null, 'Expanded') === 1) return  // 이미 펼쳐짐
  syncingExpandRef.current = true
  try {
    for (const p of otherSheet.getParentRows(target) ?? []) otherSheet.setExpandRow(p, null, 1)
    otherSheet.setExpandRow(target, null, 1)
  } finally { syncingExpandRef.current = false }
}

Events: {
  onAfterExpand: (evt) => {
    if (syncingExpandRef.current || !evt.row) return                       // 프로그램적 호출 무시
    if (evt.sheet.getAttribute(evt.row, null, 'Expanded') !== 1) return    // 접기 무시
    syncExpandToOther(otherSheetRef.current, String(evt.sheet.getValue(evt.row, 'deptCd') ?? ''))
  },
}
```

### lvl 별 행 배경색/글자색 — `Def.Row.ColorFormula` (셀 cssclass 반복 X)

집계 트리(합계→부문→…→리프)의 lvl 별 색상은 셀마다 반복하지 말고 행 단위 Formula 한 줄로.

```tsx
const getLvlBackColor = (lvl) => ({ 1: '#ee787a', 2: '#FFDAB9', 3: '#ffe9b0', 4: '#D2D2D2' }[lvl] ?? '')
const getLvlTextColor = (lvl) => (lvl === 1 ? '#FFFFFF' : '')   // 진한 배경 행만 흰 글자

Def: {
  Row: {
    CanFormula: 1,
    CalcOrder: 'Color,TextColor',   // 아이콘까지 쓰면 '<컬럼명>Icon,Color,TextColor'
    ColorFormula: (fr) => getLvlBackColor(Number(fr.Row?.lvl ?? 0)),
    TextColorFormula: (fr) => getLvlTextColor(Number(fr.Row?.lvl ?? 0)),
  },
}
```

⚠️ 배경색만 옮기고 글자색을 빼먹지 말 것(진한 배경 + 검정 글씨로 어긋남). `CustomFormat` 으로 `<span style="background">` wrap 은 금지 — number 정렬/합계가 깨지고 엑셀 export 에 raw HTML 이 들어간다. 색상은 `Def.Row` Formula 채널로만. (속성 Formula 일반 규칙은 `references/features/attribute-formula.md` + `Def.Row.NoColor` 함정은 SKILL.md 참고)

### 첫 컬럼 합성 텍스트 — `loadSearchData` 전 데이터 단계에서 가공 (Formula X)

첫 컬럼 표시 텍스트를 합성(예: `lvl===6` 이면 `"명칭 (코드)"`)할 때 `Cols[].Formula` 로 옮기면 화면만 바뀌고 **검색/엑셀 export/getSaveJson 은 raw 값**을 내보낸다. payload 변환 단계에서 미리 합쳐 넣는다.

```tsx
const buildTreePayload = (rows) => rows.map((r) => ({
  ...r,
  lvlNm: Number(r.lvl) === 6 && r.custCd ? `${r.lvlNm} (${r.custCd})` : r.lvlNm,
  Level: Number(r.lvl) - 1,   // 0-based
}))
sheet.loadSearchData(buildTreePayload(result), { sync: 1 })
```

### 트리 DnD — 영향 그룹만 국소 재번호 (전체 재계산 금지)

`onEndDrag` 에서 모든 행에 `setValue` 하면 값이 같아도 IBSheet 가 `Changed` 로 마킹해 드래그 안 한 서브트리까지 "수정됨" 으로 저장 payload 에 섞인다. `onStartDrag` 로 OLD 부모를 캡처하고, OLD∪NEW 그룹만 재번호하며, 값이 같으면 write 를 건너뛴다.

```tsx
const dragOldUpprIdsRef = useRef(new Set())

onStartDrag: (evt) => {
  const olds = new Set()
  for (const r of evt.rows ?? [evt.row]) olds.add(String(evt.sheet.getValue(r, 'upprId') ?? ''))
  dragOldUpprIdsRef.current = olds
},
onEndDrag: (evt) => {
  if (evt.type === 0 || evt.type === 4) { dragOldUpprIdsRef.current = new Set(); return }
  const affected = new Set(dragOldUpprIdsRef.current)
  const setIfDifferent = (row, col, v) => {
    if (String(evt.sheet.getValue(row, col) ?? '') !== v) evt.sheet.setValue(row, col, v)  // 같은 값이면 write X
  }
  // getDataRows() 순회하며 NEW upprId 를 affected 에 추가 + affected 그룹만 menuLvl/upprId/menuSeqn 재번호
  // ...
},
```

> ⚠️ `onEndDrag` 는 드랍 확정 전에 호출될 수 있어, 이동 후 순서가 필요하면 `setTimeout(() => sheet.getDataRows(), 0)` 으로 감싼다 (SKILL.md "Drag & Drop (트리 그리드)" 참고).

---

## 참고

- [MainCol cfg](/docs/props/cfg/main-col)
- [NoTreeLines cfg](/docs/props/cfg/no-tree-lines)
- [TreeCheckSync cfg](/docs/props/cfg/tree-check-sync)
- [showTreeLevel method](/docs/funcs/core/show-tree-level)
- [setExpandRow method](/docs/funcs/core/set-expand-row)
- [Expanded row](/docs/props/row/expanded)
- [HaveChild row](/docs/props/row/have-child)
- [onBeforeExpand event](/docs/events/on-before-expand)
- [onAfterExpand event](/docs/events/on-after-expand)
- [트리 데이터 규격](/docs/dataStructure/tree-structure)
