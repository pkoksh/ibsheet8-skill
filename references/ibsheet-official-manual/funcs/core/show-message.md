---
KEY: showMessage
KIND: method
PATH: funcs/core/show-message
ALIAS: sheet.showMessage, showMessage()
ALIAS_EN: displays, message, dialog, center, sheet, area, showmessage, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-message
---
# showMessage ***(method)***
> Displays a message `Dialog` in the center of the sheet area. 

> The sheet is disabled until the message is removed. 

> To close the message after a specific time, or to display buttons such as a confirm button on the message, please refer to the [showMessageTime()](./show-message-time) function.
> The [onShowMessage event](/docs/events/on-show-message) event is triggered before the message `Dialog` opens.

###
![showMessage](/assets/imgs/showMessage.png "Displays a message dialog on the sheet area")
<!-- IMAGE: Screenshot/Example Image - showMessage -->



### Syntax
```javascript
void showMessage( message, importance, type );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|message|`string`|Required|Message content to be displayed as a dialog on the sheet|
|importance|`number`|Optional|Message importance level (the value must be greater than the `Cfg` setting `SuppressMessage`(`default: 3`) property value set during sheet initialization for the message to appear on screen)|
|type|`number`|Optional|Whether to cover the sheet with a semi-transparent layer when the message dialog is created
`0`:Not covered (`default`)
`1`:Covered|

### Return Value
***none***

### Example
```javascript
function popup(){
  sheet.showMessage({message:"Payment deadline has been completed.", importance:4, type:1});
}
```

### Read More

- [showMessageTime method](./show-message-time)
- [hideMessage method](./hide-message)
- [SuppressMessage cfg](/docs/props/cfg/suppress-message)
- [onShowMessage event](/docs/events/on-show-message)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
