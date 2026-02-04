# 내보내기 및 가져오기

## 엑셀 내보내기

```javascript
sheet.exportExcel({
  fileName: "데이터목록",
  sheetName: "Sheet1",
  showHidden: false,
  headerRow: true,
  footerRow: true,
  checkedOnly: false,
  exportStyle: true,
  exportMerge: true,
  cols: ["name", "email", "amount"]  // 특정 컬럼만
});

// 다중 시트
IBSheet.exportExcel({
  fileName: "전체보고서",
  sheets: [
    { sheetId: "sheet1", sheetName: "매출" },
    { sheetId: "sheet2", sheetName: "비용" }
  ]
});
```

---

## 엑셀 가져오기

```html
<input type="file" id="excelFile" accept=".xlsx,.xls">
<button id="btnImport">가져오기</button>

<script>
document.getElementById("btnImport").onclick = function() {
  const file = document.getElementById("excelFile").files[0];
  
  sheet.importExcel({
    file: file,
    sheetIndex: 0,
    startRow: 1,
    mapping: {
      0: "name",
      1: "email",
      2: "amount"
    },
    // 또는 자동 매핑
    autoMapping: true,
    headerRow: 0,
    callback: function(result) {
      console.log(`${result.rowCount}행 가져옴`);
    }
  });
};
</script>
```

---

## CSV 내보내기/가져오기

```javascript
sheet.exportCSV({
  fileName: "데이터목록",
  encoding: "UTF-8",
  delimiter: ",",
  includeHeader: true
});

sheet.importCSV({
  file: file,
  encoding: "UTF-8",
  hasHeader: true,
  mapping: { 0: "name", 1: "email" }
});
```

---

## PDF 내보내기

```javascript
sheet.exportPDF({
  fileName: "보고서",
  orientation: "landscape",
  paperSize: "A4",
  margin: { top: 20, right: 10, bottom: 20, left: 10 },
  header: "월간 실적 보고서",
  footer: "페이지 {page} / {pages}",
  fitToPage: true
});
```

---

## 인쇄

```javascript
sheet.print({
  title: "데이터 목록",
  orientation: "landscape",
  fitToPage: true,
  repeatHeader: true,
  preview: true
});
```

---

## 클립보드

```javascript
sheet.copy();
sheet.copyAll();
sheet.paste();

Cfg: { CanPaste: true, PasteMode: 1 }  // 0: 덮어쓰기, 1: 행 추가
```
