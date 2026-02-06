---
KEY: getMessage
KIND: method
PATH: funcs/core/get-message
ALIAS: sheet.getMessage, getMessage()
ALIAS_EN: retrieves, message, sheet, getmessage, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-message
---
# getMessage ***(method)***
> Retrieves a message from the sheet.

### Syntax
```javascript
string getMessage( key, type );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|key|`string`|Required|Message name|
|type|`string`|Optional|Type of message to retrieve
Select from `'Alert'`, `'Text'(default)`|


### Return Value
***String***

### Example
```javascript
// Retrieves the CanCancelChanges message content under Alert in the msg file.
var message1 = sheet.getMessage("CanCancelChanges", "Alert");

// Retrieves the Render message content under Text in the msg file.
var message2 = sheet.getMessage("Render");
```

### Read More
- [setMessage method](./set-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
