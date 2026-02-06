---
KEY: editarrowbehavior
KIND: config-property
PATH: props/cfg/editarrowbehavior
ALIAS_EN: enables, cell, navigation, left, right, arrow, keys, editing
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/editarrowbehavior
---
# EditArrowBehavior ***(cfg)***

> Enables cell navigation using left/right arrow keys during editing.

> The navigation occurs when the cursor reaches the left/right end of the text being edited.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Feature disabled (`default`)|
|`1`|Skips non-editable columns and moves to the left/right cell.|
|`2`|For non-editable columns, exits edit mode after moving focus and moves to the left/right cell.|


### Example
```javascript
options.Cfg = {
    EditArrowBehavior: 2
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.97|Feature added|
