---
KEY: excludeAddDelStatus
KIND: config-property
PATH: props/cfg/exclude-add-del-status
ALIAS_EN: whether, exclude, rows, added, deleted, row, extraction, functions
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/exclude-add-del-status
---
# ExcludeAddDelStatus ***(cfg)***
> Sets whether to exclude rows that are both `Added` and `Deleted` when using row extraction functions. 

> The default behavior is `0 (disabled, rows are extracted)`. When set to `1 (enabled, exclude from extraction)`, rows with that status are not extracted. 

> This applies to save-related data extraction function calls (`getSaveJson`, `getSaveString`, `doSave`).

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
| `0 (false)` | Rows with status `Added:1, Deleted:1` are extracted (`default`) |
| `1 (true)` | Rows with status `Added:1, Deleted:1` are excluded from extraction|


### Examples
```js
options = {
  Cfg:{
    ExcludeAddDelStatus: 1   // Exclude rows with Added:1, Deleted:1 from extraction
  }
};
```

### Read More
- [Deleted row](../../props/row/deleted)
- [Added row](../../props/row/added)
- [getSaveJson](../../funcs/core/get-save-json)
- [getSaveString](../../funcs/core/get-save-string)
- [doSave](../../funcs/core/do-save)


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.38|Feature added|
