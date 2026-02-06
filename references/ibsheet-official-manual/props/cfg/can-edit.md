---
KEY: canEdit
KIND: config-property
PATH: props/cfg/can-edit
ALIAS_EN: whether, entire, sheet, editable, canedit, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/can-edit
---
# CanEdit ***(cfg)***

> Sets whether the entire sheet is editable.

> Cell-level edit permission settings only work when entire sheet editing is enabled. 

> Filter and group rows are **not affected** by this property. 

> Except for `CanEdit: 4`, when using non-editable mode, the `Enum` column icon and `Date` type column calendar icon are not displayed. 

> When using non-editable mode through `Cfg`, it has the highest priority, so `CanEdit: 0` on `Cell, Row, Col` will not take effect. 

> The click behavior of `Button` type buttons and the icon display of `File` type are **`not affected`** by this property. (Can be controlled through [Disabled col](/docs/props/col/disabled).)

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Entire sheet not editable|
|`1`|Entire sheet editable (`default`)|
|`3`|Entire sheet not editable (does not display background color for editable/non-editable status)
Does not display background color regardless of [ColorState (cfg)](/docs/props/cfg/color-state).
|`4`|Entire sheet not editable + no background color + icons displayed|

### Example
```javascript
options.Cfg = {
   "CanEdit":0
};
```

### Read More
- [ColorState cfg](/docs/props/cfg/color-state)
- [CanEdit row](/docs/props/row/can-edit)
- [CanEdit col](/docs/props/col/can-edit)
- [CanEdit cell](/docs/props/cell/can-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.12|`CanEdit: 4` added|
