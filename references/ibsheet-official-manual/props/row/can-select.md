---
KEY: canSelect
KIND: row-property
PATH: props/row/can-select
ALIAS_EN: whether, row, selected, area, selection, dragging, canselect
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/can-select
---
# CanSelect ***(row)***
> Sets whether a row can be selected (area selection through dragging).

> When the property is `0(false)`, selecting a specific row can be prevented.

> When selecting through dragging, rows with `CanSelect: 0` will be skipped.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Selection disabled|
|`1(true)`|Selection enabled|



### Example
```javascript
//Prevent dragging on a specific row.
var row = sheet.getRowById("AR55");
row["CanSelect"] = 0;
```

### Read More
- [CanSelect cfg](/docs/props/cfg/can-select)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
