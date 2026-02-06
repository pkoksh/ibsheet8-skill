---
KEY: onSuggest
KIND: event
PATH: events/on-suggest
ALIAS_EN: event, called, cell, editing, you, check, value, suggest
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-suggest
---
# onSuggest ***(event)***
> Event called during cell editing, where you can check the value of [Suggest](/docs/props/col/suggest), a feature that suggests cell values to the user.

> You can return a new value in the Suggest format to suggest different values to the user instead of the ones set in Suggest every time the cell value changes.

> Called every time the cell value changes during editing.

### Syntax

```
    onSuggest : function(paramObject) {

    }
or
    sheet.bind("onSuggest" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell|
|col|`string`|Column name of the cell|
|val|`string`|Data value of the cell|
|suggest|`string`|Previously configured Suggest value|

### Return
***mixed***

### Example
```javascript
// Suggest value set for the assessment column is |Dissatisfied|Average|Satisfied|Very Satisfied
options.Cols = [
    {
        Header:"Assessment",
        Name:"assessment",
        Type:"Text",
        Suggest:"|Dissatisfied|Average|Satisfied|Very Satisfied"
    } ...
]

options.Events = {
    onSuggest:function(evtParam){
        // If the value entered in the assessment column cell contains "short", the Suggest value dynamically changes to |Shortcut1|Shortcut2|Shortcut3|Shortcut4|Shortcut5. Otherwise, the existing suggest feature is applied as-is.
        if (evtParam.col == "assessment" && evtParam.val.indexOf("short") > -1 ) {
            return "|Shortcut1|Shortcut2|Shortcut3|Shortcut4|Shortcut5";
        }
        else {
            return evtParam.suggest;
        }
    }
}
```

### Read More

- [onReadSuggest event](./on-read-suggest)
- [Suggest col](/docs/props/col/suggest)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
