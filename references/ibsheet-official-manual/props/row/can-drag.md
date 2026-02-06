---
KEY: canDrag
KIND: row-property
PATH: props/row/can-drag
ALIAS_EN: whether, drag, allowed, row, candrag
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/can-drag
---
# CanDrag ***(row)***
> Sets whether drag is allowed for a row.

> Available when the [CanDrag cfg](/docs/props/cfg/can-drag) property is `1(true)`.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Drag disabled|
|`1(true)`|Drag enabled|



### Example
```javascript
//Prevent drag on a specific row.
var row = sheet.getRowById("AR55");
row["CanDrag"] = 0;
```

### Read More
- [CanDrag cfg](/docs/props/cfg/can-drag)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
