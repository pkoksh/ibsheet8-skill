---
KEY: onAfterProgress
KIND: event
PATH: events/on-after-progress
ALIAS_EN: event, fires, progressbar, changed, onafterchangeprogress
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-progress
---
# onAfterChangeProgress ***(event)***
> Event that fires when the `progressBar` is changed.

> This event fires when [showProgress (method)](/docs/funcs/core/show-progress) has already been called and the message is displayed, and [showProgress (method)](/docs/funcs/core/show-progress) continues to be called to change the `progressBar`.

### Syntax
```
    onAfterChangeProgress: function(paramObject) {

    }
or
    sheet.bind("onAfterChangeProgress" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the event occurred|
|messageTag|`object`|`Dom` object that displays the message|
|caption|`string`|String set as the dialog title|
|text|`string`|String set as the dialog content|
|cancel|`string`|String set as the button content to be displayed in the dialog (clicking the button removes the dialog and sets the `CancelProgress` property to 1 inside the sheet)|
|pos|`number`|Number set as the progress amount|
|cnt|`number`|Number set as the progress limit (`cnt:5, pos:1` means the progress bar displays 1/5 progress)|
|rate|`number`|Progress rate (unit: `%`)|

### Return
***none***

### Example
```javascript
// Example using [SweetAlert2](https://sweetalert2.github.io/)
options.Events = {
    onAfterChangeProgress: function (evtParams) {
        if (window.Swal) {
            // Check if Swal message exists
            var elemMsgCont = Swal.getContainer();
            if (elemMsgCont) {
                // Get the cancel button object
                var elemCancelButton = Swal.getCancelButton();
                // Get the message Tag created by showProgress
                var elemProgessMain = elemMsgCont.getElementsByClassName("IBProgressMain")[0];
                var elemProgessCaption = elemProgessMain.children[0]; // caption area
                var elemProgessText = elemProgessMain.children[1]; // text area
                var elemProgessBar = elemProgessMain.children[2]; // progressbar area

                if (elemProgessBar && elemProgessBar.firstChild) {
                    // Change the progressbar gauge
                    elemProgessBar.firstChild.style.width = evtParams.rate + "%";
                }

                if (elemProgessCaption) {
                    // Change the caption
                    elemProgessCaption.innerHTML = evtParams.caption;
                }

                if (elemProgessText) {
                    // Change the text
                    elemProgessText.innerHTML = evtParams.text + evtParams.rate + "% [" + evtParams.pos + "/" + evtParams.cnt + "]";
                }

                if (evtParams.cencel != null && elemCancelButton) {
                    // Change the cancel button content
                    elemCancelButton.innerText = evtParams.cancel;
                }
            }
        }
    }
}
```

### Read More

- [showProgress method](/docs/funcs/core/show-progress)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
