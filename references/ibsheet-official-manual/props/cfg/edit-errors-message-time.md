---
KEY: editErrorsMessageTime
KIND: config-property
PATH: props/cfg/edit-errors-message-time
ALIAS_EN: duration, display, time, error, messages, occur, operating, editing
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/edit-errors-message-time
---
# EditErrorsMessageTime ***(cfg)***

> Sets the duration (display time) of error messages that occur when operating and editing the sheet.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Message duration (`default: 1000, in milliseconds (ms)`)|


### Example
```javascript
options.Cfg = {
  EditErrorsMessageTime: 1500,     // Set error messages to display for 1500ms
  ...
};
```

### Read More
- [showMessageTime method](/docs/funcs/core/show-message-time)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
