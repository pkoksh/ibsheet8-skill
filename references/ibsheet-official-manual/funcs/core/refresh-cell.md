---
KEY: refreshCell
KIND: method
PATH: funcs/core/refresh-cell
ALIAS: sheet.refreshCell, refreshCell()
ALIAS_EN: specific, cellof, changedapplied, content, screen, reflect, refreshcell, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/refresh-cell
---
# refreshCell ***(method)***
> specific cellof Changedapplied content screen reflect.

> Unlike the `render` function, does not cause screen flickering.

> When reflecting changes for an entire row, it is better to use the [refreshRow](./refresh-row) function.

### Syntax
```javascript
void refreshCell( row, col );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|

### Return Value
***none***

### Example
```javascript
//specific cell Changedapplied content(value,property) screen reflect.
sheet.refreshCell( sheet.getFirstVisibleRow(), "EMT_DESC" );
```

### Read More

- [refreshRow method](./refresh-row)
- [renderBody method](./render-body)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
