---
KEY: editEnum
KIND: column-property
PATH: props/col/edit-enum
ALIAS_EN: you, want, text, items, shown, drop, down, list
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/edit-enum
---
# EditEnum ***(col)***
> Used when you want the `Text` of items shown in the drop-down list when it is expanded in a column with [Type](/docs/appx/type) `Enum` to differ from the values set in [Enum](./enum).

> You can use the '\t' delimiter to represent items in multiple columns.

###
**1. General EditEnum usage** 

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
|`string`|String with the first character as delimiter (ex:"#President#Vice President#Executive Director#Director#Board Member#Department Head#Deputy Head#Manager#Assistant Manager#Senior Staff#Staff")|

### Example
```javascript
// Set items for an Enum column
options.Cols = [
    ...
    {
        Type: "Enum",
        Name: "relation1",
        Enum: "|Site Siheung|Site Ansan|Site Hwaseong",
        EditEnum: "|26, Eunhaengro 216beon-gil, Siheung-si, Gyeonggi-do|245, Ansancheonnam-ro, Danwon-gu, Ansan-si, Gyeonggi-do|96, Dongtanbansuk-ro, Hwaseong-si, Gyeonggi-do",
        ...
    },
    {
        Type: "Enum",
        Name: "relation2",
        Enum: "|Site Siheung|Site Ansan|Site Hwaseong",
        EditEnum: "|Gyeonggi-do\tSiheung-si\tEunhaengro 216beon-gil 26|Gyeonggi-do\tAnsan-si Danwon-gu\tAnsancheonnam-ro 245|Gyeonggi-do\tHwaseong-si\tDongtanbansuk-ro 96",
        ...
    },
    ...
];
```

### Read More
- [Enum col](./enum)
- [EnumKeys col](./enum-keys)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
