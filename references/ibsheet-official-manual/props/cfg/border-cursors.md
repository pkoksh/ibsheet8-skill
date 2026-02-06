---
KEY: borderCursors
KIND: config-property
PATH: props/cfg/border-cursors
ALIAS_EN: whether, show, border, hovered, row, level, hover, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/border-cursors
---
# BorderCursors ***(cfg)***

>  Sets whether to show the `Border` of the hovered row when row-level `Hover` is set with (cfg)[Hover](./hover) : 2. (Does not work with `Hover:0/1`) 


###
![borderCursors](/assets/imgs/borderCursors1.png "borderCursors")
<!-- IMAGE: Screenshot/Example Image - borderCursors -->

[When `borderCursors : 1`]


![borderCursors](/assets/imgs/borderCursors0.png "borderCursors")
<!-- IMAGE: Screenshot/Example Image - borderCursors -->

[When `borderCursors : 0`]


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not show `Border` for hovered row and cell|
|`1(true)`|Show `Border` for hovered row and cell (`default`)  |


### Example
```javascript
options.Cfg  = {
  "Hover": 2,               // Row-level Hover behavior
  "BorderCursors": true,       // Show Border for hovered row and cell
};
```

### Read More
- [Hover cfg](./hover)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
