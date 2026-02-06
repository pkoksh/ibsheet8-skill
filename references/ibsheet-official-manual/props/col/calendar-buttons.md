---
KEY: calendarButtons
KIND: column-property
PATH: props/col/calendar-buttons
ALIAS_EN: buttons, displayed, bottom, calendar, shown, calendarbuttons, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/calendar-buttons
---
# CalendarButtons ***(col)***

> Sets the buttons displayed at the bottom of the calendar when it is shown.

> Multiple buttons can be displayed by using the sum of the setting values.

> For the year-month calendar, the visibility of the `"OK"` button varies depending on the [AutoSelectYm](/docs/props/cfg/auto-select-Ym) value. 


###
1. Year-Month-Day calendar

![CalendarButtons](/assets/imgs/calendarButtons.png "CalendarButtons")
<!-- IMAGE: Button Image - CalendarButtons -->

2. Year-Month calendar

![MonthCalendarButtons](/assets/imgs/monthCalendar.png "MonthCalendarButtons")
<!-- IMAGE: Screenshot/Example Image - MonthCalendarButtons -->


### Type
`number`

### Options

* Year-Month-Day calendar (`default: 0`)

|Value|Description|
|-----|-----|
|`1`|"Today" button|
|`2`|"Cancel" button|
|`4`|"OK" button|
|`8`|"Yesterday" button|

* Year-Month calendar  (`default: 4`)

|Value|Description|
|-----|-----|
|`1`|"This Month" button|
|`2`|"Cancel" button|
|`4`|"OK" button|



* Year calendar  (`default: 4`)

|Value|Description|
|-----|-----|
|`2`|"Cancel" button|
|`4`|"OK" button|



### Example
```javascript
options.Cols = [
    ...
    // Display Yesterday and Today buttons on the Year-Month-Day calendar
    {Type: "Date", Name: "sa_enterDate", CalendarButtons: 9 ...},
    ...
    // Display This Month, Cancel, and OK buttons on the Year-Month calendar
    {Type: "Date", Name: "sa_monthDate", CalendarButtons: 7, Format: "yyyy/MM" ...}
];
```

### Read More

- [AutoSelectYm cfg](/docs/props/cfg/auto-select-Ym)
- [AutoCalendar col](./auto-calendar)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
