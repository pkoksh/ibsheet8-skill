---
KEY: onResultMask
KIND: event
PATH: events/on-result-mask
ALIAS_EN: event, fires, data, entered, cell, fails, validation, check
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-result-mask
---
# onResultMask ***(event)***
> Event that fires when data entered in a cell fails the validation check set in [ResultMask](/docs/props/col/result-mask).

> The behavior within the sheet changes depending on the return result. If no value is returned, the default is `0`.

>
> Returning `0(default)` displays the value set in [ResultText](/docs/props/col/result-text) as an alert warning message and continues editing.

> Returning `1` continues editing without displaying a warning message.

> Returning `2` ends editing without saving the value to the cell.

> Returning `3` saves the value to the cell and ends editing.

> Returning `4` saves the value to the cell, ends editing, and changes the background color to red. (The difference between 3 and 4 is the background color.)
>
> When validation fails, the [ResultMask](/docs/props/col/result-mask) value is set in the [Error](/docs/props/cell/error) attribute, and the background color of the cell is set to red.

### Syntax

```
    onResultMask : function(paramObject) {

    }
or
    sheet.bind("onResultMask" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) where the cell is located|
|col|`string`|Column name of the cell|
|val|`string`|User input value that failed validation|
|error|`object`|Error object set when validation fails during multi-cell editing such as paste ([event error object](/docs/appx/event-error) reference)|

### Return
***number***

### Example
```javascript
options.Cols = [
    {
        Header : "ID",
        Name: "sId",
        Type: "Text",
        ResultMask: "^(([A-Z]|[a-z]){6,10})$",
        ResultText: "ID must be 6~10 characters of English letters"
    } ...
]

options.Events = {
    onResultMask:function(evtParam){
        if (evtParam.col == "sId") {
            // When validation set by ResultMask for the sId column fails
            // Continue editing without displaying an alert message
            return 1;
        }

    }
}
```

### Read More

- [ResultMask col](/docs/props/col/result-mask)
- [ResultText col](/docs/props/col/result-text)
- [Error cell](/docs/props/cell/error)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
