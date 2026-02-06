---
KEY: hideMobile
KIND: column-property
PATH: props/col/hide-mobile
ALIAS_EN: whether, show, hide, column, mobile, environment, hidemobile, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/hide-mobile
---
# HideMobile ***(col)***
> Sets whether to show or hide the column in a mobile environment.

> **Note: iPad Pro and Surface Pro are not classified as mobile.**

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Column visible (`default`)|
|`1(true)`|Column hidden|

### Example
```javascript
// Hide a specific column on mobile
options.Cols = [
    ...
    {Type: "Int", Name: "Product_Sales", HideMobile: true, ...},
    ...
];
```

### Read More

- [BreakPoint col](/docs/props/col/break-point)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
