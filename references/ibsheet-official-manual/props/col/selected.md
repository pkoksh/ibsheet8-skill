---
KEY: selected
KIND: column-property
PATH: props/col/selected
ALIAS_EN: selects, column, checks, whether, selected, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/selected
---
# Selected ***(col)***

> Selects a column or checks whether a column is selected.

> Can be used when the [SelectingCells](/docs/props/cfg/selecting-cells) property value is 0.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Deselect column (`default`)|
|`1(true)`|Select column|

### Example
```javascript
// Select the entire XMT column
sheet.setAttribute({col: "XMT", attr: "Selected", val: 1, render: 1});
```

### Read More
- [SelectingCells cfg](/docs/props/cfg/selecting-cells)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
