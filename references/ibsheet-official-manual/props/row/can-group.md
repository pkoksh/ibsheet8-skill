---
KEY: canGroup
KIND: row-property
PATH: props/row/can-group
ALIAS_EN: whether, grouping, allowed, specific, row, cangroup
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/can-group
---
# CanGroup ***(row)***
> Sets whether grouping is allowed for a specific row.

> When set to `0(false)`, the row will not be included in any group and will be positioned independently.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Grouping disabled|
|`1(true)`|Grouping enabled|


### Example
```javascript
//Exclude specific rows from grouping.
{"data":[
    ...
    {"CanGroup":0,"ColName1":"Value1","ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [Group cfg](/docs/props/cfg/group)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
