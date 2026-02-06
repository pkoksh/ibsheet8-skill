---
KEY: showGroupRow
KIND: method
PATH: funcs/core/show-group-row
ALIAS: sheet.showGroupRow, showGroupRow()
ALIAS_EN: creates, group, rows, showgrouprow, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-group-row
---
# showGroupRow ***(method)***
> Creates group rows.

### Syntax
```javascript
void showGroupRow( cols, format );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|cols |`string` \| `object`|Optional|Column(s) to group by. Set as a string for a single column, or as an array for multiple columns.|
|format |`string`|Optional|Data format setting for the group-based column. 
 - {%s} : the cell's value 
 - - {%c} : child node number|

### Return Value
***boolean*** : Whether setting is complete

### Example
```javascript
// Create group rows.
sheet.showGroupRow();

// Create group rows and group by the sName column.
sheet.showGroupRow("sName");

// Create group rows and group by the sName and sPrice columns.
sheet.showGroupRow(["sName", "sPrice"]);

// Create group rows and apply '{%s} <font color="gray">({%c} records)</font>' format when grouping.
sheet.showGroupRow(null, '{%s} <font color="gray">({%c}records)</font>');

// Create group rows, group by the sName column, and apply '{%s} <font color="gray">({%c} records)</font>' format when grouping.
sheet.showGroupRow("sName", '{%s} <font color="gray">({%c}records)</font>');
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.9|Feature added|
