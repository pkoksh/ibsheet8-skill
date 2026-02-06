---
KEY: dateStrictMode
KIND: column-property
PATH: props/col/date-strict-mode
ALIAS_EN: dataformat, date, type, column, processes, value, blank, retrieved
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/date-strict-mode
---
# DateStrictMode ***(col)***

> When `DataFormat` is set for a date type column, processes the value as blank if the retrieved data does not match the configured format or length, or if the date is invalid.

> For example, if `DataFormat` is set to "yyyyMMdd" and the value "88" is retrieved, the cell value will be treated as blank.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|No strict validation (`default`)|
|`1(true)`|Strict validation against the format set in `DataFormat`|


### Example
```javascript
// Treat invalid date data as blank when retrieving a specific column
options.Cols = [
    ...
    {Type: "Date", DateStrictMode: 1 Format: "yyyy.MM.dd", DataFormat: "yyyyMMdd", Name: "enterDate", Width: 120 ...},
    ...
];
```

### Read More
- [DataFormat col](/docs/props/col/data-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.12|Feature added|
