---
KEY: enumFormat
KIND: column-property
PATH: props/col/enum-format
ALIAS_EN: defines, masking, enum, column, data, enumformat, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/enum-format
---
# EnumFormat ***(col)***
> Defines masking for Enum column data.



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`function`|Masking display for Enum column data based on the return value|


### Example
```javascript

options.Cols = [
    ...
    // Process with a custom function
    {Type: "Enum", Name: "EnumData", Enum: "|Tomato|Potato|Corn", Range: 1, EnumFormat: function (param, sheet, col) {
        if (param.indexOf(";") == -1 || param == "&#160;") return param;
        var valArr = param.split(";");
        var length = valArr.length - 1 + "";
        // When the value comes in as 'Tomato;Potato', display it as 'Tomato and 1 more'
        return valArr[0] + " and " + length + " more";
    }},
    ...
];
```

### Read More
- [Enum](./enum)
- [Format appendix](/docs/appx/format)
- [Format col](./format)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.9|Feature added|
