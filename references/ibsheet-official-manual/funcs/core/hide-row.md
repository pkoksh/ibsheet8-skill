---
KEY: hideRow
KIND: method
PATH: funcs/core/hide-row
ALIAS: sheet.hideRow, hideRow()
ALIAS_EN: hides, specified, row, hiderow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/hide-row
---
# hideRow ***(method)***
> Hides the specified row.

> When the second `del` argument value is set to `1(true)`, the actual DOM is deleted and the row is hidden. (Used when [SearchMode](/docs/props/cfg/search-mode) : 2 is set)

> When hiding or showing a large number of rows, it is recommended to set the `norender` value to `1`, perform all operations, and then call `render()` to reflect everything on screen at once.


### Syntax
```javascript
void hideRow( row, del, norender, nomerge );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[Data row object](/docs/appx/row-object) to hide|
|del |`boolean`|Optional<mark>(Usage Note)</mark>|Whether to delete the DOM 
This feature is **not recommended**.
`0(false)`:Do not delete DOM (`default`)
`1(true)`:Delete DOM|
|norender|`boolean`|Optional<mark>(Usage Note)</mark>|Whether to immediately reflect on screen
After using this feature, when executing extra operations, `renderBody()` must be executed first.
`0(false)`: Immediately reflected (`default`)
`1(true)`: Not reflected

|nomerge|`boolean`|Optional|When [DataMerge cfg](/docs/props/cfg/data-merge) value is not `0`, whether to immediately recalculate merge
`0(false)`:Recalculate merge after row deletion (`default`)
`1(true)`:Do not recalculate merge after row deletion|


### Return Value
***none***

### Example
```javascript
//Hide the 44th row.
sheet.hideRow( sheet.getRowByIndex(44) );


//Hide specific rows.
var rows = sheet.getDataRows();
for(var i=0; i<rows.length; i++){
    if(rows[i]["deptNm"] != "Support Department"){
    // Prevent rendering when hiding rows
        sheet.hideRow( {'row':rows[i],'norender':1});
    }
}
//Render all changes in the data area at once.
sheet.renderBody();
```

### Read More
- [showRow method](./show-row)
- [SearchMode cfg](/docs/props/cfg/search-mode)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
