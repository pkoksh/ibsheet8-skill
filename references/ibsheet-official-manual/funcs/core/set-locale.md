---
KEY: setLocale
KIND: method
PATH: funcs/core/set-locale
ALIAS: sheet.setLocale, setLocale()
ALIAS_EN: method, change, language, type, sheet, setlocale
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-locale
---
# setLocale ***(method)***
> Method to change the language type set for the sheet. 


### Syntax
```javascript
void setLocale( code, load, path, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|code|`string`|Required|Language code to set for the sheet
(`'Ko'`, `'En'`, `'Jp'`, `'Cn'`, etc) (`default: 'Ko'`)|
|load|`boolean`|Optional|Whether to dynamically load the file when the corresponding language message does not exist
`0(false)`:Do not load the file when the message for the language set in `code` does not exist (`default`)
`1(true)`:Dynamically load the language file from the `path` when the message for the language set in `code` does not exist|
|path|`string`|Optional|Path where the message language pack is located (`default: locale folder based on ibsheet.js`)|
|render |`boolean`|Optional|Whether to immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected (`default`)
`1(true)`:Immediately reflected|

### Return Value
***boolean*** : Whether the language code was applied (returns `0(false)` on failure)

### Example
```javascript
// Change sheet messages to English-only messages
// Loads and applies the locale/en.js file via ajax from ibsheet.js
sheet.setLocale( 'En' );

-------------------------------------------------

<script src="/ibsheet/locale/ko.js"></script>
<script src="/ibsheet/locale/en.js"></script>
<script src="/ibsheet/locale/jp.js"></script>

// Change sheet messages to English-only messages
// Since en.js was already loaded, it is applied without ajax communication
sheet.setLocale( 'En' );

-------------------------------------------------

// Change sheet messages to English-only messages
// Loads and applies the en.js file from the ibsheet folder via ajax
sheet.setLocale({code : "En", path:"/ibsheet/"} );

```


### Read More
- [getLocale method](./get-locale)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.2|Feature added|
