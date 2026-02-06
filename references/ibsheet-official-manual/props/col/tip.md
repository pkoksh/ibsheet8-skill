---
KEY: tip
KIND: column-property
PATH: props/col/tip
ALIAS_EN: displays, tooltip, mouse, cursor, hovers, column, tip, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/tip
---
# Tip ***(col)***

> Displays a tooltip when the mouse cursor hovers over the column.

> Through settings, you can configure whether to use tooltips and the content to display in the tooltip.

### Type
`mixed`( `boolean` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Tooltip disabled (`default`)|
|`1(true)`|Tooltip enabled|
|`string`|Sets the content to display in the tooltip|

### Example
```javascript
// Enable the tooltip feature on a specific column.
options.Cols = [
    ...
    {Type: "Text", Tip: 1, Name: "DESC", Width: 120 ...},
    ...
];
```

### Read More
- [Tip+Value col](./tip-value)
- [TipClass col](./tip-class)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
