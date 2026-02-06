---
KEY: getType
KIND: method
PATH: funcs/core/get-type
ALIAS: sheet.getType, getType()
ALIAS_EN: returns, type, specific, cell, gettype, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-type
---
# getType ***(method)***
> Returns the Type of a specific cell.

### Syntax
```javascript
string getType( row, col );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|

### Return Value

***string*** : cell type (Text, Int, Float, Date, etc.)

### Example
```javascript
function cellClick(evt){
    if( evt.Col == "EntDate" && sheet.getType( evt.Row , evt.Col ) == "Text"){
         $( "#entDate-confirm" ).dialog('open');
    }
}
```

### Read More
- [getFormat method](./get-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
