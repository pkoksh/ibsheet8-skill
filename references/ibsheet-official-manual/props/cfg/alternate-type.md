---
KEY: alternateType
KIND: config-property
PATH: props/cfg/alternate-type
ALIAS_EN: whether, child, rows, tree, structured, sheet, included, alternate
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/alternate-type
---
# AlternateType ***(cfg)***

> Sets whether child rows in a tree-structured sheet are included in the [Alternate](./alternate) calculation. 

> When this property is set to `1`, the color calculation for child rows is performed each time the tree is expanded or collapsed, which may slow down the sheet.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Display highlight without including tree sheet child rows (`default`)|
|`1`|Display highlight by recalculating including tree sheet child rows |


### Example
```javascript
options.Cfg = {
    "Alternate": 2,        // Display highlight on even rows
    "AlternateType": 1     // Include child rows in Alternate calculation for tree sheet highlight
};
```

### Read More
- [Alternate cfg](./alternate)
- [AlternateColor row](/docs/props/row/alternate-color)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
