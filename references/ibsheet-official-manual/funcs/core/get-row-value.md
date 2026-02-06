---
KEY: getRowValue
KIND: method
PATH: funcs/core/get-row-value
ALIAS: sheet.getRowValue, getRowValue()
ALIAS_EN: returns, values, corresponding, specific, data, row, object, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-row-value
---
# getRowValue ***(method)***
> Returns the values corresponding to a specific [data row object](/docs/appx/row-object) as a JSON format object.



### Syntax
```javascript
object getRowValue( row, saveExtraAttr, saveAttr );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|---|
|row|`object`|Required|[data row object](/docs/appx/row-object)|
|saveExtraAttr|`boolean`|Optional|When data not defined with (col)[Name](/docs/props/col/name) in the sheet is loaded through [doSearch](/docs/funcs/core/do-search) or [loadSearchData](/docs/funcs/core/load-search-data) function, whether to also extract that data when the function is called.
Extracted based on the keyset of the first row of loaded data.
`0(false)`:Extract only data defined with (col)[Name](/docs/props/col/name) `(default)`
`1(true)`:Also extract data not defined with (col)[Name](/docs/props/col/name)|
|saveAttr|`string`|Optional|When you want to extract cell attribute values together, configure in Name+propertyname format
When extracting multiple attributes, use "," as delimiter
ex) "sNameColor,sNoCanEdit"|


### Return Value
***JSON format object***
```json
{ "ColName1":"12345","ColName2":"ABCDE" ...}
```

### Example
```javascript
var rowValue = sheet.getRowValue(sheet.getRowById("AR5"));
```

### Read More

- [getValue method](./get-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
|core|8.1.0.32|`saveExtraAttr` argument added|
|core|8.2.0.3|`saveAttr` argument added|
