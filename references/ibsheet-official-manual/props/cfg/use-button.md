---
KEY: useButton
KIND: config-property
PATH: props/cfg/use-button
ALIAS_EN: type, docs, appx, button, props, col, property, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/use-button
---
# UseButton ***(cfg)***

> When [Type](/docs/appx/type) is `Button` and [Button](/docs/props/col/button) property value is `Button`, a button is created inside the cell.

> The generated button uses the \<u\> tag, and this setting selects whether to use \<button\> instead.


###
![u tag button](/assets/imgs/useButton0.png "u tag")
<!-- IMAGE: Button Image - u tag button -->

[Button using `u tag`]


![button tag button](/assets/imgs/useButton1.png "button tag")
<!-- IMAGE: Button Image - button tag button -->

[Button using `button tag`]


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Create button using \<u\> tag (`default`)|
|`1`|Create button using \<button\> tag|


### Example
```javascript
options.Cfg = {
   "UseButton": 1       // Create button using <button> tag
};
```

### Read More
- [Button col](/docs/props/col/button)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
