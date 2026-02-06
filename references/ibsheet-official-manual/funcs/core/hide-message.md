---
KEY: hideMessage
KIND: method
PATH: funcs/core/hide-message
ALIAS: sheet.hideMessage, hideMessage()
ALIAS_EN: removes, message, dialog, opened, showmessage, show, hidemessage, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/hide-message
---
# hideMessage ***(method)***
> Removes the message dialog opened by [showMessage](./show-message).

###
![hideMessage](/assets/imgs/showMessage.png "Message dialog displayed on the sheet area")
<!-- IMAGE: Screenshot/Example Image - hideMessage -->

### Syntax
```javascript
void hideMessage();
```

### Return Value
***none***

### Example
```javascript
function popup(){
  sheet.showMessage({message:"The payment deadline has expired.",importance:4,type:1});
    setTimeout(function(){sheet.hideMessage()} , 1000);
}
```

### Read More
- [showMessage method](./show-message)
- [onHideMessage event](/docs/events/on-hide-message)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
