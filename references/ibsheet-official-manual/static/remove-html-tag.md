---
KEY: removeHtmlTag
KIND: static-member
PATH: static/remove-html-tag
ALIAS_EN: removes, html, tag, format, strings, input, string, returns
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/remove-html-tag
---
# removeHTMLTag ***(static)***

> Removes HTML Tag format strings from the input string and returns the result.

### Syntax
```javascript
string IBSheet.removeHTMLTag(html);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|html|`string`|Required|Target string|


### Return Value
***string*** : String with HTML Tags removed

### Example
```javascript
  var string = IBSheet.removeHTMLTag("<div><p>Hello.
Hello, World~!</p></div>");
  // "Hello.Hello, World~!"
```
### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
