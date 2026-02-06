---
KEY: section
KIND: column-property
PATH: props/col/section
ALIAS_EN: checks, section, column, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/section
---
# Section ***(col)***

> Checks the section of a column.

> When creating sheet columns, columns added to the `LeftCols` array go into the left section based on frozen panes, columns added to the `Cols` array go into the center, and columns added to the `RightCols` section go into the right section.

> This property is used to check which section a specific column is located in. (`Readonly`)


###
![Section](/assets/imgs/section.png "Section")
<!-- IMAGE: Screenshot/Example Image - Section -->


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Left section|
|`1`|Center section|
|`2`|Right section|


### Example
```javascript
// Check the column's section
var section = sheet.getAttribute({col: "RENTFEE", attr: "Section"})
```

### Read More
- [Pos col](./pos)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
