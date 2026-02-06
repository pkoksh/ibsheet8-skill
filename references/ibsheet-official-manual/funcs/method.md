---
KEY: method
KIND: method
PATH: funcs/method
ALIAS: sheet.method, method()
ALIAS_EN: methods, provided, sheet, configured, setting, parameter, order, single
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/method
---
# Method Usage Basics
> All methods provided by the sheet can be configured by setting each parameter in order or as a single `object`.

### How to Set Parameters
```javascript
//addRow - Add a row (next: row position, visible: visibility, focus: whether to move focus, parent: parent row object when using tree)

//Set each parameter in order
sheet.addRow(sheet.getFirstRow(), 1);

//Set parameters as an object
sheet.addRow({visible: 1, focus: 1});
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
