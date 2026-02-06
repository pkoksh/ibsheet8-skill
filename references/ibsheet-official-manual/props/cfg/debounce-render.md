---
KEY: debounceRender
KIND: config-property
PATH: props/cfg/debounce-render
ALIAS_EN: applies, debounce, calling, rerender, renderbody, debouncerender, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/debounce-render
---
# DebounceRender ***(cfg)***

> Applies debounce when calling `rerender` or `renderBody`. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
| `0` | Does not apply debounce when calling `rerender` or `renderBody`. (`default`)|
| `1` | Applies debounce when calling `rerender` or `renderBody`. |

### Example
```javascript
options = {
    Cfg :{
        DebounceRender: 1, // Applies debounce when calling `rerender` or `renderBody`.
        ...
    }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.38|Feature added|
