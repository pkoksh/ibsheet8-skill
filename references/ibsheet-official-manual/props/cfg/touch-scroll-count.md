---
KEY: touchScrollCount
KIND: config-property
PATH: props/cfg/touch-scroll-count
ALIAS_EN: feature, number, rows, move, mobile, touch, scroll, searchmode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/touch-scroll-count
---
# TouchScrollCount ***(cfg)***

> A feature that sets the number of rows to move during mobile touch scroll in `SearchMode: 0`. 

> If not set, 3 rows are moved per single scroll movement.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Number of rows to move during mobile touch scroll|

### Example
```javascript
options.Cfg = {
   TouchScrollCount: 1 // Moves 1 row at a time during touch scroll.
};
```

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.52|Feature added|
