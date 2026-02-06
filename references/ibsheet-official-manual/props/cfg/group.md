---
KEY: group
KIND: config-property
PATH: props/cfg/group
ALIAS_EN: colname, columns, group, loading, sheet, string, separated, delimiters
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/group
---
# Group ***(cfg)***

> Sets the `ColName` of columns to group when loading the sheet, as a string separated by "," delimiters.  

> If you set `Solid Row Kind: "Group"`, the header text of the grouped columns is displayed in the group row, and users can add other columns to the grouping or change existing grouping columns through mouse drag-and-drop. 

> If `Solid Row Kind: "Group"` is not set, the column grouping specified in `Group` is applied when loading the sheet, but users cannot make changes.

> When setting `Group`, names must be written without any spaces between them. If there are spaces between names, the `Group` operation will not work properly.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`colName`|String of column names to group, connected by ","|


### Example
```javascript
options.Cfg = {
    Group:"gender,age"       // Group by columns named gender and age when loading the sheet
};
option.Solid = [{
    Kind: "Group",           // Set the custom row Kind to Group
    Space: -1                // Set the custom row position (-1: top of table)
}];
```

### Try it
- [Demo of Group](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Group/)

### Read More
- [Kind appendix](/docs/appx/kind)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
