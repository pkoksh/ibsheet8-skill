---
KEY: showRow
KIND: method
PATH: funcs/core/show-row
ALIAS: sheet.showRow, showRow()
ALIAS_EN: shows, hidden, row, showrow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-row
---
# showRow ***(method)***
> Shows a hidden row.

> When hiding or showing a large number of rows, it is recommended to set `norender` to `1` to perform operations without rendering, and then call [renderBody()](./renderBody) or [rerender()](./rerender) to reflect all changes to the screen at once.


### Syntax
```javascript
void showRow( row, norender );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|hidden [data row object](/docs/appx/row-object)|
|norender|`boolean`|Optional<mark>(Usage Note)</mark>|Whether to immediately reflect on screen
After using this feature, when executing extra operations, `renderBody()` must be executed first.
`0(false)`:Immediately reflected (`default`)
`1(true)`:Not reflected
|


### Return Value
***none***

### Example
```javascript
// Show the 35th row.
sheet.showRow( sheet.getRowByIndex(35) );


// Show specific rows.
var rows = sheet.getDataRows();
for(var i=0; i<rows.length; i++){
    if(rows[i]["deptNm"] != "supportdepartment"){
    // Suppress rendering while processing each row
        sheet.showRow( {'row':rows[i],'norender':1});
    }
}
// Render all changed content in the data area at once.
sheet.renderBody();
```

### Read More

- [hideRow method](./hide-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
