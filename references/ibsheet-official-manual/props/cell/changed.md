---
KEY: changed
KIND: cell-property
PATH: props/cell/changed
ALIAS_EN: indicates, whether, cell, modified, changed
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/changed
---
# Changed ***(cell)***

> Indicates whether the cell has been modified.

> When the cell value is modified, it is automatically set to `1(true)`, and when the value is restored to the original value, the property is automatically removed.

> Unless the [NoColor](./no-color) property is separately set, the cell background color will change to the color set as .IBColorChangedCell in the css/default(theme)/main.css file (default: #EEE light gray) when modified.

> It is recommended to use this property for checking modification status rather than directly changing its value.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`1(true)`|Modified|


### Example
```javascript
// Check whether the cell value has been modified. (assuming column name is CLS)
var row = sheet.getRowById("AR10");
if (row["CLSChanged"]) {
    // The cell value has been modified...
}
```

### Read More
- [Changed row](/docs/props/row/changed)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
