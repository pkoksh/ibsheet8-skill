---
KEY: canEdit
KIND: column-property
PATH: props/col/can-edit
ALIAS_EN: whether, column, editable, canedit, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-edit
---
# CanEdit ***(col)***

> Sets whether the column is editable.

> The default value of this property is `1`. When set to `0`, the priority order is `Cell, Row, Col`.

> For example, if set to `0` at the `Cell` level, even if `1` is set at the `Row` or `Col` level, that cell will not be editable. 

> Except for `CanEdit: 4`, when using non-editable mode, the `Enum` column icon and `Date` type column calendar icon are not displayed. 

> When using non-editable mode via `Cfg`, it has the highest priority, so `CanEdit: 0` at the `Cell, Row, Col` level will not take effect. 

> The button click behavior for `Button` type and the icon display for `File` type are **`not affected`** by this property. (Can be controlled through [Disabled col](/docs/props/col/disabled).)


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Sets the column as non-editable (read-only).
![CanEdit](/assets/imgs/canEdit0.png "CanEdit")
<!-- IMAGE: Screenshot/Example Image - CanEdit -->|
|`1`|Sets the column as editable.
![CanEdit](/assets/imgs/canEdit1.png "CanEdit")
<!-- IMAGE: Screenshot/Example Image - CanEdit -->|
|`2`|The column content is not editable, but an edit preview is provided so you can view all content of the cell.
![CanEdit](/assets/imgs/canEdit2.png "CanEdit")
<!-- IMAGE: Screenshot/Example Image - CanEdit -->|
|`3`|Column not editable (does not display background color for editable/non-editable status)
Does not display background color regardless of [ColorState (cfg)](/docs/props/cfg/color-state).
|`4`|Column not editable + no background color display + icon display|


### Example
```javascript
// Set the AMT column as non-editable
options.Cols = [
    ...
    {Type: "Int", CanEdit: 0, Name: "AMT", Width: 120 ...},
    ...
];
```

### Read More
- [CanEdit row](/docs/props/row/can-edit)
- [CanEdit cell](/docs/props/cell/can-edit)
- [getCanEdit method](/docs/funcs/core/get-can-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.12|`CanEdit: 3, 4` added|
