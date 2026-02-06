---
KEY: iconAlign
KIND: cell-property
PATH: props/cell/icon-align
ALIAS_EN: icon, property, display, button, checkbox, left, side, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/icon-align
---
# IconAlign ***(cell)***
> When using the [Icon](./icon) property to display a button (or checkbox) on the left side of the cell, sets the position of the button. 

> If no other setting is made, it is displayed on the left side of the cell.




### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Left`|Display Icon on the left side of the cell (`default`)|
|`Right`|Display Icon on the right side of the cell|


### Example
```javascript
// Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "ClsIconAlign":"Right","CLSIcon":"/images/popIcon.gif", ...}
    ]
}
```

### Read More
- [Icon cell](./icon)
- [IconWidth col](../col/icon-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
