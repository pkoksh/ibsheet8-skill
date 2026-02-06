---
KEY: resultMessageTime
KIND: column-property
PATH: props/col/result-message-time
ALIAS_EN: duration, resultmessage, result, message, displayed, resultmessagetime, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/result-message-time
---
# ResultMessageTime ***(col)***

> Sets the duration for which the [ResultMessage](./result-message) is displayed (in ms).

> The message is shown for the set duration and automatically disappears.

> If this property is not set, the message will be shown until the "OK" button is clicked.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Duration for the message to be displayed (in ms)|

### Example
```javascript
// Email address validation
options.Cols = [
    ...
    {
        Type: "Text",
        ResultMask: "^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$",
        ResultMessage: "Please check the email address.",
        ResultMessageTime: 800,
        Name: "sa_email",
        Width: 120,
        ...
    },
    ...
];
```
### Read More
- [ResultText col](./result-text)
- [ResultMessage col](./result-message)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
