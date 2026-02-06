---
KEY: setCellStyle
KIND: method
PATH: funcs/core/set-cell-style
ALIAS: sheet.setCellStyle, setCellStyle()
ALIAS_EN: specific, cellof, styleproperty, value, changed, setcellstyle, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-cell-style
---
# setCellStyle ***(method)***
> specific cellof styleproperty value Changed.

> `row` `null`, column for propertyas setting.

> `col` `null`, row for propertyas setting.

### Syntax
```javascript
void setCellStyle( row, col, styleAttr, render );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Optional|[data row object](/docs/appx/row-object)|
|col |`string`|Optional|column name|
|styleAttr|`object`|Required|checks and desired style propertyvalue
`'Color'(background color)`, `'TextColor'(textof color)`, `'TextSize'(text size)`, `'TextStyle'(textof style)`, `'TextFamily'(text font)`, `'Align'(sort)` |
|render|`boolean`|Optional|whether immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected (`default`)
`1(true)`:Immediately reflected|
### Return Value
***none***

### Example
```javascript
//Cell text color Changed.
sheet.setCellStyle( sheet.getFirstRow(), "CUST_CD", {"TextColor" : "#FF0000"}, 1);

//rowof charactersize Changed
sheet.setCellStyle( sheet.getRowByIndex(4), null, {"TextSize": 20 }, 1 );

```

### Read More
- [setAttribute method](./set-attribute)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
