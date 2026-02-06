---
KEY: onAfterRowDelete
KIND: event
PATH: events/on-after-row-delete
ALIAS_EN: event, called, row, status, deleted, rendering, onafterrowdelete
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-row-delete
---
# onAfterRowDelete ***(event)***
> Event called after a row's status has been set to deleted (before rendering).

> If the sheet has a tree structure and both parent and child rows are being deleted, this event is called for child rows first.

### Syntax
```
    onAfterRowDelete : function(paramObject) {

    }
or
    sheet.bind("onAfterRowDelete" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) of the row to be deleted|
|type|`number`|Deletion target classification
`1`:Row-level deletion
`2`:Tree/group-level deletion|

### Return
***none***

### Example
```javascript
options.Events = {
    onAfterRowDelete:function(evtParam){
        alert("Row "+evtParam.row.id+" has been deleted.");
    }
}
```

### Read More

- [onBeforeRowDelete event](./on-before-row-delete)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
