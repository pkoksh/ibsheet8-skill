---
KEY: setExpandRow
KIND: method
PATH: funcs/core/set-expand-row
ALIAS: sheet.setExpandRow, setExpandRow()
ALIAS_EN: collapses, expands, specific, row, tree, group, setexpandrow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-expand-row
---
# setExpandRow ***(method)***
> Collapses or expands a specific row when using tree or group.

### Syntax
```javascript
boolean setExpandRow(row, col, expand);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|
|col|`string`|Optional|column name (`default: null`)|
|expand|`boolean`|Optional|Whether to expand
`0(false)`:Collapse
`1(true)`:Expand
`null`:Toggle (`default`)|

### Return Value
***boolean*** : Whether collapsed/expanded state changed

### Example
```javascript
// Toggle collapse/expand for a specific row
sheet.setExpandRow( sheet.getFocusedRow(), "GROUPNM" );
```

### Read More
- [showTreeLevel method](./show-tree-level)
- [Expanded row](/docs/props/row/expanded)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.5|expand argument added and col argument Requiredin Optionalas Changed|
