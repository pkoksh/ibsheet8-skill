---
KEY: showProgress
KIND: method
PATH: funcs/core/show-progress
ALIAS: sheet.showProgress, showProgress()
ALIAS_EN: displays, progress, state, dialog, center, sheet, area, showprogress
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-progress
---
# showProgress ***(method)***
> Displays a progress state `Dialog` in the center of the sheet area.

> The sheet is disabled until the dialog is removed.

> The dialog is removed when [hideMessage](./hide-message) is called.

> Only operates when [SuppressMessage](/docs/props/cfg/suppress-message) : 0, 1.

###
![showProgress](/assets/imgs/showProgress.png "Displays a progress dialog on the sheet area")
<!-- IMAGE: Screenshot/Example Image - showProgress -->


### Syntax
```javascript
void showProgress( caption, text, cancel, pos, cnt );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|caption|`string`|Required|Title of the dialog|
|text|`string`|Required|Content of the dialog|
|cancel|`string`|Optional|Button content to be displayed in the dialog (when the button is clicked, the dialog is removed and the internal `CancelProgress` attribute is changed to `1`) (`default: null`)|
|pos|`number`|Optional|Progress position out of cnt (total) (`default: 0`)|
|cnt|`number`|Optional|Progress finish line (if `cnt:5, pos:1`, the progress bar is displayed as 1/5 progress) (`default: 0`)|

### Return Value
***none***

### Example
```javascript
function popup(){
	sheet.showProgress({caption: "Fiscal year calculation in progress", text: "Please wait a moment.", pos: 2, cnt: 5});
}
```

### Read More

- [SuppressMessage cfg](/docs/props/cfg/suppress-message)
- [hideMessage method](./hide-message)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
