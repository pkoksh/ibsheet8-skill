---
KEY: onShowEditEnum
KIND: event
PATH: events/on-show-edit-enum
ALIAS_EN: event, called, list, opens, editenum, docs, props, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-show-edit-enum
---
# onShowEditEnum ***(event)***
> Event called just before the list opens in an [EditEnum](/docs/props/col/edit-enum) type column.

> You can create and return a new [EditEnum](/docs/props/col/edit-enum) list to use instead of [EditEnum](/docs/props/col/edit-enum) (can be used even if [EditEnum](/docs/props/col/edit-enum) is not previously configured).

> When returning a new [EditEnum](/docs/props/col/edit-enum) list, you must configure and return the **same number of items** as the list set in the [Enum](/docs/props/col/enum) attribute.

### Syntax

```
    onShowEditEnum : function(paramObject) {

    }
or
    sheet.bind("onShowEditEnum" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) where the `Enum` list opens|
|col|`string`|Column name where the `Enum` list opens|
|editenum|`string`|Value set in `EditEnum`|

### Return
***string***

### Example
```javascript
options.Events = {
    onShowEditEnum:function(evtParam){
        // If the EditEnum contains a "forbidden word", replace it with "good word" and display it on screen.
        if (evtParam.editenum.indexOf("forbidden word")) {
            return evtParam.editenum.replace("forbidden word", "good word");
        }
    }
}
```

### Read More

- [Enum col](/docs/props/col/enum)
- [EditEnum col](/docs/props/col/edit-enum)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
