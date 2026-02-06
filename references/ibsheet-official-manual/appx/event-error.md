---
KEY: eventError
KIND: appendix
PATH: appx/event-error
ALIAS_EN: error, object, contains, information, occurs, event, invocation, appendix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/event-error
---
# Event Error Object ***(appendix)***
> An error object that contains error information when an error occurs during event invocation


> When an error occurs during the onBeforeChange or onResultMask event invocation, the error information is set in the error object.

### Properties
|Name| Type | Description |
|----------|-----|-------|
|Action |`string`|The action that caused the error|
|Changes |`object`|An array containing information about cases where a different value is returned from the user's attempt when trying to change a cell value (ex [[message1, row1, col1],[message2, row2, col2],...] )|
|Errors |`object`|An array containing position information and error message information for cells where an invalid value was attempted to be set (ex [[message1, row1, col1],[message2, row2, col2],...] )|


### Possible Action Values


|Name| Description |
|-----------------|-----------|
|Clear|When clearing a cell value|
|Move|When moving cells in the focused area|
|Copy|When copying cells in the focused area|
|Fill|When executing auto-complete for a cell value|
|Paste|When attempting to paste clipboard values into a cell|
|Formula|When attempting a Formula calculation|
|Validate|When executing validation according to configured masking options|

<!--!
### Example
```js
```
!-->

### Read More

- [onBeforeChange event](/docs/events/on-before-change)
- [onResultMask event](/docs/events/on-result-mask)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
