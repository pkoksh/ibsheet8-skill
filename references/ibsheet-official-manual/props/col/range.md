---
KEY: range
KIND: column-property
PATH: props/col/range
ALIAS_EN: whether, allow, multiple, selections, columns, type, docs, appx
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/range
---
# Range ***(col)***
> Sets whether to allow multiple selections in columns with [Type](/docs/appx/type) `Enum`, `Radio`, `File`, or `Date`.

> When [Type](/docs/appx/type) is `Enum`, checkboxes are created in the dropdown list to allow selecting multiple items.

> When [Type](/docs/appx/type) is `Radio`, checkboxes are created to allow selecting multiple items.

> When [Type](/docs/appx/type) is `File`, multiple files can be selected.

> When [Type](/docs/appx/type) is `Date`, multiple dates can be selected in the calendar by dragging.

> Items selected in multiple are returned as a concatenated string using the characters set in `ValueSeparator` and `ValueSeparatorHtml` in the `locale/*.js` file as delimiters.
### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Only single selection allowed (`default`)|
|`1(true)`|Multiple selection allowed|



### Example
```javascript
// Allow multiple selections in Enum
options.Cols = [
    ...
    {Header: "Holiday Gift", Type: "Enum", Name: "gift", Range : 1, Enum: "|Rib Set|Dried Fish Set|Apple Pear|Spam No.3" ...},
    ...
];

// Allow multiple selections in File
options.Cols = [
    ...
    {Header: "File Selection", Type: "File", Name: "lblist", Range: 1},
    ...
];

```


### Read More
- [Enum col](/docs/props/col/enum)
- [Radio col](/docs/props/col/radio)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
