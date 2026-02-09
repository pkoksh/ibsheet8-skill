# Column Format Reference

## Overview

`Format` defines **the display format of data in a cell**. The actual value is not changed, and the original value is sent when saving.

- Format **syntax differs depending on the Type**
- When including special characters (`:`, etc.), prefix with `\\` (e.g., `"Result\\: #,###won"`)

> Details: [Format appendix](../ibsheet8-official-manual/appx/format.md)

---

## 1. Text / Lines Type Format

Define pairs of actual values and display values in JSON format. HTML can be used in display values.

```javascript
{ Name: "sCountry", Type: "Text", Format: "{'A':'<b>Korea</b>','B':'Japan','C':'China'}" }
```

> For digit formatting such as ID numbers and card numbers, use [CustomFormat](#4-customformat-textlines-only)

---

## 2. Date Type Format

Date type often requires setting **Format, EditFormat, DataFormat** together.

| Property | Role | Example |
|------|------|------|
| **Format** | Display format in ibsheet8 | `"yyyy.MM.dd"` |
| **EditFormat** | Display format when editing a cell | `"yyyyMMdd"` |
| **DataFormat** | Data transmission format with server | `"yyyyMMdd"` |

- Default when Format is not set: `yyyy/MM/dd`
- When DataFormat is not set, data is sent/received in the same format as Format
- When EditFormat is not set, editing uses the same format as Format

### Reserved Words

| Reserved Word | Description | Reserved Word | Description |
|--------|------|--------|------|
| yyyy/yy | 4-digit/2-digit year | HH/H | 24-hour (2-digit/1~2-digit) |
| MM/M | Month (2-digit/1~2-digit) | mm/m | Minute (2-digit/1~2-digit) |
| dd/d | Day (2-digit/1~2-digit) | ss/s | Second (2-digit/1~2-digit) |

### Example
```javascript
{
    Name: "startDate", Type: "Date",
    Format: "yyyy.MM.dd",       // ibsheet8 display: "2019.07.25"
    EditFormat: "yyyyMMdd",     // When editing: "20190725"
    DataFormat: "yyyyMMdd"      // Server transmission: "20190725"
}
// Server "20190725" → Display "2019.07.25" → Edit "20190725" → Save "20190725"
```

### Batch Setting with Extend (IB_Preset)

Instead of specifying Format/EditFormat/DataFormat for Date columns every time, you can apply them in batch using the `IB_Preset` variable defined in `/plugins/ibsheet-common.js` and the [Extend](../ibsheet8-official-manual/props/col/extend.md) property.

```javascript
// Pre-defined in ibsheet-common.js
var IB_Preset = {
    YMD: {Type:"Date", Format:"yyyy-MM-dd", EditFormat:"yyyyMMdd", DataFormat:"yyyyMMdd", Width:110},
    YMDHM: {Type:"Date", Format:"yyyy-MM-dd HH:mm", DataFormat:"yyyyMMddHHmm", CanEdit:0, Width:150},
    USD: {Type:"Float", Format:"$ #,##0.#", Width:120, CanResize:0, Color:"#FFFF88"},
};

// Usage: Apply preset with Extend, override individual properties as needed
options.Cols = [
    {Name: "birthDate", Extend: IB_Preset.YMD},
    {Name: "regDate",   Extend: IB_Preset.YMDHM},
    {Name: "salary",    Extend: IB_Preset.USD},
    {Name: "startDate", Extend: IB_Preset.YMD, CanEdit: 1},  // Add individual property
];
```

> **Note**: When the same property is specified alongside Extend, **the property set first takes priority**. `{Width:300, Extend:preset}` → Width=300 (Extend's Width is ignored)

> Details: [DataFormat](../ibsheet8-official-manual/props/col/data-format.md), [EditFormat](../ibsheet8-official-manual/props/col/edit-format.md), [Extend](../ibsheet8-official-manual/props/col/extend.md)

---

## 3. Int / Float Type Format

| Reserved Word | Description |
|--------|------|
| `0` | Fill with 0 when value is empty |
| `#` | Display only when value exists |
| `%` | Multiply by 100 for display (for literal symbol: `\\%`) |

- **Default format**: Int → `#,##0` / Float → `#,##0.######`
- Use `;` to specify different formats for positive/negative/zero values

### Key Patterns

| Pattern | Input | Display |
|------|------|------|
| `#,##0` | 1234567 | 1,234,567 |
| `#,##0.00` | 1234.5 | 1,234.50 |
| `#,##0.##` | 0.1 | 0.1 |
| `#,##0won` | 56200 | 56,200won |
| `$ #,##0.00` | 1234.5 | $ 1,234.50 |
| `#,##0.##%` | 0.1234 | 12.34% |
| `0000` | 12 | 0012 |

```javascript
// Separate format for positive/negative/zero
{ Name: "sNum", Type: "Int", Format: "Plus #,###;Minus #,###;None" }
```

---

## 4. CustomFormat (Text/Lines Only)

Apply masking or digit formatting to original data. This is a separate property from `Format`.

| Reserved Word | Input | Display |
|--------|------|------|
| `PhoneNo` | 01073213834 | 010-7321-3834 |
| `IdNoMask` | 8501242384211 | 850124-2****** |
| `SaupNo` | 6258412458 | 625-84-12458 |
| `CardNo` | 1234567890123456 | 1234-5678-9012-3456 |
| `###-#####` | 12345678 | 123-45678 |

- Use `|` delimiter to specify multiple formats → auto-match based on digit count
- Function can be specified: `CustomFormat: function(v, sheet, col) { return ...; }`

```javascript
{ Type: "Text", Name: "cNo", CustomFormat: "IdNoMask|SaupNo" }
// 13 digits → 850124-2****** / 10 digits → 625-84-12458
```

---

## References
- [Format appendix](../ibsheet8-official-manual/appx/format.md)
- [CustomFormat](../ibsheet8-official-manual/props/col/custom-format.md)
- [DataFormat](../ibsheet8-official-manual/props/col/data-format.md) / [EditFormat](../ibsheet8-official-manual/props/col/edit-format.md)
- [Extend (col)](../ibsheet8-official-manual/props/col/extend.md)
- [Type appendix](../ibsheet8-official-manual/appx/type.md)
- [Column Type Reference](./column-type-property.md)
