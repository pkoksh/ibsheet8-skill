---
KEY: fitWidth
KIND: config-property
PATH: props/cfg/fit-width
ALIAS_EN: adds, dummy, column, last, attach, vertical, scrollbar, right
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/fit-width
---
# FitWidth ***(cfg)***

> Adds a dummy column after the last column to attach the vertical scrollbar to the right edge. 


###
[`FitWidth: false` setting]

![FitWidth: false](/assets/imgs/fitWidth0.png "FitWidth: false")
<!-- IMAGE: Screenshot/Example Image - FitWidth: false -->


[`FitWidth: true` setting]

![FitWidth: true](/assets/imgs/fitWidth1.png "FitWidth: true")
<!-- IMAGE: Screenshot/Example Image - FitWidth: true -->



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Feature disabled (`default`)|
|`1(true)`|Feature enabled|


### Example
```javascript
options.Cfg = {
    FitWidth: true    // Adds a dummy header to attach the scrollbar to the right edge.
};

```

### Try it
- [True](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/FitWidth-true/)

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
