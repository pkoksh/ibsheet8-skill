---
KEY: showCalendar
KIND: static-member
PATH: static/show-calendar
ALIAS_EN: calendar, control, available, setting, column, type, date, outside
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/show-calendar
---
# showCalendar ***(static)***
> The calendar control available when setting a column type to `Date` can also be used outside the sheet around input elements.

> Various features are available through the `API` and `events` provided by the calendar control.


### Syntax
```javascript
object IBSheet.showCalendar(calOption, position, callback);
```


## Parameter Features

### **1. calOption(object)**

Through `calOption`, you can set the initial date, buttons to display at the bottom, whether to allow multiple date selection, etc.

|Name|Type|Description|
|---|---|---|
|Date|`mixed`( `string` \| `number` \| `date` )|The initial date to display. 
Can be entered in the following 3 formats:
1) String format (used with `Format`)
2) `timestamp` number based on January 1, 1970 (ex: same number as `new Date().getTime()`)
3) javascript `Date object` (ex: a `Date` object like `new Date(year, month-1, day, hour, minute, second)`) |
|Format|`string`|Used together with `Date` when entering `Date` as a string, defining the format of `Date`. 
 You can combine reserved words such as `y(year), M(month), d(day), H(hour), m(minute), s(second)` with non-reserved characters. 
 ex: `{Date: "2020-04-10", Format: "yyyy-MM-dd"}` |
|Range|`boolean`|Whether to allow selecting multiple dates by dragging within the calendar
`0(false)`: Dragging not allowed (`default`)
`1(true)`: Dragging allowed
!["Drag selection"](/assets/imgs/showCalendar1.png "Drag selection")
<!-- IMAGE: Screenshot/Example Image - "Drag selection" -->|
|TimeFormat|`string`|Sets whether to display `hour, minute, second` values at the bottom of the calendar. You can display only hours and minutes by setting it like 'hh:mm', or display hours, minutes, and seconds by setting it like 'hh:mm:ss'. 
 Only applicable to calendars that display year, month, and day without `Range` set, and can only be set in **'hh:mm', 'hh:mm:ss' format (or formats with '/', '-', etc. between hh, mm, ss)**. 
 ex: `{Date: "2020-04-10", Format: "yyyy-MM-dd", TimeFormat: "hh:mm:ss"}` 
!["Hour Minute Second"](/assets/imgs/showCalendar2.png "Hour Minute Second")
<!-- IMAGE: Screenshot/Example Image - "Hour Minute Second" -->|
|ReadOnly|`boolean`|Makes the calendar view-only with selection disabled.
`0(false)`: Selection disabled
`1(true)`: Selection enabled (`default`)|
|Buttons|`number`|Sets the buttons to display at the bottom of the calendar as a number.
1 : Today
2 : Clear
4 : Ok
8 : Yesterday
To display the 'Today' button and 'Ok' button, enter 5 (1+4).
!["Calendar buttons"](/assets/imgs/showCalendar3.png "Calendar buttons")
<!-- IMAGE: Screenshot/Example Image - "Calendar buttons" -->|
|Buttons2|`boolean`|Whether to display the select button at the bottom of the year-month calendar format
`0(false)`: Do not display button
`1(true)`: Display button (`default`)
!["Year-month calendar button"](/assets/imgs/showCalendar4.png "Year-month calendar button")
<!-- IMAGE: Screenshot/Example Image - "Year-month calendar button" -->|
|RowsPrev|`number`|Feature to show additional weeks from the previous month
!["Previous/Next month view"](/assets/imgs/showCalendar5.png "Previous/Next month view")
<!-- IMAGE: Screenshot/Example Image - "Previous/Next month view" -->
[Screen when RowsPrev:2, RowsNext:3 is set]|
|RowsNext|`number`|Feature to show additional weeks from the next month|
|Texts|`object`|Sets the text to display on calendar buttons.
If not set, they are displayed in English (Today, Ok, etc.).
ex: `{ Ok: "Select", Clear: "Clear", Today: "Today", Yesterday: "Yesterday"}`|
|Modal|`boolean`|Display the calendar in modal format
`0(false)`: Display as modal
`1(true)`: Do not display as modal (`default`)|
|CloseOut|`boolean`|Whether to enable auto-close when the mouse cursor leaves the calendar
`0(false)`: Do not close (`default`)
`1(true)`: Close |
|CloseTimeout|`number`|When using the `CloseOut` feature, sets how many seconds after the mouse cursor leaves before closing. (in ms, `default: 300ms`)|
|Weeks|`number`|Sets whether to display week numbers in the calendar (`default: 0`)|
|Class|`string`|Theme setting for the calendar, `Class: css prefix("IB") + "Pick"`|
|ScrollUpdate|`boolean`|Sets whether the calendar window follows when the body area scrolls.
`0(false)`: Does not follow (`default`)
`1(true)`: Follows|
|IgnoreSize|`boolean`|The calendar's Size operates independently from the Cfg `Size` setting.
`0(false)`: Apply calendar with same `Size` setting value (`default`)
`1(true)`: Always apply as Size:"Normal" regardless of `Size`|
|StyleSize|`string`|Applies the Size of the calendar. The same option values as [Size cfg](/docs/props/cfg/size) can be specified.|
|MsgLocale|`string`|Sets the Language Prefix of the language (message file) to use in the calendar. The same option values as [MsgLocale cfg](/docs/props/cfg/msg-locale) can be specified.|

### **2. position(object)**

Sets the position where the calendar opens through the position property.

(For details, refer to [Position appendix](/docs/appx/position))


### **3. callback(function)**

Sets the callback function that fires when a specific date is clicked or the select button is pressed in the calendar.

The ms numeric value for the selected date is returned as a function argument.

When selecting multiple dates within the calendar through the `Range` property in `calOption`, ms numeric values are returned with "~" as a delimiter.

Callback usage example
```javascript
function callback(DD) {
    var format = "yyyy/MM/dd";
    var d_str = "";
    if (DD != "") {
        if (isNaN(DD)) {
            // When selecting multiple dates through Range (1549206000000;1549551600000~1549897200000;1550070000000~1550761200000)
            var pd = DD.split(";");
            for (var i = 0; i < pd.length; i++) {
                if (pd[i].indexOf('~') > -1) {
                    var rdate = pd[i].split("~");
                    pd[i] = IBSheet.dateToString(parseInt(rdate[0]), format) + "~" + IBSheet.dateToString(parseInt(rdate[1]), format);
                } else pd[i] = IBSheet.dateToString(parseInt(pd[i]), format);
            }
            d_str = pd.join(";");

        } else {
            // When selecting a single date (1550156400000 number is passed)
            d_str = IBSheet.dateToString(DD, format);
        }
    }
    console.log(d_str);
}
IBSheet.showCalendar(null, {
    Mouse: 1
}, callback);
```

## Calendar Events

Configure logic for events such as creating a calendar control, selecting a date, or clicking a button in the created calendar.

Events are configured together when setting `calOption` above.

Event usage example
```javascript
var calOption = {
    Buttons: 1,
    OnCanEditDate: function (date) {
        // Prevent selection if the date is earlier than 2019.01.20
        var sdate = new Date(2019, 0, 20, 0, 0, 0);
        if (date < sdate) {
            return false;
        } else {
            return true;
        }
    }
}
IBSheet.showCalendar(calOptions, {
    Mouse: 1
});
```
!["Specific date selection disabled"](/assets/imgs/calCantSelect.png "Specific date selection disabled")
<!-- IMAGE: Screenshot/Example Image - "Specific date selection disabled" -->


|Event Name|Trigger Timing|Parameter|return|
|---|---|---|---|
|`OnClose`|Fires when the calendar control is closed|||
|`OnSave`|Fires when a specific date is selected in the calendar
When connecting a function through the `callback` argument, it replaces this event functionality.|Selected date ms|Cancels the selection when `0(false)` is returned|
|`OnChange`|Fires when selecting multiple dates by dragging using the `Range` property|Selected date ms|
|`OnCanEditDate`|Fires for every date when the calendar control opens|javascript `Date object`|Marks the date as unselectable when `0(false)` is returned|
|`OnGetCalendarDate`|Fires for every date when the calendar control opens|1. **date** javascript `Date object` for the date
2. **text** date to be displayed on screen
3. **classes** css class array to be applied to each date [normal, hover, selected, selected+hover]
4. **range** array of start date and end date [startdate, enddate] when multiple dates are selected using the calendar's `Range` property, `undefined` when `Range` property is not used |Text to display for the date. If no text is provided, `undefined` is displayed for that date area.|
|`OnButtonClick`|Fires when a button at the bottom of the calendar is clicked|Number value based on button type
`1 : OK, 2 : Cancel, 3 : Today, 4 : Yesterday`|Return the button number received as `Parameter`, cancels the click when `0(false)` is returned|
|`OnClickWeek`|Fires when a week number in the calendar is clicked|1. **year** year of the clicked week 
 2. **week** clicked week number|


## Closing the Calendar Control

To close the currently open calendar control through an external function rather than through user clicking, do the following.
```javascript
var cal = IBSheet.showCalender(); // Create calendar control
cal.Close(); // Close
```


### Return Value
***object*** : Calendar object


### Example
```html
<script>
function showCal(dateInputElement) {
    var dateInput = document.getElementById(dateInputElement);
    var calOption = {
        Date: dateInput.value
    };
    var position = {
        Mouse: 1
    };
    var callback = function (rtnDate) {
        var format = "yyyy/MM/dd";
        var d_str = "";
        if (rtnDate != "") {
            if (isNaN(rtnDate)) {
                // When selecting multiple dates through Range (1549206000000;1549551600000~1549897200000;1550070000000~1550761200000)
                var pd = rtnDate.split(";");
                for (var i = 0; i < pd.length; i++) {
                    if (pd[i].indexOf('~') > -1) {
                        var rdate = pd[i].split("~");
                        pd[i] = IBSheet.dateToString(parseInt(rdate[0]), format) + "~" + IBSheet.dateToString(parseInt(rdate[1]), format);
                    } else pd[i] = IBSheet.dateToString(parseInt(pd[i]), format);
                }
                d_str = pd.join(";");

            } else {
                // When selecting a single date (1550156400000 number is passed)
                d_str = IBSheet.dateToString(rtnDate, format);
            }
        }
        dateInput.value = d_str;
    }
    // Open calendar
    var calObj = IBSheet.showCalendar(calOption, position, callback);
}
</script>
<input type="text" id="startDate" value="2018-09-25"><img src="cal.gif" onclick="showCal('startDate')">
```


### Read More
[Position appendix](/docs/appx/position)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.34|ScrollUpdate option default value changed|
|core|8.1.0.88|`IgnoreSize`, `StyleSize` options added to `calOption`|
|core|8.1.0.89|`OnClickWeek` event added|
