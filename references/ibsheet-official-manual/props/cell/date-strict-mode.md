---
KEY: dateStrictMode
KIND: cell-property
PATH: props/cell/date-strict-mode
ALIAS_EN: loading, data, cell, type, docs, appx, date, dataformat
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/date-strict-mode
---
# DateStrictMode ***(cell)***

> When loading data, if a cell with [Type](/docs/appx/type) `Date` has `DataFormat` set and the loaded data does not match the set format length or contains an invalid date, it is treated as blank.

> For example, if `DataFormat` is set to "yyyyMMdd" and a value of "88" is loaded, the cell value will be treated as blank.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|No strict validation (`default`)|
|`1(true)`|Strict validation against the format set in `DataFormat`|


### Example
```javascript
// If DataFormat is set on the column
options.Cols = [
    ...
    // DataFormat must be set to use DateStrictMode.
    {Type: "Date", Format: "yyyy.MM.dd", DataFormat: "yyyyMMdd", Name: "CLS", Width: 120 ...},
    ...
];

// Treat invalid date data as blank for a specific cell
{
    data:[
        {... ,"CLS":"12312018" "CLSDateStrictMode":"1" , ...}
    ]
}
```

### Read More
- [DataFormat col](/docs/props/col/data-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.12|Feature added|
