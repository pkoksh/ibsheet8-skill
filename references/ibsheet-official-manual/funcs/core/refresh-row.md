---
KEY: refreshRow
KIND: method
PATH: funcs/core/refresh-row
ALIAS: sheet.refreshRow, refreshRow()
ALIAS_EN: specific, rowof, changedapplied, content, screen, reflect, refreshrow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/refresh-row
---
# refreshRow ***(method)***
> specific rowof Changedapplied content screen reflect.

> Does not cause screen flickering when reflecting changes.

### Syntax
```javascript
void refreshRow( row );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|

### Return Value
***none***

### Example
```javascript
//specific row Changedapplied content(value,property) screen reflect.
sheet.refreshRow( row );
```

### Read More

- [refreshCell method](./refresh-cell)
- [rerender method](./rerender)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
