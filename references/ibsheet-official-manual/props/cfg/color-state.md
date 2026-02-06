---
KEY: colorState
KIND: config-property
PATH: props/cfg/color-state
ALIAS_EN: whether, background, colors, automatically, displayed, sheet, data, area
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/color-state
---
# ColorState ***(cfg)***

> Sets whether to use background colors automatically displayed in the sheet data area related to editability, add/modify/delete status, etc.

> When set to 0, all background colors displayed based on status or edit permissions within the sheet are removed, and background colors are displayed for features according to the set value.

> Properties are set in bitwise operation format. For example, setting a value of 5 displays background colors for option 1 + option 4.

> The default value is **`63`**.


### Type
`number`

### Options
|Value|Description|Class|
|-----|-----|---|
|`0`|Do not display background color based on status.||
|`1`|Display background color for modified **cells**|`.IBColorChangedCell`|
|`2`|Display background color for added/modified/deleted **rows**|`.IBColorAdded`,`.IBColorChanged`,`.IBColorDeleted`|
|`4`|Display background color for added/deleted **columns**|`.IBColorAdded`,`.IBColorDeleted`|
|`8`|Display background color when cell's `CanEdit`, `CanFocus` property is `false`|`.IBColorReadOnly`,`.IBColorNoFocus`|
|`16`|Display background color when `Formula` (a `Formula` that calculates cell value) that prevents direct cell value modification is set|`.IBColorReadOnly`|
|`32`|Display background color for cells with errors|`.IBColorError`|

### Example
```javascript
options.Cfg = {
   "ColorState": 7 // Do not display background color for non-editable cells
};
```

### Read More
- [CanEdit cell](/docs/props/cell/can-focus)
- [CanFocus cell](/docs/props/cell/can-focus)
- [Error cell](/docs/props/cell/error)
- [Added row](/docs/props/row/added)
- [Changed row](/docs/props/row/changed)
- [Deleted row](/docs/props/row/deleted)
- [CanEdit row](/docs/props/row/can-focus)
- [CanFocus row](/docs/props/row/can-focus)
- [CanFocus col](/docs/props/col/can-focus)
- [CanEdit col](/docs/props/col/can-focus)
- [CanEdit cfg](/docs/props/cfg/can-edit)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
