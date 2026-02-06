---
KEY: forceEnterEdit
KIND: config-property
PATH: props/cfg/force-enter-edit
ALIAS_EN: option, sheet, enter, edit, mode, focus, state, performing
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/force-enter-edit
---
# ForceEnterEdit ***(cfg)***

> An option that sets the sheet to enter edit mode from focus state before performing the subsequent action when [EnterMode](/docs/props/cfg/enter-mode)'s `mode` value is not `0`.


### Type
`boolean`


### Options
|Value|Description|
|-----|-----|
|`0(false)`|Perform the default `EnterMode` action|
|`1(true)`|In focus state, switch to edit mode first and then perform the default `EnterMode` action (`default`)|


### Example
```javascript
options.Cfg{
   // When moving with Enter key, if in edit state, end editing and move to the right cell (in focus state, move directly to the right cell)
   EnterMode: 3,
   ForceEnterEdit: false
   ...
};
```

### Read More

- [EnterMode cfg](/docs/props/cfg/enter-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
