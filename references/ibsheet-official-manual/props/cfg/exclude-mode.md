---
KEY: excludeMode
KIND: config-property
PATH: props/cfg/exclude-mode
ALIAS_EN: defines, behavior, ctrl, operates, bitwise, operation, excludemode, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/exclude-mode
---
# ExcludeMode ***(cfg)***
> Defines the behavior when using `Ctrl + X`. Operates as a bitwise operation.
> The default behavior is **data copy + row Deleted:1 added (`Value:3`)**.
> If `Value:1` is not set, data will not be copied, so setting it is recommended.

### Type
`number`
### Options
|Value|Description|
|-----|-----|
| `1` | Copy data to clipboard |
| `2` | Change row status to `Deleted:1`|
| `4` | Delete cell data |

### Examples
```js
options = {
  Cfg:{
    ExcludeMode: 5   // Copy data and delete cell data
  }
};
```

### Read More
- [Deleted row](../../props/row/deleted)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.22|Feature added|
