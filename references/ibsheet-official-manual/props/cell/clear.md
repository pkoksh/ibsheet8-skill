---
KEY: clear
KIND: cell-property
PATH: props/cell/clear
ALIAS_EN: relational, combos, columns, defines, subordinate, cleared, value, parent
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/clear
---
# Clear ***(cell)***
> When using relational combos between columns, defines the subordinate columns that should be cleared when the value of the parent combo changes.

> For relational combo configuration, please refer to the (col) [Related](/docs/props/col/related) property.

> Affected by the [CanEmpty](./can-empty) property: when `CanEmpty: 0`, the value is set to the first value of the Enum.

> When `CanEmpty: 1`, the value is set to an empty string.

> `Note` : The `(cell)Clear, (cell)CanEmpty` of relational combos only operate through user actions (those that trigger a change event).

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Subordinate column name(s) (use "," delimiter for multiple columns)|

### Example
```javascript
sheet.setAttribute(sheet.getRowById("AR99"), "CLS1", "Clear", "CLS2,CLS3");
```

### Read More
- [Related cell](/docs/props/cell/related)
- [Enum cell](/docs/props/cell/enum)
- [EnumKeys cell](/docs/props/cell/enum-keys)
- [CanEmpty cell](/docs/props/col/can-empty)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
