---
KEY: noRenderHidden
KIND: config-property
PATH: props/cfg/no-render-hidden
ALIAS_EN: prevents, invisible, columns, created, dom, initial, search, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/no-render-hidden
---
# NoRenderHidden ***(cfg)***

> Prevents invisible columns from being created in the DOM during the initial search after sheet creation.

> When this feature is used, invisible columns (Visible: 0) are not rendered on screen, allowing faster rendering when there are many columns.

> `Caution` However, when using `showCol, hideCol` to show or hide columns after using this option, you must use the `render` argument as `0` and then call the `rerender` function at the end.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Pre-create invisible columns (Visible:0) in the DOM (`default`)|
|`1(true)`|Do not pre-create invisible columns (Visible:0) in the DOM|


### Example
```javascript
options = {
  "Cfg":{
    "NoRenderHidden": 1,  // Set to not pre-create invisible columns in the DOM
  }
};
```

### Read More
- [showCol](/docs/funcs/core/show-col)
- [hideCol](/docs/funcs/core/hide-col)
- [rerender](/docs/funcs/core/rerender)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.21|Feature added|
