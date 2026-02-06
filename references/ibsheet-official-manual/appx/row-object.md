---
KEY: rowObject
KIND: appendix
PATH: appx/row-object
ALIAS_EN: data, row, objects, obtained, functions, sheet, getfocusedrow, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/row-object
---
# Row Object  ***(appendix)***
> Data row objects obtained through functions such as sheet.[getFocusedRow](/docs/funcs/core/get-focused-row)() or sheet.[getRowById](/docs/funcs/core/get-row-by-id)("AR11") contain the row's values, attribute values set for each column (such as [CanEdit](/docs/props/row/can-edit) or [Visible](/docs/props/row/visible)), and link information to neighboring rows or parent rows.

## Row Values
You can check or modify the values of each column in the row object.
```javascript
var row = sheet.getRowById("AR1");
var AmtColumnValue = row["AMT"]; //Gets the value of the AMT column.
row["AMT"] = 2300; //Changes the value of the AMT column in row AR1 to 2300.
//The modified value is not immediately reflected on the screen; you need to call refreshCell() or refreshRow() to apply it.
```

## Row Attribute Values
You can check or modify the attributes assigned to each column of the row object.
```javascript
var row = sheet.getFocusedRow();
var isEditable = row["AMTCanEdit"]; //Checks whether the AMT column is editable.
row["AMTCanEdit"] = 0; //Changes the AMT column of the focused row to non-editable.
//Depending on the attribute value, you may need to call refreshCell() or refreshRow() to apply the change.
```

## Row Link Information
Row objects have links to the row above, below, parent row, and child rows.

|Name|Description|
|---|---|
|nextSibling|Next row object (when using tree, the next sibling row under the same parent; null if none)|
|previousSibling|Previous row object (when using tree, the previous sibling row under the same parent; null if none)|
|firstChild|First child row object of the current row when using tree|
|lastChild|Last child row object of the current row when using tree|
|parentNode|Parent row object|

```javascript
var row = sheet.getFocusedRow();
var nextRow = row.nextSibling; //Next row object below the focused row
var parentRow = row.parentNode; //Parent row object of the focused row
```

### Read More

- [Understanding Row Structure getting started](/docs/start/row)
- [getFocusedRow method](/docs/funcs/core/get-focused-row)
- [getRowById method](/docs/funcs/core/get-row-by-id)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
