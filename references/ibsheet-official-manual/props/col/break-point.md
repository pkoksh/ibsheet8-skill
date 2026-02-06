---
KEY: breakPoint
KIND: column-property
PATH: props/col/break-point
ALIAS_EN: feature, determines, whether, hide, column, sheet, tag, size
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/break-point
---
# BreakPoint ***(col)***

> A feature that determines whether to hide a column when the sheet tag size is smaller than the `BreakPoints` values in the language pack. 

> Compares the set `BreakPoint` with the sheet tag size, and hides the column when smaller or shows it when larger. 

> When this feature is set, the `Visible` property is ignored. If you need to change the size thresholds, you can directly modify the values in the language pack. 


**Below are the default values for BreakPoints provided in the language pack.**

```js
"BreakPoints": {
  "xs": 0,
  "sm": 576,
  "md": 768,
  "lg": 992,
  "xl": 1200,
  "xxl": 1400
}
```

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`xs`|`hide` when tag size is smaller than `xs` value, `show` when larger|
|`sm`|`hide` when tag size is smaller than `sm` value, `show` when larger|
|`md`|`hide` when tag size is smaller than `md` value, `show` when larger|
|`lg`|`hide` when tag size is smaller than `lg` value, `show` when larger|
|`xl`|`hide` when tag size is smaller than `xl` value, `show` when larger|
|`xxl`|`hide` when tag size is smaller than `xxl` value, `show` when larger|

### Example
```javascript
// Hide column when sheet size is smaller than md breakpoint
options.Cols = [
    ...
    {Type: "Text", Name: "BreakColA", BreakPoint: "md" ...},
    ...
];
```

### Read More

- [HideMobile col](/docs/props/col/hide-mobile)
<!--!
- `[Private]` [ZoomSetSizeMode cfg](/docs/props/cfg/zoom-set-size-mode)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.24|Feature added|
