---
KEY: interval
KIND: column-property
PATH: props/col/interval
ALIAS_EN: invoking, calendar, date, type, column, increment, decrement, unit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/interval
---
# Interval ***(col)***
> When invoking the calendar for a `Date` type column, sets the increment/decrement unit for the minute/second adjustment buttons, and for the [`TimePicker`](/docs/props/col/time-picker) time adjustment minute/second buttons.

> You can set minutes and seconds separately using `Minute` and `Second`.

> When adjusting minutes/seconds while the cell has a value, it is adjusted to the nearest multiple of the `Interval` value.

> When `Init` is set to `1(true)`, the current time displayed in an empty cell will be adjusted according to the `Interval` value.


### Type
`object`

### Options
|Name|Type|Required|Description|
|----------|-----|---|----|
|`Minute`|`number`|Optional|Sets the increment/decrement unit for minutes. (Adjusted to multiples of the input value)|
|`Second`|`number`|Optional|Sets the increment/decrement unit for seconds. (Adjusted to multiples of the input value)|
|`Init`|`boolean`|Optional|Feature to show the current time adjusted by the `Interval` value when the cell is empty (`default: 0(false)`)|

### Example
```javascript
options.Cols = [
    ...
    {Type: "Date", Width: 120, Name: "sDate_Hms",
     Format: "HH:mm:ss", EditFormat: "HHmmss", DataFormat: "HHmmss", "TimePicker": 1,
      Interval: {
         Minute: 30, // Set minute increment/decrement in multiples of 30.
         Second: 10, // Set second increment/decrement in multiples of 10.
         Init: true
      }
    },
    {Type: "Date", Width: 120, Name: "sDate_YmdHms",
     "Format": "yyyy/MM/dd HH:mm:ss","Width": 150,"EditFormat": "yyyyMMddHHmmss","DataFormat": "yyyyMMddHHmmss",
      Interval: {
         Minute: 20, // Set minute increment/decrement in multiples of 20.
         Second: 5,  // Set second increment/decrement in multiples of 5.
         Init: true
      }
    },
    ...
];
```

### Read More

- [TimePicker col](/docs/props/col/time-picker)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.6|Feature added|
|core|8.1.0.13|`Init` feature added|
