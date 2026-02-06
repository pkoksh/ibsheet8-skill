---
KEY: autoSelect-Ym
KIND: config-property
PATH: props/cfg/auto-select-Ym
ALIAS_EN: year, month, calendars, autoselectym, confirm, button, disappears, calendar
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/auto-select-Ym
---
# AutoSelectYm ***(cfg)***
> For year-month calendars, when `AutoSelectYm` is set to `1`, the confirm button disappears from the year-month calendar and values can be entered by clicking a month.

> When `AutoSelectYm` is set to `2`, the confirm button remains visible and values can be entered by clicking a month.

###
[When `AutoSelectYm: 0 or 2` is set] 

![Download](/assets/imgs/autoselectNon.png)
<!-- IMAGE: Screenshot/Example Image - Download --> 

[When `AutoSelectYm: 1` is set] 

![Download](/assets/imgs/AutoSelectYm.png)
<!-- IMAGE: Screenshot/Example Image - Download --> 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Values can be entered using the confirm button. (`default`)|
|`1`|The confirm button disappears and values can be entered by clicking a month. |
|`2`|The confirm button is present and values can be entered by clicking a month. |

### Example
```javascript
options.Cfg = {
   // Confirm button disappears, enter value by clicking month
   "AutoSelectYm": 1
};
```

### Read More
- [CalendarButtons col](/docs/props/col/calendar-buttons)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
|core|8.0.0.19|Option 2 behavior added|
