---
KEY: refreshPage
KIND: method
PATH: funcs/core/refresh-page
ALIAS: sheet.refreshPage, refreshPage()
ALIAS_EN: renders, specified, page, refreshpage, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/refresh-page
---
# refreshPage ***(method)***
> Renders the specified page.

> Used to reflect modified content on screen at once after using the [setAttribute](./set-attribute) function or direct data access.


### Syntax
```javascript
void refreshPage( page, always );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|page|`object`|Required|[page object](/docs/appx/page-object)|
|always|`boolean`|Optional|Whether to render non-visible pages
`0(false)`:Do not render non-visible pages (`default`)
`1(true)`:Render non-visible pages|
### Return Value
***none***

### Example
```javascript
var fr = sheet.getFocusedRow();

// Change the color of the selected row's AMOUNT01 column to red.
fr["AMOUNT01Color"] = "#FF0000"
var nr = sheet.getNextRow(fr);
// Change the text color of the row below the selected row's AMOUNT05 column to blue.
nr["AMOUNT05FontColor"] = "#0000FF";

// Reflect the modified content in the corresponding page on screen.
sheet.refreshPage( {page:sheet.getFocusedPage()} );
```

### Read More

- [setAttribute method](./set-attribute)
- [rerender method](./rerender)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
