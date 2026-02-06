---
KEY: wrap
KIND: row-property
PATH: props/row/wrap
ALIAS_EN: whether, display, content, line, wrapping, cell, exceeds, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/wrap
---
# Wrap ***(row)***

> Sets whether to display content through line wrapping when cell content exceeds the column width. (CSS white-space property)

> When line wrapping occurs, the row height is automatically adjusted.

> Generally used with `Text` type, and can also be used with `Radio` type.

> For [Lines type](/docs/appx/type) columns, it is set to `default: 1(true)`.

<!--! > In large data mode, [SearchMode:0](/docs/props/cfg/search-mode) does not support dynamic row heights for data rows, so this feature cannot be used.
!-->

###
![Wrap:0(false)](/assets/imgs/wrap0.png "When Wrap:0(false) is set")
<!-- IMAGE: Screenshot/Example Image - Wrap:0(false) -->

[`Wrap:0(false)` setting]


![Wrap:1(true)](/assets/imgs/wrap1.png "When Wrap:1(true) is set")
<!-- IMAGE: Screenshot/Example Image - Wrap:1(true) -->

[`Wrap:1(true)` setting]

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Line wrapping disabled (`white-space:nowrap`)|
|`1(true)`|Line wrapping enabled (`white-space:normal`)|

### Example
```javascript
//Allow Wrap for a specific row.
var row = sheet.getRowById("AR33");
row["Wrap"] = 1;
sheet.refreshRow(row);

//Allow line wrapping for all data rows.
options.Def.Row = {"Wrap": 1};
```

### Read More
- [TextStyle row](./text-style)
- [TextColor row](./text-color)
- [TextFont row](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
