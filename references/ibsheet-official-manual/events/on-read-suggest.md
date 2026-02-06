---
KEY: onReadSuggest
KIND: event
PATH: events/on-read-suggest
ALIAS_EN: event, called, cell, enters, edit, mode, you, check
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-read-suggest
---
# onReadSuggest ***(event)***
> Event called when a cell enters edit mode, where you can check the value of [Suggest](/docs/props/col/suggest), a feature that suggests cell values to the user during editing.

> You can return a new value in the [Suggest](/docs/props/col/suggest) format to suggest different values to the user instead of the ones set in [Suggest](/docs/props/col/suggest).

> Called only once when entering edit mode.

### Syntax

```
    onReadSuggest : function(paramObject) {

    }
or
    sheet.bind("onReadSuggest" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell|
|col|`string`|Column name of the cell|
|suggest|`string`|Previously configured `Suggest` value|

### Return
***mixed***

### Example
```javascript
options.Events = {
    onReadSuggest:function(evtParam){
        // Apply different Suggest values depending on whether the sRating column cell value in the row is 50 or above
        if (evtParam.row["sRating"] >= 50) {
            return "|Average|Satisfied|Very Satisfied";
        } else {
            return "|Very Dissatisfied|Dissatisfied|Average";
        }
    }
}
```

### Read More

- [onSuggest event](./on-suggest)
- [Suggest col](/docs/props/col/suggest)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
