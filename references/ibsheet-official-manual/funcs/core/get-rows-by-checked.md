---
KEY: getRowsByChecked
KIND: method
PATH: funcs/core/get-rows-by-checked
ALIAS: sheet.getRowsByChecked, getRowsByChecked()
ALIAS_EN: argument, column, type, docs, appx, bool, returns, checked
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-rows-by-checked
---
# getRowsByChecked ***(method)***
> When the argument column's [Type](/docs/appx/type) is Bool, returns all checked [data row object](/docs/appx/row-object)s in that column as an array.

### Syntax
```javascript
object getRowsByChecked( col );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|col|`string`|Required|column name|



### Return Value
***mixed ( `array` \| `boolean` )*** : Returns false if the column is not Bool type, otherwise returns an array of [data row object](/docs/appx/row-object)s.

### Example
```javascript
// Retrieve data row objects checked in the sCheck column.
var rows = sheet.getRowsByChecked( "sCheck" );
if (rows && rows.length == 0) {
    ...
} else {
    ...
}
```

### Read More
- [setCheck method](./set-check)
- [setAllCheck method](./set-all-check)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.3|name argument name changed -> col, unified with other APIs|
