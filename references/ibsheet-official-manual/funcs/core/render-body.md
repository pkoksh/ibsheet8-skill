---
KEY: renderBody
KIND: method
PATH: funcs/core/render-body
ALIAS: sheet.renderBody, renderBody()
ALIAS_EN: renders, body, area, data, portion, renderbody, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/render-body
---
# renderBody ***(method)***
> Re-renders the Body area (data portion).

> Used to reflect modified content on screen at once after using the [setAttribute](./set-attribute) function or direct data access.

> When the function is called, the sheet area flickers once, and all recently modified content is displayed on screen.

> Does not render the `Head` or `Foot` area, so `Filter` row or `FormulaRow` value changes may not be reflected.

> Since this function uses considerable resources, it is recommended to call it only once at the point when all operations are completed, rather than calling it unnecessarily.

### Syntax
```javascript
void renderBody();
```

### Return Value
***none***

### Example
```javascript
var fr = sheet.getFocusedRow();

// Suppress screen reflection by setting render to 0 when changing properties.
sheet.setAttribute({row:fr, attr:"Color", val:"#DDDDDD", render:0});
sheet.setAttribute({row:fr, col:"AMOUNT02", attr:"FontColor", val:"#FF0000", render:0});

//Reflect the final modifications on screen.
sheet.renderBody();
```

### Read More

- [setAttribute method](./set-attribute)
- [rerender method](./rerender)
<!--!
- `[Private]` [render method](./render)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
