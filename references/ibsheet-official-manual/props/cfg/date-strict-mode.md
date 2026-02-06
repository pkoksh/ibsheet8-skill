---
KEY: dateStrictMode
KIND: config-property
PATH: props/cfg/date-strict-mode
ALIAS_EN: dataformat, date, type, retrieval, format, length, match, invalid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/date-strict-mode
---
# DateStrictMode ***(cfg)***

> When a `DataFormat` is set for a date type during retrieval, if the format and length do not match or an invalid date is retrieved, it is treated as blank.

> For example, if `DataFormat` is set to "yyyyMMdd" and a value of "88" is retrieved, the cell value will be treated as blank.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not perform strict validation (`default`)|
|`1(true)`|Perform strict validation against the format set in `DataFormat`|


### Example
```javascript
// Treats invalid date data as blank when retrieving.
options.Cfg = {
    DateStrictMode: 1
};
options.Cols = [
    ...
    // DataFormat must be set in order to use DateStrictMode.
    {Type: "Date", Format: "yyyy.MM.dd", DataFormat: "yyyyMMdd", Name: "enterDate", Width: 120 ...},
    ...
];
```

### Read More
- [DataFormat col](/docs/props/col/data-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.12|Feature added|
