---
KEY: onEndEdit
KIND: event
PATH: events/on-end-edit
ALIAS_EN: event, called, cell, editing, completed, onendedit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-end-edit
---
# onEndEdit ***(event)***
> Event called before cell editing is completed.

> Also called for [Type](/docs/props/col/type) `Enum`, but not called for `Radio, Bool` types.


**How to use return based on the save argument value**

- The `save` argument is for confirmation purposes, not for changing values. Editing ended by the user has `save` as `1(true)`, and editing ended by [endEdit method](/docs/funcs/core/end-edit) has `save` as `0(false)`.
- When `save` is `1(true)`, the content can be reflected based on the `return` value. (Returning `true` keeps the editing mode, and returning other values (`string, number`) applies that value.)
- When `save` is `0(false)`, editing ends regardless of the return value, and the return value is not applied.

### Syntax

```
    onEndEdit : function(paramObject) {

    }
or
    sheet.bind("onEndEdit" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where edit mode will end|
|row|`object`|[Data row object](/docs/appx/row-object) where the cell with ending edit mode is located|
|col|`string`|Column name of the cell where edit mode will end|
|save|`boolean`|Whether the edit will be applied|
|val|`number` \| `string` \| `object`|Edited value|
|raw|`string`|Value entered in the cell|


### Return
***mixed***( `boolean` \| `number` \| `string` \| `object` )

### Example
```javascript
options.Events = {
    onEndEdit:function(evtParam){
        // If the edited value is included in the forbidden word list, show that the entered value is a forbidden word and keep the existing cell value.
        var banArray = ["forbidden1", "forbidden2"];
        if (banArray.indexOf(evtParam.val) > -1) {
            alert("This is a forbidden word.");
            return evtParam.row[evtParam.col];
        }
    }
}
```

### Read More
- [onStartEdit event](/docs/events/on-start-edit)
- [onShowEdit event](/docs/events/on-show-edit)
- [onAfterEdit event](/docs/events/on-after-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
