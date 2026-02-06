---
KEY: onReadFilteringValue
KIND: event
PATH: events/on-read-filtering-value
ALIAS_EN: event, called, cell, target, column, filtering, onreadfilteringvalue
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-read-filtering-value
---
# onReadFilteringValue ***(event)***
> Event called for each cell in the target column(s) during filtering.

> Filtering proceeds using the returned value (the actual cell value is maintained).

### Syntax

```
    onReadFilteringValue:function(paramObject) {

    }
or
    sheet.bind("onReadFilteringValue" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object where filtering is in progress|
|row|`object`|[Data row object](/docs/appx/row-object) where the filtering target cell is located|
|col|`string`|Column name where the filtering target cell is located|
|val|`boolean` \| `number` \| `string`|Cell value|

### Return
***mixed( `boolean` \| `number` \| `string` )***

### Example
```javascript
options.Events = {
    onReadFilteringValue:function(evtParam){
        // When the cell value is empty or "Undecided", filtering proceeds with the word "Not Entered" instead (compares the value in the filter row with "Not Entered"). This does not affect the actual cell value.
        if (evtParam.val == "" || evtParam.val == "Undecided") return "Not Entered";
    }
}
```

### Read More

- [onBeforeFilter event](./on-before-filter)
- [onAfterFilter event](./on-after-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
