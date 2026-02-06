---
KEY: resultText
KIND: column-property
PATH: props/col/result-text
ALIAS_EN: content, display, alert, input, violates, resultmask, result, mask
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/result-text
---
# ResultText ***(col)***

> Sets the content to display as an `alert` when input violates the [ResultMask](./result-mask).




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
        ResultText: "Please check the email address.",
        Name: "sa_email", Width: 120 ...},
    ...
];
```
### Read More
- [ResultMask col](./result-mask)
- [ResultMessage col](./result-message)
- [EditMask col](./edit-mask)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
