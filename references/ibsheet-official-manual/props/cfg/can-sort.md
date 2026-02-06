---
KEY: canSort
KIND: config-property
PATH: props/cfg/can-sort
ALIAS_EN: whether, column, sorting, sort, via, header, click, allowed
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/can-sort
---
# CanSort ***(cfg)***

> Sets whether column sorting (`Sort`) via header click is allowed. 

> Header sort icons can be hidden according to the [SortIcons cfg](./sort-icons) setting. 



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Sorting feature disabled|
|`1(true)`|Sorting feature enabled (`default`)|


### Example
```javascript
options.Cfg = {
    CanSort: false,   // Disable sorting feature
};
```

### Try it
- [True by default](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/CanSort-true/)

### Read More
- [SortIcons cfg](./sort-icons)
- [CanSort row](/docs/props/row/can-sort)
- [CanSort col](/docs/props/col/can-sort)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
