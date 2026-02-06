---
KEY: selectCheck
KIND: column-property
PATH: props/col/select-check
ALIAS_EN: selecting, bool, type, column, dragging, checks, unchecks, selected
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/select-check
---
# SelectCheck ***(col)***
> When selecting a Bool type column by dragging, checks or unchecks the selected cells. 

> 

> Restriction 1: This option cannot be used on merged columns. 

> Restriction 2: Does not work when dragging across multiple columns. 

> Restriction 3: This option cannot be used with (Cfg)SearchMode:2.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Does not use SelectCheck feature|
|`1(true)`|When selecting a Bool type column by dragging, checks/unchecks the selected cells. (`default`)|

### Example
```javascript
var opt = {
    Cols:[
        ...,
        // Checks selected cells when dragging a single Bool type column.
        {
            Header: { Value: "Checkbox(Bool)", HeaderCheck: 1 },
            Type: "Bool",
            Name: "CheckData",
            Width: 80,
            Align: "Center",
            CanEdit: 1,
            SelectCheck: 1,
        }
    ]
}
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.26|Feature added|
