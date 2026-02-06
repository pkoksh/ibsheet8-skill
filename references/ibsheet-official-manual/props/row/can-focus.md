---
KEY: canFocus
KIND: row-property
PATH: props/row/can-focus
ALIAS_EN: whether, focus, allowed, row, canfocus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/can-focus
---
# CanFocus ***(row)***
> Sets whether focus is allowed on a row.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Focus is disabled|
|`1`|Focus is enabled|
|`2`|Focus is only possible through mouse click.|


### Example
```javascript
//Prevent focus on a specific row.
var row = sheet.getRowById("AR55");
row["CanFocus"] = 0;
```

### Read More
- [CanFocus col](/docs/props/col/can-focus)
- [CanFocus cell](/docs/props/cell/can-focus)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
