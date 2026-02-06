---
KEY: getNextSiblingRow
KIND: method
PATH: funcs/core/get-next-sibling-row
ALIAS: sheet.getNextSiblingRow, getNextSiblingRow()
ALIAS_EN: tree, group, returns, row, level, parent, getnextsiblingrow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-next-sibling-row
---
# getNextSiblingRow ***(method)***

> When using tree or group, returns the row below at the same level with the same parent.

> Returns `null` if there is no row at the same level within the same parent.

### Syntax
```javascript
object getNextSiblingRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
// Find rows with CHK value 1 among the child rows below the AR55 row.
var row = sheet.getRowById("AR55");
var crow = sheet.getFirstRow(row); // Get the first child
if(crow){
    var chkRows = [];
    do{
        if (crow["CHK"] == 1) {
            chkRows.push(crow);
        }
        crow = sheet.getNextSiblingRow(crow);
    }while(crow);
}
```
### Read More
- [getPrevSiblingRow method](./get-prev-sibling-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
