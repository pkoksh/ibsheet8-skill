---
KEY: noUpload
KIND: column-property
PATH: props/col/no-upload
ALIAS_EN: whether, save, specified, column, noupload, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/no-upload
---
# NoUpload ***(col))***

> Sets whether to save the specified column.

> When set to `1(true)`, the column will not be sent to the server regardless of its status when save functions (`doSave, getSaveString, etc.`) are called.
### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Send to server (`default`)|
|`1(true)`|Exclude from server transmission (the specified column will not be sent to the server)|

### Example
```javascript
// Exclude a specific column from being sent to the server when saving
sheetOption.Cols = [
    ...
    {Header: "Detail Content", Type: "Text", Name: "Description", Width: 200, NoUpload: 1},
    ...
];
```
### Read More
- [doSave method](/docs/funcs/core/do-save)
- [getSaveString method](/docs/funcs/core/get-save-string)
- [getSaveJson method](/docs/funcs/core/get-save-json)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
