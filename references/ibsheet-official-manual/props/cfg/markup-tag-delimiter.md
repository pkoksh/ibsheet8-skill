---
KEY: markupTagDelimiter
KIND: config-property
PATH: props/cfg/markup-tag-delimiter
ALIAS_EN: changes, delimiter, message, transmitted, server, import, export, functions
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/markup-tag-delimiter
---
# MarkupTagDelimiter ***(cfg)***

> Changes the delimiter of the message transmitted to the server when using `import/export` functions such as [down2Excel](/docs/funcs/excel/down-to-excel) or [loadExcel](/docs/funcs/excel/load-excel). 

> The message transmitted to the server is structured in an `XML-like format` using symbols like < and >, and some servers filter these `HTML tags` and replace them with other characters, causing errors when the `ibsheet` server module cannot interpret them.

> In such cases, you can specify different characters instead of tags like <, > to transmit to the server.

> There are 4 delimiters, and when changing delimiters through this property, the same delimiters must also be set on the server side.

### Type
`array`

### Options
Default delimiters

No.|Symbol
---|---
1|<
2|>
3|<
4|/>

### Example
```javascript
options.Cfg = {
    MarkupTagDelimiter: ["┼","╫","╬","╪"]
};

```

Server-side settings
```java
    down = new IBSheetDown();

    //====================================================================================================
    // [ User Environment Settings #1 ]
    //====================================================================================================
    // Set this when customizing the MarkupTag Delimiter for Excel messages.
    // The setting values must be the same as the MarkupTagDelimiter settings in IBSheet8 configuration (ibsheet.cfg).
    //====================================================================================================
    down.setMarkupTagDelimiter("┼","╫","╬","╪");
```

### Read More

- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [loadExcel method](/docs/funcs/excel/load-excel)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
