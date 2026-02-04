# 자주 발생하는 오류

## 초기화 오류

### "Container element not found"

**원인**: DOM이 준비되기 전에 시트 생성 시도

**해결**:
```javascript
// ✗ 잘못된 방법
IBSheet.create({ el: "container", ... });

// ✓ 올바른 방법
document.addEventListener("DOMContentLoaded", function() {
  IBSheet.create({ el: "container", ... });
});

// React/Vue에서는 마운트 이후
useEffect(() => {
  IBSheet.create({ el: containerRef.current, ... });
}, []);
```

### "Sheet ID already exists"

**원인**: 같은 ID로 중복 생성

**해결**:
```javascript
// 기존 시트 제거 후 생성
if (IBSheet.getSheetById("sheet")) {
  IBSheet.dispose("sheet");
}
IBSheet.create({ id: "sheet", ... });
```

---

## 데이터 오류

### "Cannot read property of undefined"

**원인**: 잘못된 행/컬럼 참조

**해결**:
```javascript
// ✗ 잘못된 방법
const value = sheet.getValue(0, "name");  // 인덱스가 아닌 행 객체 필요

// ✓ 올바른 방법
const row = sheet.getRowByIndex(0);
if (row) {
  const value = sheet.getValue(row, "name");
}
```

### 데이터가 표시되지 않음

**원인**: 컬럼 Name과 데이터 키 불일치

**해결**:
```javascript
// 데이터
{ "userName": "홍길동" }

// 컬럼 (Name이 일치해야 함)
{ Header: "이름", Name: "userName" }  // ✓
{ Header: "이름", Name: "name" }      // ✗ 불일치
```

---

## 이벤트 오류

### 이벤트 핸들러 내 this가 undefined

**원인**: 화살표 함수 사용

**해결**:
```javascript
// ✗ 화살표 함수 (this가 시트가 아님)
onClick: (evt) => {
  this.getValue(evt.row, "name");  // 오류
}

// ✓ 일반 함수 (this가 시트)
onClick: function(evt) {
  this.getValue(evt.row, "name");  // 정상
}
```

### onAfterChange 무한 루프

**원인**: 이벤트 핸들러 내에서 setValue 호출

**해결**:
```javascript
onAfterChange: function(evt) {
  // ✗ 무한 루프
  this.setValue(evt.row, "total", calc);
  
  // ✓ noEvent 옵션 사용
  this.setValue(evt.row, "total", calc, { noEvent: true });
}
```

---

## 메모리 누수

### SPA에서 시트가 계속 쌓임

**원인**: 컴포넌트 언마운트 시 dispose 미호출

**해결**:
```javascript
// React
useEffect(() => {
  return () => IBSheet.dispose("sheet");
}, []);

// Vue
onUnmounted(() => {
  IBSheet.dispose("sheet");
});
```

---

## 스타일 오류

### 시트가 너무 작게 표시됨

**원인**: 컨테이너 크기 미지정

**해결**:
```html
<!-- ✗ 크기 없음 -->
<div id="container"></div>

<!-- ✓ 크기 지정 -->
<div id="container" style="width:100%; height:500px;"></div>
```

### 컨테이너 크기 변경 시 시트 크기 안 맞음

**해결**:
```javascript
window.addEventListener("resize", () => sheet.resize());
```

---

## 서버 통신 오류

### CORS 오류

**원인**: 서버에서 CORS 미설정

**해결**: 서버에서 CORS 헤더 추가
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type
```

### 저장 후 상태가 초기화 안 됨

**원인**: acceptChanges 미호출

**해결**:
```javascript
fetch("/api/save", { ... })
  .then(() => {
    sheet.acceptChanges();  // 필수!
  });
```

---

## Combo 오류

### Combo 목록이 표시 안 됨

**원인**: ComboCode/ComboText 형식 오류

**해결**:
```javascript
// ✗ 배열을 |로 구분 안 함
ComboCode: ["A", "B", "C"]

// ✓ 문자열로 | 구분
ComboCode: "A|B|C",
ComboText: "활성|비활성|대기"

// ✓ 또는 배열 사용 시 별도 설정
ComboCode: ["A", "B", "C"],
ComboText: ["활성", "비활성", "대기"]
```

---

## 체크박스 오류

### 체크 상태가 저장 안 됨

**원인**: OnValue/OffValue 미설정

**해결**:
```javascript
{
  Type: "CheckBox",
  OnValue: "Y",    // 체크 시 값
  OffValue: "N"    // 해제 시 값
}
```
