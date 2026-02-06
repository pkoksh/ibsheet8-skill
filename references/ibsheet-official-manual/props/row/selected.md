---
KEY: selected
KIND: row-property
PATH: props/row/selected
ALIAS_EN: selects, row, selected
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/selected
---
# Selected ***(row)***
> Selects a row.

> When the property is set to `1(true)`, the selected row can be obtained through [getSelectedRows()](/docs/funcs/core/get-selected-rows).

> Depending on the [SelectingCells cfg](/docs/props/cfg/selecting-cells) property, the selected row can be displayed or ignored.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Deselected|
|`1(true)`|Selected|



### Example
```javascript
//Select a specific row.
var row = sheet.getRowById("AR55");
row["Selected"] = 1;
```

### Read More
- [SelectingCells cfg](/docs/props/cfg/selecting-cells)
- [getSelectedRows method](/docs/funcs/core/get-selected-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
