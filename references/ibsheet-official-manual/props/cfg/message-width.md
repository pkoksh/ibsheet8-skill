---
KEY: messageWidth
KIND: config-property
PATH: props/cfg/message-width
ALIAS_EN: minimum, width, pixel, sheet, message, window, messagewidth, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/message-width
---
# MessageWidth ***(cfg)***

> Sets the minimum width (`pixel`) of the sheet message window.  

> Sets the width of the message window displayed as a `Layer popup` in the center of the sheet through methods such as [showMessage()](/docs/funcs/core/show-message) or [showMessageTime()](/docs/funcs/core/show-message-time).



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Minimum width of the message window (`default: 140`)|


### Example
```javascript
options.Cfg = {
  SuppressMessage: 0,    // Display all sheet status messages
  MessageWidth: 200,     // Set message window width to 200px
  ...
};
```

### Read More
- [SuppressMessage cfg](./suppress-message)
- [MoveMessage cfg](./move-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
