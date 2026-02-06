---
KEY: tipValue
KIND: column-property
PATH: props/col/tip-value
ALIAS_EN: text, display, tooltip, column, content, specific, value, tip
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/tip-value
---
# Tip+Value ***(col)***

> Sets the text to display as a tooltip when the column content is a specific value.

> For example, set the text to display using a property name combining `Tip` and `Value`, such as TipY:"Selected", TipN:"Cancelled".

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|String to display in the tooltip|

### Example
```javascript
// When a specific column has the value Re, "Rejected" is displayed in the tooltip
options.Cols = [
    ...
    {Type: "Text", Tip: 1, TipRe: "Rejected", Name: "procs", Width: 120 ...},
    ...
];
```

### Read More
- [Tip col](./tip-value)
- [TipClass col](./tip-class)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
