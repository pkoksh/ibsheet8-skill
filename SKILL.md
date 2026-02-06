---
name: ibsheet8
description: IBSheet8(버전8) 그리드 라이브러리 개발 지원. IBSheet.create()로 시트를 생성하고 Cfg/Cols/Events 옵션 구조를 사용하는 프로젝트에서 활성화. 다음 상황에서 이 스킬을 사용: (1) IBSheet8 그리드 생성 및 초기화, (2) 데이터 바인딩 및 CRUD 구현, (3) 컬럼 설정 및 셀 편집기 구성, (4) 이벤트 핸들링, (5) 서버 통신 구현, (6) 트리 그리드, 피벗, 그룹핑 등 고급 기능, (7) React/Vue 프레임워크 연동, (8) 성능 최적화. 프로젝트에 IBSheet.create, ibsheetloader, ibsheet8 키워드가 있으면 이 스킬 사용. 트리거 키워드: ibsheet8, IBSheet.create, ibsheetloader, IBSheet8, 그리드, grid, 시트
---

# IBSheet 개발 가이드

- IBSheet8는 대용량 데이터를 빠르게 표시하고 편집할 수 있는 웹 그리드 컴포넌트입니다.

## 빠른 시작

```html
<!DOCTYPE html>
<html>
<head>
  <script src="ibsheet/ibsheet.js"></script>
  <script src="ibsheet/locale/ko.js"></script>
  <link rel="stylesheet" href="ibsheet/css/default/ibsheet.css">
</head>
<body>
  <div id="sheetContainer" style="width:100%; height:500px;"></div>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      IBSheet.create({
        id: "sheet", //window["sheet"]가 생성됨
        el: "sheetContainer",
        options: {
          Cfg: { SearchMode: 2 },
          Cols: [
            { Header: "ID", Name: "id", Type: "Int", Width: 80 },
            { Header: "이름", Name: "name", Type: "Text", Width: 120 },
            { Header: "금액", Name: "amount", Type: "Int", Width: 100, Format: "#,##0" }
          ],
          Events: {
            onRenderFirstFinish: function(evt) {
              // 시트 생성 완료
            }
          }
        },
        data: []
      });
    });
  </script>
</body>
</html>
```

## 핵심 API

```javascript
// 데이터 로드
mySheet.loadSearchData({ data: jsonArray });

// 행 추가/삭제
mySheet.addRow({ init: { name: "신규" } });
var row = mySheet.getRowByIndex(10);
mySheet.deleteRow(row);

// 셀 값 조작
mySheet.setValue(row, "name", "값");
const value = mySheet.getValue(row, "name");

// 데이터 추출
const allData = mySheet.getSaveJson();
const changedData = mySheet.getSaveJson({ check: 1 });  // 변경분만

// 저장 후 상태 초기화
mySheet.acceptChanges();
```

## 주요 컬럼 타입

| Type | 설명 | 예시 |
|------|------|------|
| Text | 문자열 | `{ Type: "Text", Size: 50 }` |
| Lines | 줄넘김허용 문자열 | `{ Type: "Lines", Size: 3500 }` |
| Int | 정수 | `{ Type: "Int", Format: "#,##0" }` |
| Float | 실수 | `{ Type: "Float", Format: "#,##0.00" }` |
| Date | 날짜 | `{ Type: "Date", Format: "yyyy-MM-dd" }` |
| Enum | 드롭다운 | `{ Type: "Enum", EnumKeys: "A|B", Enum: "활성|비활성" }` |
| Bool | 체크박스 | `{ Type: "Bool", TrueValue: "Y", FalseValue: "N" }` |
| Button | 버튼 | `{ Type: "Button", ButtonText: "클릭" }` |

[상세 정보](references/core/column-type-property.md)

> **합계행**: 숫자 컬럼에 `FormulaRow: "Sum"` 속성만 추가하면 Foot 영역에 자동 합계행이 생성됩니다. Foot 배열을 직접 만들 필요 없습니다. ([상세](references/features/summary.md))

## 주요 이벤트

```javascript
Events: {
  onRenderFirstFinish: function(evt) { },  // 초기화 완료
  onSearchFinish: function(evt) { },      //데이터 로드 완료
  onAfterClick: function(evt) { },          // 셀 클릭
  onBeforeChange: function(evt) { },        // 값 변경 전 (return false로 취소)
  onAfterChange: function(evt) { },         // 값 변경 후
}
```

> **주의: 이벤트 네이밍 규칙**
> IBSheet8 이벤트는 `Start↔Finish`, `Before↔After` 패턴을 사용합니다. **`Start↔End` 패턴은 사용하지 않습니다.**
> - `onSearchStart` ↔ `onSearchFinish` (O) — `onSearchEnd`는 존재하지 않음 (X)

[상세 정보](references/core/events.md)

## 레퍼런스 가이드

### 핵심 레퍼런스
| 주제 | 파일 | 설명 |
|------|------|------|
| 시트 생성 | [references/core/initialize-basic.md](references/core/initialize-basic.md) | 기본 시트 생성 방법 |
| Cfg 속성 | [references/core/initialize-cfg-properties.md](references/core/initialize-cfg-properties.md) | 시트 전역 설정 속성 |
| Col 속성 | [references/core/initialize-column-properties.md](references/core/initialize-column-properties.md) | 컬럼 초기화 속성 |
| 컬럼 타입 | [references/core/column-type-property.md](references/core/column-type-property.md) | 모든 컬럼 타입과 속성 |
| 컬럼 포맷 | [references/core/column-format-property.md](references/core/column-format-property.md) | 셀 표시 형식 정의 |
| 이벤트 | [references/core/events.md](references/core/events.md) | 전체 이벤트 목록과 사용법 |
| API 메서드 | [references/core/api-methods.md](references/core/api-methods.md) | 시트 조작 메서드 |

### 기능별 가이드
| 주제 | 파일 | 설명 |
|------|------|------|
| 그룹핑 | [references/features/grouping.md](references/features/grouping.md) | 행 그룹화 |
| 합계/소계 | [references/features/summary.md](references/features/summary.md) | FormulaRow, SubTotal |
| 피벗 | [references/features/pivot.md](references/features/pivot.md) | 피벗 테이블 |
| 수식 | [references/features/formula.md](references/features/formula.md) | 열 간 자동 계산 |
| 속성 수식 | [references/features/attribute-formula.md](references/features/attribute-formula.md) | 속성 동적 설정 |
| 트리 그리드 | [references/features/tree-grid.md](references/features/tree-grid.md) | 계층 구조 데이터 |
| 틀고정/병합 | [references/features/frozen-merge.md](references/features/frozen-merge.md) | 행/열 고정, 셀 병합 |
| 내보내기 | [references/features/export-import.md](references/features/export-import.md) | 엑셀, PDF 변환 |
| 유효성 검사 | [references/features/validation.md](references/features/validation.md) | 입력값 검증 |

### 프레임워크 연동
| 주제 | 파일 | 설명 |
|------|------|------|
| React | [references/integration/react.md](references/integration/react.md) | React 컴포넌트화 |
| Vue | [references/integration/vue.md](references/integration/vue.md) | Vue 컴포넌트화 |

### 문제 해결
| 주제 | 파일 | 설명 |
|------|------|------|
| 자주 발생하는 오류 | [references/troubleshooting/common-errors.md](references/troubleshooting/common-errors.md) | 오류 원인과 해결법 |

## 템플릿

### 기본
- [assets/templates/basic/simple-grid.html](assets/templates/basic/simple-grid.html) - 최소 설정 그리드
- [assets/templates/basic/readonly-grid.html](assets/templates/basic/readonly-grid.html) - 읽기 전용 그리드

### CRUD
- [assets/templates/crud/standard-crud.html](assets/templates/crud/standard-crud.html) - 표준 CRUD 그리드
- [assets/templates/crud/batch-crud.html](assets/templates/crud/batch-crud.html) - 일괄 저장 방식

### 고급
- [assets/templates/advanced/master-detail.html](assets/templates/advanced/master-detail.html) - 마스터-디테일
- [assets/templates/advanced/tree-grid.html](assets/templates/advanced/tree-grid.html) - 트리 그리드
- [assets/templates/advanced/pivot-table.html](assets/templates/advanced/pivot-table.html) - 피벗 테이블

### 프레임워크
- [assets/templates/framework/react-component.jsx](assets/templates/framework/react-component.jsx) - React 컴포넌트
- [assets/templates/framework/vue-component.vue](assets/templates/framework/vue-component.vue) - Vue 컴포넌트

## 주의사항

1. **초기화 타이밍**: `DOMContentLoaded` 이후 또는 컨테이너 렌더링 후 `IBSheet.create()` 호출
2. **다중 시트**: 각 시트에 고유한 ID 부여 필수 (부여한 ID를 기준으로 전역객체가 생성됨)
3. **col Name**: 한 시트 안에 모든 열의 Name은 고유해야 함
3. **이벤트 컨텍스트**: 이벤트 핸들러 내 `this`는 시트 객체
4. **행객체**: 모든 row는 index(숫자)가 아닌 row object 임
5. **STATUS**: I,U,D 가 아닌 Added,Changed,Deleted 임
