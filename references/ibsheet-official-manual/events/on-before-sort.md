---
KEY: onBeforeSort
KIND: event
PATH: events/on-before-sort
ALIAS_EN: event, called, sorting, performed, user, clicks, header, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-sort
---
# onBeforeSort ***(event)***
> Event called before sorting is performed when the user clicks a header cell.

> Not called for sorting through the [doSort](/docs/funcs/core/do-sort) method.

> Returning `-1` in the event cancels the sorting operation. (The sorting icon is also not displayed)

> Returning `1` in the event only changes the sorting icon without performing actual sorting.

> **This feature does not fire when sorting through the [doSort](/docs/funcs/core/do-sort) function.**

### Syntax

```
    onBeforeSort:function(paramObject) {

    }
or
    sheet.bind("onBeforeSort" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|Sheet object where the value change will occur|
|col |`string`|Column name where sorting will occur|
|sort|`string`|Sorting history for multiple columns (e.g.: "colName4, -colName2, colName6")
(String with column names separated by `","`, with `"-"` prefixed to the column name for descending sort)|

### Return
***number***

### Example
```javascript
options.Events = {
    onBeforeSort:function(evtParam){
        // Cancel when trying to sort a specific column with other columns.
        // The sort argument receives a string like this: e.g.) "colName4,colName2,-colName5"
        if(evtParam.col == "quarter" && evtParam.sort.split(",").length > 2){
            alert("The quarter column does not allow 'multi-column sorting'.\n Please cancel the sorting of other columns.");
            return -1; //Cancel the sorting operation.
        }
    }
}
```

### Read More
- [doSort method](/docs/funcs/core/do-sort)
- [onAfterSort event](./on-after-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
