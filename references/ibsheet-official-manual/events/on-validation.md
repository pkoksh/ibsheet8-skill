---
KEY: onValidation
KIND: event
PATH: events/on-validation
ALIAS_EN: event, fires, cell, save, api, calls, dosave, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-validation
---
# onValidation ***(event)***
> Event that fires cell by cell during save API calls such as [doSave](/docs/funcs/core/do-save), [getSaveJson](/docs/funcs/core/get-save-json), [getSaveString](/docs/funcs/core/get-save-string), allowing users to perform validation checks on the values to be saved. 

> Basic checks for required fields and full input verification are handled internally by the sheet before saving, but various validation checks based on business logic can be handled in this event. 

> If the validation criteria are not met, return true to stop the save process. 


### Syntax

```
    onValidation : function(evtParam) {

    }
or
    sheet.bind("onValidation " , function(evtParam) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where validation is currently in progress|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell currently being validated|
|col|`string`|Column name of the cell currently being validated|

### Return
***boolean***


### Example
```javascript
options.Events = {
    onValidation: function (evtParam) {
      if (evtParam.col != "TextData") return;
      var prevCol = evtParam.sheet.getPrevCol(evtParam.col);

      // If the value of the column before TextData column is greater than 100, display a message and stop saving.
      if (evtParam.sheet.getValue(evtParam.row, prevCol) >= 100) {
        var index = evtParam.sheet.getRowIndex(evtParam.row);

        evtParam.sheet.showMessageTime({
          message: "Row " + index + " Integer(Int) column cell value is greater than 100.",
          time: 10000,
          buttons: ["OK", "Cancel"],
        })

        return true;
      }
    },
}
```

### Read More
- [doSave method](/docs/funcs/core/do-save)
- [getSaveJson method](/docs/funcs/core/get-save-json)
- [getSaveString method](/docs/funcs/core/get-save-string)
### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.19|Feature added|
