---
KEY: wrap
KIND: cell-property
PATH: props/cell/wrap
ALIAS_EN: whether, word, wrap, feature, cell, content, long, latter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/wrap
---
# Wrap ***(cell)***

> Sets whether to use the word wrap feature when the cell content is too long and the latter part is not visible.

> When word wrapping occurs, the row height increases.

> Generally used with the `Text` type, and can also be used with the `Radio` type.

> For [Lines type](/docs/appx/type) columns, it is set to `default: 1(true)`.

<!--! > In large data mode, [SearchMode:0](/docs/props/cfg/search-mode) does not support dynamic row heights for data rows, so this feature cannot be used.
!-->

### Type

`boolean`

### Options

|Value|Description|
|-----|-----|
|`0(false)`|Do not use word wrap (`default`)|
|`1(true)`|Use word wrap (`default: 1(true) when column Type is Lines`)|


### Example

```javascript
// Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSWrap": 1, ...}
    ]
}
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
