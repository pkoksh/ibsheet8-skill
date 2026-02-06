---
KEY: style
KIND: config-property
PATH: props/cfg/style
ALIAS_EN: applying, theme, default, css, main, prefix, value, defined
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/style
---
# Style ***(cfg)***

> When applying a theme other than the `default theme (/css/default/main.css)`, sets the `Prefix` value defined in the theme to be used.

> To use this feature, the CSS file to be used must be `included` in the page.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|`Prefix name` defined in the CSS file being used|

**Default provided themes**

|value|Prefix|Description|
|---|---|---|
|`default` folder|`IB`(`default`)|Images used in the sheet are provided as svg|
|`default_img` folder|`IB`|Images used in the sheet are provided as png, gif|
|`grace` folder|`IBGR`|Images used in the sheet are provided as svg|
|`gray` folder|`IBGY`|Images used in the sheet are provided as svg|
|`material` folder|`IBMR`|Images used in the sheet are provided as svg|
|`mint` folder|`IBMT`|Images used in the sheet are provided as svg|
|`simple` folder|`IBSP`|Images used in the sheet are provided as svg|


### Example
```javascript
options = {
  Cfg: {
      // Theme prefix name to use
      Style: "IBMT",
      ...
  }
};
```

### Read More
- [setTheme method](/docs/funcs/core/set-theme)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
