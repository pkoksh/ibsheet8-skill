---
KEY: acceptChangedData
KIND: method
PATH: funcs/core/accept-changed-data
ALIAS: sheet.acceptChangedData, acceptChangedData()
ALIAS_EN: applies, changes, added, modified, deleted, within, sheet, acceptchangeddata
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/accept-changed-data
---
# acceptChangedData ***(method)***

> Applies changes (added, modified, deleted) within the sheet.

> Rows with status `Added` or `Changed` will only have their status cleared, while rows with status `Deleted` will be removed.

> Typically used to reset the sheet state after server save processing, when `IO.Result` is successful (0).

> If a [data row object](/docs/appx/row-object) is specified as an argument, it applies only to that row.


> **<mark>Note</mark>** : `acceptChangedData` does not trigger the post-save event ([onAfterSave](/docs/events/on-after-save)), it simply resets the sheet state. 



### Syntax
```javascript
void acceptChangedData( row );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|Optional|[Data row object](/docs/appx/row-object)|


### Return Value
***none***


### Example
```javascript
//Save operation completion callback function
function SaveSuccessCallBack(data){
    //Apply all modified content.
    sheet.acceptChangedData();
}
```

### Read More
- [dataStructure](/docs/dataStructure/saving-structure)
- [applySaveResult method](./apply-save-result)
- [doSave method](./do-save)
- [getSaveJson method](./get-save-json)
- [getSaveString method](./get-save-string)
- [hasChangedData method](./has-changed-data)
- [getChangedData method](./get-changed-data)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
