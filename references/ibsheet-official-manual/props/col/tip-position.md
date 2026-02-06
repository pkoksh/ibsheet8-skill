---
KEY: tipPosition
KIND: column-property
PATH: props/col/tip-position
ALIAS_EN: position, size, alignment, tooltip, object, tipposition, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/tip-position
---
# TipPosition ***(col)***

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
// Adjust the tooltip position
options.Cols = [
    ...
    {Type: "Bool", Tip: 1, TipPosition: {X: 20, Y: -10}, Name: "procs", Width: 120 ...},
    ...
];
```

### Read More
- [Tip col](./tip)
- [TipClass col](./tip-class)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
