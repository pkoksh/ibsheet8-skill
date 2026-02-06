---
KEY: linkTarget
KIND: column-property
PATH: props/col/link-target
ALIAS_EN: cell, link, docs, props, col, property, target, window
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/link-target
---
# LinkTarget ***(col)***

> When a cell has the [Link](/docs/props/col/link) property, sets the target window to navigate to on click.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Target window to navigate to on click (_blank, _parent, _self, _top, specific window name)|


### Example
```javascript
// Navigate to a specific URL when the column is clicked.
options.Cols = [
    ...
    // Open in a new window on click
    {Type: "Text", Link: "/tMIS/dcp/ConfProc.do", LinkTarget: "_blank", CanEdit: 0 , Name: "sa_cfprc", Width: 100 ...},
    ...
];
```

### Read More
- [Link col](/docs/props/col/link)
- [LinkBase col](/docs/props/col/link-base)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
