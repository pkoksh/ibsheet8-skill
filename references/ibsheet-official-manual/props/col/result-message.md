---
KEY: resultMessage
KIND: column-property
PATH: props/col/result-message
ALIAS_EN: content, display, div, layer, popup, input, violates, resultmask
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/result-message
---
# ResultMessage ***(col)***

> Sets the content to display as a DIV layer popup when input violates the [ResultMask](./result-mask).



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Warning message content to display when invalid content is entered|

### Example
```javascript
// Email address validation
options.Cols = [
    ...
    {Type: "Text",
        ResultMask: "^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$",
        ResultMessage: "Please check the email address.",
        ResultMessageTime: 800,
        Name:"sa_email", Width: 120 ...},
    ...
];
```
### Read More
- [ResultText col](./result-text)
- [ResultMessageTime col](./result-message-time)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
