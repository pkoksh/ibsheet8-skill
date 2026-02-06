---
KEY: showMessageTime
KIND: method
PATH: funcs/core/show-message-time
ALIAS: sheet.showMessageTime, showMessageTime()
ALIAS_EN: displays, message, dialog, center, sheet, area, specific, duration
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-message-time
---
# showMessageTime ***(method)***
> Displays a message `Dialog` in the center of the sheet area for a specific duration.
> 
After the specific duration, the message `Dialog` automatically closes.
> 
**If the `time` property is not set, a semi-transparent layer appears below the message and it does not close until the confirm button is pressed. (Works like an alert)**
> 
When the `type` property is not set with the `time` property, it defaults to `1(true)`, and when the `time` property is set, it defaults to `0(false)`.
> The [onShowMessage event](/docs/events/on-show-message) event is triggered before the message `Dialog` opens.

###
![showMessageTime](/assets/imgs/showMessageTime.png "showMessageTime")
<!-- IMAGE: Screenshot/Example Image - showMessageTime -->

### Syntax
```javascript
void showMessageTime( message, time, func, buttons, importance, type );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|message|`string`|Required|Message content to be displayed as a dialog on the sheet|
|time|`number`|Optional|Duration for the message to be displayed (in ms). If not set or set to `0`, the message is displayed indefinitely|
|func|`function`|Optional|Callback function called when a button displayed in the message is pressed
The button's order number `1,2,3,4` is passed as `args`
ex)
 `func`:function(args) {
&nbsp;&nbsp;if(args===1){alert('first button clicked'}
 }|
|buttons|`array[string]`|Optional|Definition of buttons to be displayed together with the message
ex)
 `buttons`:['Continue', 'Cancel']|
|importance|`number`|Optional|Message importance level (the value must be greater than the `Cfg` setting `SuppressMessage`(`default: 3`) property value set during sheet initialization for the message to appear on screen)|
|type|`number`|Optional|Whether to cover the sheet with a semi-transparent layer when the message dialog is created
`0`:Not covered (`default`)
`1`:Covered|


### Return Value
***none***

### Example
```javascript
function popup() {
    sheet.showMessageTime({
    message: "Are you sure you want to proceed?",
        time: 10000,
        buttons: ["OK", "Cancel"],
        func: function (args) {
            if (args==1) {
                //OK for processing
            } else if (args==2) {
                //Cancel for processing
            }
        }
    });
}
```
### Read More
- [SuppressMessage cfg](/docs/props/cfg/suppress-message)
- [showMessage method](./show-message)
- [hideMessage method](./hide-message)
- [onShowMessage event](/docs/events/on-show-message)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.27|`type` Feature added|
