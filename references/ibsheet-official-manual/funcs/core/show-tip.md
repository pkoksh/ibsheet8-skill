---
KEY: showTip
KIND: method
PATH: funcs/core/show-tip
ALIAS: sheet.showTip, showTip()
ALIAS_EN: displays, balloon, tooltip, desired, content, current, mouse, cursor
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-tip
---
# showTip ***(method)***
> Displays a balloon tooltip with the desired content at the current mouse cursor position.

> Including HTML tags in the `tip` argument allows for more diverse expressions.

### Syntax
```javascript
void showTip( tip );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|tip |`string`|Required|Content to display in the balloon tooltip|

### Return Value
***none***

### Example
```javascript
// Display content as a balloon tooltip at the current mouse cursor position.
sheet.showTip("You are so beautiful");
```

### Read More

- [hideTip method](./hide-tip)
- [onShowTip event](/docs/events/on-show-tip)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
