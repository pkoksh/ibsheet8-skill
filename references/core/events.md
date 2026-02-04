# 이벤트 레퍼런스

## 이벤트 공통 주의사항
1. ibsheet8의 모든 이벤트의 파라미터는 object 형태로 1개 입니다.
2. 이벤트 마다 파라미터 object에 들어있는 값은 다르지만 eventName과 sheet객체는 돌일하게 들어 있습니다.
3. 일부 이벤트에는 return 값을 통해 이벤트 진행을 중단할 수 있는데, 중단이 필요한 경우에는 1(또는 true)를 리턴해야 중단됩니다.

## 이벤트 등록

```javascript
// 생성 시 등록
IBSheet.create({
  options: {
    Events: {
      onRenderFirstFinish: function(evt) { },
      onClick: function(evt) { }
    }
  }
});

// 동적 등록
sheet.bind("onClick", function(evt) { });
```
### bind를 통한 이벤트 등록시 주의 사항
1. 동일 이벤트에 대한 bind() 재호출은 기존 핸들러를 덮어씁니다.
2. 시트 생성시 호출되는 onRenderFirstFinish 이벤트는 bind로 등록할 수 없습니다.
3. 이벤트는 객체 생성 시점에 등록하는 것을 권장하며, 생성 이후 등록은 공통 이벤트 처리에 불리합니다.
---

## 라이프사이클 이벤트

### [onRenderFirstFinish](../ibsheet-official-manual/events/on-render-first-finish.md)

시트 최초 렌더링 완료.

```javascript
onRenderFirstFinish: function(evt) {
  this.loadSearchData({ url: "/api/data/list" });
}
```

### [onSearchFinish](../ibsheet-official-manual/events/on-search-finish.md)

데이터 로드 완료. (xlsx import 후에도 발생)

```javascript
onSearchFinish: function(evt) {
  console.log(`${evt.sheet.getDataRows().length}건 로드됨`);
}
```

---

## 클릭/선택 이벤트

### [onClick](../ibsheet-official-manual/events/on-click.md)

- 마우스로 클릭시 발생. (포커스 이동 전에 발생)
- (Col)Type:Button 을 사용시에는 onClick 에 핸들러를 연결할 것.
- 클릭한 셀의 값을 얻고자 할때는 `evt.row[evt.col]`로 확인 가능.

```javascript
onClick: function(evt) {
  console.log(`포커스 된 셀을 다시 클릭했는지 여부 : ${evt.row == evt.sheet.getFocusedRow() }`);
}
```

### [onAfterClick](../ibsheet-official-manual/events/on-after-click.md)
- 마우스 클릭 시 포커스 이동, 체크/언체크(Bool,Radio) 후 발생

```javascript
onAfterClick: function(evt) {
  console.log(`${evt.sheet.getRowIndex(evt.row)}행 클릭!`);
}
```

onClick, onAfterClick 이벤트 파라미터 (두 이벤트 동일)

| 속성 | 설명 |
|------|------|
| evt.row | 행 객체 |
| evt.col | 컬럼명 |
| evt.x | 마우스 커서 x 좌표 |
| evt.y | 마우스 커서 y 좌표 |
| evt.event | javascript 마우스 이벤트 객체 |


### [onIconClick](../ibsheet-official-manual/events/on-icon-click.md)

- 셀 텍스트 좌측에 [Icon](../ibsheet-official-manual/props/col/icon.md)를 클릭시 onIconClick 이벤트 발생
- 두 이벤트 모두 CanEdit나 Disable 여부와 무관하게 발생함.

```javascript
onIconClick: function(evt) {
  if(evt.col == "employee") showEmployeePopup(evt.sheet.getRowValue(evt.row));
}
```


### [onButtonClick](../ibsheet-official-manual/events/on-button-click.md)
- 셀 텍스트 우측의 [Button](../ibsheet-official-manual/props/col/button.md)를 클릭시 onButtonClick 이벤트 발생
```javascript
onButtonClick: function(evt) {
  console.log(`${evt.sheet.getRowIndex(evt.row)}행의 팝업버튼이 클릭되었습니다.`);
}
``` 

---

## 편집 이벤트

### [onStartEdit](../ibsheet-official-manual/events/on-start-edit.md)

- 편집 시작시 발생하는 이벤트로 Bool,Radio 타입에서는 호출되지 않음

```javascript
onStartEdit: function(evt) {
  if (evt.sheet.getValue(evt.row, "status") === "완료") {
    return true;  // 편집 방지
  }
}
```

### [onEditEnd](../ibsheet-official-manual/events/on-end-edit.md)

- 편집 모드 종료시 발생하는 이벤트

```javascript
onEndEdit: function(evt) {
  if (evt.col == 'SCORE' && evt.val > 100) {
    alert('스코어는 100점을 초과해서 입력할 수 없습니다.');
    return true;  // 편집 방지
  }
}
```


### [onBeforeChange](../ibsheet-official-manual/events/on-before-change.md)

- 값 변경 전 이벤트. **return '값' 으로 저장될 데이터 변경 가능.**

```javascript
onBeforeChange: function(evt) {
  if (evt.col === "quantity" && evt.val < 0) {
    alert("음수 불가");
    return evt.oldval; // 이전 값으로 되돌림
  }
  // 값 변환
  if (evt.col === "code") {
    return evt.val.toUpperCase();
  }
}
```

| 속성 | 설명 |
|------|------|
| evt.row | 행 객체 |
| evt.col | 열 이름 |
| evt.val | 수정된 값 |
| evt.oldval | 변경 전 값 |

### [onAfterChange](../ibsheet-official-manual/events/on-after-change.md)

값 변경 후. 연관 필드 계산에 사용.

```javascript
onAfterChange: function(evt) {
  if (evt.col === "quantity" || evt.col === "price") {
    const total = this.getValue(evt.row, "quantity") * this.getValue(evt.row, "price");
    this.setValue(evt.row, "total", total);
  }
}
```

### onValidate

```javascript
onValidate: function(evt) {
  if (evt.col === "email" && evt.value) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(evt.value)) {
      return { valid: false, message: "이메일 형식 오류" };
    }
  }
  return { valid: true };
}
```

---

## 행 조작 이벤트

### onBeforeRowAdd

```javascript
onBeforeRowAdd: function(evt) {
  if (this.getRowCount() >= 100) {
    alert("최대 100행");
    return false;
  }
}
```

### onAfterRowAdd

```javascript
onAfterRowAdd: function(evt) {
  this.setValue(evt.row, "createDate", new Date().toISOString().slice(0, 10));
  this.setFocus(evt.row, "name");
}
```

### onBeforeRowDelete

```javascript
onBeforeRowDelete: function(evt) {
  if (this.getValue(evt.row, "status") === "승인") {
    alert("승인된 항목은 삭제 불가");
    return false;
  }
  return confirm("삭제하시겠습니까?");
}
```

### onAfterRowDelete

행 삭제 후.

---

## 정렬/필터 이벤트

### onBeforeSort

```javascript
onBeforeSort: function(evt) {
  if (this.getSaveJson({ check: 1 }).data.length > 0) {
    alert("변경 데이터를 먼저 저장하세요");
    return false;
  }
}
```

### onAfterSort / onBeforeFilter / onAfterFilter

---

## 키보드 이벤트

### onKeyDown

```javascript
onKeyDown: function(evt) {
  // Ctrl+S: 저장
  if (evt.ctrlKey && evt.keyCode === 83) {
    evt.event.preventDefault();
    saveData();
    return false;
  }
  // Ctrl+N: 행 추가
  if (evt.ctrlKey && evt.keyCode === 78) {
    this.addRow();
    return false;
  }
}
```

| 키 | 코드 |
|-----|------|
| Enter | 13 |
| Escape | 27 |
| Tab | 9 |
| Delete | 46 |
| S | 83 |
| N | 78 |

---

## 서버 통신 이벤트

### onBeforeDataLoad

```javascript
onBeforeDataLoad: function(evt) {
  showLoading();
  evt.param.userId = currentUserId;
}
```

### onBeforeDataSave

```javascript
onBeforeDataSave: function(evt) {
  if (evt.data.length === 0) {
    alert("변경 데이터 없음");
    return false;
  }
  return confirm(`${evt.data.length}건 저장?`);
}
```

### onAfterDataSave

```javascript
onAfterDataSave: function(evt) {
  hideLoading();
  if (evt.response.success) {
    this.acceptChanges();
    alert("저장 완료");
  }
}
```

### onDataError

```javascript
onDataError: function(evt) {
  hideLoading();
  if (evt.status === 401) {
    location.href = "/login";
  } else {
    alert("서버 오류");
  }
}
```

---

## 체크박스 이벤트

### onCheck

```javascript
onCheck: function(evt) {
  console.log(`Checked: ${evt.checked}`);
}
```

### onCheckAll

전체 선택/해제.

---

## 포커스/스크롤 이벤트

### onBeforeFocus / onAfterFocus

### onScroll

```javascript
onScroll: function(evt) {
  // 무한 스크롤
  if (evt.scrollTop + evt.clientHeight >= evt.scrollHeight - 50) {
    loadMoreData();
  }
}
```
