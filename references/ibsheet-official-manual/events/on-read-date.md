---
KEY: onReadDate
KIND: event
PATH: events/on-read-date
ALIAS_EN: event, called, date, generated, within, calendar, displaying, popup
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-read-date
---
# onReadDate ***(event)***
> Event called for every date generated within the calendar when displaying the calendar popup.

> Since it is called for every date, executing heavy operations may cause slowdowns.

> The date for that day within the calendar must be returned. Through the return value, you can display different text instead of the original date for specific days, or change the design such as color and boldness of specific days.

### Syntax

```
    onReadDate : function(paramObject) {

    }
or
    sheet.bind("onReadDate" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the calendar popup will be displayed|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the calendar popup will be displayed|
|col|`object`|Column name of the cell where the calendar popup will be displayed|
|date|`date`|Date to be displayed in the calendar (JavaScript date object)|
|text|`string`|Date text to be displayed in the calendar|
|classes|`array`|CSS class array to be applied to each date `[normal, hover, selected, selected+hover]`|
|range|`array`|When multiple dates are selected using the calendar's `Range` attribute, an array of start and end dates `[startdate, enddate]`. Returns `undefined` when the Range attribute is not used|

### Return
***Return the `text` parameter of each date as-is***

### Example
```javascript
options.Events = {
    onReadDate:function(evtParam){
        // Display the 15th of every month in bold orange in the calendar
        var date = evtParam.date;
        if (date.getDate() == 15) {
            return "<strong style='color:orange'>" + evtParam.text + "</strong>";
        } else {
            return evtParam.text;
        }
    }
}
```
### Read More
- [onReadCanEditDate event](./on-read-can-edit-date)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
