---
KEY: vScrollPadMode
KIND: config-property
PATH: props/cfg/v-scroll-pad-mode
ALIAS_EN: option, padding, top, vertical, scrollbar, vscrollpadmode, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/v-scroll-pad-mode
---
# VScrollPadMode ***(cfg)***

> Option to set padding at the top of the vertical scrollbar.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|No padding is set (`default`)|
|`1`|Set padding equal to the Head rows whose [Kind](/docs/appx/kind) is `Header`|

### Example
```javascript
options.Cfg = {
    VScrollPadMode: 1
};
```

### Read More
- [Kind appendix](/docs/appx/kind)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
