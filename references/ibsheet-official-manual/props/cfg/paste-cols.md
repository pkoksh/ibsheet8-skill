---
KEY: pasteCols
KIND: config-property
PATH: props/cfg/paste-cols
ALIAS_EN: columns, data, pasted, pasting, clipboard, contents, sheet, via
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/paste-cols
---
# PasteCols ***(cfg)***

> Sets which columns the data will be pasted into when pasting clipboard contents to the sheet via `ctrl+v`.

> You can set whether to paste from the leftmost column, or paste to the right of the focused position, etc.

> Whether pasting is possible or not is determined by the [(col)CanCopyPaste](/docs/props/col/can-copy-paste) property.

> Selection through dragging within the sheet can be configured via [(cfg)SelectingCells](./selecting-cells).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Paste only to the focused column. (Overwrites downward from the focused cell)|
|`1`|Paste to visible columns starting from the leftmost column regardless of focus position. (This value is `default` when `SelectingCells:0`)|
|`2`|Similar to option 1, pastes from the left but includes hidden columns in the paste.|
|`3`|Paste to the right and below from the focused cell. (`default`)|


### Example
```javascript
options = {
    Cfg :{
      PasteCols: 1 // Paste to visible columns starting from the leftmost.
    }
};
```

### Read More
- [CanCopyPaste col](/docs/props/col/can-copy-paste)
- [SelectingCells cfg](./selecting-cells)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
