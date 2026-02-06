---
KEY: resultText
KIND: cell-property
PATH: props/cell/result-text
ALIAS_EN: content, display, alert, input, violating, resultmask, result, mask
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/result-text
---
# ResultText ***(cell)***
> Sets the content to display as an alert when input violating the [ResultMask](./result-mask) is entered.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Warning message content to display when invalid input is entered|

### Example
```javascript
// Set message for when the ResultMask property is violated in a specific cell
var ROW = sheet.getRowById("AR10");
ROW["CLSResultText"] = "Only numbers can be entered.";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});
```

### Read More
- [ResultMask cell](./result-mask)
- [ResultMessage cell](./result-message)
- [EditMask cell](./edit-mask)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
