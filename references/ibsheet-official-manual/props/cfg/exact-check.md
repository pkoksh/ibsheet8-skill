---
KEY: exactCheck
KIND: config-property
PATH: props/cfg/exact-check
ALIAS_EN: whether, clicking, empty, space, cell, exact, checkbox, radio
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/exact-check
---
# ExactCheck ***(cfg)***

> Sets whether clicking on the empty space of a cell (not the exact checkbox or radio button) in `Bool` or `Radio` type columns does not trigger check/uncheck. 

> This also applies to header checkboxes displayed using [`HeaderCheck`](/docs/props/cfg/header-check).


> **<mark>Caution</mark> : Regardless of this property, in `Radio` columns with `Enum` set, clicking the text next to the radio button will still trigger a check.**

> When using header checkboxes, you should set `"Header": {"Value": "", "IconAlign": "Center"}` so that the header checkbox icon is displayed in the center of the cell.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Clicking the cell triggers the checkbox (`default`)|
|`1(true)`|Clicking the cell does not trigger the checkbox|


### Example
```javascript
options.Cfg = {
    ExactCheck: true        // Check/uncheck only works when clicking the checkbox
};
```

### Read More
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|Feature added|
|core|8.1.0.6|Applied to header check feature|
