---
KEY: editEnum
KIND: cell-property
PATH: props/cell/edit-enum
ALIAS_EN: you, want, item, text, shown, dropdown, list, expanded
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/edit-enum
---
# EditEnum ***(cell)***
> Used when you want the item text shown in the dropdown list when expanded to be different from the value set in [Enum](./enum) for cells with [Type](/docs/appx/type) `Enum`.

> You can display items in multiple columns using the '\\t' delimiter.

###
**1. Standard EditEnum usage** 

![EditEnum](/assets/imgs/editEnum.png "EditEnum")
<!-- IMAGE: Screenshot/Example Image - EditEnum -->

**2. EditEnum usage with '\t' delimiter** 

![EditEnum2](/assets/imgs/editEnum2.png "EditEnum2")
<!-- IMAGE: Screenshot/Example Image - EditEnum2 --> 


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|A string with the first character as the delimiter (e.g., "#CEO#VP#Senior Director#Director#Manager#Dept Head#Deputy Manager#Section Chief#Assistant Manager#Senior Staff#Staff")|

### Example
```javascript
// Set items for an Enum column
{
    "data":[
        ...
        { ...,
            CLSEnum: "|Site A|Site B|Site C",
            CLSEditEnum: "|123 Main Street, City A|456 Oak Avenue, City B|789 Pine Road, City C"
        },
        { ...,
            CLSEnum: "|Site A|Site B|Site C",
            CLSEditEnum: "|State\tCity A\t123 Main Street|State\tCity B\t456 Oak Avenue|State\tCity C\t789 Pine Road"
        }
        ...
    ]
}
```

### Read More
- [Enum cell](./enum)
- [EnumKeys cell](./enum-keys)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
