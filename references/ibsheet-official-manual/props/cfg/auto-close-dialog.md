---
KEY: autoCloseDialog
KIND: config-property
PATH: props/cfg/auto-close-dialog
ALIAS_EN: whether, automatically, close, internal, dialogs, calendars, context, menus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/auto-close-dialog
---
# AutoCloseDialog ***(cfg)***

> Sets whether to automatically close internal dialogs (calendars, context menus, etc.) when the mouse leaves. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`false`|Does not automatically close the dialog. (`default`)|
|`true`|Automatically closes the dialog.|


### Example
```javascript
options = {
  "Cfg":{
    "AutoCloseDialog": true,  // Automatically closes internal dialogs (calendars, context menus, etc.) when the mouse leaves.
  }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.24|Feature added|
