---
KEY: enumMenu
KIND: column-property
PATH: props/col/enum-menu
ALIAS_EN: display, menu, instead, drop, down, list, column, type
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/enum-menu
---
# EnumMenu ***(col)***
> Used to display a menu instead of a drop-down list in a column with [Type](/docs/appx/type) `Enum`.

> For detailed information about `Menu`, please refer to the [Menu appendix](/docs/appx/menu) property.


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
options.Cols = [
    ...
    {Type: "Enum", Name: "relation",
     	Enum: "|Ansan1|Ansan2|Hwaseong1|Hwaseong2|Hwaseong3|Ilsan1|Ilsan2",
        EnumMenu : {
            Items: [
                {
                    Menu: 1,
                    Name: "Ansan Site",
                    Items: [
                        {Name: "[Ansan1] 201, Gwangdeok 3-ro, Danwon-gu, Ansan-si, Gyeonggi-do",Value: "Ansan1"},
                        {Name: "[Ansan2] 1509, Singil-dong, Danwon-gu, Ansan-si, Gyeonggi-do",Value: "Ansan2"}
                    ]
                },
                {
                    Menu: 1,
                    Name: "Hwaseong Site",
                    Items: [
                        {Name: "[Hwaseong1] Bansong-dong, Hwaseong-si, Gyeonggi-do", Value: "Hwaseong1"},
                        {Name: "[Hwaseong2] 30, Dongtan-daero 22-gil, Hwaseong-si, Gyeonggi-do", Value: "Hwaseong2"},
                        {Name: "[Hwaseong3] 283, Sancheok-dong, Hwaseong-si, Gyeonggi-do", Value: "Hwaseong3"},
                    ]
                },
                {
                    Menu: 1,
                    Name: "Ilsan Site",
                    Items: [
                        {Name: "[Ilsan1] 10, Jeongbalsan-ro 82beon-gil, Ilsandong-gu, Goyang-si, Gyeonggi-do", Value: "Ilsan1"},
                        {Name: "[Ilsan2] 1761, Janghang-dong, Ilsandong-gu, Goyang-si, Gyeonggi-do", Value: "Ilsan2"},
                    ]
                }
            ]
        }
     ...
     },
    ...
];
```

### Read More
- [Enum col](/docs/props/col/enum)
- [EnumKeys col](/docs/props/col/enum-keys)
- [Menu appendix](/docs/appx/menu)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
