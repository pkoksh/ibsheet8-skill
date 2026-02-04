# 이벤트들이 어떤 흐름으로 움직이는지에 대한 흐름도

### 1. IBSheet8 객체 생성
> `IBSheet.create()함수 호출` → `IBSheet.onBeforeCreate` → IBSheet8 객체 생성 → `onRenderFirstFinish`

### 2. 조회
> 조회(`doSearch, loadSearchData`) → `onEndEdit`(편집모드인 경우) → `onSearchStart` → `onReceiveData` → `onBeforeDataLoad` → `onRowLoad` → `onDataLoad` → 렌더링 → `doSearch 함수의 callback인자` → `onSearchFinish`

- `onEndEdit`은 편집모드 상태에서 조회(`doSearch, loadSearchData`)함수를 호출 했을시 발생
- `onSearchStart` 이벤트는 doSearch 함수의 경우 ajax 통신 전에 호출됩니다.
- `callback` 후에 바로 `onSearchFinish` 가 발생

### 3. 저장
> `doSave` → `onSave` → 서버로 전송할 데이터 수집 → `onBeforeSave` → 서버통신 → `onAfterSave`

### 4. 엑셀 다운
> `down2Excel()`, `exportData()`함수 호출 → 엑셀 전문 생성 → `onBeforeExport` → 데이터 전송(`down2Excel`) 및 파일 생성(`exportData`) → 파일 다운로드 → `onExportFinish`

### 5. 엑셀 업로드
> 엑셀 업로드 (`loadExcel`, `importData`) → `onSelectFile` → 파일 전송 (`loadExcel`) 및 파싱(`importData`) → 데이터 수신 → `onImportFinish` → `onDataLoad` → `onSearchFinish`

### 6. 데이터 셀 마우스 클릭
> `onMouseDown` → `onMouseUp` → `onClick` → `onBeforeFocus` → 커서 렌더링 → `onFocus` → `onAfterClick`

### 7. 셀 데이터 입력으로 변경
> `onBeforeChange` → `Col.OnChage` → `onAfterChange`

> `onBeforeChange` → `Col.OnSame`

### 8. 셀 데이터 편집모드로 변경
> `onStartEdit` → `onShowEdit` → `onEndEdit` → `onAfterEdit` → [8. 셀 데이터 입력으로 변경](#7-셀-데이터-입력으로-변경)

### 9. 데이터 변경
>  클릭하여 편집모드 진입 후 편집: `onClick` → `onStartEdit` → `onShowEdit` → `onAfterClick` → `onEndEdit` → `onAfterEdit` → `8번`

>  키보드 입력하여 편집모드 진입 후 편집: 입력 → `onKeyDown` → `onStartEdit` → `onShowEdit` → `onKeyUp` → 키보드로 편집 종료(엔터) → `onKeyDown` → `onEndEdit` → `onAfterEdit` → `8번` → `onKeyUp`

>  `setValue`를 이용하여 편집하는 경우, 이미 편집모드인 상태에서 실행시 편집을 취소하고, `onEndEdit`이 발생 `setValue`는 `8번`에 이벤트들이 발생하지 않습니다.

### 10. 트리
>  마우스사용 하여 트리 확장/접기 → `onMouseDown` → `onMouseUp` → `onClick` → `onBeforeExpand` → 동작 완료 → `onAfterExpand` → `onAfterClick`

>  키보드사용 하여 트리 확장/접기 → `onKeyDown` →  `onBeforeExpand` → 동작 완료 → `onAfterExpand` → `onKeyUp`

>  `showTreeLevel()` → `onBeforeExpand` → 동작 완료 → `onAfterExpand`

### 11. 컬럼 소팅(정렬)
> 사용자 헤더 셀 클릭 → `onMouseDown` → `onMouseUp` → `onClick` → `onBeforeSort` → 헤더 아이콘 변경 후 데이터 정렬 → `onAfterSort` → `onAfterClick`

> `doSort()` → 헤더 아이콘 변경 후 데이터 정렬 → `onAfterSort`

### 12. 그룹핑
> `doGroup()`함수 호출 → `onBeforeGroup` → 데이터 그룹핑 → `onAfterGroup`

> `Cfg.Group` → 데이터 그룹핑 → `onAfterGroup`

### 13. 컨택스트 메뉴
> 마우스 우클릭 → `onReadMenu` → `onShowMenu` → 메뉴 출력 → 메뉴 선택 → `onSelectMenu`

### 14. 포뮬러 계산 이벤트 (`onCalculateCell`은 알아보기가 너무 힘들어서 제외합니다.)
> 처음: `onBeforeCalculate`  → `onAfterCalculate`

> 입력하여 변경시: `onBeforeChange` → `onBeforeCalculate`(사용자) → `onBeforeCalculate`(시트) → `onAfterCalculate`(시트) → `onAfterCalculate`(사용자) → `onAfterChange`

### 15. 마우스 휠
- 편집모드인 상태에서 마우스 휠동작시 `onEndEdit` 이벤트가 발생
- 가로, 세로 스크롤 이동시 `onScroll` 이벤트가 발생
- 세로 스크롤바가 최상단이나 최하단에 닫는 경우 `onVScrollEndPoint`이벤트가 발생

### 16. 시트 리사이즈
-  리사이즈시 `onResize` 가 발생 리사이즈하면서 시트 렌더링이 일어나는 경우, 시트 렌더링관련된 이벤트들도 마찬가지로 발생

### 17. 컬럼 리사이즈
- 컬럼 리사이즈시 `onColResize` 가 발생

### 18. 필터 편집
>  doFilter()함수 호출 또는 필터 셀 편집시   `onBeforeFilter` → `onReadFilteringValue` → `onRowFilter` → `onAfterFilter` 

### 19. 드래그 앤 드롭
> 드래그 요청 → `OnDragStart` → 드래깅 → `onEndDrag`

### 20. 붙여넣기
> `Ctrl + v` → `onBeforePaste` → [8. 셀 데이터 입력으로 변경](#7-셀-데이터-입력으로-변경) → `onAfterPaste` 

### 21. 데이터 키 입력
> `onKeyDown` → 동작 → `onKeyPress` → `onKeyUp`