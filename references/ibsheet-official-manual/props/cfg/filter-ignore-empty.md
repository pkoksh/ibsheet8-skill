---
KEY: filterIgnoreEmpty
KIND: config-property
PATH: props/cfg/filter-ignore-empty
ALIAS_EN: whether, cells, empty, values, ignored, filter, operators, filterignoreempty
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/filter-ignore-empty
---
# FilterIgnoreEmpty ***(cfg)***

> Sets whether cells with empty values are ignored by filter operators.

> This setting does not apply when searching for or comparing empty strings.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Not used (`default`)|
|`1`|When [Type](/docs/appx/type) is `Int` or `Float`, does not show empty values when filtering with one of the <, <=, >, >= operators.|
|`4`|When [Type](/docs/appx/type) is `Text` or `Lines`, does not show cells with empty strings when filtering with one of the does not contain, does not start with, does not end with operators.|
|`8`|When [Type](/docs/appx/type) is `Int` or `Float`, does not show empty values when filtering with the not equal operator. |
|`16`|When [Type](/docs/appx/type) is `Text` or `Lines`, does not show cells with empty strings when filtering with the not equal operator. |


### Example
```javascript
options = {
    Cfg :{
      FilterIgnoreEmpty: 8,  // When Type is `Int` or `Float`, does not show empty values when filtering with the not equal operator.
    }
};
```

### Read More
[Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
