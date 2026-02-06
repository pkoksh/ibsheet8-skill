---
KEY: related
KIND: column-property
PATH: props/col/related
ALIAS_EN: relational, combo, major, middle, minor, categories, associations, columns
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/related
---
# Related ***(col)***
> Sets up a **relational combo** such as major/middle/minor categories through associations between columns with [Type](/docs/appx/type) `Enum` or `Radio`.

> The column corresponding to the major category (or top level) does not need `Related` set, the middle category column sets the major category column name, and the minor category column sets the middle category column name.


> In the middle category column, items are set using the [**"Enum"+"parent category EnumKey"**] property.

> For columns with two or more levels of parent relationships like the minor category, items are set using the [**"Enum"+"level 1 category EnumKey"+"_"+"level 2 category EnumKey"**] property.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Name of the parent related column|



### Example
```javascript
// Configure combos for major/middle/minor categories using the Related property
options.Cols = [
    ...
    // Major category
    {Type: "Enum", Name: "cls1", Enum: "|Company A|Company B", EnumKeys: "|AA|BB" ... },
    // Middle category
    {Type: "Enum", Name: "cls2", Related: "cls1",
         EnumAA: "|Overseas Division|Domestic Division|Sales Support Division", EnumKeysAA: "|A0|A1|A2",
         EnumBB: "|Development Dept|Technical Support Dept", EnumKeysBB: "|B0|B1" ... },
    // Minor category - Set Related to look at both middle and major categories.
    // When there are 2 or more levels of parent relationships, set all corresponding Names in the Related property
    {Type: "Enum", Name: "cls3", Related: "cls1,cls2",
         EnumAA_A0: "|Americas Business|Southeast Asia Team|Europe Team", EnumKeysAA_A0: "|AB0|AB1|AB2",
         EnumAA_A1: "|Gyeongbu|Jeolla|Capital Area", EnumKeysAA_A1: "|K0|K1|K2",
         EnumAA_A2: "|Support Team 1|Support Team 2", EnumKeysAA_A2: "|SE0|SE1",
         EnumBB_B0: "|Dev Team 1|Dev Team 2|Dev Team 3", EnumKeysBB_B0: "|DEV0|DEV1|DEV2",
         EnumBB_B1: "|Support Team 1|Support Team 2|Support Team 3", EnumKeysBB_B1: "|SU0|SU1|SU3", ... },
    ...
];

// Method to configure major/middle/minor category combos by checking only the parent category.
options.Cols = [
    ...
    // Major category
    {Type: "Enum", Name: "cls1", Enum: "|Humanities|Novel/Poetry", EnumKeys: "|AA|BB" ... },
    // Middle category
    {Type: "Enum", Name: "cls2", Related: "cls1",
         EnumAA: "|Philosophy/Thought|General Humanities", EnumKeysAA: "|A0|A1",
         EnumBB: "|Korean Novel|Poetry/Drama", EnumKeysBB: "|B0|B1" ... },
    // Minor category - Set Related to look at the middle category Name.
    {Type: "Enum", Name: "cls3", Related: "cls2",
         EnumA0: "|Philosophy of Science|Philosophy of Language|Pragmatism", EnumKeysA0: "|AA0|AA1|AA2",
         EnumA1: "|Humanities Theory|General Humanities/Liberal Arts", EnumKeysA1: "|AB0|AB1",
         EnumB0: "|Short Stories|Long Stories", EnumKeysB0: "|BA0|BA1",
         EnumB1: "|World Poetry|Drama/Screenplay", EnumKeysB1: "|BB0|BB1", ... },
    ...
];


```

### Read More
- [Enum col](/docs/props/col/enum)
- [EnumKeys col](/docs/props/col/enum-keys)
- [Clear col](/docs/props/col/clear)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
