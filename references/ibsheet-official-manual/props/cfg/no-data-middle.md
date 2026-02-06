---
KEY: noDataMiddle
KIND: config-property
PATH: props/cfg/no-data-middle
ALIAS_EN: displays, nodata, row, center, screen, there, retrieved, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/no-data-middle
---
# NoDataMiddle ***(cfg)***

> Displays the NoData row in the center of the screen when there is no retrieved data.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Display the NoData row at the top (`default`)|
|`1(true)`|Display the NoData row in the center of the screen|

NoDataMiddle : 0 (`default`)

![NoDataMiddle:0](/assets/imgs/NoDataMiddle0.png "NoDataMiddle:0")
<!-- IMAGE: Screenshot/Example Image - NoDataMiddle:0 -->



NoDataMiddle : 1 

![NoDataMiddle:1](/assets/imgs/NoDataMiddle.png "NoDataMiddle:1")
<!-- IMAGE: Screenshot/Example Image - NoDataMiddle:1 -->



### Example
```javascript
options.Cfg = {
  NoDataMiddle: 1,  // Display in the center of the screen when there is no retrieved data
  ...
};
```

### Try it
- [True](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/NoDataMessage/)

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.36|Feature added|
