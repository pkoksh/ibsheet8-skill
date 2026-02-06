---
KEY: cursor
KIND: column-property
PATH: props/col/cursor
ALIAS_EN: cursor, shape, mouse, hovers, column, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/cursor
---
# Cursor ***(col)***

> Sets the cursor shape when the mouse cursor hovers over the column.

> The available cursor shapes follow CSS standards.

> ex) auto, crosshair, default, pointer, move, e-resize, ne-resize, nw-resize, n-resize, se-resize, sw-resize, w-resize, text, wait, help


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Desired cursor shape|


### Example
```javascript
// Change the cursor to a clickable pointer shape when entering the column
options.Cols = [
    ...
    {Type: "Text", Name: "sa_nm", Cursor: 'pointer', TextStyle: 4},
    ...
];
```

### Read More
- [TextStyle col](./text-style)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
