---
KEY: groupMain
KIND: config-property
PATH: props/cfg/group-main
ALIAS_EN: column, display, group, tree, grouping, applied, groupmain, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/group-main
---
# GroupMain ***(cfg)***

> Sets the column to display the group tree when grouping is applied. 

> If `GroupMain` is not set, the reference column for grouping display is automatically assigned. 



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`colName`|Column name where the grouping tree will be displayed|


### Example
```javascript
options.Cfg = {
    Group: "gender,age",    // Group by columns named gender and age when loading the sheet
    GroupMain: "Name"        // Display the sheet tree in the column named Name
};
option.Solid = [{
    Kind: "Group",           // Set the custom row Kind to Group
    Space: -1                // Set the custom row position (-1: top of table)
}];
```

### Try it
- [Demo of GroupMain](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Group/)

### Read More
- [Group cfg](./group)
- [Kind appendix](/docs/appx/kind)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
