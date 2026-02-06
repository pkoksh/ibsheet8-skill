---
KEY: headerCheckPageOnly
KIND: config-property
PATH: props/cfg/header-check-page-only
ALIAS_EN: cfg, headercheck, option, check, searchmode, checks, currently, visible
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/header-check-page-only
---
# HeaderCheckPageOnly ***(cfg)***

> When using the `(Cfg) HeaderCheck` option to check all in `(Cfg) SearchMode: 1`, checks only the currently visible page instead of all pages. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
| `0` | Check all pages when clicking the check all button (`default`)|
| `1` | Check only the currently visible page when clicking the check all button |

### Example
```javascript
options = {
    Cfg :{
        HeaderCheckPageOnly: 1, // When using the `(Cfg) HeaderCheck` option to check all in `(Cfg) SearchMode: 1`, checks only the currently visible page instead of all pages.
        ...
    }
};
```

### Read More
- [HeaderCheck col](/docs/props/col/header-check)
- [HeaderCheckMode cfg](./header-check-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.26|Feature added|
