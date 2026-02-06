---
KEY: dialog
KIND: appendix
PATH: appx/dialog
ALIAS_EN: creates, layer, popup, style, dialog, specified, position, appendix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/dialog
---
# Dialog  ***(appendix)***
> Creates a layer popup style dialog at a specified position.

> When creating a dialog inside the sheet, use the sheet.showDialog() function, and outside the sheet, use IBSheet.showDialog().

## Available Properties
|Name|Type|Description|
|---|---|---|
|Head|`string`|Title to be placed at the top of the dialog|
|Foot|`string`|Title to be placed at the bottom of the dialog|
|Header|`string`|**When creating a dialog on a specific cell in the sheet, that cell becomes the dialog's header**.
This property sets the string to be displayed in that cell (automatically disappears when the dialog closes).
In the property descriptions below, "header" refers to this cell.|
|HeadClose|`boolean`|When Head is set, whether to show a close X button on the right side of the header title|
|CanFocus|`boolean`|Whether to give focus when the dialog is created|
|Modal|`boolean`|Prevents access to other objects on the screen when the dialog is created.|
|Body|`string`|Sets the HTML content to be composed inside the dialog.|
|Wrap|`boolean`|Sets whether to wrap the content when the dialog's internal content is wider than the dialog width.|
|MaxHeight|`number`|Sets the maximum height of the dialog excluding the header.
If the dialog's internal content is larger than MaxHeight, a vertical scrollbar is created.|
|MinHeight|`number`|Sets the minimum height of the dialog excluding the header.|
|MaxWidth|`number`|Maximum width of the dialog
If the content inside the dialog is larger than MaxWidth, it is hidden with overflow-x:hidden.
Setting to 0 automatically determines the size to match the cell width inside the dialog.|
|MinWidth|`number`|Minimum width of the dialog
Setting to 0 automatically determines the size to match the cell width inside the dialog.|
|Area|`object`|Makes the dialog only visible within a specific range in the browser.
(Cannot resize the window or move the dialog beyond the specified area)
The area is set with X, Y (start point of the area) and Width, Height (size of the area).
ex ) { X:100, Y:100, Width:400, Height:500 }|
|Position|`object`|Sets the creation position of the dialog. (Refer to [Position appendix](/docs/appx/position))|
|HeadDrag|`boolean`|Sets whether to change the dialog position by dragging the dialog's head (not header).|
|Shadow|`boolean`|Whether to display a shadow on the bottom-right of the dialog|
|ShadowHeader|`boolean`|Whether to display a shadow on the bottom-right of the dialog header|
|CloseOut|`boolean`|Closes the dialog when the mouse cursor goes outside the dialog or over the dialog header.|
|CloseTimeout|`number`|Closes the dialog after the specified time when the cursor leaves the dialog (default 300, in milliseconds)|
|CloseClickHeader|`boolean`|Closes the dialog when clicking the dialog header.|
|CloseAfter|`number`|Automatically closes the dialog after a specified time has elapsed since it was opened (in milliseconds).|
|CloseClick|`boolean`|Closes the dialog when clicking on the dialog.|
|ZIndex|`number`|Sets the z-index for this dialog. (default:258)|


## Dialog Object
You can access the currently created dialog through the return value of showDialog() or sheet.Dialog.

Such Dialog objects have the following properties and functions.

### Property
Tag : Contains the HTML object inside the dialog.
```javascript
//Tag usage example
var dialogObj = IBSheet.showDialog(...);
var x = dialogObj.Tag.querySelector("#dlgInput").value;
```
### method
Close() : Closes the selected dialog window.
```javascript
//Close() usage example
dialogObj = sheet.Dialog; // Get the open Dialog object from the sheet
dialogObj.Close(); // Close the Dialog object.
```

![dialog](/assets/imgs/dialog0.png "Dialog")
<!-- IMAGE: Screenshot/Example Image - dialog -->

[Example dialog usage below]

### Example
```javascript
function openDlg() {
    var dialog = {
			Header: "Calculating",          // Text displayed in the cell that opened the dialog
			Head:"Currency Calculator",          // Dialog top title
			Foot: "ibleaders co.,ltd",  // Dialog bottom title
			MinWidth:0,                 // Dialog width
			Body: "<div>"                // Dialog content
				+ "<select id='inputUnit' onchange='calc()'>"
				+ "<option value='USD'>USD</option><option value='JPY'>JPY</option>"
				+ "<option value='EUR'>EUR</option><option value='CNY'>CNY</option>"
				+ "<option value='KRW'>KRW</option>"
				+ "</select>"
				+ " <input type='text' id='inputMoney' class='number' onchange='calc()'/>"
				+ "</div> "
				+ "<div style='text-align: center;'><i class='fas fa-equals'></i></div>"
				+ "<div>"
				+ "<select id='outputUnit' onchange='calc()'>"
				+ "<option value='USD'>USD</option><option value='JPY'>JPY</option>"
				+ "<option value='EUR'>EUR</option><option value='CNY'>CNY</option>"
				+ "<option value='KRW'>KRW</option></select>"
				+ " <input type='text' id='outMoney'  class='number readonly' />"
				+ "</div>"
				+ "<div style='text-align:center;padding:10px 0 5px 0;'>"
				+ "<button type='button' onclick='confirmCalc()'>Confirm</button>"
				+ "</div>"
    };

    sheet.showDialog({row : sheet.getRowById("AR5"), col: "AMOUNT06", dialog: dialog});
}

// When the confirm button is clicked
function confirmCalc() {
	var dd = sheet.Dialog;
	var v = dd.Tag.querySelector("#outMoney").value;

	dd.Row[dd.Col] = v;
	sheet.refreshCell(dd.Row,dd.Col);
	dd.Close();
}

// When a value changes inside the dialog
function calc() {
	var dd = sheet.Dialog;
	var inpU = dd.Tag.querySelector("#inputUnit");
	var outU = dd.Tag.querySelector("#outputUnit");
	var inpV = dd.Tag.querySelector("#inputMoney");
	var outV = dd.Tag.querySelector("#outMoney");

	if (inpV.value == "") return;
	var baseCurrency = inpV.value;
	switch (inpU.value) {
		case 'EUR':
			baseCurrency = parseFloat(inpV.value) * 1.13546;
		break;
		case 'JPY':
			baseCurrency = parseFloat(inpV.value) * 0.00903;
		break;
		case 'CNY':
			baseCurrency = parseFloat(inpV.value) * 0.14929;
		break;
		case 'KRW':
			baseCurrency = parseFloat(inpV.value) * 0.00089;
		break;
	}
	switch(outU.value) {
		case 'EUR':
			outV.value = baseCurrency * 0.8807;
		break;
		case 'JPY':
			outV.value = baseCurrency * 110.803;
		break;
		case 'CNY':
			outV.value = baseCurrency * 6.6984;
		break;
		case 'KRW':
			outV.value = baseCurrency * 1118.15;
		break;
		case 'USD':
			outV.value = baseCurrency * 1;
		break;
	}
}
```

### Read More
- [showDialog method](/docs/funcs/core/show-dialog)
- [showDownloadDialog method](/docs/funcs/dialog/show-download-dialog)
- [showEditDialog method](/docs/funcs/dialog/show-edit-dialog)
- [showFindDialog method](/docs/funcs/dialog/show-find-dialog)
- [showPivotDialog method](/docs/funcs/dialog/show-pivot-dialog)
- [showUploadDialog method](/docs/funcs/dialog/show-upload-dialoㅡg)
- [showDialog static](/docs/static/show-dialog)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
