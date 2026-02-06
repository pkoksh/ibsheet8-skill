---
KEY: autoCalendar
KIND: config-property
PATH: props/cfg/auto-calendar
ALIAS_EN: whether, show, calendar, user, enters, edit, mode, cells
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/auto-calendar
---
# AutoCalendar ***(cfg)***
> Sets whether to show a calendar when the user enters edit mode for all cells with [Type](/docs/appx/type) of `Date`.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Feature disabled (`default`)|
|`1(true)`|Show calendar when editing|


### Example
```javascript
// Automatically open the calendar when editing all Date type columns.
options.Cfg = {
    AutoCalendar: true
};
```

### Read More
- [AutoCalendar col](/docs/props/col/auto-calendar)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
