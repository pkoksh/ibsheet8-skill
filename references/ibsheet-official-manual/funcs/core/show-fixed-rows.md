---
KEY: showFixedRows
KIND: method
PATH: funcs/core/show-fixed-rows
ALIAS: sheet.showFixedRows, showFixedRows()
ALIAS_EN: head, row, foot, creation, showfixedrows, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-fixed-rows
---
# showFixedRows ***(method)***

> `Head` row, `Foot` row creation. 

> argumentas send `Head,Foot` object objectof structure [sheet objectstructure](/docs/appx/init-structure) please refer to. 

> `object` of argument among `Kind`  through `Head` or `Foot`  creationcan.


### Syntax
```javascript
void showFixedRows( fixedobject );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|fixedobject |`object`|Required|object object argument among `Kind` required (`Foot` or `Head`)|


### Return Value
***boolean*** : Whether `Head` row or `Foot` row was created (returns `0(false)` if rows could not be created due to invalid argument values)

### Example
```javascript
// 1. Foot row 1 creation
var obj1 = [{
      Kind : 'Foot', 
      id: "myFootRow", 
      "chk": {
            "Type": "Text",
            "Value": "",
            "CanEdit": 0,
            "CanFocus": 0
      },... }];
sheet.showFixedRows(obj1);

// 2. Head row 1, Foot row 1 creation
var obj2 = [{Kind : 'Head', ... },{Kind : 'Foot', ... }];
sheet.showFixedRows(obj2);
```

### Read More
- [sheet objectstructure](/docs/appx/init-structure)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.4|Feature added|
