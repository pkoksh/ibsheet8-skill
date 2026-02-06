---
KEY: radio
KIND: column-property
PATH: props/col/radio
ALIAS_EN: groups, cells, value, assigned, among, columns, type, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/radio
---
# Radio ***(col)***
> Groups cells that have the same value assigned among columns with [Type](/docs/appx/type) `Bool` or `Radio`, so that only one cell can be checked within the same group in a row.


###
![Radio](/assets/imgs/radio.png "Only one can be selected in the same row")
<!-- IMAGE: Screenshot/Example Image - Radio -->

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Group index to bundle together like a radio button|




### Example
```javascript
// Set so that only one cell can be checked within a group by comparing horizontally within a row
options.Cols = [
    // Group 1
    {Type:"Bool", Name:"st1", HRadio:1, Radio:1, ...},
    {Type:"Bool", Name:"st2", HRadio:1, Radio:1, ...},
    {Type:"Bool", Name:"st3", HRadio:1, Radio:1, ...},
    {Type:"Bool", Name:"st4", HRadio:1, Radio:1, ...},
    {Type:"Bool", Name:"st5", HRadio:1, Radio:1, ...},
    // Group 2
    {Type:"Bool", Name:"att1", HRadio:1, Radio:2, ...},
    {Type:"Bool", Name:"att2", HRadio:1, Radio:2, ...},
    {Type:"Bool", Name:"att3", HRadio:1, Radio:2, ...},
    {Type:"Bool", Name:"att4", HRadio:1, Radio:2, ...},
    {Type:"Bool", Name:"att5", HRadio:1, Radio:2, ...},
    ...
];
```

### Read More
- [BoolGroup col](./bool-group)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
