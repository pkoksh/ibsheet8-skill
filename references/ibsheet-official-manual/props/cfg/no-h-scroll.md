---
KEY: noHScroll
KIND: config-property
PATH: props/cfg/no-h-scroll
ALIAS_EN: feature, hides, horizontal, scrollbar, sheet, width, determined, number
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/no-h-scroll
---
# NoHScroll ***(cfg)***

> A feature that hides the horizontal scrollbar in the sheet, where the width is determined by the number of columns in the sheet.

> This feature cannot be used in `SearchMode: 0 (FastLoad)`.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Use horizontal scroll in the sheet (`default`)|
|`1(true)`|Do not use horizontal scroll|


### Example
```javascript
options = {
    Cfg:{
      NoHScroll: true,  // Do not display horizontal scrollbar in the sheet, adjust width
    },
};
```

### Read More
- [NoVScroll cfg](./no-v-scroll)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
