---
KEY: header
KIND: column-property
PATH: props/col/header
ALIAS_EN: defines, header, cell, column, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/header
---
# Header ***(col)***
> Defines the header cell of the column.

> You can set a simple string for the header cell, or set properties such as background color and alignment together.

> To create multiple header rows, set as an array, and **the array length must be the same for all columns**. 


> **<mark>Caution</mark>** : To set an empty header, you must use a space character string.
Header:"<mark> </mark>"


### Type
`mixed`( `string` \| `object` \| `array`\[`string`\|`object`\] )


### Options
|Value|Description|
|-----|-----|
|`string`|Title for the header cell
Line break possible with `\n`|
|`object`|Set title along with alignment, background color, text color, etc.|
|`array`\[`string`\|`object`\]|Set as array when configuring multiple header rows|

### Example
Single header row example)
```javascript
options.Cols = [
    {
        // Simple title in string format
        Header: "Employee Name", // "Employee\nName" -> line break display
        Type: "Text", MinWidth: 120, Name: "sa_name"
    },
    {
        // Specify background color, text color, alignment in object format
        Header: {Value: "Department", Color: "#EDEDED", TextColor: "#FF0000", Align: "Left"},
        Type: "Text", MinWidth: 120, Name: "deptCd"
    }
];
```
!["Single row header"](/assets/imgs/headerSingleRow.png)
<!-- IMAGE: Screenshot/Example Image - "Single row header" -->




Multiple header rows example)
```javascript
options.Cfg = {HeaderMerge: 3}; // Header area merge mode
options.Cols = [
    {
        Header: ["Employee Info", "Name"], // String format
        Type: "Text", MinWidth: 120, Name: "sa_name"
     },
    {
        Header: ["Employee Info","Employee No."],
        Type: "Text", MinWidth: 80, Name: "sa_no"
    }
]

// Or with styles in object format

options.Cfg = {HeaderMerge: 3}; // Header area merge mode
options.Cols = [
    {
        Header:[
            {Value: "Employee Info", Align: "Center"},
            // Setting background, text color, alignment, etc. in object format
            {Value: "Name", Color: "#315C81", TextColor: "#FFEEFF", Align: "Left"}
        ],
        Type: "Text", MinWidth: 120, Name: "sa_name"
     },
    {
        Header:[
            {Value: "Employee Info"},
            {Value: "Employee No.", Color: "#315C81", TextColor: "#ED6655", Align: "Left"}
        ],
        Type: "Text", MinWidth: 80, Name: "sa_no"
    },
];
```
!["Double row header"](/assets/imgs/headerDoubleRow.png)
<!-- IMAGE: Screenshot/Example Image - "Double row header" -->


### Read More
- [HeaderMerge cfg](/docs/props/cfg/header-merge)
- [Span cell](/docs/props/cell/span)
- [RowSpan cell](/docs/props/cell/row-span)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
