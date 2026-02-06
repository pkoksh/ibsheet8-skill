---
KEY: sortIconsNum
KIND: config-property
PATH: props/cfg/sort-icons-num
ALIAS_EN: displays, sort, priority, number, right, icon, multi, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/sort-icons-num
---
# SortIconsNum ***(cfg)***
> Displays the sort priority as a number to the right of the sort icon during multi-column sorting. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Does not display the sort priority as a number during multi-column sorting. (`default`)|
|`1(true)`|Displays the sort priority as a number during multi-column sorting.|

### Example
```javascript
// Displays sort priority as a number during multi-column sorting.
options.Cfg = {
    SortIconsNum: true
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.102|Feature added|
<!--!|`[Private]` core-lwc|8.1.1.98|Feature added|
!-->
