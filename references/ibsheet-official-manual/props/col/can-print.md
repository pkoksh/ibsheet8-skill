---
KEY: canPrint
KIND: column-property
PATH: props/col/can-print
ALIAS_EN: whether, column, printed, canprint, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-print
---
# CanPrint ***(col)***

> Sets whether the column can be printed.

> You can set whether to include the column when printing using [doPrint](/docs/funcs/core/do-print) or [down2Pdf](/docs/funcs/excel/down-to-pdf).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Print disabled|
|`1`|Print enabled (`default`)|


### Example
```javascript
// Block printing for a specific column
options.Cols = [
    ...
    { Type: "Int", Name: "Rank_Sales", CanPrint: 0 ... },
    ...
];
```

### Read More
- [doPrint method](/docs/funcs/core/do-print)
- [down2Pdf method](/docs/funcs/excel/down-to-pdf)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
