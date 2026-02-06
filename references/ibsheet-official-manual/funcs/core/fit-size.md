---
KEY: fitSize
KIND: method
PATH: funcs/core/fit-size
ALIAS: sheet.fitSize, fitSize()
ALIAS_EN: adjusts, specific, column, width, fit, longest, character, string
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/fit-size
---
# fitSize ***(method)***

> Adjusts a specific column's width to fit the longest character string present in that column.
(Excel autofit)
> The width is adjusted based on character strings in rows 1~100, not all data.

> This feature may be difficult to use when using server paging search.

> You can specify the data rows to inspect when adjusting width using the `rows` argument.

> However, the more `rows` data rows there are, the more performance issues may occur.

### Syntax
```javascript
void fitSize(col, norender, rows);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|col |`string`|Required|column name|
|norender|`boolean`|Optional<mark>(Usage Note)</mark>|Whether to immediately reflect on screen
After using this feature, when executing extra operations, `renderBody()` must be executed first.
`0(false)`:Immediately reflected (`default`)
`1(true)`:Not reflected
|
|rows|`array`|Optional|Rows to inspect when adjusting a specific column's width|

### Return Value
***none***

### Example
```javascript
// Adjust the DESC column's width to fit the longest character string in the column.
sheet.fitSize("DESC");
// Inspect all data as rows. Performance issues may occur when inspecting all data.
var totalRows = sheet.getDataRows();
sheet.fitSize("DESC", 0, totalRows);
```

### Read More
- [setColWidth method](./set-col-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
