---
KEY: hoverScope
KIND: config-property
PATH: props/cfg/hover-scope
ALIAS_EN: limits, area, hover, action, performed, mouse, cursor, positioned
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/hover-scope
---
# HoverScope ***(cfg)***

> Limits the area where the `Hover` action is performed when the mouse cursor is positioned on a row or cell in the sheet.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|`Hover` action in header/data area (`default`)|
|`1`|`Hover` action does not occur in the header area|


### Example
```javascript
options.Cfg = {
    HoverScope: 1,       // Hover action does not occur in the header area
};
```

### Read More
- [Hover cfg](./hover)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.9|Feature added|
