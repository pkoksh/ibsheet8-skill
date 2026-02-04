# 그룹핑 및 합계

## 행 그룹핑

### 기본 설정

```javascript
Cfg: {
  CanGroup: true,
  GroupMode: 1,
  GroupSummary: true,
  GroupExpanded: true,
  GroupHeader: "{value} ({count}건)"
}

Cols: [
  { Header: "카테고리", Name: "category", CanGroup: true }
]

// 프로그래밍 방식
sheet.groupBy("category");
sheet.groupBy(["category", "status"]);  // 다중 그룹
sheet.clearGroup();
```

### 그룹 펼침/접기

```javascript
sheet.expandAllGroups();
sheet.collapseAllGroups();
sheet.toggleGroup(groupRow);
```

---

## 합계/소계 (Summary)

### 푸터 합계

```javascript
Cfg: {
  FooterRow: true
}

Cols: [
  { Header: "상품명", Name: "name", Footer: "합계" },
  { Header: "수량", Name: "quantity", Type: "Int", Footer: "SUM", FooterFormat: "#,##0" },
  { Header: "금액", Name: "amount", Type: "Int", Footer: "SUM" },
  { Header: "평균", Name: "avg", Type: "Float", Footer: "AVG" }
]
```

### 푸터 함수

| 함수 | 설명 |
|------|------|
| SUM | 합계 |
| AVG | 평균 |
| COUNT | 개수 |
| MAX | 최대값 |
| MIN | 최소값 |

### 커스텀 푸터

```javascript
{
  Header: "금액",
  Name: "amount",
  OnFooter: function() {
    const rows = this.getAllRows();
    let sum = 0;
    rows.forEach(row => {
      if (this.getValue(row, "status") === "완료") {
        sum += this.getValue(row, "amount") || 0;
      }
    });
    return sum;
  }
}
```

### 다중 푸터

```javascript
Cfg: { FooterRow: 2 }

Cols: [
  {
    Header: "금액",
    Name: "amount",
    Footer: ["SUM", "AVG"],
    FooterFormat: ["#,##0원", "#,##0.0원"]
  }
]
```

---

## 그룹 합계

```javascript
{
  Header: "금액",
  Name: "amount",
  GroupSummary: "SUM",
  GroupSummaryFormat: "#,##0원"
}
```

---

## 외부 합계 표시

```html
<div class="summary-panel">
  <span>총 건수: <strong id="totalCount">0</strong>건</span>
  <span>합계: <strong id="totalAmount">0</strong>원</span>
</div>

<script>
function updateSummary() {
  const rows = sheet.getAllRows();
  let sum = 0;
  rows.forEach(row => sum += sheet.getValue(row, "amount") || 0);
  
  document.getElementById("totalCount").textContent = rows.length.toLocaleString();
  document.getElementById("totalAmount").textContent = sum.toLocaleString();
}
</script>
```
