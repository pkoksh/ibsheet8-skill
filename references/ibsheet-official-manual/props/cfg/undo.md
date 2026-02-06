---
KEY: undo
KIND: config-property
PATH: props/cfg/undo
ALIAS_EN: whether, allow, undoing, values, modified, user, setvalue, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/undo
---
# Undo ***(cfg)***

> Sets whether to allow undoing values modified by the user or through [setValue](/docs/funcs/core/set-value) with `ctrl+z`, or redoing with `ctrl+y`.

> Performs operations such as undoing cell value modifications, undoing status changes to deleted, and undoing newly added rows. 

> Undo is not supported for column movement, sorting, or permanent row deletion ([removeRow](/docs/funcs/core/remove-row)).

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not use the Undo feature. (`default`)|
|`1(true)`|Use the Undo feature.|

### Example
```javascript
options.Cfg = {
    Undo: 1,              // Whether to use Undo feature
    ...
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
