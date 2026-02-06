---
KEY: fastloadConstraints
KIND: appendix
PATH: appx/fastload-constraints
ALIAS_EN: searchmode, settings, support, virtual, scroll, mode, loading, constraints
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/fastload-constraints
---
# Virtual Scroll Loading Constraints  ***(appendix)***
> SearchMode settings of 0 or 3 support virtual scroll mode.

> In this case, there are constraints when using certain types and features.

## Features Currently Unavailable

|Feature|Description|
|---|---|
|`Pivot`|Non-pivoted regular data sheets can be used|
|`Cfg.NoVScroll`|This option sets the sheet height to match the data height, so it cannot be used|

## Types Not Recommended (may cause scroll issues as they dynamically affect data row height)

- Lines
- Html
- Img
- Icon
- Button


### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [Type appendix](/docs/appx/type)
- [Type col](/docs/props/col/type)
- [Type cell](/docs/props/cell/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.3|Tree and group features supported|
