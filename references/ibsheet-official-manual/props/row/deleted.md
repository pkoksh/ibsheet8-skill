---
KEY: deleted
KIND: row-property
PATH: props/row/deleted
ALIAS_EN: deleterow, docs, funcs, core, delete, row, function, called
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/deleted
---
# Deleted ***(row)***

> When the [DeleteRow](/docs/funcs/core/delete-row) function is called, this property is set to `1(true)` on the corresponding row.

> When the `Deleted` value is set to `1(true)`, it means the row is scheduled for deletion, and the background color changes to the color defined in the `.IBColorDeleted class`.

> It is recommended to use this property for checking the value rather than setting it directly.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`1(true)`|Scheduled for deletion|


### Example
```javascript
//Check the number of rows scheduled for deletion among all data.
//The example below was written to demonstrate the Deleted property;
//to actually check the number of rows scheduled for deletion, use the getRowsByStatus() function.
var rows = sheet.getDataRows();
var cnt = 0;
for(var i = 0; i < rows.length; i++){
    if (rows[i]["Deleted"]) cnt++;
}
alert(cnt+" row(s) scheduled for deletion exist.");
```

### Read More
- [Added row](./added)
- [Changed row](./changed)
- [DeleteRow method](/docs/funcs/core/delete-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
