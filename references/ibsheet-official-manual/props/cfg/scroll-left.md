---
KEY: scrollLeft
KIND: config-property
PATH: props/cfg/scroll-left
ALIAS_EN: sheets, horizontal, scroll, created, center, column, section, typical
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/scroll-left
---
# ScrollLeft ***(cfg)***

> In sheets where a horizontal scroll is created in the center column section (typical Cols area), 

> sets how far the scrollbar position should be moved from the left. (`Unit: pixel`) 

> When the scroll position value is set to 0 or more, the horizontal scrollbar moves and data at that position is displayed.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|number|Position of the horizontal scroll (`Unit: pixel`)  (`default: 0`)|


### Example
```javascript
options.Cfg = {
  ScrollLeft: 50      // Moves the scrollbar 50px from the starting point of the horizontal scroll to display data at that position.
};
```

### Read More
- [ScrollTop cfg](./scroll-top)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
