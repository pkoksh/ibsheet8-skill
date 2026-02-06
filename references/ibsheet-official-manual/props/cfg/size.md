---
KEY: size
KIND: config-property
PATH: props/cfg/size
ALIAS_EN: minimum, height, row, icon, size, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/size
---
# Size ***(cfg)***

> Sets the minimum height of each row and icon size.

> When creating a sheet, the default row height is `30px`, and to make it smaller, you need to set a smaller design through the `Size` property. 

> The row heights below are only minimum heights, and it is possible to increase them beyond these values. 



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Tiny`|Minimum row height `20px`|
|`Small`|Minimum row height `22px`|
|`Low`|Minimum row height `27px`|
|`Normal`|Minimum row height `30px` (`default`)|
|`High`|Minimum row height `42px`|
|`Big`|Minimum row height `52px`|


### Example
```javascript
options = {
    Cfg:{
      Size: "Small",  // Set smaller than default
    },
    Def:{
      Row:{
        Height: 25  // Slightly increased from original setting (22px)
      }
    }
};
```

### Try it
- ["Normal" by default with setSize](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Size/)

### Read More
- [Height row](/docs/props/row/height)
- [setSize](/docs/funcs/core/set-size)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.1|Feature added|
