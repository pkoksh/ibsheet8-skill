---
KEY: onShowCalenderYm
KIND: event
PATH: events/on-show-calender-ym
ALIAS_EN: event, called, years, months, generated, within, year, month
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-show-calender-ym
---
# onShowCalendarYm ***(event)***
> Event called for all years/months generated within the year/month calendar when displaying the calendar popup.

> Since it is called for all years/months, executing heavy operations may cause slowdowns.

> You can return `True/False` to select whether a year/month can be used.

> When `False` is returned, a strikethrough is applied to the year/month and the user cannot select it.

![onShowCalendarYm](/assets/imgs/onShowCalendarYm.png)
<!-- IMAGE: Screenshot/Example Image - onShowCalendarYm -->

### Syntax

```
    onShowCalendarYm : function(paramObject) {

    }
or
    sheet.bind("onShowCalendarYm" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the year/month calendar popup will be displayed|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the year/month calendar popup will be displayed|
|col|`string`|Column name of the cell where the year/month calendar popup will be displayed|
|year|`number`|Year to be displayed in the year/month calendar|
|month|`number`|Month to be displayed in the year/month calendar (returns <b>null</b> when the year is being drawn)|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onShowCalendarYm:function(evtParam){
        // Display strikethrough on all years/months except Jan 2013 ~ Apr 2013 to indicate they are not selectable
        if (evtParam.year == 2013 && (evtParam.month == null || (evtParam.month >= 1 && evtParam.month <= 4))) {
            return true;
        }
        return false;
    },
    onShowCalendarYm:function(evtParam){
        // Display strikethrough on all months except Jan ~ Apr to indicate they are not selectable (all years are selectable)
        if (evtParam.month == null || (evtParam.month >= 1 && evtParam.month <= 4)) {
            return true;
        }
        return false;
    },
    onShowCalendarYm:function(evtParam){
        // Display strikethrough on all years/months except 2013 to indicate they are not selectable (all months displayed when 2013 is selected are selectable)
        if (evtParam.year == 2013) {
            return true;
        }
        return false;
    }
}
```

### Read More
- [onReadCanEditDate event](./on-read-can-edit-date)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.9|Feature added|
