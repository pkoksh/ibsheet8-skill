---
KEY: tipPosition
KIND: row-property
PATH: props/row/tip-position
ALIAS_EN: position, size, alignment, tooltip, object, tipposition, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/tip-position
---
# TipPosition ***(row)***

> Sets the position, size, and alignment of the tooltip object.


### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`X`|X-axis offset position of the tooltip|
|`Y`|Y-axis offset position of the tooltip|


### Example

```javascript
//Change the tooltip position for the last row.
var row = sheet.getLastVisibleRow();
row["TipPosition"] = {Y:-100};
```

### Read More
- [Tip row](./tip)
- [TipClass row](./tip-class)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
