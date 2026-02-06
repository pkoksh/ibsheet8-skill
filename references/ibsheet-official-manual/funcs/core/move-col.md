---
KEY: moveCol
KIND: method
PATH: funcs/core/move-col
ALIAS: sheet.moveCol, moveCol()
ALIAS_EN: moves, specified, column, position, movecol, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/move-col
---
# moveCol ***(method)***
> Moves the specified column's position.

> When `tocol` is set to an empty string (""), the column is moved to the very first or very last position of the section depending on the `right` argument.

### Syntax
```javascript
boolean moveCol( col, tocol, right, norender );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|col|`string`|Required|Column name to move|
|tocol|`string`|Required|Target column name to move to|
|right|`boolean`|Optional|Whether to move to the right of the column specified by `toCol`
`0(false)`:Move to the left of the column specified by `toCol` (`default`)
`1(true)`:Move to the right of the column specified by `toCol`|
|norender|`boolean`|Optional<mark>(Usage Note)</mark>|Whether to immediately reflect on screen
After using this feature, when executing extra operations, `rerender()` must be executed first.
`0(false)`:Immediately reflected (`default`)
`1(true)`:Not reflected
|


### Return Value
***boolean*** : Whether the column was properly moved (returns `undefined` if the move failed due to incorrect arguments)

### Example
```javascript
//Move the CUSTOMER_NAME column to the right of the AMOUNT12 column.
sheet.moveCol("CUSTOMER_NAME", "AMOUNT12", 1, 0);
```

### Read More
- [addCol method](./add-col)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
