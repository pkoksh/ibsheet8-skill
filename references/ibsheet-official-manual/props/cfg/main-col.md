---
KEY: mainCol
KIND: config-property
PATH: props/cfg/main-col
ALIAS_EN: column, display, tree, feature, maincol, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/main-col
---
# MainCol ***(cfg)***

> Sets the column to display the tree when using the tree feature. 

> The collapse/expand icons of the tree will be shown in the specified column.

> Only one column can be set as the tree column.

> When using a tree, the retrieved data must also be structured to match the tree format. (Refer to Chapter 7 [Data Structure](/docs/appx/data-structure))

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`colName`|Column name where the tree is displayed|


### Example
```javascript
options.Cfg = {
    MainCol: "Emp_name"        // Display the sheet tree in the column named "Emp_name"
};
```

### Try it
- [Demo of MainCol](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/MainCol/)

### Read More
- [Data Specification appendix](/docs/dataStructure/1data-structure)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
