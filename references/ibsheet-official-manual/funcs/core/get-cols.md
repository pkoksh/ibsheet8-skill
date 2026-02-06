---
KEY: getCols
KIND: method
PATH: funcs/core/get-cols
ALIAS: sheet.getCols, getCols()
ALIAS_EN: extracts, column, names, array, form, like, colname, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-cols
---
# getCols ***(method)***
> Extracts column names in array form like ['colName1','colName2'] from the sheet. 

> Through the two arguments, it is also possible to find columns that have specific properties.

> This function can also be used when you want to know the total number of columns.


> **<mark>Note</mark> : Properties that can be found through getCols() can only find values that were assigned through Cols when creating the sheet.**

> For example, even if the default value for a column's editability is `1(true)`, if `CanEdit:1` was not explicitly assigned when creating the column through Cols, it cannot be found.


> **The `SEQ` column is included in the return even if it was not explicitly set.**


### Syntax
```javascript
array getCols( attr1, attr2, seq );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|attr1|`string`|Optional|Property name to search for (if `attr1` property is not declared, all columns are extracted)|
|attr2|`string`|Optional|Property name to search for (returns columns that have both `attr1` and `attr2`)|
|seq|`boolean`|Optional|Whether to exclude the implicitly set SEQ column
`0(false)`:Include the implicitly set SEQ column (`default`)
`1(true)`:Exclude the implicitly set SEQ column|


### Return Value
***array[string]*** : Array of column names

### Example
```javascript
//Find all currently visible columns.
var vCol = sheet.getCols("Visible");

//Find columns that are currently visible and also editable.
var veCol = sheet.getCols("Visible","CanEdit");
//return
//["ColName1","ColName3" ... ]

//Extract columns excluding the implicitly set SEQ, feature added before version 8.1.0.38
var veCol = sheet.getCols("","",1);
var veCol = sheet.getCols({seq:1});
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.38|`seq` added|
