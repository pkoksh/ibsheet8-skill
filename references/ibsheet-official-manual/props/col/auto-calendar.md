---
KEY: autoCalendar
KIND: column-property
PATH: props/col/auto-calendar
ALIAS_EN: whether, display, calendar, user, enters, edit, mode, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/auto-calendar
---
# AutoCalendar ***(col)***
> Sets whether to display a calendar when the user enters edit mode for a cell with [Type](/docs/appx/type) Date.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Feature disabled (`default`)|
|`1(true)`|Displays a calendar when editing|


### Example
```javascript
// Apply AutoCalendar
options.Cols = [
    ...
    {Type: "Date", Name: "sa_enterDate", Format: 'MM-dd-yyyy HH:mm', AutoCalendar: 1, ...},
    ...
];
```

### Read More
- [AutoCalendar cfg](/docs/props/cfg/auto-calendar)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
