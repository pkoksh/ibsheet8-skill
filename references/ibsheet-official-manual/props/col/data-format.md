---
KEY: dataFormat
KIND: column-property
PATH: props/col/data-format
ALIAS_EN: format, data, load, date, type, column, dataformat, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/data-format
---
# DataFormat ***(col)***

> Sets the format of the data to load in a date type column.

> For example, if the retrieved date data is "25012017", DataFormat should be set to "ddMMyyyy",

> and if the data is "20171225", DataFormat should be set to "yyyyMMdd".

> When data from the column is extracted to be sent to the server ([doSave](/docs/funcs/core/do-save), [getSaveString](/docs/funcs/core/get-save-string)), it is also transmitted in the specified format.


**Date reserved words**

|Symbol|Meaning|
|---|---|
|`yyyy`|Year (4 digits)|
|`MM`|Month (2 digits)|
|`dd`|Day (2 digits)|
|`HH`|Hour (2 digits)|
|`mm`|Minute (2 digits)|
|`ss`|Second (2 digits)|

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Predefined strings such as yyyyMMdd|


### Example
```javascript
// Set the date data structure for a specific column
options.Cols = [
    ...
    {Type: "Date", Format: "yyyy.MM.dd HH:ss", DataFormat: "yyyyMMddHHmmss", Name: "enterDate", Width: 120 ...},
    ...
];
```

### Read More
- [Format col](/docs/props/col/format)
- [EditFormat col](/docs/props/col/edit-format)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
