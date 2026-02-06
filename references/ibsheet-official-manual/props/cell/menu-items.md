---
KEY: menuItems
KIND: cell-property
PATH: props/cell/menu-items
ALIAS_EN: filter, icon, menu, display, cell, per, basis, menuitems
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/menu-items
---
# MenuItems ***(cell>Filter)***

> Sets the filter icon menu to display in the Filter cell on a per-cell basis.



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`items`|A string of icon numbers to display, connected by ","|

**Detailed description of operators**

|value|type|desc|
|---|---|---|
|`0`|Common|Do not use filter|
|`1`|Common|Equals|
|`2`|Common|Not equals|
|`3`|Number, Date|Less than|
|`4`|Number, Date|Less than or equal to|
|`5`|Number, Date|Greater than|
|`6`|Number, Date|Greater than or equal to|
|`7`|Text|Starts with|
|`8`|Text|Does not start with|
|`9`|Text|Ends with|
|`10`|Text|Does not end with|
|`11`|Text|Contains|
|`12`|Text|Does not contain|
|`13`|Number|Top 10|
|`14`|Common|Has value|
|`15`|Common|Has no value|

### Example
```javascript
// Set icons to display for the "RENTDATE" column
options.Filter = [
    RENTDATE: {
        MenuItems: "0,1,2,3,4,5,6,7,8,9,10,11,12"
    },
];
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.27|Added feature 13|
|core|8.1.0.27|Added features 14, 15|
