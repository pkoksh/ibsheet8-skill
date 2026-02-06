---
KEY: dateToString
KIND: static-member
PATH: static/date-to-string
ALIAS_EN: converts, date, object, new, unix, time, milliseconds, specified
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/date-to-string
---
# dateToString ***(static)***

> Converts a date object (`new Date()`) or Unix time (milliseconds from 1970/1/1 to the specified date) to a string in the specified date format.

### Syntax
```javascript
string IBSheet.dateToString(time, format);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|time|`mixed`( `date` \| `number` )|Required|A javascript `Date() object` or a numeric value obtained from `new Date().getTime()`|
|format|`string`|Required|Date format to apply masking (Refer to [Format appendix](/docs/appx/format))|


### Return Value
***string*** : Masked string

### Example
```javascript
  var maskedDate = IBSheet.dateToString(new Date(2019,2,1), "yyyy-MM-dd");
  //"2019-03-01"

  var maskedDate = IBSheet.dateToString(1551155311957, "yyyy/MM/dd dddd");
  //"2019/02/26 Tuesday"
```
### Read More
- [stringToDate static](/docs/static/string-to-date)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
