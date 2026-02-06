---
KEY: removeMemo
KIND: method
PATH: funcs/core/remove-memo
ALIAS: sheet.removeMemo, removeMemo()
ALIAS_EN: deletes, memo, applied, specific, header, cell, removememo, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/remove-memo
---
# removeMemo ***(method)***

> Deletes a memo applied to a specific header cell.

> Deletes a memo applied through the [memo feature](/docs/props/cfg/memo-id) setting.

### Syntax
```javascript
boolean removeMemo( row , col );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|---|
|row|`object`|Required|[data row object](/docs/appx/row-object)|
|col|`string`|Required|column name


### Return Value
***boolean*** : Whether the memo was successfully deleted (returns true if the memo was properly deleted, false otherwise)

### Example
```javascript
// Delete a memo applied to a specific header cell.
sheet.removeMemo(sheet.getHeaderRows()[0], "sCorp");
```

### Read More
- [MemoId cfg](/docs/props/cfg/memo-id)
- [showMemoDialog method](./show-memo-dialog)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|Feature added|
