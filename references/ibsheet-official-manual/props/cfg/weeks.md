---
KEY: weeks
KIND: config-property
PATH: props/cfg/weeks
ALIAS_EN: whether, display, week, numbers, calendar, weeks, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/weeks
---
# Weeks ***(cfg)***

> Sets whether to display week numbers in the calendar.

> This is not applied when the user directly calls [showCalendar](/docs/static/show-calendar). (When calling directly, it must be set separately in the method arguments).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Do not display week numbers (`default`)
 !["Default"](/assets/imgs/weeks_0.png "Default")
<!-- IMAGE: Screenshot/Example Image - "Default" -->|
|`1`|Display week numbers
 !["Week numbers"](/assets/imgs/weeks_1.png  "Week numbers")
<!-- IMAGE: Screenshot/Example Image - "Week numbers" -->|


### Example
```javascript
options.Cfg = {
   "Weeks": 1   // Display week numbers
};
```

### Read More
- [showCalendar static](/docs/static/show-calendar)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
