---
KEY: rerender
KIND: method
PATH: funcs/core/rerender
ALIAS: sheet.rerender, rerender()
ALIAS_EN: renders, entire, sheet, area, rerender, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/rerender
---
# rerender ***(method)***
> Re-renders the entire sheet area.

> Used to reflect modified content on screen at once after using the [setAttribute](./set-attribute) function or direct data access.

> When the function is called, the sheet area flickers once, and all recently modified content is displayed on screen.

> Since this function uses considerable resources, it is recommended to call it only once at the point when all operations are completed, rather than calling it unnecessarily.

### Syntax
```javascript
void rerender( scroll , sync );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|scroll|`boolean`|Optional|Whether to maintain the scrollbar position the same as before rendering
`0(false)`:Do not maintain the scrollbar position
`1(true)`:Maintain the scrollbar position after rendering (`default`)|
|sync|`boolean`|Optional|Whether to execute rendering synchronously
`0(false)`:Asynchronous mode (`default`)
`1(true)`:Synchronous mode|

### Return Value
***none***

### Example
```javascript
// Hide some columns.
sheet.Cols["AMT"]["Visible"] = 0;
sheet.Cols["EMP_ID"]["Visible"] = 0;
sheet.Cols["INDATE"]["Visible"] = 0;

//Reflect the final modifications on screen.
sheet.rerender();
```

### Read More

- [renderBody method](./render-body)
<!--!
- `[Private]` [render method](./render)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
