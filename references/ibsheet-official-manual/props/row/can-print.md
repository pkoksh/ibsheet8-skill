---
KEY: canPrint
KIND: row-property
PATH: props/row/can-print
ALIAS_EN: whether, row, printed, canprint
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/can-print
---
# CanPrint ***(row)***

> Whether the row can be printed.

> When printing using [doPrint](/docs/funcs/core/do-print) or [down2Pdf](/docs/funcs/excel/down-to-pdf), you can set whether to include the row in the printout.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Print disabled|
|`1`|Print enabled (`default`)|


### Example
```javascript
//Prevent a specific row from being printed.
var row = sheet.getRowById("AR55");
sheet.setAttribute(row, null, 'CanPrint', 0);
```

### Read More
- [doPrint method](/docs/funcs/core/do-print)
- [down2Pdf method](/docs/funcs/excel/down-to-pdf)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
