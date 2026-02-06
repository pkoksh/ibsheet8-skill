---
KEY: groupFormat
KIND: config-property
PATH: props/cfg/group-format
ALIAS_EN: number, data, rows, belonging, group, display, format, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/group-format
---
# GroupFormat ***(cfg)***

> Sets the number of data rows belonging to a group and its display format in the column where the group tree is created during grouping. 

> `{%s}` represents the grouping reference value, `{%c}` represents the count of grouped data. 

> `{%vc}` represents the count of rows excluding hidden rows among the grouped data.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Group display format string
e.g.) `{%s} \ ({%c} items)`|


### Example
```javascript
options.Cfg = {
    Group: "gender,age",     // Group by columns with colName gender and age when loading the sheet
    GroupMain: "Name",       // Display the sheet tree in the column with colName Name
    GroupFormat:" {%s} ({%c} items)" // Display grouping column name in red, count in blue
};
option.Solid = [{
    Kind: "Group",           // Set the custom row Kind to Group
    Space: -1                // Set the custom row position (-1: top of table)
}];
```

### Try it
- [Demo of GroupFormat](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Group/)

### Read More
- [Group cfg](./group)
- [getGroupRows method](/docs/funcs/core/get-group-rows)
- [Kind appendix](/docs/appx/kind)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.27|Added {%vc} feature|
