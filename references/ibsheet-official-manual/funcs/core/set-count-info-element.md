---
KEY: setCountInfoElement
KIND: method
PATH: funcs/core/set-count-info-element
ALIAS: sheet.setCountInfoElement, setCountInfoElement()
ALIAS_EN: inforowconfig, cfg, docs, props, info, row, config, feature
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-count-info-element
---
# setCountInfoElement ***(method)***

> When using the [InfoRowConfig cfg](/docs/props/cfg/info-row-config) feature, displays the data row count information in a Dom Element outside the sheet.


### Syntax
```javascript
boolean setCountInfoElement ( element );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|element |`object` \| `string`|Required| Dom Element or its id to display the data row count information|

### Return Value
***boolean*** : `true`: Successfully displayed in the external Dom Element, `false`: Failed

### Example
```javascript
// Set the div with id 'countElem' to output data row count information
sheet.setCountInfoElement ( 'countElem' );
sheet.setCountInfoElement ( docuemnt.getElementById('countElem') );
```

### Read More
- [InfoRowConfig cfg](/docs/props/cfg/info-row-config)
- [getCountInfoElement method](./get-count-info-element)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
