---
KEY: showFindDialog
KIND: method
PATH: funcs/dialog/show-find-dialog
ALIAS: sheet.showFindDialog, showFindDialog()
ALIAS_EN: opens, dialog, finding, data, text, based, within, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/dialog/show-find-dialog
---
# showFindDialog ***(method)***

> Opens a dialog for finding data (text-based) within the sheet.

> Data can be changed through the replace feature. 

> <mark>This function requires the `"/plugins/ibsheet-dialog.js"` file to be included.</mark>


###

**Search feature** 

![Find dialog](/assets/imgs/findDialog_search.png)
<!-- IMAGE: Screenshot/Example Image - Find dialog --> 


**Replace feature** 

![Find dialog](/assets/imgs/findDialog_replace.png)
<!-- IMAGE: Screenshot/Example Image - Find dialog --> 


**Find all feature** 

![Find dialog](/assets/imgs/findDialog_searchAll.png)
<!-- IMAGE: Screenshot/Example Image - Find dialog --> 


### Syntax
```javascript
object showFindDialog();
```

### Return Value
***none***

### Example
```javascript
//Open the find dialog when Ctrl+Shift+F is pressed in all sheets
IBSheet.CommonOptions = {
  Events:{
    "onKeyDown":function(evtParam){
   //Open the find dialog when Ctrl+Shift+F is pressed
      if(evtParam.prefix == "ShiftCtrl" && evtParam.key == 70 ){
        evtParam.sheet.showFindDialog();
      }
    }
  }
};
```

### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)

### Since

|product|version|desc|
|---|---|---|
|dialog|0.0.0|Feature added|
|dialog|0.0.9|Find dialog renewal (replace feature, entire cell content match, column selection feature added)|
|dialog|1.0.12|Find dialog renewal (find all feature added and UI renewal)|
|dialog|1.0.79|Improved feature so that the dialog opens with Ctrl+F shortcut key|
