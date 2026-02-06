---
KEY: noChanged
KIND: column-property
PATH: props/col/no-changed
ALIAS_EN: whether, change, modified, status, column, value, changed, nochanged
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/no-changed
---
# NoChanged ***(col)***

> Sets whether to not change the modified status when the column value is changed.

> If the value is set to `1(true)`, the modified status will not change even when the column value is modified.

> The modified status (`Changed`) is not changed, but modification-related events are still triggered.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Changes the modified status when the column value is edited (`default`)|
|`1(true)`|Does not change the modified status even when the column value is edited|

### Example
```javascript
// Set a specific column so that the modified status does not change when its value is edited
options.Cols = [
    {Type: "Int", Name: "sNumber", NoChanged: true, Width: 70 ...},
    ...
];
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
