---
KEY: setColWidth
KIND: method
PATH: funcs/core/set-col-width
ALIAS: sheet.setColWidth, setColWidth()
ALIAS_EN: increases, decreases, column, width, setcolwidth, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-col-width
---
# setColWidth ***(method)***
> Increases or decreases the column's width.

> The column's width is increased or decreased according to the `dx` argument value. 

> To change the column's width to a specific size, modify [(col)Width](/docs/props/col/width) using setAttribute.

> `setColWidth` does not work for dummy columns in MultiRecord ([MultiRecord](/docs/props/cfg/multi-record)) sheets.

### Syntax
```javascript
void setColWidth( col, dx );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|col |`string`|Required|column name|
|dx |`number`|Optional|Amount to increase or decrease column width (positive value increases, negative value decreases by the set amount)
If not set, the column is removed or hidden (`Visible:0`)|


### Return Value
***none***

### Example
```javascript
//Decrease the cardNumber column's width by 100 pixels.
sheet.setColWidth("cardNumber", -100);
```

### Read More
- [getAttribute method](./get-attribute)
- [setAttribute method](./set-attribute)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
