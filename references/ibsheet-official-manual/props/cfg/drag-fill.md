---
KEY: dragFill
KIND: config-property
PATH: props/cfg/drag-fill
ALIAS_EN: whether, enable, fill, action, dragging, bottom, right, corner
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/drag-fill
---
# DragFill ***(cfg)***
> Sets whether to enable the fill action when dragging from the bottom-right corner of a focused cell.

> <!-- `[Private]` Shares the shift + drag action.-->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Drag fill action disabled (`default`)|
|`1(true)`|Drag fill action enabled|


### Example
```javascript
options.Cfg = {
   "DragFill": true // Enable fill action
};
```

### Read More
<!--!
- `[Private]` [IBSheet8 Actions](../../appx/ibsheet8-actions.md)
-->
### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.24|Feature added|
