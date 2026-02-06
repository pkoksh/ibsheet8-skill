---
KEY: customThumbMinSize
KIND: config-property
PATH: props/cfg/custom-thumb-min-size
ALIAS_EN: minimum, size, thumb, image, style, scrollbars, customscroll, custom
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/custom-thumb-min-size
---
# CustomThumbMinSize ***(cfg)***

> Sets the minimum size of the thumb when using image-style scrollbars through the [CustomScroll](./custom-scroll) option instead of the browser's default scrollbar. 

> The thumb, which indicates the current position within the scrollbar, dynamically shrinks as the amount of retrieved data increases. By specifying a minimum size in pixels through this property, it prevents the thumb from shrinking below that size.

> This option applies to both horizontal and vertical scrollbars.


###
![CustomThumbMinSize](/assets/imgs/scrollthumb.png "CustomThumbMinSize")
<!-- IMAGE: Screenshot/Example Image - CustomThumbMinSize -->


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Set the minimum size of the scrollbar thumb|



### Example
```javascript
options.Cfg = {
    CustomScroll:1,
    CustomThumbMinSize:150, // Prevents shrinking below 150 pixels.
};
```

### Read More
- [TouchScroll cfg](./touch-scroll)
- [CustomScroll cfg](./custom-scroll)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.2|Feature added|
