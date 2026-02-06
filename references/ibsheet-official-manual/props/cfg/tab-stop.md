---
KEY: tabStop
KIND: config-property
PATH: props/cfg/tab-stop
ALIAS_EN: whether, include, sheet, tab, key, navigation, order, among
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/tab-stop
---
# TabStop ***(cfg)***

> Sets whether to include the sheet in the tab key navigation order among elements on the page. 

> When the sheet is included, the `Tab` order can be set with `TabIndex`.

>


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Sheet is not accessible via `Tab` key within the page|
|`1`|Sheet is accessible via `Tab` key within the page (`default`)|


### Example
```javascript
options.Cfg = {
  TabStop: 0,          // Do not allow sheet access via tab key
  ...
};
```

### Read More
- [TabIndex cfg](./tab-index)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
