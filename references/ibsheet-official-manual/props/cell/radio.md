---
KEY: radio
KIND: cell-property
PATH: props/cell/radio
ALIAS_EN: groups, cells, bool, type, docs, appx, share, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/radio
---
# Radio ***(cell)***
> Groups cells of `Bool` [Type](/docs/appx/type) that share the same value, so that only one cell within the same group in a row can be checked.


###
![Radio](/assets/imgs/radio.png "Only one can be selected in the same row")
<!-- IMAGE: Screenshot/Example Image - Radio -->

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Group index for grouping as radio-like behavior|




### Example
```javascript
// Apply settings within loaded data
// Set CLS1, CLS2, CLS3 columns so that only a single cell can be selected
{
    data:[
        {..., "CLS1Radio":"1", "CLS2Radio":"1", "CLS3Radio":"1" ...},
        ...
    ]
}
```

### Read More
- [BoolGroup cell](./bool-group)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
