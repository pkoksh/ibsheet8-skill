---
KEY: setScale
KIND: method
PATH: funcs/core/set-scale
ALIAS: sheet.setScale, setScale()
ALIAS_EN: scale, zoom, factor, shrink, enlarge, sheet, setscale, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-scale
---
# setScale ***(method)***
> Sets the scale (zoom factor) to shrink/enlarge the sheet.

> A value less than 1.0 shrinks the sheet.

> A value greater than 1.0 enlarges the sheet.


> **<mark>Note</mark> : This property does not affect `Menu`, `Dialog`, or `Message`.**



### Syntax
```javascript
void setScale( val, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|val|`number`|Optional|scale(zoom factor) specified (`default: 1.0`)|
|render|`boolean`|Optional|whether immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|


### Return Value
***none***

### Example
```javascript
// Enlarge the sheet by 1.5 times
sheet.setScale({ val: 1.5, render: 1 });
```

### Read More
- [getScale method] (./get-scale)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.11|Feature added|
