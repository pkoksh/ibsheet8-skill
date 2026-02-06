---
KEY: resultMask
KIND: column-property
PATH: props/col/result-mask
ALIAS_EN: javascript, regular, expression, validate, entered, characters, cell, editing
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/result-mask
---
# ResultMask ***(col)***

> Sets a JavaScript regular expression to validate the entered characters when cell editing ends.

> The regular expression validation logic is the same as [EditMask](./edit-mask).
>
> When characters that do not match the regular expression are entered, the message set in the [ResultMessage](./result-message) property is displayed on screen.

> You can configure the follow-up handling when an invalid value is entered through the return value of the [onResultMask](/docs/events/on-result-mask) event.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|JavaScript regular expression string|

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
- [ResultText col](./result-text)
- [ResultMessage col](./result-message)
- [EditMask col](./edit-mask)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
