---
KEY: validCheck
KIND: config-property
PATH: props/cfg/valid-check
ALIAS_EN: performs, validation, save, functions, dosave, docs, funcs, core
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/valid-check
---
# ValidCheck ***(cfg)***

> Performs validation when save functions ([doSave](/docs/funcs/core/do-save), [getSaveJson](/docs/funcs/core/get-save-json), [getSaveString](/docs/funcs/core/get-save-string)) are called, and marks cells that failed validation.

> The `focus` is placed on the first cell that failed validation, and it enters edit mode.

> Validation items are as follows. 


> **<mark>Caution</mark>: Cells that failed validation are only marked when the property value is set to `true` or `object`.**

> - `EditMask` validation 

> - `ResultMask` validation 

> - `Required` validation 

> - `Size` validation 


### Type
`mixed`( `boolean` \| `object` )

### Options
|Value|Description|
|-----|-----|
|`0(false)`|When save functions ([doSave](/docs/funcs/core/do-save), [getSaveJson](/docs/funcs/core/get-save-json), [getSaveString](/docs/funcs/core/get-save-string)) are called, only Required validation is performed. (`default`)
During save function operation, the `validRequired` parameter setting is reflected, while `validSize`, `validEditMask`, `validResultMask` settings are not reflected.|
|`1(true)` |When save functions ([doSave](/docs/funcs/core/do-save), [getSaveJson](/docs/funcs/core/get-save-json), [getSaveString](/docs/funcs/core/get-save-string)) are called, validation is performed.
During save function operation, `validRequired`, `validSize`, `validEditMask`, `validResultMask` parameter settings are reflected.|
|`object`  |Operates the same as `1(true)`, with settings for whether `Focus`(`default :1`) and `Edit`(`default :1`) are applied to the first cell that failed validation
|

### Example
```javascript
// Performs validation when save functions (doSave, getSaveString, getSaveJson) are called.
// Moves Focus to the first cell that failed validation and sets the cell to edit mode.
options.Cfg = {
    ValidCheck: true
};

// Performs validation when save functions (doSave, getSaveString, getSaveJson) are called.
// Moves Focus to the first cell that failed validation.
options.Cfg = {
    ValidCheck: {
        Focus : 1,
        Edit : 0
    },
};
```

### Read More
- [doSave method](/docs/funcs/core/do-save)
- [getSaveJson method](/docs/funcs/core/get-save-json)
- [getSaveString method](/docs/funcs/core/get-save-string)
- [ValidateMessage cfg](/docs/props/cfg/validate-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.3|Feature added|
|core|8.2.0.15|`object` feature added|
