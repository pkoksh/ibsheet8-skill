---
KEY: setMessage
KIND: method
PATH: funcs/core/set-message
ALIAS: sheet.setMessage, setMessage()
ALIAS_EN: new, message, sheet, setmessage, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-message
---
# setMessage ***(method)***
> Sets a new message for the sheet.
> Through the returned object, you can check the settings/changes of the message.

### Syntax
```javascript
object setMessage( key, type, message );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|key|`string`|Required|Message name|
|type|`string`|Required|Message type
Select from `'Alert'`, `'Text'`(`default`)|
|message|`string`|Required|Message content|


### Return Value
***object***

### Example
```javascript
// Set a sheet message.
var result = sheet.setMessage("Warning", "Text", "Invalid value.");
```

### Read More
- [getMessage method](./get-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
