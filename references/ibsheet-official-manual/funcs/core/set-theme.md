---
KEY: setTheme
KIND: method
PATH: funcs/core/set-theme
ALIAS: sheet.setTheme, setTheme()
ALIAS_EN: changes, css, file, sheet, settheme, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-theme
---
# setTheme ***(method)***
> Changes the CSS file used by the sheet.

> Sets the path of the CSS file to use instead of the default CSS file (`/default/main.css`) and the `prefix` within the CSS.

> Here, `css prefix` refers to the starting name of each class in the sheet's CSS file.

> (If you open the `/default/main.css` file, you will see that all class names start with `".IB"`.)
> When using a different theme, the `prefix name` must also be different from the existing one.


### Syntax
```javascript
void setTheme( prefix, csspath, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|prefix|`string`|Required|Prefix to use within the CSS file (`default: "IB"`)|
|csspath|`string`|Required|Path to the new CSS file to apply|
|render|`boolean`|Optional|Whether to immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|


### Return Value
***none***

**Themes provided by default**

|value|Prefix|Description|
|---|---|---|
|`default` folder|`IB`(`default`)|Images used in the sheet are provided as SVG|
|`default_img` folder|`IB`|Images used in the sheet are provided as PNG, GIF|
|`grace` folder|`IBGR`|Images used in the sheet are provided as SVG|
|`gray` folder|`IBGY`|Images used in the sheet are provided as SVG|
|`material` folder|`IBMR`|Images used in the sheet are provided as SVG|
|`mint` folder|`IBMT`|Images used in the sheet are provided as SVG|
|`simple` folder|`IBSP`|Images used in the sheet are provided as SVG|


### Example
```javascript
// Apply partnerStyle.css file as the sheet's theme.
sheet.setTheme("SH", "./newTheme/partnerStyle.css", 1);
```

### Read More
 - [Style cfg](/docs/props/cfg/style)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
