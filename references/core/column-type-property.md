# 컬럼 타입 레퍼런스

## 기본 정보

### 타입 리스트 (자주사용되는 순)
Text, Int, Float, Date, Enum, Bool, Lines, Button, Html, Link, Img, File, Radio,  Pass, Drag
### 참고 사항
1. 열의 Align은 Type에 따라 기본값이 달라짐

|타입|정렬|
|---|---|
|Text,Lines,Enum,Img,Link,Pass,File|Left|
|Button,Date,Bool,Radio|Center|
|Int,Float|Right|
|Html,Drag|정렬불가|

2. 열 생성시 Type 속성은 필수는 아니지만 가급적 설정할 것을 권함
---

## Text (텍스트)

```javascript
{
  Header: "이름",
  Name: "username",
  Type: "Text",
  Align: "Center",
  EditMask: "^\\w*$", //입력허용글자 javascript 정규식
  Width: 150,
  Size: 50, //maxlength
  EmptyValue: "이름 입력" //placeholder
}
```

---

## Int (정수)

```javascript
{
  Header: "수량",
  Name: "quantity",
  Type: "Int",
  Width: 100,
  Format: "#,##0"
}
```


---

## Float (실수)

```javascript
{
  Header: "단가",
  Name: "price",
  Type: "Float",
  Format: "#,##0.00", //소숫점 세번째 자리에서 반올림된 값이 표시
}
```

---

## Int,Float 참고
- 기본적으로 숫자 유형은 사용자가 값을 지워도 0을 갖음. (Col)EmptyValue:1 을 설정해야 실제 값을 ''(공백)으로 만들수 있음.
- Int 타입 기본 포맷 "#,##0"
- Float 타입 기본 포맷 "#,##0.######"

### 숫자 형식 패턴

| 패턴 | 실제 값 | 표시 | 설명 |
|------|--------|------|----|
| `#,##0` | 0 또는 '' | 0 | 값이 0이거나 ''(공백)인 경우에도 0을 표시 |
| `#,###` | 0 또는 '' |  | 값이 0이거나 ''(공백)인 경우 ''을 표시 |
| `#,##0` | 1234567 | 1,234,567 |  |
| `#,##0` | 1234.567 | 1,235 | 소숫점 첫번째 자리에서 반올림된 값이 표시(실제데이터에는 영향을 미치지 않음)|
| `#,##0.00` | 1234.5 | 1,234.50 | |
| `#,###.##` | 1234.5 | 1,234.5 | |
| `#,##0.00` | 0.1 | 0.10 | |
| `#,###.##` | 0.1 | .1 | |
| `#,##0.##` | 0.1 | 0.1 | |
| `#,##0원` | 1234567 | 1,234,567원 ||
| `#,##0\\%` | 1234567 | 1,234,567% | 특수문자 '%' 앞에 \\를 붙여야 함 |
| `0000` | 12 | 0012 | 자리수 만큼 채움 |
---
## Date (날짜)

```javascript
{
  Header: "등록일",
  Name: "regDate",
  Type: "Date",
  Format: "yyyy-MM-dd", // 시트에 표시되는 포맷
  EditFormat: "yyyyMMdd", // 편집시 표시되는 포맷
  DataFormat: "yyyyMMdd", // 서버에 데이터를 전송하거나 받을때 포맷
}
```

### 날짜 형식 패턴

| 패턴 | 설명 |
|------|------|
| yyyy | 4자리 연도 |
| MM | 2자리 월 |
| dd | 2자리 일 |
| HH | 24시간 |
| hh | 12시간 |
| mm | 분 |
| ss | 초 |

---

## Enum (드롭다운)

```javascript
{
  Header: "상태",
  Name: "pstatus",
  Type: "Enum",
  EnumKeys: "|A|B|C", //select의 value (첫글자가 구분자)
  Enum: "|대기|진행|완료", //select의 text (첫글자가 구분자)
}
```
### Enum 타입 참고
- Enum이나 EnumKeys에 없는 데이터를 load하는 경우 값은 무시됨(버려짐)
- Enum이나 EnumKeys에 없는 값을 허용하려면 (Col)EnumStrictMode: 1을 설정해야 함
- Enum만 설정하고 EnumKeys를 설정하지 않는 경우 EnumKeys도 Enum과 동일하게 취급
- Enum의 item이 많은 경우에는 (Col)EnumFilter:1 을 설정하면 드롭리스트 상단에 필터가 표시됨.

### 동적 Enum 데이터 변경

```javascript
$.ajax({
  url:'/data/getEnum',
  data: '...',
  success: function(data, ...) {
    sheet.setAttribute( null, "colName", "Enum", data.ComboText, 0 );
    sheet.setAttribute( null, "colName", "EnumKeys", data.ComboCode, 0 );
    sheet.renderBody(); //적용한 내용을 화면에 표시
  }
});
```

---

## Bool (체크박스)

```javascript
{
  Header: "사용",
  Name: "useYn",
  Type: "Bool",
  TrueValue: "Y", // default : 1
  FalseValue: "N", // default : 0
}
```
---

## Lines (textarea)

```javascript
{
  Header: "기타사항",
  Name: "desc",
  Type: "Lines",
  Width: 250,
  Wrap: 1,  // Lines 타입은 default가 1
  RelWidth: 1
}
```

---

## Button (버튼)

```javascript
{
  Header: "상세",
  Name: "btnDetail",
  Type: "Button",
  DefaultValue: "보기", // 조회된 값이 없는 경우 표시됨
  // ButtonText: "보기", // 조회된 값을 무기하고 표시됨
}
```
### Button 타입 참고
- 사용자 클릭시 구현은 Events.onClick 이벤트롤 통해서 구현
- 버튼을 비활성화 시키고자 하는 경우에는 Disabled:1 을 설정


---

## Link (하이퍼링크)

```javascript
{
  Header: "URL",
  Name: "url",
  Type: "Link",
  LinkTarget: "_blank",
}
```

### Link 타입 데이터 구조
```javascript
sheet.setValue(row, "colName", "|./pos/acceptCos.do|조건확인|_self" );  //|URL|Text|Target (첫글자를 구분자로 사용)
```

---

## Img (이미지)

```javascript
{
  Header: "사진",
  Name: "photo",
  Type: "Img", //Image가 아니라 Img 임
  DefaultImage: "./img/noimage.png" // 데이터가 없는 겨우 표시되는 이미지
}
```

### Img 타입 데이터 구조
```javascript
//|URL|Width|Height|Left|Top|LinkUrl|Target|Backgroud-size (첫글자를 구분자로 사용)
// URL을 제외한 나머지는 생략가능하나 첫글자는 반드시 구분자가 들어가야 함.
sheet.setValue(row, "colName", "|./img/s0151500.png|300|200" );  
```

---


## File (바이너리 파일 업로드/다운로드)
```javascript
{
  Header: "첨부이미지",
  Name: "attachImage",
  Type: "File", 
  Accept: 'image/*',
  Width: 150
}
```
### File 타입 참고
- 파일 타입 사용시에는 getSaveJson,getSaveString 함수의 리턴값이 FormData형식으로 추출됨
- 파일데이터는 조회/저장시 데이터 규격에 주의가 필요 [파일 데이터 규격 참고](https://docs.ibsheet.com/ibsheet/v8/manual/#docs/dataStructure/filte-type-structure)














## Formula (수식)

```javascript
{
  Header: "합계",
  Name: "total",
  Type: "Formula",
  Formula: "quantity * price",
  Format: "#,##0",
  CanEdit: false
}
```

### 수식 함수

```javascript
Formula: "IF(status=='A', price, 0)"
Formula: "SUM(price1, price2, price3)"
Formula: "ROUND(price * 1.1, 2)"
```

---

## Popup (팝업 선택)

```javascript
{
  Header: "고객",
  Name: "customerName",
  Type: "Popup",
  RelatedColumn: "customerId",
  PopupUrl: "/popup/customer.html",
  OnPopupReturn: function(evt, result) {
    this.setValue(evt.row, "customerId", result.id);
    this.setValue(evt.row, "customerName", result.name);
  }
}
```

---

## 컬럼 그룹 (병합 헤더)

```javascript
Cols: [
  {
    Header: "고객정보",
    Cols: [
      { Header: "이름", Name: "name", Type: "Text" },
      { Header: "연락처", Name: "phone", Type: "Text" }
    ]
  }
]
```

---

## 특수 컬럼

### 행 번호

```javascript
{ Header: "No", Name: "_rowNum", Type: "RowNum", Width: 50 }
```

### 행 상태

```javascript
{
  Header: "상태",
  Name: "_STATUS",
  Type: "Text",
  Width: 50,
  CanEdit: false,
  OnCellStyle: function(row, col, value) {
    const styles = {
      "I": { Background: "#E3F2FD", Color: "#1976D2" },
      "U": { Background: "#FFF3E0", Color: "#F57C00" },
      "D": { Background: "#FFEBEE", Color: "#D32F2F" }
    };
    return styles[value] || null;
  }
}
```
