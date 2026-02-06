---
KEY: noChanged
KIND: cell-property
PATH: props/cell/no-changed
ALIAS_EN: whether, prevent, modification, status, changing, cell, value, changed
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/no-changed
---
# NoChanged ***(cell)***

> Sets whether to prevent the modification status from changing when the cell's value is changed.

> If the value is set to `1(true)`, the modification status will not change even if the cell's value is changed.

> The modification status (`Changed`) is not changed, but modification-related events are still triggered.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|When the cell value is modified, the modification status is changed (`default`)|
|`1(true)`|Even when the cell value is modified, the modification status is not changed|

### Example
```javascript
// Set a specific cell to not change the modification status even when the value is changed
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "NoChanged", true);
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
