---
KEY: canDrag
KIND: column-property
PATH: props/col/can-drag
ALIAS_EN: whether, column, dragged, candrag, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-drag
---
# CanDrag ***(col)***
> Sets whether the column can be dragged.

> Available when the [CanDrag cfg](/docs/props/cfg/can-drag) property is `1(true)`


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Drag disabled|
|`1(true)`|Drag enabled (`default`)|

### Example
```javascript
// Disable drag for a specific column
options.Cols = [
    ...
    {Type: "Text", Name: "sName", CanDrag: 0 ...},
    ...
];
```

### Read More
- [CanDrag cfg](/docs/props/cfg/can-drag)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
