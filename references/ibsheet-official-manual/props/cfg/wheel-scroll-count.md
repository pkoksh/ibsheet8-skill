---
KEY: wheelScrollCount
KIND: config-property
PATH: props/cfg/wheel-scroll-count
ALIAS_EN: feature, number, rows, move, wheel, scroll, regardless, searchmode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/wheel-scroll-count
---
# WheelScrollCount ***(cfg)***

> A feature that sets the number of rows to move during wheel scroll, regardless of `SearchMode`. 

> If not set, `SearchMode: 0` moves 3 rows, and `SearchMode: 2` moves by the `deltaY` amount of `window.wheel.event`.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Number of rows to move during wheel scroll|


### Example
```javascript
options.Cfg = {
   WheelScrollCount: 1 // Moves 1 row at a time during scroll.
};
```

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.20|Feature added|
