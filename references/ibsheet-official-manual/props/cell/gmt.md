---
KEY: gmt
KIND: cell-property
PATH: props/cell/gmt
ALIAS_EN: reference, timezone, cell, type, docs, appx, date, gmt
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/gmt
---
# GMT ***(cell)***
> Sets the reference timezone when the cell [Type](/docs/appx/type) is `Date`.

> Converts the loaded time to UTC time for display.

> This only affects the value displayed in the sheet and is unrelated to the actual value.
For example, if the loaded data is "2017-05-25 14:30" and this property is set to `1(true)`, the sheet will display "2017-05-25 05:30" (because Korea is GMT +9).

> However, if you modify the value to "2017-05-25 06:30" and save, the actual transmitted data will be "2017-05-25 15:30".

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|User PC timezone (`default`)|
|`1(true)`|GMT/UTC timezone|


### Example
```javascript
// View in UTC
{
    "data":[
    ...
    {CLS: "20190103134521", CLSFormat: 'MM-dd-yyyy HH:mm', CLSDataFormat: "yyyyMMddHHmmss", GMT: 1 ...},
    ...
];
```

### Read More

- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
