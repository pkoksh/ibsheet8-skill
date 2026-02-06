---
KEY: memoId
KIND: config-property
PATH: props/cfg/memo-id
ALIAS_EN: unique, value, required, memo, feature, sheet, memoid, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/memo-id
---
# MemoId ***(cfg)***

> Sets a unique id value required to use the memo feature on the sheet.

> The memo feature can be set on header cells of the sheet.

> Header cells with the memo feature enabled display a red triangle in the upper left corner.

> When hovering the mouse over a header cell with the memo feature enabled, the memo value is shown as a tooltip.

> Memo values can be set through [showMemoDialog method](/docs/funcs/core/show-memo-dialog).

> Memo data is managed in the browser's localStorage.

![MemoId](/assets/imgs/memoId0.png)
<!-- IMAGE: Screenshot/Example Image - MemoId -->

![MemoId](/assets/imgs/memoId1.png)
<!-- IMAGE: Screenshot/Example Image - MemoId -->

### Type
`string`


### Example
```javascript
options.Cfg = {
    MemoId: "sheet1Memo" // Set the memo id value for the sheet to use the memo feature
};
```

### Read More
- [showMemoDialog method](/docs/funcs/core/show-memo-dialog)
- [removeMemo method](/docs/funcs/core/remove-memo)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|Feature added|
