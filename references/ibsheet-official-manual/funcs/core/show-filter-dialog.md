---
KEY: showFilterDialog
KIND: method
PATH: funcs/core/show-filter-dialog
ALIAS: sheet.showFilterDialog, showFilterDialog()
ALIAS_EN: header, filter, dialog, icon, creation, showfilterdialog, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-filter-dialog
---
# showFilterDialog ***(method)***
> header filter dialog icon creation.


### Syntax
```javascript
boolean showFilterDialog(opt);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|opt|`number` \| `object`|Optional|[UseFilterDialog cfg](docs/props/cfg/use-filter-dialog) option use|

### Return Value
***boolean***

### Example
```javascript
// headerrow filter dialog icon creation. 
sheet.showFilterDialog();
```

### Read More
- [hideFilterDialog method](/docs/funcs/core/hide-filter-dialog)
- [UseFilterDialog](/docs/props/cfg/use-filter-dialog)
- [DisableKeyWord](/docs/props/cfg/disable-keyword)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.1|Feature added|
