# 필터링 및 정렬

## 정렬 (Sorting)

### 기본 설정

```javascript
Cfg: {
  CanSort: true,
  SortMode: 0      // 0: 단일, 1: 다중
}

Cols: [
  { Header: "이름", Name: "name", CanSort: true },
  { Header: "ID", Name: "id", CanSort: false }
]
```

### 프로그래밍 방식

```javascript
sheet.sort("name", "ASC");
sheet.sort("amount", "DESC");

// 다중 정렬 (SortMode: 1)
sheet.sort([
  { col: "category", order: "ASC" },
  { col: "name", order: "ASC" }
]);

sheet.clearSort();
```

### 커스텀 정렬

```javascript
{
  Header: "상태",
  Name: "status",
  SortOrder: ["대기", "진행", "완료", "취소"],
  // 또는
  OnSort: function(a, b, order) {
    const priority = { "긴급": 1, "높음": 2, "보통": 3 };
    const result = priority[a] - priority[b];
    return order === "ASC" ? result : -result;
  }
}
```

---

## 필터링 (Filtering)

### 기본 설정

```javascript
Cfg: {
  CanFilter: true,
  FilterRow: true,
  FilterPosition: "top"
}
```

### 필터 타입

```javascript
{ Name: "name", FilterType: "Text", FilterOp: "Contains" }
{ Name: "amount", FilterType: "Range" }
{ Name: "status", FilterType: "Select", FilterData: ["전체", "대기", "완료"] }
{ Name: "regDate", FilterType: "Date" }
```

### 필터 연산자

| 연산자 | 설명 |
|--------|------|
| Contains | 포함 |
| Equals | 일치 |
| StartsWith | 시작 |
| GreaterThan | 초과 |
| Between | 범위 |

### 프로그래밍 방식

```javascript
sheet.setFilter("status", "진행");
sheet.setFilter("amount", { op: "GreaterThan", value: 10000 });
sheet.setFilter("amount", { op: "Between", value: [1000, 5000] });
sheet.setFilter("status", ["대기", "진행"]);  // OR

sheet.clearFilter("status");
sheet.clearAllFilter();
```

---

## 검색 UI 예시

```html
<input type="text" id="searchInput" placeholder="검색...">
<button id="btnSearch">검색</button>

<script>
document.getElementById("btnSearch").onclick = function() {
  const keyword = document.getElementById("searchInput").value;
  if (keyword) sheet.setFilter("name", keyword);
};
</script>
```

## 날짜 필터 예시

```javascript
// 오늘
sheet.setFilter("regDate", { op: "Equals", value: new Date().toISOString().slice(0, 10) });

// 최근 30일
const thirtyDaysAgo = new Date();
thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
sheet.setFilter("regDate", { op: "GreaterOrEqual", value: thirtyDaysAgo.toISOString().slice(0, 10) });
```
