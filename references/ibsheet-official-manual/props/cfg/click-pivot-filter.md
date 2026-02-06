---
KEY: clickPivotFilter
KIND: config-property
PATH: props/cfg/click-pivot-filter
ALIAS_EN: clicking, pivot, data, sheet, filters, displays, corresponding, rows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/click-pivot-filter
---
# ClickPivotFilter ***(cfg)***

> When clicking pivot data in the pivot sheet, filters and displays the corresponding rows from the source sheet.

> To view the source sheet from the filtered sheet, you must call [clearFilter](/docs/funcs/core/clear-filter).



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Pivot sheet click filter feature disabled (`default`)|
|`1(true)`|Pivot sheet click filter feature enabled|


### Example
```javascript
options = {
  "Cfg":{
    "ClickPivotFilter": 1,  // Enable pivot sheet click filter feature
  }
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [makePivotTable method](/docs/funcs/core/make-pivot-table)
- [switchPivotSheet method](/docs/funcs/core/switch-pivot-sheet)
- [clearFilter method](/docs/funcs/core/clear-filter)
- [setFilter method](/docs/funcs/core/set-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.20|Feature added|
