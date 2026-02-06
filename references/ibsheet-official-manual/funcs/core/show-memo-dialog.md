---
KEY: showMemoDialog
KIND: method
PATH: funcs/core/show-memo-dialog
ALIAS: sheet.showMemoDialog, showMemoDialog()
ALIAS_EN: opens, dialog, entering, memo, specific, header, cell, showmemodialog
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-memo-dialog
---
# showMemoDialog ***(method)***

> Opens a dialog for entering a memo on a specific header cell.

> The memo feature can only be set on the sheet's header cells.

> [MemoId cfg](/docs/props/cfg/memo-id) must be configured for memo values to be saved.

> Only one memo value can be set per header cell.

> Memo data is managed in the browser's localStorage.

![MemoId](/assets/imgs/showMemoDialog.png)
<!-- IMAGE: Screenshot/Example Image - MemoId -->

### Syntax
```javascript
boolean showMemoDialog( row , col );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|
|col|`string`|Required|column name


### Return Value
***boolean*** : Whether the dialog was opened successfully (returns true if the memo input dialog was properly opened, returns false if it failed)

### Example
```javascript
// Open a dialog for entering a memo on a specific header cell.
sheet.showMemoDialog(sheet.getHeaderRows()[0], "sCorp");
```

### Read More
- [MemoId cfg](/docs/props/cfg/memo-id)
- [removeMemo method](./remove-memo)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|Feature added|
