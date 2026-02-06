---
KEY: checked
KIND: cell-property
PATH: props/cell/checked
ALIAS_EN: checkbox, created, inside, cell, setting, icon, docs, props
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/checked
---
# Checked ***(cell)***
> When a checkbox is created inside a cell by setting the [Icon](/docs/props/col/icon) or [Button](/docs/props/col/button) property value to "Check", checks or modifies the checked state.


###
![ICON Check](/assets/imgs/iconCheck.png "When Icon:Check is used")
<!-- IMAGE: Icon Image - ICON Check -->
[**Icon:"Check" usage example**]

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Unchecked|
|`1`|Checked|
|`2`|Unknown (a "?" character is displayed inside the checkbox)|


### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Checked", 1);


//2. Check property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
var cellchk = ROW["CLSChecked"];



//3. Apply property within loaded data (column name: CLS)
{
    "data":[
        {... , "CLSChecked":1 , ...}
    ]
}
```

### Read More
- [Icon col](/docs/props/col/icon)
- [Button col](/docs/props/col/button)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
