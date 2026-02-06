---
KEY: hintValue
KIND: column-property
PATH: props/col/hint-value
ALIAS_EN: hint, feature, temporarily, expands, cell, width, show, hidden
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/hint-value
---
# HintValue ***(col)***

> Hint is a feature that temporarily expands the cell width to show hidden content when the column width is too narrow to display all cell content, only for the cell where the mouse cursor is hovering.

> When using the hint feature, sets the content to display instead of the original cell content.


###
![Hint activated](/assets/imgs/hint1.png "When mouse cursor hovers over a cell, hidden content is shown through the hint")
<!-- IMAGE: Screenshot/Example Image - Hint activated -->

[**Hint feature usage example**]

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Text to display when the hint feature is activated (when mouse cursor hovers over the cell)|



### Example
```javascript
// Use hint feature on a specific column
options.Cols = [
    ...
    {Type: "Text", HintValue: "This quarter has been closed.", ShowHint: 2, Name: "DESC", Width: 120 ...},
    ...
];
```

### Read More
- [ShowHint col](./show-hint)
- [ShowHint row](/docs/props/row/show-hint)
- [onShowHint event](/docs/events/on-show-hint)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
