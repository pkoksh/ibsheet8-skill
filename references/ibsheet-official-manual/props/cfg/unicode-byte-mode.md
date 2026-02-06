---
KEY: unicodeByteMode
KIND: config-property
PATH: props/cfg/unicode-byte-mode
ALIAS_EN: byte, count, single, korean, character, unicodebytemode, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/unicode-byte-mode
---
# UnicodeByteMode ***(cfg)***

> Sets the byte count for a single Korean character. 

> In JavaScript, all characters are recognized as 1 byte. However, Korean characters may need to be recognized as 2 or more bytes depending on the DB's language settings. In such cases, this property can be used to set the byte count for Korean characters. 

> In `utf-8` format, the byte count varies depending on the character. In such cases, setting the parameter to `"utf-8"` processes it according to the `utf-8` format.

### Type
`number` \| `string`

### Options
|Value|Description|
|-----|-----|
|`number`|Set the byte count for a single Korean character (`default: 1`)|
|`string`|Set to `"utf-8"`, calculates byte count according to `utf-8` format |


### Example
```javascript
options.Cfg = {
    ...
    UnicodeByteMode: "utf-8"              // Process Korean character byte count according to utf-8 format
    ...
};
```

```js
options.Cfg = {
    ...
    UnicodeByteMode: 3,              // Set the byte size of a single Korean character to 3
    ...
};
```

### Read More
- [Size col](/docs/props/col/size)
- [Size cell](/docs/props/cell/size)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.10|Feature added|
