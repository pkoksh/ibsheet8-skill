---
KEY: onShowMessage
KIND: event
PATH: events/on-show-message
ALIAS_EN: event, fires, sheet, message, occurs, onshowmessage
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-show-message
---
# onShowMessage ***(event)***
> Event that fires when a sheet message occurs.

> Fires before messages from showMessage(), showMessageTime() methods or internal sheet messages from functions like doSave() are displayed.
> Through this event, you can display project-standard designed messages instead of the sheet's default message `Dialog`. 

> Returning 1 or true prevents the original message from being displayed. (No default value)

### Syntax

```
    onShowMessage: function(paramObject) {

    }
or
    sheet.bind("onShowMessage" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the message occurred|
|messageTag|`object`|`Dom` object that displays the message|
|message|`string`|String to be shown as the message (includes `html tag`)|
|isConfirm|`boolean`|Whether it was called by [showMessageTime (method)](/docs/funcs/core/show-message-time)|
|time|`number`|`time` parameter value when called by [showMessageTime (method)](/docs/funcs/core/show-message-time)|
|buttons|`array[string]`|`buttons` parameter value set when called by [showMessageTime (method)](/docs/funcs/core/show-message-time)|
|callback|`function`|Callback method that calls the `func` set when called by [showMessageTime (method)](/docs/funcs/core/show-message-time)
Returns 1,2,3... sequentially from left to right as arguments of this function according to the number of buttons set through buttons
(For example, if there are two types of buttons, 1 or 2 is returned depending on which button was clicked.)|
|isAlert|`boolean`|Whether it was called by alert|

### Return
***boolean***

### Example
```javascript
// Example using [SweetAlert2](https://sweetalert2.github.io/)
options.Events = {
    onShowMessage: function (evtParams) {
        if (window.Swal) {
            // Handle messages differently based on showMessage vs showMessageTime.
            if (evtParams.isConfirm) {
                Swal.fire({
                    title: "<div>" + evtParams.message + "</div>", // String to display as message (including HTML Tags)
                    icon: 'warning',
                    showConfirmButton: (evtParams.buttons.indexOf("Ok") > -1), // Create OK button if it exists
                    showCancelButton: (evtParams.buttons.indexOf("Cancel") > -1), // Create Cancel button if it exists
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    timer: evtParams.time // Time parameter of showMessageTime, unit is milliseconds (ms)
                }).then((result) => {
                    if (result.value) {
                        // When confirmButton is clicked, pass the Ok button click information to the sheet via callback so that subsequent features are executed.
                        if (evtParams.callback) evtParams.callback(1);
                    } else {
                        // When cancelButton is clicked, pass the Cancel button click information to the sheet via callback so that subsequent features are not executed.
                        if (evtParams.callback) evtParams.callback(2);
                    }
                });
            } else {
                Swal.fire({
                    title: "<div>" + evtParams.message + "</div>", // String to display as message (including HTML Tags)
                    icon: 'success',
                    showConfirmButton: false // Since IBSheet does not show a confirm button for simple messages, hide Swal's button too for similar behavior.
                }).then((result) => {
                    // Must handle callback if it exists
                    if (evtParams.callback) evtParams.callback(1);

                    // When Swal is closed by click or esc key or other Swal action, also execute sheet.hideMessage().
                    // When Swal is closed by sheet.hideMessage() call, result.value and result.dismiss etc. have no value.
                    // If the code always calls sheet.hideMessage(), messages may not display properly when consecutive messages are called.

                    if (result.value || result.dismiss) {
                        evtParams.sheet.hideMessage();
                    }
                });
            }
            return true; // Replace the sheet message.
        }
    },
    onHideMessage: function (evtParams) {
        if (window.Swal) {
            // When sheet.hideMessage() is called, also close() Swal's message.
            Swal.close();
        }
    }
}
```

```javascript
// Example using JavaScript native alert and confirm
options.Events = {
    onShowMessage: function (evtParams) {
        // Since alert and confirm wait until a button is clicked, they should only be handled when called via showMessageTime.
        // If time is set, it auto-closes so the logic may not work properly when using alert or confirm.
        if (evtParams.isConfirm && !evtParams.time) {
            var parseMsg = evtParams.message; // String to display as message (including HTML Tags)
            if (typeof parseMsg == "string") {
                // Remove HTML Tags if present in the message string defined in the message file.
                parseMsg = parseMsg.replace(/\<br(\/)?\>/g, "\n").replace(/\<\/(div|span|p)+\>/g, "\n");
                parseMsg = IBSheet.removeHTMLTag(parseMsg);
            }
            // Determine whether to execute alert or confirm based on whether a Cancel button exists.
            if (evtParams.buttons.indexOf("Cancel") > -1) {
                if (!confirm(parseMsg)) {
                    // When Cancel button is clicked, pass the Cancel button click information to the sheet via callback so that subsequent features are not executed.
                    if (evtParams.callback) evtParams.callback(2);
                } else {
                    // When OK button is clicked, pass the Ok button click information to the sheet via callback so that subsequent features are executed.
                    if (evtParams.callback) evtParams.callback(1);
                }
            } else {
                alert(parseMsg);
                // When OK button is clicked, pass the Ok button click information to the sheet via callback so that subsequent features are executed.
                if (evtParams.callback) evtParams.callback(1);
            }
            // Replace the sheet message.
            return true;
        }
    }
}
```

### Read More
- [showMessage method](/docs/funcs/core/show-message)
- [showMessageTime method](/docs/funcs/core/show-message-time)
- [hideMessage method](/docs/funcs/core/hide-message)
- [SuppressMessage cfg](/docs/props/cfg/suppress-message)
- [onHideMessage event](./on-hide-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.2.0.15|`isAlert` parameter added|
<!--!|`[Private]` core-lwc|8.1.1.98|`isAlert` parameter added|
!-->
