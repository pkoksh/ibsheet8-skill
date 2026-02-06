---
KEY: added
KIND: row-property
PATH: props/row/added
ALIAS_EN: rows, added, addrow, docs, funcs, core, add, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/added
---
# Added ***(row)***

> Rows added through the [addRow](/docs/funcs/core/add-row) function internally have this property value set to 1.

> Unless the [NoColor](./no-color) property is separately set, the background color of newly added rows will change to the color defined by `.IBColorAdded` in the css/default(theme)/main.css file (`default: #eee6fa` light blue).

> It is recommended to use this property for checking whether a row is new rather than directly modifying its value.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`1(true)`|New row|


### Example
```javascript
//Delete button
function delete(sheet){
    var frow = sheet.getFocusedRow();
    //Immediately delete new rows, and for others, only change the status to deleted.
    if (frow.Added) {
        sheet.removeRow(frow);
    } else {
        sheet.deleteRow(frow, 1);
    }
}

```

### Read More
- [Changed row](./changed)
- [Deleted row](./deleted)
- [addRow method](/docs/funcs/core/add-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
