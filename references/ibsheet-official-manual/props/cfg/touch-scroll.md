---
KEY: touchScroll
KIND: config-property
PATH: props/cfg/touch-scroll
ALIAS_EN: appearance, scrollbars, within, sheet, tablet, mobile, devices, touchscroll
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/touch-scroll
---
# TouchScroll ***(cfg)***

> Sets the appearance of scrollbars within the sheet on tablet or mobile devices. 

> Applies to horizontal scrollbars created per sheet section and horizontal/vertical scrollbars created for the entire sheet.




### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Only the scrollbar area exists, but actual movement via scrollbar is not possible (Does not work in `SearchMode: 0`.)|
|`1`|Use normal style scrollbar|
|`2`|Use large style scrollbar (`default`)|
|`3`|Use small style scrollbar|
|`4`|Hide scrollbar|

**When set to `0` or `4`, movement is only possible through mouse wheel scroll or touch on the body (data) area**

### Example
```javascript
options.Cfg = {
  TouchScroll: 4      // Hide scrollbar, movement only via touch.
};
```

### Read More
- [CustomScroll cfg](./custom-scroll)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
