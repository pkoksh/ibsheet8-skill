---
KEY: hideHint
KIND: method
PATH: funcs/core/hide-hint
ALIAS: sheet.hideHint, hideHint()
ALIAS_EN: hides, currently, displayed, hint, hidehint, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/hide-hint
---
# hideHint ***(method)***
> Hides the currently displayed hint.


###
![Hint enabled](/assets/imgs/hint1.png "When the mouse cursor is over a cell, the hidden portion is shown through a hint")
<!-- IMAGE: Screenshot/Example Image - Hint enabled -->

[Hint example]

### Syntax
```javascript
void hideHint();
```

### Return Value
***none***

### Example
```javascript
// Hide the currently displayed hint
sheet.hideHint();
```

### Read More

- [showHint method](./show-hint)
- [onShowHint event](/docs/events/on-show-hint)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
