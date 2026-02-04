# API 메서드 레퍼런스

## 기본 규칙
1. 모든 메서드의 parameter는 object로 사용할 수도 있음
```javascript
const row = mySheet.copyRow( mySheet.getFocusedRow(), mySheet.getFirstRow() );
const row = mySheet.copyRow({row: mySheet.getFocusedRow(), next: mySheet.getFirstRow() });
```
2. IBSheet8의 생성시 sync 옵션을 설정하지 않으면 기본적으로 비동기로 생성되며, 생성 후에 onRenderFirstFinish event가 발생함
3. IBSheet8의 api에서 boolean 값은 true/false 대신 1/0 으로 설정
4. setValue, setAttribute 에는 render 속성을 통해 수정값을 즉시 반영할지 여부를 선택할 수 있음

---
## 시트 생성/제거

```javascript
const sheet = IBSheet.create({
  id: "sheetId",
  el: "containerId",
  options: { Cfg: {}, Cols: [], Events: {} },
  data: [], // 생략가능
  sync: 1 // 생략가능(default: 0)
});

IBSheet.dispose("sheet");
```
## 시트 접근

```javascript
const sheet = window["sheetId"];
```
---

## 데이터 로드

### 로컬 데이터 로드
[loadSearchData](https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/load-search-data)
```javascript
// 로컬 데이터
sheet.loadSearchData({ 
  data: jsonArray,
  sync: 1, //sync 여부(default: 0) 
  append: 1, //기존데이터 하단에 추가여부 (default: 0)
});
```

### 서버 데이터 로드 
[doSearch](https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/do-search)
```javascript
// 서버 데이터
sheet.doSearch({
  url: "/api/list",
  method: "POST",
  param: "name=홍길동&saNo=3245" // 또는  { "name": "홍길동", "saNo": 3245 }
  reqHeader: {"Content-Type":"application/json", ...} // request header에 추가할 내용
});

```
### 전체 데이터 제거

```javascript
sheet.removeAll();
```

---

## 데이터 추출

### 데이터를 object 로 추출({"data": jsonArray} 구조)
[getSaveJson](https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-save-json)
```javascript
const changedData = sheet.getSaveJson(); // 상태가 변한(입력,수정,삭제)데이터를 행단위로 추출
const checkedData = sheet.getSaveJson({ col: "checkColName" }); // checkColName 열에 값이 true 인 데이터만 추출
const allRows = sheet.getSaveJson({ saveMode: 0 }); // 모든 데이터 추출 (0:전체, 1:전체(Deleted만 제외), 2:Added,Changed,Deleted(default))
```

**반환 형식:**
```javascript
{ data: [{ "STATUS": "Added", id: 행id, colName1: "값1", colName2: "값2".. }, ...] }
```

### 데이터를 querystring 으로 추출

```javascript
const changedData = sheet.getSaveString(); // 상태가 변한(입력,수정,삭제)데이터를 행단위로 추출
```

**반환 형식:**
```javascript
"STATUS=Changed&colName1=값1&colName2=값2"
```

### 행 데이터 추출

```javascript
const rowData = sheet.getRowValue(row);
```

---

## 데이터 저장

### ibsheet8를 통한 ajax 통신 및 저장
[doSave](https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/do-save)
```javascript
sheet.doSave({
  url: "/api/save",
  param: "name=홍길동&saNo=3245", // 함께 서버로 전송할 파라미터 (object도 가능 {"name":"홍길동",...})
  saveMode: 2, //수정된 데이터만 전달
  queryMode: 1, // json or querystring 선택
  quest: 1 // 저장 전에 confirm 생성
});
```

### 외부 라이브러리를 통한 저장

```javascript
const param = sheet.getSaveString(); //변경된 데이터 추출
$.ajax({
  url: '/api/save',
  method: 'post',
  data: param,
  success: function(data, status, xhr) {
    const io = data?.IO;
    if( io ) {
      // 저장 결과 반영
      sheet.applySaveResult(io.Result, io.Message, xhr.response);
    }
  }
});
```

---

## 행 조작

### 행 추가

```javascript
const newRow = sheet.addRow();//마지막 행에 추가
const newRow = sheet.addRow({next: row, init: { colName1: "한국", colName3: "A" } });// row행 위에 신규행 추가
```

### 행 삭제

```javascript
sheet.removeRow(row)
sheet.removeRow(sheet.getFocusedRow())
```

### 행 상태를 Deleted로 변경(실제 삭제되진 않음)

```javascript
sheet.deleteRow(row)
sheet.deleteRow(sheet.getFocusedRow())
```

### 행 이동/복사
```javascript
sheet.moveRow(row, targetRow)

sheet.copyRow(row, targetRow)
```


---

## 행 조회

```javascript
const allRows = sheet.getDataRows();
const count = sheet.getDataRows().length;
const headRow = sheet.getRowById("Header");
const sumRow = sheet.getRowById("FormulaRow");
const row10th = sheet.getRowByIndex(10);
const row11th = sheet.getNextRow(row10th);
const row9th = sheet.getPrevRow(row10th);
const firstRow = sheet.getFirstRow();
const lastRow = sheet.getLastRow();
const focusedRow = sheet.getFocusedRow();
const addedRows = sheet.getRowsByStatus("Added");
const checkedRows = sheet.getRowsByChecked("checkColName");
const focusedRowIndex = sheet.getRowIndex( sheet.getFocusedRow() );
```

---

## 셀 값 조작

```javascript
const value = sheet.getValue(row, "colName"); // 포맷팅이 제거된 실제 값
sheet.setValue(row, "colName", "새 값");
sheet.setValue({row: row, col: "colName", val: "새 값", render: 0 });// 렌더:0 설정시 실제 화면에 렌더링하지 않고, 렌더함수 호출시에 화면에 반영됨.
const text = sheet.getString(row, "colName");  // 포맷팅된 값
```

---

## 포커스/선택

```javascript
const frow = sheet.getFocusedRow()
const fcol = sheet.getFocusedCol()
sheet.focus(row, "colName") // 포커스 이동
sheet.blur() // 포커스 해제

const selRangeArr = sheet.getSelectedRanges();
const selRows = sheet.getSelectedRows();
sheet.selectAllRows();
sheet.clearSelection();
sheet.selectRange(startRow, startCol, endRow, endCol, 1);
```

---

## 체크박스

```javascript
sheet.setCheck(row, "checkColName", 1); //check
sheet.setCheck(row, "checkColName", 0); //uncheck
sheet.setCheck(row, "checkColName", null);// toggle check
const checkedRows = sheet.getRowsByChecked();
sheet.setAllCheck("checkColName");
```

---

## 컬럼 조작

```javascript
const colNames = sheet.getCols();
const firstCol = sheet.getFirstCol();
const lastCol = sheet.getLastCol();
sheet.showCol("colName");
sheet.hideCol("colName");
sheet.setAttribute(null, "colName", "CanEdit", 0); // 열 조작시 row 값을 null로 설정
sheet.setAttribute(null, "colName", "CanSort", 1);
const colWidth = sheet.getAttribute(null, "colName", "Width");
const colType = sheet.getAttribute(null, "colName", "Type");
```

---

## 정렬/필터
[doFilter](https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/do-filter)
```javascript
sheet.doSort("colName1,-colName2"); //colName앞에 -가 있을시 DESC 정렬
sheet.clearSort();

sheet.showFilterRow(); // 필터행 생성

if(sheet.getRowById("Filter").Visible) {
  sheet.doFilter({cols: "|colName1|colName2", vals: "|총무|3500", operators: "|1|5" }); // 반드시 Filter 행이 있는 경우에만 사용가능
}
sheet.clearFilter();
sheet.hideFilterRow();
```

---

## 검색

```javascript
const firstFoundRow = sheet.findText("colName", "찾을 글자");
```

---

## 스타일

```javascript
sheet.setAttribute( row, null, "Color", "#FF0000"); //행 색상 변경
sheet.setAttribute( row, null, "TextFont", "Times New Roman"); //행 font family 설정
sheet.setAttribute( null, "colName", "TextStyle", 1 ); //열 글자 Bold 설정
sheet.setAttribute( null, "colName", "TextSize", "27px" ); //열 글자 크기 설정
sheet.setAttribute( null, "colName", "Class", "grid-warning" ); //열에 .grid-warning class 설정
sheet.setAttribute( row, "colName", "TextColor", "#0000FF"); //셀 글자색 변경
```

---

## 렌더 함수

```javascript
sheet.refreshCell(row, "colName"); //셀 렌더링
sheet.refreshRow(row); //행 렌더링
sheet.renderBody(); //데이터 영역 렌더링
sheet.rerender(); //전체 영역 렌더링
```

---

## 내보내기
[exportData](https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/export-data)
```javascript
sheet.exportData({fileName: "데이터목록.xlsx", sheetName: "Sheet1", downRows: "Visible", downCols: "Visible", sheetDesign: 1});
```

---

## 병합
[setAutoMerge](https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-auto-merge)
```javascript
sheet.setAutoMerge(0, 3); // 인접한 셀 기준 자동 병합
sheet.setAutoMergeCancel();

sheet.setMergeRange(startRow, "colName1", endRow, "colName4"); // 특정 영역 강제 머지 (SearchMode:0에서는 사용 불가)
```

---

## 트리
```javascript
sheet.showTreeLevel(3, 0, 1); //3 level까지 펼침
sheet.setExpandRow(sheet.getFocusedRow(), null, 0); //focus된 행을 접기
const isExpanded = sheet.getAttribute(row, null, "Expanded"); //행 펼침 여부 확인
```