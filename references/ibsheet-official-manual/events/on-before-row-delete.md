---
KEY: onBeforeRowDelete
KIND: event
PATH: events/on-before-row-delete
ALIAS_EN: event, called, row, status, deleted, onbeforerowdelete
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-before-row-delete
---
# onBeforeRowDelete ***(event)***
> Event called before a row's status is set to deleted.

> You can determine whether to cancel or proceed with the deletion through the return value (behavior differs based on the type parameter).

> When type parameter is `0`, returning `1(true)` processes the deletion, and returning `0(false)` cancels the deletion.

> When type parameter is `1`, returning `1(true)` cancels the deletion, and returning `0(false)` proceeds with the deletion.


### Syntax

```
    onBeforeRowDelete : function(paramObject) {

    }
or
    sheet.bind("onBeforeRowDelete" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) of the row to be deleted/cancelled|
|type|`number`|Deletion status
`0`:Delete processing
`1`:Delete cancellation|
|rows|`array[object]`|Array of [data row objects](/docs/appx/row-object) when deleting/cancelling multiple selected rows|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeRowDelete:function(evtParam){
        // If the cell value in the sProgress column of the row to be deleted is 80 or more, do not delete.
        if (evtParam.row["sProgress"] >= 80) {
            return false;
        } else {
            return true;
        }
    }
}
```

### Read More

- [onAfterRowDelete event](./on-after-row-delete)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
