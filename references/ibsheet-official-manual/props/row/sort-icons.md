---
KEY: sortIcons
KIND: row-property
PATH: props/row/sort-icons
ALIAS_EN: display, behavior, sort, icons, sorticons, row, header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/sort-icons
---
# SortIcons ***(Row>Header)***

> Sets the display and behavior of sort icons. 

> When using this feature together with [SortIcons cfg](/docs/props/cfg/sort-icons), option `0` applies this option, and options `1, 2` apply [SortIcons cfg](/docs/props/cfg/sort-icons). 



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`| All icons are hidden and sorting is disabled |
|`1`| All sort icons are displayed (before sorting, the .IBSort0Right image is displayed), not available in `MultiRecord` |
|`2`| Icons are only displayed on the sorted column (`default`) |


### Example
```javascript
options.Def.Header  = {
    SortIcons: 1       // Display all sort icons
};
```

### Read More
- [SortIcons cfg](/docs/props/cfg/sort-icons)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
