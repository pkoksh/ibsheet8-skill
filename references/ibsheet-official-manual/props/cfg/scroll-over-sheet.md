---
KEY: scrollOverSheet
KIND: config-property
PATH: props/cfg/scroll-over-sheet
ALIAS_EN: feature, enables, parent, scroll, work, sheet, vertical, reached
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/scroll-over-sheet
---
# ScrollOverSheet ***(cfg)***
> A feature that enables the parent's scroll to work after the sheet's vertical scroll has reached its end, when both the sheet and browser have vertical scrolls. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Feature disabled (`default`)|
|`1(true)`|After the vertical scroll reaches its end, the parent's scroll operates.|


### Example
```javascript
// Enable the parent's scroll to work after the sheet's scroll reaches its end
options.Cfg = {
    ScrollOverSheet: true
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.18|Feature added|
