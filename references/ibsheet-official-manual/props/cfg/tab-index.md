---
KEY: tabIndex
KIND: config-property
PATH: props/cfg/tab-index
ALIAS_EN: tabstop, tabindex, specify, position, sheet, tab, order, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/tab-index
---
# TabIndex ***(cfg)***

> When `TabStop` is set, `TabIndex` can be set to specify the position of the sheet in the tab order. 

>


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|The configured `TabIndex` value|


### Example
```javascript
options.Cfg = {
  TabIndex: 5,         // Set the sheet to have the 5th tabindex
};
```

### Read More
- [TabStop cfg](./tab-stop)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
