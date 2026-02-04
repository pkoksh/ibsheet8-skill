---
name: ibsheet
description: IBSheet 그리드 라이브러리를 활용한 웹 개발 지원. 다음 상황에서 이 스킬을 사용: (1) IBSheet8 그리드 생성 및 초기화, (2) 데이터 바인딩 및 CRUD 구현, (3) 컬럼 설정 및 셀 편집기 구성, (4) 이벤트 핸들링, (5) 서버 통신 구현, (6) 트리 그리드, 피벗, 그룹핑 등 고급 기능, (7) React/Vue 프레임워크 연동, (8) 성능 최적화. 트리거 키워드: ibsheet, IBSheet8, ibsheet8, 그리드, grid, 시트
---

# IBSheet 개발 가이드

- IBSheet8는 대용량 데이터를 빠르게 표시하고 편집할 수 있는 웹 그리드 컴포넌트입니다.

## 빠른 시작

```html
<!DOCTYPE html>
<html>
<head>
  <script src="ibsheet/ibsheet.js"></script>
  <link rel="stylesheet" href="ibsheet/css/ibsheet.css">
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

상세 정보 → [references/core/column-types.md](references/core/column-types.md)

## 주요 이벤트

```javascript
Events: {
  onRenderFirstFinish: function(evt) { },  // 초기화 완료
  onClick: function(evt) { },               // 셀 클릭
  onBeforeChange: function(evt) { },        // 값 변경 전 (return false로 취소)
  onAfterChange: function(evt) { },         // 값 변경 후
  onAfterRowAdd: function(evt) { },         // 행 추가 후
  onBeforeRowDelete: function(evt) { }      // 행 삭제 전
}
```

상세 정보 → [references/core/events.md](references/core/events.md)

## 레퍼런스 가이드

### 핵심 레퍼런스
| 주제 | 파일 | 설명 |
|------|------|------|
| 컬럼 타입 | [references/core/column-types.md](references/core/column-types.md) | 모든 컬럼 타입과 속성 |
| 이벤트 | [references/core/events.md](references/core/events.md) | 전체 이벤트 목록과 사용법 |
| API 메서드 | [references/core/api-methods.md](references/core/api-methods.md) | 시트 조작 메서드 |

### 기능별 가이드
| 주제 | 파일 | 설명 |
|------|------|------|
| 필터/정렬 | [references/features/filtering-sorting.md](references/features/filtering-sorting.md) | 데이터 필터링, 정렬 |
| 그룹핑/합계 | [references/features/grouping-summary.md](references/features/grouping-summary.md) | 행 그룹화, 소계/합계 |
| 트리 그리드 | [references/features/tree-grid.md](references/features/tree-grid.md) | 계층 구조 데이터 |
| 틀고정/병합 | [references/features/frozen-merge.md](references/features/frozen-merge.md) | 행/열 고정, 셀 병합 |
| 내보내기 | [references/features/export-import.md](references/features/export-import.md) | 엑셀, PDF 변환 |
| 유효성 검사 | [references/features/validation.md](references/features/validation.md) | 입력값 검증 |

### 프레임워크 연동
| 주제 | 파일 | 설명 |
|------|------|------|
| React | [references/integration/react.md](references/integration/react.md) | React 컴포넌트화 |
| Vue | [references/integration/vue.md](references/integration/vue.md) | Vue 컴포넌트화 |
| 서버 통신 | [references/integration/server-side.md](references/integration/server-side.md) | REST API 연동 패턴 |

### 문제 해결
| 주제 | 파일 | 설명 |
|------|------|------|
| 자주 발생하는 오류 | [references/troubleshooting/common-errors.md](references/troubleshooting/common-errors.md) | 오류 원인과 해결법 |
| 성능 최적화 | [references/troubleshooting/performance.md](references/troubleshooting/performance.md) | 대용량 데이터 처리 |

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
