---
KEY: gmt
KIND: column-property
PATH: props/col/gmt
ALIAS_EN: reference, timezone, column, type, docs, appx, date, gmt
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/gmt
---
# GMT ***(col)***
> Sets the reference timezone when the column [Type](/docs/appx/type) is `Date`.

> Converts the retrieved time to UTC time for display.

> This is only the value displayed in the sheet and is unrelated to the actual value.
For example, if the retrieved data is "2017-05-25 14:30" and this property value is set to 1, the sheet will display "2017-05-25 05:30" (because Korea is GMT +9).

> However, if you modify the value to "2017-05-25 06:30" and save, the actual data transmitted will be "2017-05-25 15:30".

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|User PC's timezone (`default`)|
|`1(true)`|GMT/UTC timezone|


### Example
```javascript
// View in UTC
options.Cols = [
    ...
    {Type: "Date", Name: "sa_enterDate", Format: 'MM-dd-yyyy HH:mm',DataFormat: "yyyyMMddHHmmss", GMT: 1 ...},
    ...
];
```

### Try it
- [Set to 1](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/GMT-1/)

### Read More
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
