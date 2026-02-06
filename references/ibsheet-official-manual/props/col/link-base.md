---
KEY: linkBase
KIND: column-property
PATH: props/col/link-base
ALIAS_EN: cell, link, docs, props, col, property, base, path
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/link-base
---
# LinkBase ***(col)***

> When a cell has the [Link](/docs/props/col/link) property, sets the base path.

> Assuming the current page is **/abc/test.html**, the connected `URL` based on the `LinkBase` setting is as follows:
> |Link|LinkBase|Actual Connected URL|
> |---|---|---|
> |/xyz/test2.html||/xyz/test2.html|
> |./xyz/test2.html||/abc/xyz/test2.html|
> |/xyz/test2.html|/kor|/kor/xyz/test2.html|
> |./xyz/test2.html|/kor|/kor/xyz/test2.html|


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Base path for the `URL` set in [Link](/docs/props/col/link)|


### Example
```javascript
// Navigate to a specific URL when the column is clicked.
options.Cols = [
    ...
    // Connects to /koef/tMIS/dcp/ConfProc.do on click
    {Type: "Text", Link: "/tMIS/dcp/ConfProc.do", LinkBase: "/koef", CanEdit: 0, Name: "sa_cfprc", Width: 100 ...},
    ...
];
```

### Read More

- [Link col](/docs/props/col/link)
- [LinkTarget col](/docs/props/col/link-target)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
