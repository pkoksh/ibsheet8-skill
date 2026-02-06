---
KEY: endEdit
KIND: method
PATH: funcs/core/end-edit
ALIAS: sheet.endEdit, endEdit()
ALIAS_EN: ends, cell, editing, endedit, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/end-edit
---
# endEdit ***(method)***

> Ends cell editing.

> The content being edited is saved to memory and the editing state is terminated.
> When called, [onEndEdit](/docs/events/on-end-edit)event is triggered.

### Syntax
```javascript
mixed endEdit(save);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|save|`boolean`|Optional|Sets whether to apply the current value when ending editing.
`0(false)`:Terminates editing state without applying the data being modified (`default`)
`1(true)`:Terminates editing state and applies the data being modified|

### Return Value
***mixed***

|returnValue|Description|
|---|---|
|`null`|When not in edit mode|
|`0(false)`|When the value is the same as before and no content was changed|
|`1(true)`|The value being edited was successfully applied|
|`-1`|When editing could not be terminated due to an issue with the modified value (invalid date input, etc.)|


### Example
```javascript
//End editing
sheet.endEdit(1);
```

### Read More

- [onEndEdit event](/docs/events/on-end-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
