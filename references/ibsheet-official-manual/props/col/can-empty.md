---
KEY: canEmpty
KIND: column-property
PATH: props/col/can-empty
ALIAS_EN: setting, allows, displaying, empty, value, data, int, float
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-empty
---
# CanEmpty ***(col)***
> A setting that allows displaying an empty value when the data has no value in `Int`, `Float`, `Bool`, `Date` types.
 For columns set with `CanEmpty: 0`, the value cannot be cleared or set to an empty value.

> The data affected by this property is as follows:
```javascript
{Type: "Int", Name: "sInt", CanEmpty: 1}

data: [
    {"sInt": null},      //null data
    {"sInt": undefined}, //undefined data
    {}                   //no data
]
```
<!-- The value cycle for `Bool` type from 1 to 4 is as follows.

 For 1: `["" => 1 => 0 ...]`, for 2: `["" => 0 => 1 ...]`,

for 3: `"" => [1 => 0 => 1 => 0 ...]`, for 4: `"" => [0 => 1 => 0 => 1 ...]` - the `Bool` type value cycles in this pattern. 
-->

### Default display for empty data
| | Bool| Int| Float| Date|
|-- | -- | -- |-- |-- |
|CanEmpty : 0|   0(unCheck)  |   0 |0 |19700101|
|CanEmpty : 1|   ""  |   "" |"" |""|


**CanEmpty : 0** 

![CanEmpty0](/assets/imgs/CanEmpty0.gif "CanEmpty0")
<!-- IMAGE: Screenshot/Example Image - CanEmpty0 -->

**CanEmpty : 1** 

![CanEmpty1](/assets/imgs/CanEmpty1.gif "CanEmpty1")
<!-- IMAGE: Screenshot/Example Image - CanEmpty1 -->

<!-- **CanEmpty : 2** 

![CanEmpty2](/assets/imgs/CanEmpty2.gif "CanEmpty2")
<!-- IMAGE: Screenshot/Example Image - CanEmpty2 -->

**CanEmpty : 3** 

![CanEmpty3](/assets/imgs/CanEmpty3.gif "CanEmpty3")
<!-- IMAGE: Screenshot/Example Image - CanEmpty3 -->

**CanEmpty : 4** 

![CanEmpty4](/assets/imgs/CanEmpty4.gif "CanEmpty4")
<!-- IMAGE: Screenshot/Example Image - CanEmpty4 -->

-->
###
### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Empty value not allowed (default: `Int`, `Float`, `Bool`)|
|`1`|Empty value allowed (default: `Date`)|
<!--!
|`2`|Empty value allowed (used for: `Bool`)|
|`3`|Empty value allowed (used for: `Bool`)|
|`4`|Empty value allowed (used for: `Bool`)|
!-->


### Example
```javascript
// Allow empty values for specific columns
options.Cols = [
    {Type: "Int", Name: "sPoint", CanEmpty: 1 ...},
    {Type: "Bool", Name: "sBool1", CanEmpty: 1 ...},
    ...
];
```

### Read More
- [CanEdit col](./can-edit)
- [CanMove col](./can-move)
- [CanResize col](./can-resize)
- [CanSort col](./can-sort)
- [EmptyValue col](./empty-value)
- [Type col](/docs/props/col/type)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
