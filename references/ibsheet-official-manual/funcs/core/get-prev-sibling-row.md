---
KEY: getPrevSiblingRow
KIND: method
PATH: funcs/core/get-prev-sibling-row
ALIAS: sheet.getPrevSiblingRow, getPrevSiblingRow()
ALIAS_EN: tree, group, returns, row, positioned, level, parent, getprevsiblingrow
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-prev-sibling-row
---
# getPrevSiblingRow ***(method)***
> When using tree or group, returns the row positioned above at the same level with the same parent.

> Returns `null` if there is no row at the same level within the same parent.


### Syntax
```javascript
object getPrevSiblingRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|


### Return Value
***row object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
// Find child nodes of the currently selected row where the chk column value is 1 and change their background color.
function work(){
	var row = sheet.getFocusedRow(); // Currently selected row
	var crow = sheet.getLastRow(row); // Get the last child
	if(crow){
	    var chkRows = [];
	    do{
	        if(crow["chk"] == 1){
        // Change background color to gray
	            sheet.setAttribute( {row:crow , attribute:"Color" , val:"#AAAAAA",render:0} );
	        }
	        crow = sheet.getPrevSiblingRow(crow);
	    }while(crow);
    // Render all at once after modifications
        sheet.renderBody();
	}
}
```

### Read More
- [getNextSiblingRow method](./get-next-sibling-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
