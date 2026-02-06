---
KEY: alternate
KIND: config-property
PATH: props/cfg/alternate
ALIAS_EN: feature, improves, readability, alternately, applying, different, background, colors
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/alternate
---
# Alternate ***(cfg)***

> This feature improves readability by alternately applying different background colors to odd and even rows.

> When the option value is `3` or higher, the highlight application can be changed using (Cfg)[AlternateStart](./alternate-start) and (cfg)[AlternateCount](./alternate-count). 

> The highlight color defaults to the `.IBColorAlternate` color in the css file, and if (Row)[AlternateColor](/docs/props/row/alternate-color) is set, that color will be used instead. 


###
![Alternate0](/assets/imgs/alternate0.png "Alternate0")
<!-- IMAGE: Screenshot/Example Image - Alternate0 -->

[When `Alternate: 0`]

![Alternate2](/assets/imgs/alternate2.png "Alternate0")
<!-- IMAGE: Screenshot/Example Image - Alternate2 -->

[When `Alternate: 2`]


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Highlight feature disabled (uses `.IBColorDefault` color from css file) (`default`)|
|`1`|Highlight applied to all data rows (uses `.IBColorAlternate` color from css file)|
|`2`|**Highlight applied to even rows** (`.IBColorDefault, .IBColorAlternate` colors from css file are displayed alternately)|
|`3`|Highlight applied to the last row in every 3-row interval |
|`N`|Highlight applied to the last row in every N-row interval |


### Example
```javascript
options = {
    Cfg:{
      Alternate: 2,  // Process odd/even row colors using .IBColorDefault from css and (Row)AlternateColor
    },
    Def:{
      Row:{
          AlternateColor: "FFFF00" // Set highlight color to yellow
      }
    }
 };
```

### Read More
- [AlternateColor row](/docs/props/row/alternate-color)
- [AlternateCount cfg](./alternate-count)
- [AlternateStart cfg](./alternate-start)
- [AlternateType cfg](./alternate-type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
