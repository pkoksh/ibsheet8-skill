---
KEY: requiredPosition
KIND: config-property
PATH: props/cfg/required-position
ALIAS_EN: position, required, docs, props, col, displayed, requiredposition, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/required-position
---
# RequiredPosition ***(cfg)***
> Sets the position where [Required](/docs/props/col/required) is displayed.

### Type
String

### Options
|Value|Description|
|-----|-----|
|`Left`|Display the `Required` indicator on the left side of the header. (`default`)
![option1](/assets/imgs/required1.png "option1")
<!-- IMAGE: Screenshot/Example Image - option1 -->|
|`Right`|Display the `Required` indicator on the right side of the header.
![option2](/assets/imgs/required2.png "option2")
<!-- IMAGE: Screenshot/Example Image - option2 -->|
|`None`|Do not display the `Required` mark on the header.
|


### Example
```javascript
options = {
    Cfg:{
      RequiredPosition: "Right", // Set Required on the right side of the header
    },
    Cols : [
      {Type: "Text", Name: "sName", Required: 1 ...},
      {Type: "Int", Name: "ssalary",Width: 70 ...},
    ...
    ];
};
```

### Read More
- [Required col](/docs/props/col/required)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.2.0.13|`None` option added|
