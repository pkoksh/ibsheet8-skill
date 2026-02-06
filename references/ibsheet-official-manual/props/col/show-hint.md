---
KEY: showHint
KIND: column-property
PATH: props/col/show-hint
ALIAS_EN: whether, hint, feature, column, showhint, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/show-hint
---
# ShowHint ***(col)***

> Sets whether to use the hint feature on the column.

> The hint is a feature that temporarily expands the width of a cell when the mouse cursor is over it, showing hidden content when the column width is too narrow to display the full cell content.

> This feature does not work on checkbox or radio type columns.

###
![Hint enabled](/assets/imgs/hint1.png "Hidden content is shown through hint when mouse cursor is over the cell")
<!-- IMAGE: Screenshot/Example Image - Hint enabled -->



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Hint feature disabled|
|`1`|Activates when the cell size is small and only part of the cell content is visible (`default`)|
|`2`|In addition to option 1, activates hint when the cell is at the bottom in a sheet with scrollbar and the lower part of the content is not visible|
|`3`|Hint feature does not normally activate and only works through the [onShowHint](/docs/events/on-show-hint) event (can configure what content is shown in the hint through the event)|


### Example
```javascript
// Use the hint feature on a specific column
options.Cols = [
    ...
    {Type: "Text", ShowHint: 2, Name: "DESC", Width: 120 ...},
    ...
];
```

### Read More
- [HintValue col](./hint-value)
- [ShowHint row](/docs/props/row/show-hint)
- [onShowHint event](/docs/events/on-show-hint)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
