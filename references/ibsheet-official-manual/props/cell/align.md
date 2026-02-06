---
KEY: align
KIND: cell-property
PATH: props/cell/align
ALIAS_EN: horizontal, text, alignment, align, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/align
---
# Align ***(cell)***

> Sets the horizontal text alignment.

> When used in a tree or group, the data area of the column designated as the reference column (**the column where the tree collapse/expand icon is displayed**) will not be affected by `Align`. 

> For vertical alignment, refer to the [VAlign](./v-align) property.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Left`|Align text to the left|
|`Center`|Align text to the center|
|`Right`|Align text to the right|


### Example
```javascript
// Set text alignment of a specific cell to right
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Align", "Right");
```

### Read More
- [VAlign cell](./v-align)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
