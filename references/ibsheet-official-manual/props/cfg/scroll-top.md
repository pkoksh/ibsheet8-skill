---
KEY: scrollTop
KIND: config-property
PATH: props/cfg/scroll-top
ALIAS_EN: vertical, scrollbar, position, sheet, unit, pixel, scrolltop, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/scroll-top
---
# ScrollTop ***(cfg)***

> Sets the vertical scrollbar position of the sheet. (Unit: `pixel`) 

> When the scrollbar position value is set to 0 or more, data at the scrolled position is displayed.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Position of the vertical scrollbar (`Unit: pixel`)  (`default: 0`)|


### Example
```javascript
options.Cfg = {
  ScrollTop: 100      // Moves the scrollbar 100px from the starting point of the top scroll to display data at that position.
};
```

### Read More
- [ScrollLeft cfg](./scroll-left)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
