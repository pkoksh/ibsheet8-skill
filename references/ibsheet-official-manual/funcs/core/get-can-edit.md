---
KEY: getCanEdit
KIND: method
PATH: funcs/core/get-can-edit
ALIAS: sheet.getCanEdit, getCanEdit()
ALIAS_EN: checks, whether, specific, cell, editable, getcanedit, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-can-edit
---
# getCanEdit ***(method)***

> Checks whether a specific cell is editable.


### Syntax
```javascript
number getCanEdit( row, col );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col|`string`|Required|column name|

### Return Value
***number***

|value|Description|
|-----|-----|
|`0`|Not editable (read-only)
![CanEdit](/assets/imgs/canEdit0.png "CanEdit")
<!-- IMAGE: Screenshot/Example Image - CanEdit -->|
|`1`|Editable
![CanEdit](/assets/imgs/canEdit1.png "CanEdit")
<!-- IMAGE: Screenshot/Example Image - CanEdit -->|
|`2`|Row content is not editable, but provides edit preview
![CanEdit](/assets/imgs/canEdit2.png "CanEdit")
<!-- IMAGE: Screenshot/Example Image - CanEdit -->|

### Example
```javascript
// Check whether a specific cell is editable.
var edit = sheet.getCanEdit(sheet.getFocusedRow(), "RES_ENDDATE");
if (!edit) {
    alert("Editing is closed");
}
```

### Read More
- [CanEdit row](/docs/props/row/can-edit)
- [CanEdit col](/docs/props/col/can-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
