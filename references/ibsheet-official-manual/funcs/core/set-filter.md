---
KEY: setFilter
KIND: method
PATH: funcs/core/set-filter
ALIAS: sheet.setFilter, setFilter()
ALIAS_EN: performs, filtering, based, values, currently, present, sheet, regardless
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-filter
---
# setFilter ***(method)***
> Performs filtering based on the values currently present in the sheet, regardless of the filter row.

> The set content is not displayed in the filter row.


### Syntax
```javascript
void setFilter( name, filter, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|name|`string`|Required|Name of the filter to set, used to distinguish from other filters
|filter|`string` \| `function`|Required|Filter condition (ex: `"cardAmt>50000?1:0"`)
|render|`boolean`|Optional|Whether to immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|


### Return Value
***none***

### Example
```javascript
//Show only rows where the deptName column is "General Affairs Dept." and the cardAmt value is 100000 or more.
sheet.setFilter({ name: "General Affairs Dept.", filter: "deptName=='General Affairs Dept.'?1:0", render: 0 });
sheet.setFilter({ name: "Card", filter: "cardAmt>100000?1:0", render: 1 });


//Show only rows where the "DELIVERYDEPTNAME" column contains the string "Cheonnan".
sheet.setFilter("myFilter", function(obj) {
    if (obj.Row.DELIVERYDEPTNAME) {
    return obj.Row.DELIVERYDEPTNAME.indexOf('Cheonnan') > -1;
    }
}, 1);
```

### Read More
- [clearFilter method](./clear-filter)
- [doFilter method](./do-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
