---
KEY: getRowKind
KIND: method
PATH: funcs/core/get-row-kind
ALIAS: sheet.getRowKind, getRowKind()
ALIAS_EN: row, type, check, getrowkind, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-row-kind
---
# getRowKind ***(method)***
> row's type check.

> row type `Data(dataarea), Header(headerarea), Head(topfixed), Foot(totalrow or bottomfixed), Filter(filterrow), Group(grouprow), Space(recordsmodifydisplayrow or solidrow)` etc. is possible.


### Syntax
```javascript
string getRowKind( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|


### Return Value
***string*** : row's type

### Example
```javascript
//row's type OK
var rowKind = sheet.getRowKind(rowObj);
```

### Read More
- [Kind appedix](/docs/appx/kind)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
