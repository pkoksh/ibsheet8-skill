---
KEY: sortIcons
KIND: config-property
PATH: props/cfg/sort-icons
ALIAS_EN: display, sort, icons, screen, location, function, operates, sorticons
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/sort-icons
---
# SortIcons ***(cfg)***

> Sets the display of sort icons on screen and the location where the sort function operates. 

> Additional settings for icons and whether sorting is possible can be configured in [SortIcons(Header)](/docs/props/row/sort-icons). 

> However, options 2 or 3 that allow sorting by icon click can only be used when `Header.SortIcons:1` is set to display all sort icons.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Hide sort icons, sort ascending -> descending on cell click|
|`1`|Show sort icons, sort ascending -> descending on cell click (`default`)|
|`2`|Sort ascending on upper part of sort icon click, sort descending on lower part click|
|`3`|Sort ascending on upper part of cell (including sort icon) click, sort descending on lower part of cell click|


### Example
```javascript
options.Cfg = {
    CanSort: 1,        // Enable sort function
    SortIcons: 0       // Do not show sort icons (sort operates on cell click)
};
```
**Or**
```javascript
options.Cfg = {
    CanSort: 1,        // Enable sort function
    SortIcons: 2       // Sort operates only on sort icon click
};
options.Header  = {
    SortIcons: 0,       // All icons are hidden and sorting is not possible
    SortIcons: 1,       // Show all sort icons (before sorting, .IBSort0Right image is displayed)
    SortIcons: 2       // Icons are displayed only on sorted columns.
};
```

### Read More
- [CanSort cfg](./can-sort)
- [SortIcons row](/docs/props/row/sort-icons)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
