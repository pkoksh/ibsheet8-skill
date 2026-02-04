# 성능 최적화

## 대용량 데이터 처리

### SearchMode 설정

```javascript
Cfg: {
  SearchMode: 2  // 가상 스크롤 (대용량 필수)
}
```

| 모드 | 설명 | 권장 데이터량 |
|------|------|-------------|
| 0 | 전체 렌더링 | ~500행 |
| 1 | 지연 렌더링 | ~5,000행 |
| 2 | 가상 스크롤 | 10,000행+ |

### 서버 페이징

```javascript
// 한 번에 전체 로드 ✗
sheet.loadSearchData({ url: "/api/all" });

// 페이징 처리 ✓
sheet.loadSearchData({
  url: "/api/items",
  param: { page: 1, pageSize: 100 }
});
```

---

## 렌더링 최적화

### 필요한 컬럼만 정의

```javascript
// ✗ 숨김 컬럼 과다
Cols: [
  { Name: "col1", Hidden: true },
  { Name: "col2", Hidden: true },
  // ... 많은 숨김 컬럼
]

// ✓ 필요한 컬럼만
Cols: [
  { Name: "id" },
  { Name: "name" }
]
```

### 틀고정 최소화

```javascript
// ✗ 과도한 고정
Cfg: { FrozenCols: 10 }

// ✓ 최소한으로
Cfg: { FrozenCols: 2 }
```

### 조건부 스타일 최적화

```javascript
// ✗ 복잡한 계산
OnCellStyle: function(row, col, value) {
  // 매번 API 호출이나 복잡한 계산
}

// ✓ 간단한 조건
OnCellStyle: function(row, col, value) {
  return value < 0 ? { Color: "red" } : null;
}
```

---

## 이벤트 최적화

### 디바운스 적용

```javascript
let debounceTimer;

onAfterChange: function(evt) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    calculateTotal();
  }, 100);
}
```

### 불필요한 이벤트 방지

```javascript
// 여러 셀 일괄 변경 시
sheet.beginUpdate();
rows.forEach(row => {
  sheet.setValue(row, "status", "완료", { noEvent: true });
});
sheet.endUpdate();
```

---

## 메모리 관리

### 사용 후 정리

```javascript
// 페이지 이동 전
window.addEventListener("beforeunload", () => {
  IBSheet.getSheetList().forEach(s => IBSheet.dispose(s.id));
});

// SPA 컴포넌트 언마운트 시
useEffect(() => {
  return () => IBSheet.dispose("sheet");
}, []);
```

### 대용량 데이터 초기화

```javascript
// ✗ 기존 데이터 유지
sheet.loadSearchData({ data: newData });

// ✓ 기존 데이터 정리 후 로드
sheet.clearData();
sheet.loadSearchData({ data: newData });
```

---

## 네트워크 최적화

### 필요한 데이터만 전송

```javascript
// ✗ 전체 데이터
sheet.getSaveJson();

// ✓ 변경분만
sheet.getSaveJson({ check: 1 });

// ✓ 필요한 컬럼만
sheet.getSaveJson({ check: 1, cols: ["id", "name", "status"] });
```

### 압축 사용

```javascript
const data = sheet.getSaveJson({ check: 1 });

// gzip 압축 (서버 지원 필요)
fetch("/api/save", {
  headers: { "Content-Encoding": "gzip" },
  body: compress(JSON.stringify(data))
});
```

---

## 측정 및 모니터링

```javascript
// 로드 시간 측정
const startTime = performance.now();

sheet.loadSearchData({
  url: "/api/items",
  callback: function(result) {
    const loadTime = performance.now() - startTime;
    console.log(`로드 시간: ${loadTime}ms, 건수: ${result.length}`);
  }
});
```

---

## 권장 설정 (대용량)

```javascript
Cfg: {
  SearchMode: 2,           // 가상 스크롤
  CanSort: false,          // 서버 정렬 사용
  CanFilter: false,        // 서버 필터 사용
  MergeSheet: 0,           // 병합 비활성화
  ShowEmptyRows: false
}
```
