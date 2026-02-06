---
KEY: headerSortMode
KIND: config-property
PATH: props/cfg/header-sort-mode
ALIAS_EN: changes, sorting, order, clicking, headers, headersortmode, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/header-sort-mode
---
# HeaderSortMode ***(cfg)***

> Changes the sorting order when clicking headers. 

> Without any special settings, the sheet sorts in the order of primary, secondary, and tertiary based on the order of header clicks according to the [MaxSort](/docs/props/cfg/max-sort) setting.

> For example, if `MaxSort:3` and headers of columns A, B, C are clicked in order, sorting is performed in the order of **primary:A, secondary:B, tertiary:C**, and after these 3 columns are determined, clicking other columns will not trigger sorting. 

>
> **If instead of this behavior, you want to set the last clicked column as primary, and continuously change the newly clicked header to primary after the sort columns are determined, set this property to 1.**

>
> If you want to clear existing sorting, **shift+header click**.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
| `0` | Primary/secondary/tertiary is determined in click order, sorting only up to the count specified in `MaxSort`, and columns exceeding `MaxSort` are not sorted. (`default`) |
| `1` | Primary/secondary/tertiary is determined in reverse click order, the last clicked header becomes primary, and the previously tertiary column is removed from sorting.|
| `2` | Only the sort icon of the clicked header changes, actual sorting does not occur.|
| `3` | Only the sort icon of the clicked header changes, actual sorting does not occur. Additionally, sorting via [doSort](/docs/funcs/core/do-sort) also only changes the icon without actual sorting.|
| `4` | Primary/secondary/tertiary is determined in click order, the last clicked header becomes tertiary, and the previously primary column is removed from sorting. |


### Example
```javascript
options = {
    Cfg :{
        HeaderSortMode: 1,
        ...
    }
};
```

### Read More
- [MaxSort cfg](/docs/props/cfg/max-sort)
- [HeaderSortActionMode cfg](/docs/props/cfg/header-sort-action-mode)
- [UseHeaderSortCancel cfg](/docs/props/cfg/use-header-sort-cancel)
- [doSort method](/docs/funcs/core/do-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.4|Feature added|
|core|8.0.0.8|Added `HeaderSortMode: 2,3`|
|core|8.3.0.43|Added `HeaderSortMode: 4`|
