---
KEY: enumMenu
KIND: cell-property
PATH: props/cell/enum-menu
ALIAS_EN: display, menu, instead, dropdown, list, cells, type, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/enum-menu
---
# EnumMenu ***(cell)***
> Used to display a menu instead of a dropdown list for cells with [Type](/docs/appx/type) `Enum`.

> For more details about `Menu`, please refer to the [Menu](/docs/appx/menu) property in the appendix.


###
![EnumMenu](/assets/imgs/enumMenu.png "EnumMenu")
<!-- IMAGE: Screenshot/Example Image - EnumMenu -->

### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|JSON object that configures the menu|

### Example
```javascript
// Set items for an Enum column
{
    "data":[    ...
        {...
     	    CLSEnum: "|Site A1|Site A2|Site B1|Site B2|Site B3|Site C1|Site C2",
            CLSEnumMenu : {
                Items: [
                    {
                        Menu: 1,
                        Name: "Site A",
                        Items: [
                            {Name: "[A1] 123 Main Street, City A",Value: "Site A1"},
                            {Name: "[A2] 456 Oak Avenue, City A",Value: "Site A2"}
                        ]
                    },
                    {
                        Menu: 1,
                        Name: "Site B",
                        Items: [
                            {Name: "[B1] 789 Pine Road, City B", Value: "Site B1"},
                            {Name: "[B2] 321 Elm Street, City B", Value: "Site B2"},
                            {Name: "[B3] 654 Maple Drive, City B", Value: "Site B3"},
                        ]
                    },
                    {
                        Menu: 1,
                        Name: "Site C",
                        Items: [
                            {Name: "[C1] 987 Cedar Lane, City C", Value: "Site C1"},
                            {Name: "[C2] 147 Birch Boulevard, City C", Value: "Site C2"},
                        ]
                    }
                ]
            }
         },
        ...
    ]
}
```

### Read More
- [Enum col](/docs/props/cell/enum)
- [EnumKeys col](/docs/props/cell/enum-keys)
- [Menu appendix](/docs/appx/menu)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
