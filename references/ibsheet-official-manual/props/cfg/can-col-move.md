---
KEY: canColMove
KIND: config-property
PATH: props/cfg/can-col-move
ALIAS_EN: whether, allow, users, change, column, positions, dragging, header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/can-col-move
---
# CanColMove ***(cfg)***

> Sets whether to allow users to change column positions by dragging header cells.

> When moving columns, both header and data columns move together.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Column move not allowed|
|`1`|Column move allowed (`default`)|
|`2`|When the header has 2 or more rows and parent headers are column-merged, movement is only allowed within the merged area|

### Example
```javascript
options.Cfg = {
    "CanColMove":0        // User cannot change column order
};
```

### Try it
- [Set to 2](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/CanColMove-2/)

### Read More
- [CanMove col](/docs/props/col/can-move)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.2.0.12|`CanColMove: 2` feature added|
