---
KEY: staticCursor
KIND: config-property
PATH: props/cfg/static-cursor
ALIAS_EN: whether, maintain, focus, cursor, clicking, elements, outside, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/static-cursor
---
# StaticCursor ***(cfg)***

> Sets whether to maintain the focus cursor when clicking on elements outside the sheet.

> If you want to remove the selection color and outline of the current sheet when clicking on another sheet or an element outside the sheet, set to `0(false)`. 



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Remove the color and outline of the selected sheet row or cell when clicking on elements outside the sheet. When clicking another sheet, selection is transferred to that sheet|
|`1(true)`|Maintain the color and outline of the selected sheet row or cell even when clicking on elements outside the sheet (`default`)


### Example
```javascript
options.Cfg = {
  StaticCursor: 0     // Remove selection color when losing focus.
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
