# 틀고정 및 셀 병합

## 열 틀고정 (Frozen Columns)

```javascript
Cfg: {
  FrozenCols: 2,        // 왼쪽 2열 고정
  FrozenColsRight: 1    // 오른쪽 1열 고정
}

// 동적 변경
sheet.setFrozenCols(3);
sheet.setFrozenColsRight(2);
sheet.setFrozenCols(0);  // 해제
```

## 행 틀고정 (Frozen Rows)

```javascript
Cfg: {
  FrozenRows: 1,         // 상단 1행 고정
  FrozenRowsBottom: 2    // 하단 2행 고정
}
```

---

## 헤더 고정

```javascript
Cfg: {
  HeaderFixed: true,
  HeaderHeight: 40,
  HeaderRows: 2          // 다중 헤더
}

// 다중 헤더 설정
Cols: [
  { Header: ["기본정보", "번호"], Name: "no" },
  { Header: ["기본정보", "이름"], Name: "name" },
  { Header: ["금액정보", "단가"], Name: "price" }
]
```

---

## 셀 병합 (Merge)

### 자동 병합

```javascript
Cfg: {
  MergeSheet: 1,    // 0: 없음, 1: 같은 값 병합, 2: 연속된 값만
  MergeCols: ["category", "group"]
}

// 컬럼별 설정
{ Header: "카테고리", Name: "category", Merge: true }
```

### 수동 병합

```javascript
sheet.mergeCells(startRow, startCol, endRow, endCol);
sheet.unmergeCells(row, col);
sheet.unmergeAll();
```

### 헤더 병합 (컬럼 그룹)

```javascript
Cols: [
  {
    Header: "고객정보",
    Cols: [
      { Header: "이름", Name: "name" },
      { Header: "연락처", Name: "phone" }
    ]
  }
]
```

---

## 보고서 스타일 예시

```javascript
Cfg: {
  FrozenCols: 2,
  MergeSheet: 1,
  HeaderRows: 2,
  FooterRow: true
}

Cols: [
  { Header: ["", "부서"], Name: "dept", Merge: true },
  { Header: ["", "팀"], Name: "team", Merge: true },
  { Header: ["1월", "매출"], Name: "jan_sales", Type: "Int", Footer: "SUM" },
  { Header: ["1월", "비용"], Name: "jan_cost", Type: "Int", Footer: "SUM" }
]
```
