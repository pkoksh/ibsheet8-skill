---
KEY: validateMessage
KIND: config-property
PATH: props/cfg/validate-message
ALIAS_EN: validcheck, configures, message, display, validation, fails, validatemessage, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/validate-message
---
# ValidateMessage ***(cfg)***

> When `ValidCheck` is set, configures the message to display when validation fails.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Sets the message to display when validation fails with `ValidCheck` configured. |

### Example
```javascript
options.Cfg = {
    ValidateMessage: "Validation failed.",  // Sets the message to display when validation fails.
};
```

### Read More
- [ValidCheck cfg](/docs/props/cfg/valid-check)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.3|Feature added|
