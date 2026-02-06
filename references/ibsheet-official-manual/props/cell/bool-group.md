---
KEY: boolGroup
KIND: cell-property
PATH: props/cell/bool-group
ALIAS_EN: whether, group, cells, type, docs, appx, bool, within
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/bool-group
---
# BoolGroup ***(cell)***
> Sets whether to group cells with [Type](/docs/appx/type) `Bool` within the same group.

> The entered number becomes the group index, and among cells with the same value, only one can be checked.

> (Like radio buttons, when one is checked, others are automatically unchecked.)


###
![BoolGroup](/assets/imgs/boolGroup.png "Only one selection possible within grouped rows")
<!-- IMAGE: Screenshot/Example Image - BoolGroup -->

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Group index to bundle together like radio buttons|




### Example
```javascript
// Within a column, only a single cell can be checked within the group of rows 1,2,3 and the group of rows 4,5,6.
sheet.setAttribute( sheet.getRowById("AR1"), "CLS", "BoolGroup", "1" );
sheet.setAttribute( sheet.getRowById("AR2"), "CLS", "BoolGroup", "1" );
sheet.setAttribute( sheet.getRowById("AR3"), "CLS", "BoolGroup", "1" );
sheet.setAttribute( sheet.getRowById("AR4"), "CLS", "BoolGroup", "2" );
sheet.setAttribute( sheet.getRowById("AR5"), "CLS", "BoolGroup", "2" );
sheet.setAttribute( sheet.getRowById("AR6"), "CLS", "BoolGroup", "2" );
```


### Read More
- [Radio cell](/docs/props/cell/radio)
- [BoolIcon cell](/docs/props/cell/bool-icon)
- [Type appendix](/docs/appx/type)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
