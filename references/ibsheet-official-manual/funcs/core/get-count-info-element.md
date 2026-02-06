---
KEY: getCountInfoElement
KIND: method
PATH: funcs/core/get-count-info-element
ALIAS: sheet.getCountInfoElement, getCountInfoElement()
ALIAS_EN: data, row, count, information, displayed, dom, element, outside
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-count-info-element
---
# getCountInfoElement ***(method)***

> When the data row count information is displayed in a Dom Element outside the sheet using the [setCountInfoElement](./set-count-info-element) feature, returns the Dom Element where the information is output.


### Syntax
```javascript
HTML Element getCountInfoElement ();
```

### Return Value
***object*** : Dom Element where the data row count information is output

### Example
```javascript
// Check the Dom Element where the data row count information is output
sheet.getCountInfoElement ();
```

### Read More
- [InfoRowConfig cfg](/docs/props/cfg/info-row-config)
- [setCountInfoElement method](./set-count-info-element)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
