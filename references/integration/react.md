# React 연동

React 환경에서 IBSheet8을 사용하는 방법을 설명합니다.

## 요구 사항

- **Node.js**: v18 이상
- **React**: v18 이상

## 개발 순서

1. `@ibsheet/loader`를 이용한 IBSheet JS 파일 로드
2. `@ibsheet/react` 컴포넌트를 통한 시트 생성
3. TypeScript 사용 시 인터페이스 활용

---

## 1. ibsheet-loader 설정

IBSheet.js 파일은 npm을 통해 직접 배포되지 않으므로, `public` 폴더에 파일을 배치하고 loader를 통해 로드합니다.

> **참고**: entry point HTML 파일에 직접 `<script>` 태그로 ibsheet.js를 포함한 경우 loader는 불필요합니다.

### 1.1 설치

```bash
npm i @ibsheet/loader
```

### 1.2 loader 설정 및 로드

```js
import loader from '@ibsheet/loader';

const loaderOption = {
  name: 'ibsheet',
  baseUrl: '/ibsheet', // public/ibsheet 폴더 기준
  // theme: 'mint',    // CSS 테마 (생략 시 default)
  locales: ['en', 'ko'],
  plugins: ['dialog', 'common', 'excel'],
  license: 'YOUR_LICENSE_KEY'
};

loader.load(loaderOption);
```

**주의사항**:
- `loader.load()`는 앱의 entry point에서 **1회만** 호출
- `baseUrl` 위치에 ibsheet.js, css, locale, plugins 파일이 있어야 함

---

## 2. IBSheetReact 컴포넌트

### 2.1 설치

```bash
npm i @ibsheet/react
```

### 2.2 기본 사용법 (JavaScript)

```jsx
import { IBSheetReact, IB_Preset } from '@ibsheet/react';
import { useRef } from 'react';

function App() {
  const mySheet = useRef(null);

  const options = {
    Cfg: { SearchMode: 0 },
    Cols: [
      { Header: 'No', Type: 'Int', Name: 'SEQ' },
      { Header: 'Name', Type: 'Text', Name: 'name' },
      { Header: 'Age', Type: 'Int', Name: 'age' },
      { Header: 'Date', Name: 'sDate_Ymd', Extend: IB_Preset.YMD, Width: 110 }
    ],
    Events: {
      onBeforeChange: (evt) => {
        console.log(`${evt.oldval} → ${evt.val}`);
      }
    }
  };

  const data = [
    { name: 'John Doe', age: 30, sDate_Ymd: '20250922' },
    { name: 'Jane Smith', age: 25, sDate_Ymd: '20241108' }
  ];

  const customStyle = {
    width: '700px',
    height: '600px',
    border: '1px solid #ccc'
  };

  const handleAddRow = () => {
    mySheet.current.addRow();
  };

  return (
    <>
      <button onClick={handleAddRow}>행추가</button>
      <IBSheetReact
        ref={mySheet}
        options={options}
        data={data}
        style={customStyle}
      />
    </>
  );
}

export default App;
```

### 2.3 IBSheetReact Props

| Prop | 타입 | 설명 |
|------|------|------|
| `ref` | `useRef` | 시트 인스턴스 참조 객체 |
| `options` | `object` | 시트 초기화 옵션 (Cfg, Cols, Events 등) |
| `data` | `array` | 초기 데이터 (생략 가능) |
| `style` | `object` | 시트 컨테이너 스타일 (width, height 등) |

---

## 3. TypeScript 사용

`@ibsheet/react`에 포함된 TypeScript 인터페이스를 활용할 수 있습니다.

### 3.1 타입 import

```tsx
import {
  IBSheetReact,
  IB_Preset,
  type IBSheetInstance,  // 시트 객체 타입
  type IBSheetOptions,   // 시트 초기화 옵션 타입
  type IBSheetEvents     // 이벤트 파라미터 타입
} from '@ibsheet/react';
```

### 3.2 TypeScript 예제

```tsx
import {
  IBSheetReact,
  IB_Preset,
  type IBSheetInstance,
  type IBSheetOptions,
  type IBSheetEvents
} from '@ibsheet/react';
import { useRef } from 'react';

function App() {
  const mySheet = useRef<IBSheetInstance | null>(null);

  const handleAfterChange: IBSheetEvents['onAfterChange'] = (evt) => {
    const headerRow = evt.sheet.getRowById('Header');
    const colName = evt.sheet.getString(headerRow, evt.col);
    alert(`'${colName}'열의 값이 ${evt.val}로 수정되었습니다.`);
  };

  const options: IBSheetOptions = {
    Cfg: { SearchMode: 0 },
    Cols: [
      { Header: 'No', Type: 'Text', Name: 'SEQ', Width: 60 },
      { Header: '이름', Type: 'Text', Name: 'name', Width: 120, RelWidth: 1 },
      { Header: '나이', Type: 'Int', Name: 'age', Width: 80 },
      { Header: '입사일', Name: 'sDate_Ymd', Extend: IB_Preset.YMD, Width: 110 },
      { Header: '', Type: 'Button', Name: 'confirm', DefaultValue: '확인' }
    ],
    Events: {
      onAfterChange: handleAfterChange
    }
  };

  const data = [
    { id: '1', name: 'John Doe', age: 30, sDate_Ymd: '20250923' },
    { id: '2', name: 'Jane Smith', age: 25, sDate_Ymd: '20251002' }
  ];

  const addRow = () => {
    mySheet.current?.addRow();
  };

  const exportXls = () => {
    mySheet.current?.exportData({ fileName: 'export.xlsx' });
  };

  const customStyle = {
    width: '800px',
    height: '600px',
    border: '1px solid #ccc'
  };

  return (
    <div>
      <div>
        <button onClick={addRow}>Add Row</button>
        <button onClick={exportXls}>Export Excel</button>
      </div>
      <IBSheetReact
        ref={mySheet}
        options={options}
        data={data}
        style={customStyle}
      />
    </div>
  );
}

export default App;
```

### 3.3 inline 핸들러 — `satisfies IBSheetEvents`

handler를 별도 const로 hoist하지 않고 `useMemo` 안에서 inline으로 작성할 때는, Events 블록 뒤에 `satisfies IBSheetEvents`를 붙여 타입 검증 + 파라미터 자동 추론을 활용한다.

```tsx
import type { IBSheetEvents, IBSheetInstance, IBSheetOptions } from '@ibsheet/react'

const options: IBSheetOptions = useMemo(() => ({
  Cols: [ /* ... */ ],
  Events: {
    onClick: (evt) => {                  // evt는 IBSheetEvents['onClick']로 자동 추론
      console.log(evt.sheet.getRowIndex(evt.row))
    },
    onAfterChange: (evt) => {
      console.log(evt.col, evt.val)
    },
  } satisfies IBSheetEvents,
}), [])
```

`(evt: any)` / `(evt: unknown)` / inline struct 타입은 사용하지 않는다. `IBSheetEvents`의 contextual typing을 막아 타입 안전성이 사라진다.

---

## 4. 레이아웃 — flex 컨테이너 안 IBSheet 사이징 (`minWidth:0` / `minHeight:0`)

IBSheetReact 는 부모 컨테이너 크기를 채우는 구조(`width:100%`/`height:100%`)다. 그런데 부모가 flex item 이면 flex item 의 기본값 `min-width:auto` / `min-height:auto` 때문에 **내부 min-content(시트 wrapper) 이하로 줄어들지 못한다**. 결과적으로 "창을 키우면 늘어나는데 줄이면 안 줄어든다" 증상이 난다.

```tsx
// ❌ 좌측 flex:1 인데 minWidth 없음 → 내부 min-content 이하로 안 줄어듦 (창 축소 시 잘림)
<div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
    <IBSheetReact ... style={{ width: '100%', height: '100%' }} />
  </div>
  <div style={{ width: 877, flexShrink: 0 }}>{/* 우측 고정폭 상세 */}</div>
</div>

// ✅ flex:1 컬럼에 minWidth:0 (세로축이면 minHeight:0) 명시
<div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
    <IBSheetReact ... style={{ width: '100%', height: '100%' }} />
  </div>
  <div style={{ width: 877, flexShrink: 0 }}>{/* 우측 고정폭 상세 */}</div>
</div>
```

**판정 신호**: "작게→크게는 늘어나는데 크게→작게는 안 줄어든다" → 거의 항상 어느 flex item 에 `min-width:auto` 가 살아있음.

**적용 범위** — 다음 모두에 `minWidth:0`(가로) / `minHeight:0`(세로) 필수:
- 마스터-디테일에서 한쪽 고정폭 + 다른쪽 `flex:1`
- 다중 컬럼 레이아웃의 마지막 `flex:1` 컬럼
- 탭 컨텐츠 안 IBSheet 컨테이너 (`flex:1` + 시트 `height:100%`)
- 부모 체인 어디든 `flex:1` + 내부에 자기 min-content 가 있는 자식(IBSheet, TextArea 등)

> Splitter 류 % 단위 패널 안에 IBSheet 를 둘 때도 동일 — Splitter/부모에 명시 height(`h-full` 또는 `flex:1`)가 없으면 `calc(70% - gutter)` 가 0 으로 계산되어 시트가 0 높이로 그려진다.

---

## 5. 탭 안 IBSheet — `display:none` 컨테이너 size-0 함정

탭 UI 는 비활성 탭을 `display:none` 으로 숨기는 경우가 많다. IBSheet 가 **숨겨진(`display:none`) 컨테이너에서 처음 마운트되면 사이즈 0 으로 그려지고**, 이후 탭을 눌러 보여줘도 시트 내부가 0 사이즈로 고정되는 사고가 난다 (ResizeObserver 자동 회복이 항상 보장되지 않음).

**해법 1 — lazy mount: 활성된 적 있는 탭만 마운트** (첫 마운트 시 항상 보이는 상태 보장)

```tsx
const [mountedTabs, setMountedTabs] = useState<Set<number>>(() => new Set([0]))
const handleTabChange = (idx: number) => {
  setActiveTabIdx(idx)
  setMountedTabs((prev) => (prev.has(idx) ? prev : new Set([...prev, idx])))
}

{mountedTabs.has(0) && (
  <div style={{ display: activeTabIdx === 0 ? 'flex' : 'none' }}>
    <IBSheetReact ref={sheet0Ref} ... />   {/* 첫 mount 시 컨테이너가 flex(보임) → 정상 사이즈 */}
  </div>
)}
{mountedTabs.has(1) && (
  <div style={{ display: activeTabIdx === 1 ? 'flex' : 'none' }}>
    <IBSheetReact ref={sheet1Ref} ... />   {/* 사용자가 1번 탭 클릭 시점에 mount */}
  </div>
)}
```

**해법 2 — 두 탭 동시 마운트 유지(`keepMounted`) + 탭 전환 시 `resize()` 안전망**

탭 라이브러리가 비활성 탭을 unmount 하면 IBSheet 인스턴스/데이터가 사라진다(다시 열면 빈 시트). 두 시트를 항상 살려두려면 `keepMounted` 로 유지하되, 비활성 탭은 size-0 으로 생성되므로 탭 전환 시 활성 시트의 `resize()` 를 `requestAnimationFrame` 안에서 호출한다.

```tsx
const resizeTabSheets = useCallback(() => {
  requestAnimationFrame(() => {
    const inst = activeSheetRef.current as unknown as { resize?: () => void } | null
    if (inst && typeof inst.resize === 'function') inst.resize()
  })
}, [])

<Tabs onValueChange={(v) => { setTab(v); resizeTabSheets() }}>
  <TabsContent value="a" keepMounted><IBSheetReact ref={sheetARef} ... /></TabsContent>
  <TabsContent value="b" keepMounted><IBSheetReact ref={sheetBRef} ... /></TabsContent>
</Tabs>
```

⚠️ **stale closure 함정** — 그리드 `Events` 핸들러(예: `onClick` 이 탭별 분기 `fn_search` 호출)는 **시트 생성 시점 클로저**라 탭 state 가 stale 된다(탭 바꿔도 항상 첫 탭으로만 조회). 탭 값은 state 가 아니라 ref 로 읽는다.

```tsx
const tabFlgRef = useRef('A')
useEffect(() => { tabFlgRef.current = tab }, [tab])
// Events.onClick 핸들러 안에서는 tab(state) 대신 tabFlgRef.current 참조
```

**선택 가이드**: 단일 탭만 쓰면 conditional render(`{active && <Tab/>}`)가 가장 단순. 두 탭 모두 사용 + 인스턴스/데이터 보존 필요면 해법 1 또는 2.

---

## 6. 모달/Dialog 안 IBSheet — 크기 강제

shadcn `DialogContent` 등 모달 컨테이너에 IBSheet 를 넣을 때 두 가지를 강제해야 한다.

1. **`maxWidth: 'none'`** — shadcn `DialogContent` 기본 `max-width:512px` 제한 해제 (안 하면 넓은 팝업이 512px 로 잘림)
2. **`height` + `maxHeight` + `overflow:hidden` 이중 잠금** — `DialogContent` 기본 className 에 `grid`+`gap-4`+`p-4` 가 박혀 있어, IBSheet 내부 contentHeight 가 동적이면 grid auto-row 가 시트 높이를 따라 늘어나 팝업 밖으로 노출된다. 시트 wrapper 에도 `overflow:hidden` 을 한 번 더 준다.

```tsx
<DialogContent style={{ width: 1077, maxWidth: 'none', height: 700, maxHeight: 700, padding: 0, overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: 30, top: 140, right: 29, bottom: 104, overflow: 'hidden' }}>
    <IBSheetReact ... style={{ width: '100%', height: '100%' }} />
  </div>
</DialogContent>
```

고정 크기(디자인 좌표 그대로 이식) 팝업이면 항상 `maxHeight` + `overflow:'hidden'` 두 줄을 함께 박는다. 가변 높이(auto-grow) 팝업이 아니면 비용 없음.

---

## 7. 디버깅 — `window.GetSheets()` 콘솔 헬퍼

브라우저 콘솔에서 생성된 모든 시트 인스턴스를 배열로 얻는다. 실제 로드된 데이터/숨김 컬럼 분포를 즉석 확인할 때 유용.

```js
const s = window.GetSheets()[0]            // 첫 번째 시트 인스턴스
s.getDataRows().length                      // 실제 행 수
s.getValue(s.getDataRows()[0], 'colName')   // 특정 셀 값 (Cols 미선언 컬럼도 raw 데이터엔 존재)
s.DataRowCount                              // 내부 행 카운트 — getDataRows().length 와 불일치 시 데이터 적재 문제
```

---

## 지원 버전

| 제품 | 버전 | 비고 |
|------|------|------|
| IBSheet Core | 8.3.0.0 | React 컴포넌트 지원 추가 |
