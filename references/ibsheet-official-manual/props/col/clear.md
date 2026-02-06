---
KEY: clear
KIND: column-property
PATH: props/col/clear
ALIAS_EN: relational, combos, columns, defines, child, cleared, parent, combo
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/clear
---
# Clear ***(col)***
> When using relational combos between columns, defines the child columns that should be cleared when the parent combo value changes.

> For relational combo configuration, please refer to the [Related](./related) property.

> Affected by the [CanEmpty](./can-empty) property: when `CanEmpty: 0`, the value is set to the first value of the Enum.

> When `CanEmpty: 1`, the value is set to an empty string.

> `Note`: The `(Col)Clear, (Col)CanEmpty` of relational combos only work on user actions (those that trigger a change event).

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Child relation column names (use "," as delimiter for multiple columns)|

### Example
```javascript
options.Cols = [
    ...
    // When the column value changes, the cls2 and cls3 column values are cleared
    {Type: "Enum", Clear: "cls2, cls3",  Name: "cls1", Enum: "|Company A|Company B",EnumKeys: "|AA|BB" ... },
    // When the column value changes, the cls3 column value is cleared
    {Type: "Enum", Clear: "cls3", Name: "cls2", Related: "cls1",
         EnumAA: "|Overseas Division|Domestic Division|Sales Support Division", EnumKeysAA: "|A0|A1|A2",
         EnumBB: "|Development Dept|Technical Support Dept", EnumKeysBB: "|B0|B1" ... },
    // Subcategory
    {Type: "Enum", Name: "cls3", Related: "cls2",
         EnumAA_A0: "|Americas Business|Southeast Asia Team|Europe Business Team", EnumKeysAA_A0: "|AB0|AB1|AB2",
         EnumAA_A1: "|Gyeongbu|Jeolla|Metropolitan Area", EnumKeysAA_A1: "|K0|K1|K2",
         EnumAA_A2: "|Support Team 1|Support Team 2", EnumKeysAA_A2: "|SE0|SE1",
         EnumBB_B0: "|Development Team 1|Development Team 2|Development Team 3", EnumKeysBB_B0: "|DEV0|DEV1|DEV2",
         EnumBB_B1: "|Support Team 1|Support Team 2|Support Team 3", EnumKeysBB_B1: "|SU0|SU1|SU3", ... },
    ...
];
```

### Read More
- [Related col](./related)
- [Enum col](./enum)
- [EnumKeys col](./enum-keys)
- [CanEmpty](./can-empty)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
