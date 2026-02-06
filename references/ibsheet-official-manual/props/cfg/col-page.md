---
KEY: colPage
KIND: config-property
PATH: props/cfg/col-page
ALIAS_EN: columns, center, section, dynamically, rendered, based, sheet, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/col-page
---
# ColPage ***(cfg)***

> Sets columns in the center section to be dynamically rendered based on sheet width or horizontal scroll position.

> The rendering unit can be set with [ColPageLength](/docs/funcs/core/col-page-length).
> This feature has the following limitations.
> - `(Cfg) MultiRecord` cannot be used
> - `(Cfg) AutoRowHeight` cannot be used
> - Merge cannot be used

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Dynamic rendering disabled (`default`)|
|`1`|Dynamic rendering enabled|

### Example
```javascript
options.Cfg = {
  ColPage: 1 // Enable column paging feature.
};
```

### Read More
- [ColPageLength](/docs/funcs/core/col-page-length)
- [Understanding Col Structure](/docs/start/col)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.11|Feature added|
|core|8.3.0.51|(Cfg) SearchMode:0 feature supported|
