---
KEY: msgLocale
KIND: config-property
PATH: props/cfg/msg-locale
ALIAS_EN: language, prefix, message, file, sheet, msglocale, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/msg-locale
---
# MsgLocale ***(cfg)***

> Sets the Language Prefix for the language (message file) to be used in the sheet.

> 

> The message structure inside the message files (ko.js, en.js, etc.) distributed with the product is as follows.

```js
IBSMSG.[Language Prefix] = {
  "Lang": {
     // ... omitted ...
  }
}
```
> When you want to use a language (messages) other than Korean, import the corresponding message file (js) and set its Language Prefix value with this property.

> <mark>**If this property is not set, the browser's language (navigator.language) is checked and that value is used as the Language Prefix.**<mark/> 




### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Ko`|Korean messages|
|`En`|English messages|
|`Jp`|Japanese messages|
|`Cn`|Chinese messages|
|`Etc`|Custom message Prefix can be used|


### Example
```html
<!-- Import English messages -->
<script src="./common/ibsheet/locale/en.js"></script>
```
```javascript
options.Cfg = {
   "MsgLocale":"En" // Use English messages
};
```

### Read More
- [getLocale method](/docs/funcs/core/get-locale)
- [setLocale method](/docs/funcs/core/set-locale)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
