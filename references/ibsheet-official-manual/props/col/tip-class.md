---
KEY: tipClass
KIND: column-property
PATH: props/col/tip-class
ALIAS_EN: design, applying, desired, css, class, tooltip, object, tipclass
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/tip-class
---
# TipClass ***(col)***

> Sets the design by applying a desired CSS class to the tooltip object.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Class name to apply to the tooltip object|

### Example
```css
<style>
    .RedBold{color:red;font-weight:700;}
    .deepblue{color:#020079;}
</style>
```
```javascript

// Set the class to use when displaying the tooltip on a specific column.
options.Cols = [
    ...
    {Type:"Text", Tip: 1, TipClass: "deepblue", Name: "procs", Width: 120 ...},
    ...
];
```

### Read More
- [Tip col](./tip)
- [Tip+Value col](./tip-value)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
