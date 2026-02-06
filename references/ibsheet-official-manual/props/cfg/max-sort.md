---
KEY: maxSort
KIND: config-property
PATH: props/cfg/max-sort
ALIAS_EN: property, limits, maximum, number, columns, sorted, together, user
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/max-sort
---
# MaxSort ***(cfg)***

> A property that limits the maximum number of columns that can be sorted together when the user performs Multi Column Sort by clicking header cells.

> Only visible columns can be used, and sorting with too many linked columns may cause performance degradation.

> If users find multi-column sorting difficult, it is recommended to set this property to 1 to allow sorting on only one column.

> Setting this property to 0 disables the sorting feature when clicking headers.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Number of columns available for linked sorting (`default: 3`)|


### Example
```javascript
options.Cfg = {
    MaxSort: 2,        // Process linked sorting for a maximum of 2 columns only.
};
```

### Read More

- [CanSort cfg](./can-sort)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
