---
KEY: uncheck
KIND: cell-property
PATH: props/cell/uncheck
ALIAS_EN: there, multiple, cells, bool, type, features, allow, one
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/uncheck
---
# Uncheck ***(cell)***
> When there are multiple cells with `Bool` [Type](./type), there are features that allow only one cell to be checked within a row ([Radio property](./radio)) or only one cell to be checked within a column ([BoolGroup property](./bool-group)). This property sets whether to allow unchecking by clicking again on a checked cell when using these features.


###
![Radio](/assets/imgs/radio.png "Only one can be selected in the same row")
<!-- IMAGE: Screenshot/Example Image - Radio -->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not allow unchecking|
|`1(true)`|Allow unchecking (`default`)|




### Example
```javascript
// Once checked, make it impossible to uncheck within the group
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Uncheck", 0);
```

### Read More
- [Radio cell](./radio)
- [BoolGroup cell](./bool-group)
- [Type cell](./type)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
