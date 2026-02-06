---
KEY: tipStart
KIND: config-property
PATH: props/cfg/tip-start
ALIAS_EN: balloon, tooltip, feature, tip, function, time, mouse, cursor
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/tip-start
---
# TipStart ***(cfg)***

> When using the balloon tooltip feature with the `Tip` function, sets the time from when the mouse cursor stops until the balloon tooltip is displayed.

> The unit is `ms`, and if not set, the balloon tooltip is displayed after 500ms.

> When set to `0`, the balloon tooltip is not displayed. When set to `1`, it is displayed immediately.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`value`|Wait time (in ms) after the cursor stops until the balloon tooltip is displayed (`default: 500`)|


### Example
```javascript
options = {
    Cfg:{
      TipStart: 300  // Balloon tooltip is displayed after 0.3 seconds.
    },
    Def:{
      Row:{
        Tip: 1  // Display balloon tooltip for all data rows
      }
    }
};
```

### Read More
- [Tip row](/docs/props/row/tip)
- [Tip col](/docs/props/col/tip)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
