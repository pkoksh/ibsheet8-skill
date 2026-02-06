---
KEY: filterEnumKeys
KIND: cell-property
PATH: props/cell/filter-enum-keys
ALIAS_EN: filtering, enum, type, column, enables, based, enumkeys, code
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/filter-enum-keys
---
# FilterEnumKeys ***(filter cell)***

> When filtering an Enum type column, enables filtering based on EnumKeys (code values) instead of Enum (display text).

> This property can be set through Def.Filter at sheet creation time.
> When there are duplicate Enum values, this property must be set to 1 to filter based on EnumKeys for distinction.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Filter based on Enum (display text) (`default`)|
|`1(true)`|Filter based on EnumKeys (code values)|


### Example
```javascript
// Assuming the Enum type column name is "Nation"
var option = {
    Def: {
        Filter: {
            Nation: {
                FilterEnumKeys: 1 // Filter Enum column based on Key values
            }
        }
    }
}
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
