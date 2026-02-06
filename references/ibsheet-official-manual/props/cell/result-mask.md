---
KEY: resultMask
KIND: cell-property
PATH: props/cell/result-mask
ALIAS_EN: javascript, regular, expression, validate, entered, characters, cell, editing
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/result-mask
---
# ResultMask ***(cell)***

> Sets a JavaScript regular expression to validate the entered characters when cell editing ends.

> The validation logic for the regular expression is the same as [EditMask](/docs/props/cell/edit-mask).
>
> When characters that do not match the regular expression are entered, the message set via the [ResultMessage](/docs/props/cell/result-message) property is displayed on screen.

> You can configure the follow-up handling for invalid input through the return value of the [onResultMask](/docs/events/on-result-mask) event.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|JavaScript regular expression string|

### Example
```javascript
// Apply property within loaded data (column name: CLS)
{
    data:[
        // Only email addresses can be entered
        {... ,CLSResultMask:"^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$",
          CLSResultText:"Please check the email address.", ...}
    ]
}
```
### Read More
- [ResultText cell](/docs/props/cell/result-text)
- [ResultMessage cell](/docs/props/cell/result-message)
- [Error cell](/docs/props/cell/error)
- [EditMask cell](/docs/props/cell/edit-mask)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
