---
KEY: moveDeselectMode
KIND: config-property
PATH: props/cfg/move-deselect-mode
ALIAS_EN: setting, option, currently, selected, area, deselected, arrow, keys
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/move-deselect-mode
---
# MoveDeselectMode ***(cfg)***

> After setting this option, the currently selected area is deselected when **arrow keys, page up/down keys, or home/end keys** are pressed.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|The currently selected area is not deselected when arrow keys, page up/down keys, or home/end keys are pressed. (`default`)|
|`1(true)`|The currently selected area is deselected when arrow keys, page up/down keys, or home/end keys are pressed|

### Example
```javascript
options.Cfg = {
    MoveDeselectMode: true
};
```

### Read More
- [CanSelect cfg](./can-select)
- [SelectingCells cfg](./selecting-cells)
- [Selected row](/docs/props/row/selected)
- [Selected col](/docs/props/col/selected)
- [Selected cell](/docs/props/cell/selected)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
