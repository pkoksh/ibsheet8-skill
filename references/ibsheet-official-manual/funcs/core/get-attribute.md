---
KEY: getAttribute
KIND: method
PATH: funcs/core/get-attribute
ALIAS: sheet.getAttribute, getAttribute()
ALIAS_EN: specific, row, column, cell, settingapplied, propertyvalue, getattribute, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-attribute
---
# getAttribute ***(method)***

> specific row,column,cell settingapplied propertyvalue OK.

> `row` `null`, column set attribute value is set to return.

> `col` `null`, row set attribute value is set to return.


### Syntax
```javascript
mixed getAttribute( row, col, attr);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|row |`object`|Optional|[data row object](/docs/appx/row-object)|
|col |`string`|Optional|column name|
|attr|`string`|Optional|OKwant to propertyname|

### Return Value
***mixed ( `number` \| `string` )*** : argument according to rowor column,cellof property value return

### Example
```javascript
//specific columnof type OK
if (sheet.getAttribute(null, sheet.getFocusedCol(), "Type") == "Radio") {
    alert("Cannot be applied to this column.");
}

//total rowof Cell text color OK
var fcolor =  sheet.getAttribute( sheet.getRowById("FormulaRow"), sheet.getFocusedCol(), "TextColor");
```

### Read More

- [setAttribute method](./set-attribute)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
