---
KEY: setEditText
KIND: method
PATH: funcs/core/set-edit-text
ALIAS: sheet.setEditText, setEditText()
ALIAS_EN: user, cell, double, clickby, editmodeas, entered, editamong, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-edit-text
---
# setEditText ***(method)***

> user cell double clickby editmodeas entered when editamong data Changed . 

> column type to fit value argument sendmust .

### Syntax
```javascript
string setEditText(value);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|value|`string or number`|Required|String or number value to change to|


### Return Value
***boolean*** : processing whether

### Example
```javascript
// current edit among data Changed.
sheet.setEditText("Changed data");
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.91|Feature added|
