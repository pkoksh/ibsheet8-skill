---
KEY: noVScroll
KIND: config-property
PATH: props/cfg/no-v-scroll
ALIAS_EN: feature, hides, vertical, scrollbar, sheet, height, dynamically, changes
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/no-v-scroll
---
# NoVScroll ***(cfg)***

> A feature that hides the vertical scrollbar in the sheet, where the sheet height dynamically changes according to the number of retrieved data.

> When using paging search with `SearchMode: 1` or `SearchMode: 4,5`, the height changes according to the size set in `PageLength` from the total data.

> This feature cannot be used in `SearchMode: 0`.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Use vertical scroll in the sheet (`default`)|
|`1(true)`|Do not use vertical scroll|


### Example
```javascript
options = {
    Cfg:{
      NoVScroll: true  // Do not display vertical scrollbar in the sheet, auto-adjust height based on total data volume
    }
};
```

### Read More
- [NoHScroll cfg](./no-h-scroll)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
