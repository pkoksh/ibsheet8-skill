---
KEY: groupSubTotal
KIND: column-property
PATH: props/col/group-sub-total
ALIAS_EN: options, apply, group, subtotal, row, usegroupsubtotal, cfg, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/group-sub-total
---
# GroupSubTotal ***(col)***
> Sets the options to apply to the group subtotal row when using the [UseGroupSubTotal cfg](/docs/props/cfg/use-group-sub-total) group subtotal feature.

> You can set `Type`, `Color`, and `Format` for the column that will display the subtotal calculation.

> [UseGroupSubTotal cfg](/docs/props/cfg/use-group-sub-total) must be set</b> for it to work correctly.

### Type
`object`

### Options
|Name|Type|Required|Description|
|----------|-----|---|----|
|`Type`|`string`|Required|Calculation type 
 `"Sum"`: Total 
 `"Avg"`: Average 
 `"Count"`: Count 
 `"Max"`: Maximum 
 `"Min"`: Minimum|
|`Color`|`string`|Optional|Background color of the subtotal row 
 "#FFFFEF" (`default`)|
|`Format`|`string`|Optional|Format to apply to the subtotal calculation 
 Column's "Format" (`default`)|



### Example
```javascript
options.cfg = {
    "Group": "SA_DEPTID",
    // Enable group subtotal feature
    "UseGroupSubTotal": 1
};

// Group subtotal row settings
options.Cols = [
    ...
    {Type: "Int", Name: "SA_DEPTID", GroupSubTotal: { Type: "Sum", Color: "#FFDDAA" ,"Format": "#,###"}, ...},
    ...
];
```

### Read More
- [UseGroupSubTotal cfg](/docs/props/cfg/use-group-sub-total)
- [Group cfg](./docs/props/cfg/group)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.8|Feature added|
