---
KEY: customScroll
KIND: config-property
PATH: props/cfg/custom-scroll
ALIAS_EN: type, scrollbar, sheet, customscroll, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/custom-scroll
---
# CustomScroll ***(cfg)***

> Sets the type of scrollbar to be used in the sheet. 

> This applies to horizontal scrollbars created per sheet section or horizontal/vertical scrollbars created for the entire sheet.

> For sheets with many rows and columns, setting `CustomScroll` may cause performance degradation.

> In the case of `SearchMode:2 (LazyLoad)`, when the number of retrieved data exceeds 50,000, you must set custom scroll to a value other than 0 due to scroll setting limitations in the IE browser.




### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Use browser scrollbar (`default`)
![CustomScroll0](/assets/imgs/customScroll0.png "CustomScroll0")
<!-- IMAGE: Screenshot/Example Image - CustomScroll0 --> (by Chrome)|
|`1`|Use plain style scrollbar
![CustomScroll1](/assets/imgs/customScroll1.png "CustomScroll1")
<!-- IMAGE: Screenshot/Example Image - CustomScroll1 --> (by Chrome)|
|`2`|Use large style scrollbar
![CustomScroll2](/assets/imgs/customScroll2.png "CustomScroll2")
<!-- IMAGE: Screenshot/Example Image - CustomScroll2 --> (by Chrome)|
|`3`|Use small style scrollbar
![CustomScroll3](/assets/imgs/customScroll3.png "CustomScroll3")
<!-- IMAGE: Screenshot/Example Image - CustomScroll3 --> (by Chrome)|


### Example
```javascript
options.Cfg = {
    CustomScroll: 3      // Set small style scrollbar
};
```

### Try it
- [0 by default](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/CustomScroll/)

### Read More
- [TouchScroll cfg](./touch-scroll)
- [CustomThumbMinSize cfg](./custom-thumb-min-size)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
