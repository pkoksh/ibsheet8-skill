---
KEY: numberToString
KIND: static-member
PATH: static/number-to-string
ALIAS_EN: converts, number, masked, string, according, given, format, returns
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/number-to-string
---
# numberToString ***(static)***

> Converts a number to a masked string according to the given format and returns it.

### Syntax
```javascript
string IBSheet.numberToString(num, format);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|num|`number`|Required|Number to mask|
|format|`string`|Required|Number format to apply masking (Refer to [Format appendix](/docs/appx/format))|


### Return Value
***string*** : Masked string

### Example

```javascript
  var maskedNum = IBSheet.numberToString(7314.1654, "#,##0.00");
  //"7,314.17"
```

### Read More
- [stringToNumber static](/docs/static/string-to-number)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
