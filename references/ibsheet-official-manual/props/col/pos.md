---
KEY: pos
KIND: column-property
PATH: props/col/pos
ALIAS_EN: checks, index, column, within, section, pos, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/pos
---
# Pos ***(col)***

> Checks the index of a column within its section.

> When creating sheet columns, columns added to the `LeftCols` array go into the left section based on frozen panes, columns added to the `Cols` array go into the center, and columns added to the `RightCols` section go into the right section.

> This property checks the position of the column from the left within its own section. (`Readonly`)


###
![Section](/assets/imgs/section.png "Section")
<!-- IMAGE: Screenshot/Example Image - Section -->


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Sequence number within the section (starts from 0 based on the left)
`LeftCols` starts from 1 because there are hidden columns used internally by the product.
Also, if a `SEQ` column is not separately specified, a hidden `SEQ` column is automatically created in `LeftCols`.|



### Example
```javascript
// Check the column's sequence number
var pos = sheet.getAttribute({col: "RENTFEE", attr: "Pos"})
```

### Read More
- [Section col](./section)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
