---
KEY: canEdit
KIND: cell-property
PATH: props/cell/can-edit
ALIAS_EN: whether, cell, editable, canedit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/can-edit
---
# CanEdit ***(cell)***

> Sets whether the cell is editable.

> The default value of this property is `1`. When set to `0`, the priority order is `Cell, Row, Col`.

> For example, if set to `0` at the `Cell` level, the cell will remain non-editable even if `Row` or `Col` is set to `1`. 

> Except for `CanEdit: 4`, when using non-editable mode, the icon for `Enum` columns and the calendar icon for `Date` type columns are not displayed. 

> When using non-editable mode via `Cfg`, it has the highest priority, so `CanEdit: 0` at the `Cell, Row, Col` level will not take effect. 

> The click behavior of `Button` type buttons and the icon display for `File` type are **`not affected`** by this property. (Can be controlled through [Disabled col](/docs/props/cell/disabled).)

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Sets the cell to non-editable (read-only).
![CanEdit](/assets/imgs/canEdit0.png "CanEdit")
<!-- IMAGE: Screenshot/Example Image - CanEdit -->|
|`1`|Sets the cell to editable.
![CanEdit](/assets/imgs/canEdit1.png "CanEdit")
<!-- IMAGE: Screenshot/Example Image - CanEdit -->|
|`2`|The cell content is non-editable, but provides an edit preview so all cell content can be viewed.
![CanEdit](/assets/imgs/canEdit2.png "CanEdit")
<!-- IMAGE: Screenshot/Example Image - CanEdit -->|
|`3`|Cell non-editable (does not display background color for editable/non-editable state)
Does not display background color regardless of [ColorState (cfg)](/docs/props/cfg/color-state).|
|`4`|Cell non-editable + no background color + icons displayed|


### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "CanEdit", 0);


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSCanEdit"] = 1;
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {..., "CLSCanEdit":0, ...}
    ]
}
```

### Read More
- [CanEdit row](/docs/props/row/can-edit)
- [CanEdit col](/docs/props/col/can-edit)
- [getCanEdit method](/docs/funcs/core/get-can-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.12|`CanEdit:3, 4` added|