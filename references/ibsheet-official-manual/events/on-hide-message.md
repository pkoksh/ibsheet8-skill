---
KEY: onHideMessage
KIND: event
PATH: events/on-hide-message
ALIAS_EN: event, fires, sheet, message, removed, onhidemessage
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-hide-message
---
# onHideMessage ***(event)***
> Event that fires when the sheet's message is removed.

> Through this event, you can close messages from external libraries.

### Syntax

```
    onHideMessage: function(paramObject) {

    }
or
    sheet.bind("onHideMessage" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the message occurred|

### Return
***none***

### Example
```javascript
// Example using [SweetAlert2](https://sweetalert2.github.io/)
options.Events = {
    onShowMessage: function (evtParams) {
        if (window.Swal) {
            // Handle messages differently based on showMessage and showMessageTime.
            if (evtParams.isConfirm) {
                Swal.fire({
                    title: "<div>" + evtParams.message + "</div>", // String to be shown as message (including HTML tags)
                    icon: 'warning',
                    showConfirmButton: (evtParams.buttons.indexOf("Ok") > -1), // Create confirm button if it exists.
                    showCancelButton: (evtParams.buttons.indexOf("Cancel") > -1), // Create cancel button if it exists.
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    timer: evtParams.time // Time argument of showMessageTime, unit is milliseconds (ms).
                }).then((result) => {
                    if (result.value) {
                        // When confirmButton is clicked, pass the Ok button click info through callback so the sheet can execute subsequent functions.
                        if (evtParams.callback) evtParams.callback(evtParams.buttons.indexOf("Ok") + 1);
                    } else {
                        // When cancelButton is clicked, pass the Cancel button click info through callback so the sheet does not execute subsequent functions.
                        if (evtParams.callback) evtParams.callback(evtParams.buttons.indexOf("Cancel") + 1);
                    }
                });
            } else {
                Swal.fire({
                    title: "<div>" + evtParams.message + "</div>", // String to be shown as message (including HTML tags)
                    icon: 'success',
                    showConfirmButton: false // IBSheet does not show confirm button in simple messages, so hide Swal's button for similar implementation.
                }).then((result) => {
                    // When Swal is closed by click or Esc key etc., also execute sheet.hideMessage().
                    // When Swal is closed by sheet.hideMessage() call, result.value, result.dismiss etc. have no value.
                    // If the code is implemented to always call sheet.hideMessage(), messages may not be displayed properly when messages are called consecutively.
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

### Read More

- [showMessageTime method](/docs/funcs/core/show-message-time)
- [hideMessage method](/docs/funcs/core/hide-message)
- [SuppressMessage cfg](/docs/props/cfg/suppress-message)
- [onShowMessage event](./on-show-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
