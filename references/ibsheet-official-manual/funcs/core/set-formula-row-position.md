---
KEY: setFormulaRowPosition
KIND: method
PATH: funcs/core/set-formula-row-position
ALIAS: sheet.setFormulaRowPosition, setFormulaRowPosition()
ALIAS_EN: changes, position, formularow, summary, row, bottom, default, top
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-formula-row-position
---
# setFormulaRowPosition ***(method)***
> Changes the position of the `FormulaRow` (summary row) (bottom (default), top).

### Syntax
```javascript
void setFormulaRowPosition( pos, norender );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|pos |`number`|Required|`0`: Move to top 
 `1`: Move to bottom (`default: 1`)|
|norender |`boolean`|Optional<mark>(Usage Note)</mark>|Whether to immediately reflect on screen
After using this feature, when executing extra operations, `renderBody()` must be executed first.
`0(false)`: Immediately reflected (`default`)
`1(true)`: Not reflected
|

### Return Value
***boolean*** : Whether setting is complete

### Example
```javascript
// Move the summary row to the top
sheet.setFormulaRowPosition( 0 );

// Move the summary row to the bottom
sheet.setFormulaRowPosition({pos:1});
```

### Read More
- [setFormulaRow method](./set-formula-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
