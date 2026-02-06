---
KEY: resultMessageTime
KIND: cell-property
PATH: props/cell/result-message-time
ALIAS_EN: duration, resultmessage, result, message, displayed, resultmessagetime, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/result-message-time
---
# ResultMessageTime ***(cell)***

> Sets the duration (in ms) for which the [ResultMessage](./result-message) will be displayed.

> The message is displayed for the specified duration and then automatically disappears.

> If this property is not set, the message will be displayed until the "OK" button is clicked.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Duration for the message to be displayed (in ms)|

### Example
```javascript
// Email address validation
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ResultMask", "^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$");
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ResultMessage", "Please check the email address.");
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ResultMessageTime", 800);
```

### Read More
- [ResultText cell](./result-text)
- [ResultMessage cell](./result-message)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
