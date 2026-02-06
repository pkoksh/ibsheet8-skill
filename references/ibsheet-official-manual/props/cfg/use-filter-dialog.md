---
KEY: useFilterDialog
KIND: config-property
PATH: props/cfg/use-filter-dialog
ALIAS_EN: determines, whether, filter, dialog, usefilterdialog, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/use-filter-dialog
---
# UseFilterDialog ***(cfg)***
> Determines whether to use the filter dialog. 

> When set, a filter dialog icon is created in the header row, and filtering can be performed using the filter dialog that appears when the button is clicked. 

> Additionally, when using the filter dialog, the filter row cannot be used. 

> **Restriction 1: The filter dialog cannot be used in MultiRecord sheets.** 

> **Restriction 2: The filter dialog cannot be used together with column/cell Icon options and HeaderCheck options.** 

> **Restriction 3: The filter dialog cannot be used together with the pivot dialog.** 


###
![UseFilterDialog](/assets/imgs/filterDialog.png "FilterDialog")
<!-- IMAGE: Screenshot/Example Image - UseFilterDialog -->

[Filter Dialog Image]


### Type
`number` \| `object`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Feature not used (`default`)|
|`1`|Creates a filter dialog icon in the header row that opens the filter dialog.
Displays the list including only data shown as a result of the filter. (Operates as `Mode`: 1)|
|`2`|Creates a filter dialog icon in the header row that opens the filter dialog.
Displays the list including data that matches the currently applied filter. (Operates as `Mode`: 2)|
|`object`|Creates a filter dialog icon in the header row that opens the filter dialog. 
 Options can be configured in JSON format to customize the filter dialog.|

When setting `UseFilterDialog` as an `object`, the following options can be configured by the user.

### UseFilterDialog Options
|Value|Description|
|-----|-----|
|`HideInputFilter`|
![UseFilterDialogInputFilterArea](/assets/imgs/filterDialogInputfilterArea.png "FilterDialogInputFilterArea")
<!-- IMAGE: Screenshot/Example Image - UseFilterDialogInputFilterArea -->

 Sets whether to hide the input filter at the top of the data filter dialog. 
 `true`: Hides the input filter at the top of the dialog when opening the data filter dialog. 
 `false`: Includes the input filter at the top of the dialog when opening the data filter dialog. (default: `false`)|
|`Height`|
![UseFilterDialogItemArea](/assets/imgs/filterDialogItemArea.png "FilterDialogItemArea")
<!-- IMAGE: Screenshot/Example Image - UseFilterDialogItemArea -->

 Adjusts the height of the data filter dialog item area. (default: `180`)|
|`ZIndex`|Adjusts the `ZIndex` of the filter dialog independently of the sheet's `(Cfg) ZIndex`.|
|`Mode`| Determines which data is included in the data filter list. (`default: 1`)
`1`: Displays the list including currently visible data.
`2`: Displays the list including data that matches the currently applied filter.

### Example
```javascript
// Creates a filter dialog icon in the header row that opens the filter dialog.
options.Cfg = {
    UseFilterDialog: 1
};

options.Cfg = {
    // Change how the filter dialog is displayed.
    UseFilterDialog: {
      HideInputFilter: true, // When opening the data filter dialog, do not show the input filter at the top of the dialog.
      Height: 150, // When opening the data filter dialog, adjust the item area height to 150px.
      ZIndex: 1000, // Set the filter dialog's `ZIndex` to 1000.
    },
};
```

### Read More
- [showFilterDialog method](/docs/funcs/core/show-filter-dialog)
- [hideFilterDialog method](/docs/funcs/core/hide-filter-dialog)
- [DisableKeyWord](/docs/props/cfg/disable-keyword)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.94|UseFilterDialog:1 option added|
|core|8.3.0.35|Option to set UseFilterDialog as object format added. 
 UseFilterDialog.HideInputFilter, UseFilterDialog.Height, UseFilterDialog.ZIndex options added.|
|core|8.3.0.40|UseFilterDialog: 2, Mode option added|
