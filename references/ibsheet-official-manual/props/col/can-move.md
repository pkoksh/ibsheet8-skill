---
KEY: canMove
KIND: column-property
PATH: props/col/can-move
ALIAS_EN: whether, user, move, column, canmove, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-move
---
# CanMove ***(col)***
> Sets whether the user can move the column.

> Sets whether to allow the user to change the column position by dragging the header cell.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|User column move disabled|
|`1(true)`|User column move enabled (`default`)|

### Example
```javascript
// Disable user position change for all columns
options.Def.Col = {CanMove: 0};
```

### Read More
- [CanColMove cfg](/docs/props/cfg/can-col-move)
- [moveCol method](/docs/funcs/core/move-col)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
