---
KEY: getGroupRows
KIND: method
PATH: funcs/core/get-group-rows
ALIAS: sheet.getGroupRows, getGroupRows()
ALIAS_EN: groupas, creationapplied, grouprows, returns, getgrouprows, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-group-rows
---
# getGroupRows ***(method)***

> groupas creationapplied grouprows returns.

> return value as follows
> {group columnname1: [columnname1as creationapplied group rows], group columnname2 : [columnname2as creationapplied group rows], ...}

### Syntax
```javascript
object getGroupRows();
```

### Return Value
***object***

### Example
```javascript
//group row gets.
var groupRows = sheet.getGroupRows();
```

### Read More
- [GroupMain cfg](/docs/props/cfg/group-main)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
