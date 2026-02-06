---
KEY: related
KIND: cell-property
PATH: props/cell/related
ALIAS_EN: relational, combo, major, category, middle, minor, associations, columns
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/related
---
# Related ***(cell)***
> Sets up a **relational combo** such as major category/middle category/minor category through associations between columns whose [Type](./type) is [Enum](/docs/props/cell/enum) or [Radio](/docs/props/cell/radio).

> For detailed usage, please check the col [Related](/docs/props/col/related) property.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Parent relationship column names|

### Example
```javascript
// Configure combos for major/middle/minor categories using the Related property
// Apply property to a specific cell via method (column name: CLS3)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS3", "Related", "CLS1,CLS2");
```

### Read More
- [Related col](/docs/props/col/related)
- [Enum cell](/docs/props/cell/enum)
- [EnumKeys cell](/docs/props/cell/enum-keys)
- [Clear cell](/docs/props/cell/clear)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
