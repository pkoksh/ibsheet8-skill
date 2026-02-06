---
KEY: querySelector
KIND: static-member
PATH: static/query-selector
ALIAS_EN: function, returns, html, tags, based, css, selectors, queryselector
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/query-selector
---
# QuerySelector ***(static)***

> Sets a function that returns HTML tags based on CSS selectors. 

>
> If the sheet is inside a `ShadowDOM`, the sheet cannot access tags inside the sheet through `document.getElementById`. 

>
> In this case, you need to set `IBSheet.QuerySelector` so that the sheet can access tags within itself. 

>
> This option must be set when the sheet is first created and cannot be dynamically changed afterwards. 


### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|Function that returns HTML tags based on CSS selectors|

### Example
```javascript
IBSheet.QuerySelector = shadow.querySelector.bind(shadow); // Specify a separate querySelector so the sheet can access tags within itself
```

### Read More
- [ControlsTag cfg](/docs/props/cfg/controls-tag)
- [DialogsArea cfg](/docs/props/cfg/dialogs-area)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.0|Feature added|
