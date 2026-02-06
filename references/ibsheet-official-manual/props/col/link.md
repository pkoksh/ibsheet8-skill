---
KEY: link
KIND: column-property
PATH: props/col/link
ALIAS_EN: wraps, cell, data, tag, url, href, attribute, link
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/link
---
# Link ***(col)***

> Wraps the cell data with an \<a> tag and sets the URL for the href attribute.

> Can be used together with the `LinkBase` and `LinkTarget` properties to set a relative path or the target window on click.

> **This option only works when CanEdit is set to 0.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|URL to navigate to on click|


### Example
```javascript
// Navigate to a specific URL when the column is clicked.
options.Cols = [
    ...
    {Type: "Text", Link: "/tMIS/dcp/ConfProc.do", LinkTarget: "_self", CanEdit: 0, Name: "sa_cfprc", Width: 100 ...},
    ...
];
```

### Read More
- [LinkBase col](/docs/props/col/link-base)
- [LinkTarget col](/docs/props/col/link-target)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
