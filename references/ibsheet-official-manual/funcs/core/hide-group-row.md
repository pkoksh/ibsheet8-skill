---
KEY: hideGroupRow
KIND: method
PATH: funcs/core/hide-group-row
ALIAS: sheet.hideGroupRow, hideGroupRow()
ALIAS_EN: removes, hides, group, rows, hidegrouprow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/hide-group-row
---
# hideGroupRow ***(method)***
> Removes or hides group rows.

### Syntax
```javascript
void hideGroupRow( del );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|del |`string or object`|Optional|grouprow Delete. (`default: 1`)|

### Return Value
***boolean*** : setting complete whether

### Example
```javascript
// grouprow remove.
sheet.hideGroupRow(); 

// grouprow hides.
sheet.hideGroupRow(0); 
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.9|Feature added|
