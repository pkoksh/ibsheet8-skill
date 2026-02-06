---
KEY: resultMessage
KIND: cell-property
PATH: props/cell/result-message
ALIAS_EN: content, display, div, layer, popup, input, violating, resultmask
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/result-message
---
# ResultMessage ***(cell)***
> Sets the content to display as a DIV layer popup when input violating the [ResultMask](./result-mask) is entered.



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Warning message content to display when invalid input is entered|

### Example
```javascript
// Email address validation
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ResultMask", "^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$");
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ResultMessage", "Please check the email address.")
sheet.setAttribute(sheet.getRowById("AR99"), "CLS","ResultMessageTime", 800)
```
### Read More
- [ResultText cell](./result-text)
- [ResultMessageTime cell](./result-message-time)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
