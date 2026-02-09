# 컬럼 포맷 레퍼런스

## 개요

`Format`은 **셀에 표시되는 데이터의 형식**을 정의한다. 실제 값은 변경되지 않으며, 저장 시 원본 값이 전송된다.

- Format은 **Type에 따라 문법이 다름**
- 특수문자(`:` 등)를 포함할 경우 앞에 `\\`를 붙임 (예: `"Result\\: #,###won"`)

> 상세: [Format appendix](../ibsheet-official-manual/appx/format.md)

---

## 1. Text / Lines 타입 포맷

JSON 형식으로 실제 값과 표시 값의 쌍을 정의. 표시 값에 HTML 사용 가능.

```javascript
{ Name: "sCountry", Type: "Text", Format: "{'A':'<b>한국</b>','B':'일본','C':'중국'}" }
```

> 주민번호, 카드번호 등 자릿수 포맷은 [CustomFormat](#4-customformat-textlines-전용) 사용

---

## 2. Date 타입 포맷

Date 타입은 **Format, EditFormat, DataFormat** 3가지를 함께 설정하는 경우가 많다.

| 속성 | 역할 | 예시 |
|------|------|------|
| **Format** | 시트에 표시되는 형식 | `"yyyy.MM.dd"` |
| **EditFormat** | 셀 편집 시 표시되는 형식 | `"yyyyMMdd"` |
| **DataFormat** | 서버와 데이터 송수신 형식 | `"yyyyMMdd"` |

- Format 미설정 시 기본값: `yyyy/MM/dd`
- DataFormat 미설정 시 Format과 동일한 형식으로 송수신
- EditFormat 미설정 시 Format과 동일한 형식으로 편집

### 예약어

| 예약어 | 설명 | 예약어 | 설명 |
|--------|------|--------|------|
| yyyy/yy | 4자리/2자리 연도 | HH/H | 24시간 (2자리/1~2자리) |
| MM/M | 월 (2자리/1~2자리) | mm/m | 분 (2자리/1~2자리) |
| dd/d | 일 (2자리/1~2자리) | ss/s | 초 (2자리/1~2자리) |

### 예제
```javascript
{
    Name: "startDate", Type: "Date",
    Format: "yyyy.MM.dd",       // 시트 표시: "2019.07.25"
    EditFormat: "yyyyMMdd",     // 편집 시: "20190725"
    DataFormat: "yyyyMMdd"      // 서버 송수신: "20190725"
}
// 서버 "20190725" → 표시 "2019.07.25" → 편집 "20190725" → 저장 "20190725"
```

### Extend(IB_Preset)를 이용한 일괄 설정

Date 컬럼의 Format/EditFormat/DataFormat 등을 매번 지정하는 대신, `/plugins/ibsheet-common.js`에 정의된 `IB_Preset` 변수와 [Extend](../ibsheet-official-manual/props/col/extend.md) 속성으로 일괄 적용할 수 있다.

```javascript
// ibsheet-common.js에 미리 정의
var IB_Preset = {
    YMD: {Type:"Date", Format:"yyyy-MM-dd", EditFormat:"yyyyMMdd", DataFormat:"yyyyMMdd", Width:110},
    YMDHM: {Type:"Date", Format:"yyyy-MM-dd HH:mm", DataFormat:"yyyyMMddHHmm", CanEdit:0, Width:150},
    USD: {Type:"Float", Format:"$ #,##0.#", Width:120, CanResize:0, Color:"#FFFF88"},
};

// 사용 시: Extend로 프리셋 적용, 필요 시 개별 속성 오버라이드
options.Cols = [
    {Name: "birthDate", Extend: IB_Preset.YMD},
    {Name: "regDate",   Extend: IB_Preset.YMDHM},
    {Name: "salary",    Extend: IB_Preset.USD},
    {Name: "startDate", Extend: IB_Preset.YMD, CanEdit: 1},  // 개별 속성 추가
];
```

> **주의**: Extend와 동일 속성이 함께 지정된 경우, **먼저 설정된 속성이 우선**된다. `{Width:300, Extend:preset}` → Width=300 (Extend의 Width 무시)

> 상세: [DataFormat](../ibsheet-official-manual/props/col/data-format.md), [EditFormat](../ibsheet-official-manual/props/col/edit-format.md), [Extend](../ibsheet-official-manual/props/col/extend.md)

---

## 3. Int / Float 타입 포맷

| 예약어 | 설명 |
|--------|------|
| `0` | 값이 없으면 0으로 채움 |
| `#` | 값이 있을 때만 표시 |
| `%` | 100을 곱하여 표시 (단순 기호: `\\%`) |

- **기본 포맷**: Int → `#,##0` / Float → `#,##0.######`
- `;`으로 양수/음수/0 각각 다른 포맷 지정 가능

### 주요 패턴

| 패턴 | 입력 | 표시 |
|------|------|------|
| `#,##0` | 1234567 | 1,234,567 |
| `#,##0.00` | 1234.5 | 1,234.50 |
| `#,##0.##` | 0.1 | 0.1 |
| `#,##0원` | 56200 | 56,200원 |
| `$ #,##0.00` | 1234.5 | $ 1,234.50 |
| `#,##0.##%` | 0.1234 | 12.34% |
| `0000` | 12 | 0012 |

```javascript
// 양수/음수/0 구분 포맷
{ Name: "sNum", Type: "Int", Format: "플러스 #,###;마이너스 #,###;없음" }
```

---

## 4. CustomFormat (Text/Lines 전용)

원본 데이터에 마스킹이나 자릿수 포맷을 적용. `Format`과 별개 속성.

| 예약어 | 입력 | 표시 |
|--------|------|------|
| `PhoneNo` | 01073213834 | 010-7321-3834 |
| `IdNoMask` | 8501242384211 | 850124-2****** |
| `SaupNo` | 6258412458 | 625-84-12458 |
| `CardNo` | 1234567890123456 | 1234-5678-9012-3456 |
| `###-#####` | 12345678 | 123-45678 |

- `|` 구분자로 여러 포맷 지정 → 자릿수에 따라 자동 매칭
- 함수 지정 가능: `CustomFormat: function(v, sheet, col) { return ...; }`

```javascript
{ Type: "Text", Name: "cNo", CustomFormat: "IdNoMask|SaupNo" }
// 13자리 → 850124-2****** / 10자리 → 625-84-12458
```

---

## 참고 자료
- [Format appendix](../ibsheet-official-manual/appx/format.md)
- [CustomFormat](../ibsheet-official-manual/props/col/custom-format.md)
- [DataFormat](../ibsheet-official-manual/props/col/data-format.md) / [EditFormat](../ibsheet-official-manual/props/col/edit-format.md)
- [Extend (col)](../ibsheet-official-manual/props/col/extend.md)
- [Type appendix](../ibsheet-official-manual/appx/type.md)
- [컬럼 타입 레퍼런스](./column-type-property.md)
