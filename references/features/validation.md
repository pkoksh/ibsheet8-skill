# 유효성 검사

## 컬럼 레벨 검증

```javascript
{
  Header: "이름",
  Name: "name",
  Required: true,
  MaxLen: 50,
  MinLen: 2
}

{
  Header: "수량",
  Name: "quantity",
  Type: "Int",
  Required: true,
  Min: 1,
  Max: 9999
}

{
  Header: "이메일",
  Name: "email",
  EditMask: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}
```

## OnValidate 함수

```javascript
{
  Header: "이메일",
  Name: "email",
  OnValidate: function(evt) {
    if (!evt.value) return { valid: true };
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(evt.value)) {
      return { valid: false, message: "이메일 형식 오류" };
    }
    return { valid: true };
  }
}

// 복합 검증
{
  Header: "종료일",
  Name: "endDate",
  OnValidate: function(evt) {
    const startDate = this.getValue(evt.row, "startDate");
    if (startDate && evt.value && evt.value < startDate) {
      return { valid: false, message: "종료일은 시작일 이후여야 함" };
    }
    return { valid: true };
  }
}
```

---

## 전역 검증

```javascript
Events: {
  onValidate: function(evt) {
    if (evt.col === "phone" && evt.value) {
      if (!/^[0-9-]+$/.test(evt.value)) {
        return { valid: false, message: "전화번호 형식 오류" };
      }
    }
    return { valid: true };
  },
  
  onBeforeChange: function(evt) {
    if (evt.col === "amount" && evt.newValue < 0) {
      alert("음수 입력 불가");
      return false;
    }
    return true;
  }
}
```

---

## 저장 전 검증

```javascript
document.getElementById("btnSave").onclick = function() {
  const result = sheet.validate();
  
  if (!result.valid) {
    alert(result.message);
    sheet.setFocus(result.row, result.col);
    return;
  }
  
  saveData();
};
```

### 커스텀 검증

```javascript
function validateBeforeSave() {
  const errors = [];
  
  sheet.getAllRows().forEach((row, index) => {
    if (!sheet.getValue(row, "name")) {
      errors.push({ row, col: "name", message: `${index + 1}행: 이름 필수` });
    }
    
    const startDate = sheet.getValue(row, "startDate");
    const endDate = sheet.getValue(row, "endDate");
    if (startDate && endDate && endDate < startDate) {
      errors.push({ row, col: "endDate", message: `${index + 1}행: 날짜 오류` });
    }
  });
  
  return errors;
}
```

---

## 실시간 검증 표시

```javascript
{
  Header: "이메일",
  Name: "email",
  OnCellStyle: function(row, col, value) {
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return { Background: "#ffebee", BorderColor: "#f44336" };
    }
    return null;
  },
  OnTooltip: function(row, col, value) {
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "이메일 형식 오류";
    }
    return null;
  }
}
```

---

## 일반적인 검증 패턴

```javascript
// 전화번호
/^[0-9-]+$/

// 사업자번호
/^\d{3}-\d{2}-\d{5}$/

// 이메일
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

// URL
try { new URL(value); } catch { /* 오류 */ }

// 중복 체크
const rows = sheet.getAllRows();
const duplicates = rows.filter(r => r !== evt.row && sheet.getValue(r, col) === value);
```
