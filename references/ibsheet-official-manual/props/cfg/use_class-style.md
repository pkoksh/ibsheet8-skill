---
KEY: use_classStyle
KIND: config-property
PATH: props/cfg/use_class-style
ALIAS_EN: class, attribute, sheet, reads, height, width, values, css
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/use_class-style
---
# UseClassStyle ***(cfg)***

> When a class attribute is set on the sheet, reads the height and width values from the CSS specified in that class and applies them to the sheet's width and height during creation.

> The priority for applying width and height is: style attribute > class attribute > default value.

> If no value is set for each item, the priority falls through to the next order.

> <mark>*Width defaults to **100%**, and height defaults to **800px**.</mark>*


> **<mark>Caution</mark>: This feature only works with `single Class` information.**



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Feature not used (`default`)|
|`1(true)`|Checks the class information declared on the sheet div and applies it to the sheet's width and height|


### Example
```javascript
options.Cfg = {
    UseClassStyle: true, // When no style information exists on the sheet div, checks CSS classes declared in class and applies width and height to the sheet's width and height
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.37|Feature added|
