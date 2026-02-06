---
KEY: scale
KIND: config-property
PATH: props/cfg/scale
ALIAS_EN: enlarges, reduces, entire, sheet, according, given, zoom, factor
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/scale
---
# Scale ***(cfg)***

> Enlarges or reduces the entire sheet according to a given zoom factor. 

> Values less than 1.0 reduce the sheet. (Values less than 0.1 cannot be used.) 

> Values greater than 1.0 enlarge the sheet. 


> **<mark>Caution</mark>: This property does not affect `Menu`, `Dialog`, or `Message`.**

> **<mark>Caution</mark>: When using percentage-based width or height (such as 100%) for the sheet div and using `NoVScroll` or `NoHScroll` together, the entire sheet area may be enlarged/reduced depending on the configured zoom factor.**


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|number|Sheet zoom factor setting (`default: 1.0`)|


### Example
```javascript
options.Cfg = {
  Scale: 0.5      // Outputs the sheet at 0.5x zoom.
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.11|Feature added|
