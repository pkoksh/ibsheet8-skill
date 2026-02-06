---
KEY: shiftHint
KIND: config-property
PATH: props/cfg/shift-hint
ALIAS_EN: cell, content, exceeds, size, data, shown, hint, mouse
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/shift-hint
---
# ShiftHint ***(cfg)***

> When cell content exceeds the cell size, the cell data is shown as a `Hint` on mouse hover.

> When cells in the rightmost column appear as a `Hint`, the `Hint` position is shifted to the left to display all the cell data. 

> This setting controls whether to prevent shifting the `Hint` position to the left. When set to `false`, some of the data shown in the `Hint` may be cut off and not fully displayed.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Display at the current position even if there is insufficient space at the `Hint` origin point|
|`1(true)`|Shift the display to the left when there is insufficient space at the `Hint` origin point (`default`)|


### Example
```javascript
options.Cfg = {
   ShiftHint: false,  // Display Hint above the cell even if there is insufficient space
   ...
};
```

### Read More
- [ShowHint row](/docs/props/row/show-hint)
- [ShowHint col](/docs/props/col/show-hint)
- [ShowHint cell](/docs/props/cell/show-hint)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
