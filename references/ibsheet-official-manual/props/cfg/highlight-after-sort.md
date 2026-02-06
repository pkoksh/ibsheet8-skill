---
KEY: highlightAfterSort
KIND: config-property
PATH: props/cfg/highlight-after-sort
ALIAS_EN: focus, behavior, sort, operation, highlightaftersort, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/highlight-after-sort
---
# HighlightAfterSort ***(cfg)***

> Sets the focus behavior after a sort operation. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Clears focus and maintains vertical scroll position. |
|`1`|Maintains the focused row before the sort and moves the vertical scroll to the position of that cell. (`default`)|
|`2`|Maintains the focused row before the sort and resets horizontal and vertical scroll positions to the top. |
|`3`|Always moves focus to the first row after the sort and moves the vertical scroll to that cell position.|
|`4`|Maintains focus at the focused row position. For example, if row 25 is focused and sorting is performed, focus always remains on the 25th row. (Vertical scroll position is maintained.)|

### Example
```javascript
options.Cfg = {
    HighlightAfterSort: 2 // When sorting is performed, maintains the previous focused row and resets vertical scroll position to the top.
};
```

### Read More
- [doSort method](/docs/funcs/core/do-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.63|Feature added|
