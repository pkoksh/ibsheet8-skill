---
KEY: ignoreHeaderColMerge
KIND: config-property
PATH: props/cfg/ignore-header-col-merge
ALIAS_EN: determines, whether, apply, colmerge, property, header, area, well
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/ignore-header-col-merge
---
# IgnoreHeaderColMerge ***(cfg)***

> Determines whether to apply the `ColMerge` property to the header area as well. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`| Applies the ColMerge property to the header area as well. |
|`1(true)`| Does not apply the ColMerge property to the header area. (`default`)|


### Example
```javascript
options.Cfg = {
    IgnoreHeaderColMerge: false, // Applies the ColMerge property to the header area as well.
};
```

### Read More
- [ColMerge col](/docs/props/col/col-merge)
- [ColMerge cell](/docs/props/cell/col-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
