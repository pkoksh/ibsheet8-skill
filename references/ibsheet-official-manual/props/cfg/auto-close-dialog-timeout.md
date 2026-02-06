---
KEY: autoCloseDialogTimeout
KIND: config-property
PATH: props/cfg/auto-close-dialog-timeout
ALIAS_EN: cfg, autoclosedialog, automatically, close, dialog, delay, time, closes
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/auto-close-dialog-timeout
---
# AutoCloseDialogTimeout ***(cfg)***

> When `(Cfg) AutoCloseDialog` is set to automatically close a dialog, sets the delay time before the dialog automatically closes. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Sets the delay time before the dialog automatically closes.|


### Example
```javascript
options = {
  "Cfg":{
    "AutoCloseDialogTimeout": 1000,  // Set dialog to automatically close after 1 second
  }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.24|Feature added|
