---
KEY: dispose
KIND: method
PATH: funcs/core/dispose
ALIAS: sheet.dispose, dispose()
ALIAS_EN: sheet, domand, memoryin, remove, dispose, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/dispose
---
# dispose ***(method)***

> sheet DOMand memoryin remove.

> `dispose`sheet can no longer be used and must be recreated from scratch through the initialization process.
> In SPA-based projects, the sheet object must be removed through this function before page navigation.
### Syntax
```javascript
void dispose();
```


### Return Value
***none***

### Example
```javascript
//Completely remove the sheet object
sheet.dispose();
```

### Read More

- [clear method](./clear)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
