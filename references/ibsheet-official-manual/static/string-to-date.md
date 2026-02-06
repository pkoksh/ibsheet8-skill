---
KEY: stringToDate
KIND: static-member
PATH: static/string-to-date
ALIAS_EN: parses, string, specified, format, returns, javascript, date, object
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/string-to-date
---
# stringToDate ***(static)***

> Parses a string in the specified format and returns it as a javascript `Date object`.

### Syntax
```javascript
object IBSheet.stringToDate(dateStr, format);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|dateStr|`string`|Required|Date format string (ex:"2018-02-23" or "30/04/2015"|
|format|`string`|Required|Format to parse|


### Return Value
***object*** : javascript Date object

### Example
```javascript
  var dateObj = IBSheet.stringToDate("20180226", "yyyyMMdd");
  //Mon Feb 26 2018 00:00:00 GMT+0900 (Korea Standard Time)

  var dateObj = IBSheet.stringToDate("15-05-2019", "dd-MM-yyyy");
  //Wed May 15 2019 00:00:00 GMT+0900 (Korea Standard Time)
```
### Read More
- [dateToString static](/docs/static/date-to-string)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
