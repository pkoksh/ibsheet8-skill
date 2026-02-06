---
KEY: centerMessage
KIND: config-property
PATH: props/cfg/center-message
ALIAS_EN: displays, messages, div, layer, sheet, center, screen, regardless
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/center-message
---
# CenterMessage ***(cfg)***
> Displays messages (div layer) from the sheet at the center of the screen regardless of sheet position.

> If this property is not set, the message is displayed at the center of the sheet object.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Display message at the center of the sheet object (`default`)|
|`1(true)`|Display message at the center of the currently visible screen|


### Example
```javascript
options = {
    "Cfg":{
      "CenterMessage": true,  // Display sheet messages at the center of the screen
    }
};
```

### Read More

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.1|Feature added|
