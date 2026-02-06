---
KEY: standardTip
KIND: config-property
PATH: props/cfg/standard-tip
ALIAS_EN: whether, show, tooltips, sheet, built, dialog, browser, tooltip
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/standard-tip
---
# StandardTip ***(cfg)***

> Sets whether to show tooltips as the sheet's built-in dialog or as the browser's tooltip.

> When set to the sheet's built-in dialog, [TipPosition](/docs/props/col/tip-position) and [TipClass](/docs/props/col/tip-class) can be applied.



### Type
`boolean`


### Options
|Value|Description|
|-----|-----|
|`0(false)`|Show tooltip as the sheet's built-in dialog (`default`)|
|`1(true)`|Show as standard browser tooltip|


### Example
```javascript
options.Cfg = {
   StandardTip: true
};
```

### Read More
- [TipPosition col](/docs/props/col/tip-position)
- [TipClass col](/docs/props/col/tip-class)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
