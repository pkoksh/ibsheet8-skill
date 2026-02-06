---
KEY: moveMessage
KIND: config-property
PATH: props/cfg/move-message
ALIAS_EN: whether, sheet, message, window, dragged, movemessage, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/move-message
---
# MoveMessage ***(cfg)***

> Sets whether the sheet message window can be dragged.  

> When set to `1(true)`, the user can move the message window by dragging.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Message window cannot be dragged (`default`)|
|`1(true)`|Message window can be dragged|


### Example
```javascript
options.Cfg = {
  MoveMessage: 0,    // Enable message window dragging
  ...
};
```

### Read More
- [SuppressMessage cfg](./suppress-message)
- [MessageWidth cfg](./message-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
