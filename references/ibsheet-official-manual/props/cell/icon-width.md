---
KEY: iconWidth
KIND: cell-property
PATH: props/cell/icon-width
ALIAS_EN: icon, property, display, button, left, side, cell, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/icon-width
---
# IconWidth ***(cell)***
> When using the [Icon](./icon) property to display a button on the left side of the cell, sets the width of the button. 

> The width is set in pixel units.




### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Width of the button on the left side of the cell|


### Example
```javascript
// Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSIcon":"/images/popIcon.gif", "CLSIconWidth":22 , ...}
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
