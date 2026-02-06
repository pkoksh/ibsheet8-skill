---
KEY: timePicker
KIND: column-property
PATH: props/col/time-picker
ALIAS_EN: creates, icon, hour, minute, second, column, clicked, time
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/time-picker
---
# TimePicker ***(col)***

> Creates an icon for the hour/minute/second column. When the icon is clicked, a time picker dialog is used instead of a calendar.


### Icon Display Conditions
> `Type: Date`

> Displayed when one of the 3 formats `EditFormat`, `Format`, `DataFormat` contains no date format and only time-related format values.

> e.g.) `HH:mm` or `HH:mm:ss`

> Follows the priority order of `EditFormat` -> `Format` -> `DataFormat`.

> e.g.) When `EditFormat: yyyy-MM-dd` and `DataFormat: HH:mm`, the TimePicker icon is not displayed.

###

![TimePicker](/assets/imgs/timepicker.png)
<!-- IMAGE: Screenshot/Example Image - TimePicker -->


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Does not create the time picker icon (`default`)|
|`1(true)`|Creates the time picker icon, uses dialog|


### Example
```javascript

// Set TimePicker for hour/minute/second column.
options.Cols = [
    ...
    {Type:"Date", Name: "Data_Hms", Format: 'HH:mm:ss', TimePicker: true}
    ...
];
```

### Read More

- [Interval col](./interval)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.26|Feature added|
