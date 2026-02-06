---
KEY: enterMode
KIND: config-property
PATH: props/cfg/enter-mode
ALIAS_EN: enter, key, pressed, you, start, cell, editing, move
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/enter-mode
---
# EnterMode ***(cfg)***

> When the `Enter` key is pressed, you can set it to start cell editing, or to move the focus like the down arrow key or right arrow key (or Tab key).

> When moving, the focus moves to the next editable cell according to the `EnterMode` setting.

> For non-editable cells, only the focus moves. 

> `EnterMode` can be used as an `object` to utilize the `option` feature. (The `option` feature is provided as bitwise operation.)



### Type
`number` \| `object`


### Options
|Name|Type|Description|
|-----|-----|-----|
|mode|`number`|`0`: Press `Enter` key to `start value editing`, (in edit state) press `Enter` key to `end editing` (`default`) 
`1`: Press `Enter` key to `move to the cell below (down)`, moves from the last cell to the first row, first column 
`2`: Press `Enter` key to `move to the cell below (down)`, adds a row at the last cell of each column and then moves 
`3`: Press `Enter` key to `move to the right cell (tab)`, moves from the last cell to the first row, first column 
`4`: Press `Enter` key to `move to the right cell (tab)`, adds a row at the last cell and moves to the first column 
`5`: Press `Enter` key to `move to the cell below (down)`, focus remains at the last cell 
`6`: Press `Enter` key to `move to the right cell (tab)`, focus remains at the last cell|
|option|`number`|`0`: Includes all cells except those with `CanFocus: 0` in focus navigation. (`default`) 
`1`: Excludes `CanEdit: 0` cells from `EnterMode` focus navigation.|
<!--!
`[Private]` mode|`number`|`7`: (focused state, editable cell, edit state) Press `Enter` key to maintain focus only without any action|
!-->

### Example
```javascript
options.Cfg = {
   EnterMode: 3  // Press Enter key to start value editing, in edit state press Enter key to end editing and move to the right cell
   ...
};

// EnterMode is 3, with additional option to check and skip CanEdit: 0 cells.
options.Cfg = {
   EnterMode: {
      mode: 3,
      option: 1
   }
}
```

### Try it
- [0 by default with setEnterMode](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/EnterMode/)

### Read More

- [ForceEnterEdit cfg](./force-enter-edit)
- [AcceptEnters col](/docs/props/col/accept-enters)
- [AcceptEnters cell](/docs/props/cell/accept-enters)
- [setEnterMode method](/docs/funcs/core/set-enter-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.7|Added modes 5 and 6, modified to allow navigation to non-editable cells when using `EnterMode`|
|core|8.0.0.14|Added option feature (provided as bitwise operation)|
<!--!
|`[Private]` core|8.0.0.8|Added `mode: 7` feature|
!-->
