---
KEY: onReadCanEditDate
KIND: event
PATH: events/on-read-can-edit-date
ALIAS_EN: event, called, date, generated, within, calendar, displaying, popup
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-read-can-edit-date
---
# onReadCanEditDate ***(event)***
> Event called for every date generated within the calendar when displaying the calendar popup.

> Since it is called for every date, executing heavy operations may cause slowdowns.

> You can return `True/False` to select whether a date can be used.

> When `False` is returned, a strikethrough is applied to the date and the user cannot select it.

> When returning an `array` type, you can specify a CSS Class based on `True/False`.

### Syntax

```
    onReadCanEditDate : function(paramObject) {

    }
or
    sheet.bind("onReadCanEditDate" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the calendar popup will be displayed|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the calendar popup will be displayed|
|col|`string`|Column name of the cell where the calendar popup will be displayed|
|date|`date`|Date to be displayed in the calendar (JavaScript date object)|

### Return
***mixed***( `boolean` | `array` )

### Example
`boolean return`
```javascript
options.Events = {
    onReadCanEditDate:function(evtParam){
        // Display strikethrough on all dates except Dec 13 ~ Dec 18 to indicate they are not selectable
        var date = evtParam.date;
        if ((date.getMonth()+1) == 12 && (date.getDate() >= 13 && date.getDate() <= 18)) {
            return true;
        }
        return false;
    }
}
```
`array return`
```css
.NoEdit {
  background-color: #f5e4f2;
}
.CanEdit {
  background-color: #baebbd;
}
```
```javascript
options.Events = {
    onReadCanEditDate:(evtParam) => {
        var date = evtParam.date;
        // Selectable from the 13th to the 18th
        if ((date.getDate() >= 13 && date.getDate() <= 18)) {
          return [true, "CanEdit"];
        }
        return [false, "NoEdit"];
    }
}
```

### Read More
- [onReadDate event](./on-read-date)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.27|Array return feature added|
