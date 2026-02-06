---
KEY: cursor
KIND: cell-property
PATH: props/cell/cursor
ALIAS_EN: cursor, shape, mouse, hovers, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/cursor
---
# Cursor ***(cell)***

> Sets the cursor shape when the mouse hovers over the cell.

> Available cursor shapes follow CSS standards.

> e.g., auto, crosshair, default, pointer, move, e-resize, ne-resize, nw-resize, n-resize, se-resize, sw-resize, w-resize, text, wait, help


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Desired cursor shape|


### Example
```javascript
// Change the cursor to a clickable pointer shape when hovering over the cell.
{
    data:[
        {... , "CLSCursor":"pointer" , ...}
    ]
}
```

### Read More
- [Cursor col](/docs/props/col/cursor)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
