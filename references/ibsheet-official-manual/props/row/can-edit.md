---
KEY: canEdit
KIND: row-property
PATH: props/row/can-edit
ALIAS_EN: whether, editing, allowed, row, canedit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/can-edit
---
# CanEdit ***(row)***

> Sets whether editing is allowed for a row.

> The default value of this property is `1`. When set to `0`, it takes priority in the order of `Cell, Row, Col`.

> For example, if set to `0` in `Cell`, the cell cannot be edited even if `1` is set in `Row` or `Col`. 

> Except for `CanEdit: 4`, when using read-only mode, the icon for `Enum` columns and the calendar icon for `Date` type columns are not displayed. 

> When using read-only mode through `Cfg`, it has the highest priority, so `CanEdit: 0` in `Cell, Row, Col` will not take effect. 

> The button click behavior for `Button` type and icon display for `File` type are **`not affected`** by this property. (Can be controlled through [Disabled col](/docs/props/col/disabled).)

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Sets the row to non-editable (read-only).
![CanEdit](/assets/imgs/canEdit0.png "CanEdit")
<!-- IMAGE: Screenshot/Example Image - CanEdit -->|
|`1`|Sets the row to editable.
![CanEdit](/assets/imgs/canEdit1.png "CanEdit")
<!-- IMAGE: Screenshot/Example Image - CanEdit -->|
|`2`|The row content is non-editable, but provides an edit preview to view all cell content.
![CanEdit](/assets/imgs/canEdit2.png "CanEdit")
<!-- IMAGE: Screenshot/Example Image - CanEdit -->|
|`3`|Row non-editable (does not display background color for editable/non-editable status)
Does not display background color regardless of [ColorState (cfg)](/docs/props/cfg/color-state).|
|`4`|Row non-editable + no background color + icons displayed|


### Example
```javascript
//Prevent editing on a specific row.
var row = sheet.getRowById("AR55");
row["CanEdit"] = 0;
sheet.refreshRow(row);

//Prevent editing on a specific row in the loaded data.
{"data":[
    {"CanEdit":0,"ColName1":"Value1","ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [CanEdit col](/docs/props/col/can-edit)
- [CanEdit cell](/docs/props/cell/can-edit)
- [getCanEdit method](/docs/funcs/core/get-can-edit)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.12|`CanEdit: 3, 4` added|
