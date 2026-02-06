---
KEY: stringToNumber
KIND: static-member
PATH: static/string-to-number
ALIAS_EN: parses, string, specified, format, returns, javascript, number, stringtonumber
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/string-to-number
---
# stringToNumber ***(static)***

> Parses a string in the specified format and returns it as a javascript number.

### Syntax
```javascript
number IBSheet.stringToNumber(numberStr, format);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|numberStr|`string`|Required|Number format string (ex:"7,314.1654")|
|format|`string`|Required|Format to parse|


### Return Value
***number***

### Example
```javascript
  var number = IBSheet.stringToNumber('7,314.1654', "#,##0.00");
  // 7314.1654
```
### Read More
- [numberToString static](/docs/static/number-to-string)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
