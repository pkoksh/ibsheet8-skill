---
KEY: getRowsByDup
KIND: method
PATH: funcs/core/get-rows-by-dup
ALIAS: sheet.getRowsByDup, getRowsByDup()
ALIAS_EN: returns, data, row, object, docs, appx, duplicate, within
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-rows-by-dup
---
# getRowsByDup ***(method)***

> Returns [data row object](/docs/appx/row-object)s that have duplicate data within a column.

> When multiple column names are set, [data row object](/docs/appx/row-object)s are returned only when the cell values of all corresponding columns are the same.


### Syntax
```javascript
object getRowsByDup( cols, firstOnly, emptyVal, subsum, exceptStatus );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|cols|`string`|Required|Column names to be compared as targets
 Multiple column names can be specified using "," as delimiter|
|firstOnly|`boolean`|Optional|Whether to return only the first duplicated row
 When set, returns the first duplicated row (an array consisting of the original value [data row object](/docs/appx/row-object) and the duplicated [data row object](/docs/appx/row-object)).
`0(false)`:Do not return only the first duplicated row (`default`)
`1(true)`:Return only the first duplicated row|
|emptyVal|`boolean`|Optional|Whether to include rows with "", undefined, null values in the comparison target
`0(false)`:Do not include rows with "", undefined, null values in duplicate value comparison target (`default`)
`1(true)`:Include rows with "", undefined, null values in duplicate value comparison target|
|subsum|`boolean`|Optional|Whether to include subtotal rows when comparing duplicate values
`0(false)`:Do not include subtotal rows in duplicate value comparison target (`default`)
`1(true)`:Include subtotal rows in duplicate value comparison target|
|exceptStatus|`string`|Optional|Row status to exclude from comparison target
 Multiple status values can be specified using "," as delimiter|


### Return Value
***array[row object]*** : An array of arrays of [data row object](/docs/appx/row-object)s with duplicate values (a separate array of [data row object](/docs/appx/row-object)s is created for each different duplicate value)

### Example
```javascript
// Returns an array of arrays of data row objects with the same values in sName, sSalary columns.
// ex) [ [r1, r2...] [r5, r9...] ]
// r1 and r2 have the same sName, sSalary values. r5 and r9.. have the same sName, sSalary values.
// Return excluding row objects with Added, Deleted status.
sheet.getRowsByDup( "sName,sSalary" , false, false, false, "Added,Deleted" );
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.8|exceptStatus Feature added|
