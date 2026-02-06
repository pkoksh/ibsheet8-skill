---
KEY: extend
KIND: column-property
PATH: props/col/extend
ALIAS_EN: creating, sheet, applies, column, settings, type, col, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/extend
---
# Extend ***(col)***
> When creating a sheet, applies column settings ([Type (col)](/docs/props/col/type), [Format (col)](/docs/props/col/format), etc.) from other variables to the Cols configuration.
>
> For example, assume a project has defined common specifications for columns displaying dollars as follows:
>
> 1. Display "$" symbol before the number.
> 2. Show "," every 3 digits, and display only up to the 1st decimal place.
> 3. Column width is 120px and the user cannot adjust the column width.
> 4. Display background color as "#FFFF88".
>
> In this case, rather than having all project developers memorize the above and set [Type (col)](/docs/props/col/type), [Format (col)](/docs/props/col/format), [Width (col)](/docs/props/col/width), etc. for every column that needs to display dollars, it is much easier to store this configuration information in a variable and apply the variable content when creating the column.
>
> The `Extend` property applies the column configuration information stored in a common variable to the column.
> The `Extend` property can only be set during sheet creation (create) and will not be applied to already created sheets.


> **<mark>Caution</mark> : When a property set through `Extend` is also set during sheet creation, the priority is determined by which property is set first (header settings are excluded; for headers, the Cols property has higher priority).**

```javascript
var defaultWidth = {Width: 100, MinWidth: 70};
var options = {
    Cols:[
        {Width: 300, Extend: defaultWidth},  // Width is set to 100px
        {Extend: defaultWidth, Width: 300}   // Width is set to 300px
    ]
}
```


### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|Configuration values used in [LeftCols, Cols, RightCols](/docs/appx/init-structure)|


### Example
```javascript
// Define column configuration information to be commonly used across projects in a variable (refer to ibsheet-common.js file)
var IB_Preset = {
    USD:{Type: "Float", Format: "$ #,##0.#", Width: 120, CanResize: 0,Color: "#FFFF88"},  // US Dollar display
    YMD:{Type: "Date", Format: "yyyy-MM-dd", EditFormat: "yyyyMMdd", Width: 110}, // Default date display
    REGD:{Type: "Date", Format: "yyyy-MM-dd HH:mm", DataFormat: "yyyyMMddHHmm",CanEdit: 0, Width: 150}, // Creation datetime
    ... define various column formats in advance ...
};



// Create columns using Extend during sheet creation
// (Only set the Name property and apply the rest of the settings via Extend.)
options.Cols = [
    // Type, Format, etc. are all applied at once
    {Name: "exportIncom", Extend: IB_Preset.USD},
    {Name: "birthDate", Extend: IB_Preset.YMD, CanEdit: 1},
    {Name: "ModiDate", Extend: IB_Preset.REGD},
    ...
];
```

### Try it
- [Demo of Extend](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/Extend/)

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
