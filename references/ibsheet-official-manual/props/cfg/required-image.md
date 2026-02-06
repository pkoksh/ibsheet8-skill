---
KEY: requiredImage
KIND: config-property
PATH: props/cfg/required-image
ALIAS_EN: image, path, required, input, field, indicator, you, want
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/required-image
---
# RequiredImage ***(cfg)***

> Sets the image path for the required input field indicator when you want to change it from the default image. 


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Required input field image path|


### Example
```javascript
options = {
    Cfg:{
      RequiredImage: "./required.png", // Set the required input field image path
    },
};
```

### Read More
- [Required col](/docs/props/col/required)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.23|Feature added|
