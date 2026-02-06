---
KEY: suppressMessage
KIND: config-property
PATH: props/cfg/suppress-message
ALIAS_EN: types, status, messages, provided, sheet, displayed, suppressmessage, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/suppress-message
---
# SuppressMessage ***(cfg)***

> Sets the types of status messages provided by the sheet that should not be displayed.  

> **<mark>Caution</mark>: When there are many sheets, the `SuppressMessage: 0` setting may cause rendering delays.**



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Display all messages generated within the sheet|
|`1`|Do not display messages generated during sheet loading and updating. Rendering messages are still displayed.|
|`2`|Option 1 + Do not display information messages about internal sheet calculations such as sorting|
|`3`|Option 2 + Do not display page loading and rendering, search, and save messages (`default`)|
|`4`|Option 3 + Do not display error messages when the sheet is not displayed properly|


### Example
```javascript
options.Cfg = {
  SuppressMessage: 0,       // Display all messages generated within the sheet
  ...
};
```

### Read More
- [showMessage method](/docs/funcs/core/show-message)
- [showMessageTime method](/docs/funcs/core/show-message-time)
- [showProgress method](/docs/funcs/core/show-progress)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
