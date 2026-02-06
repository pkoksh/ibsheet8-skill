---
KEY: menuButtons
KIND: config-property
PATH: props/cfg/menu-buttons
ALIAS_EN: default, without, configuration, menu, buttons, order, enum, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/menu-buttons
---
# MenuButtons ***(cfg)***

> By default, without any configuration, the `Menu.Buttons` order in [Enum](/docs/props/col/enum) type cells (including [Defaults](/docs/props/col/defaults)) is created only in `Clear, Ok` order. 

> You can change the order of `Buttons` at the bottom of the [Menu](/docs/appx/menu) in [Enum](/docs/props/col/enum) type cells (including [Defaults](/docs/props/col/defaults)). 

> The `Type` is supported as an array format.

### Type
`array`

### Example
```javascript
options.Cfg = {
    MenuButtons: ["Ok", "Clear"],              // Change the button order to Ok, Clear.
    ...
};
options.Col = [
    {
        Header: 'Combo(Enum)',
        Type: 'Enum',
        Name: 'ComboData',
        Width: 100,
        Align: 'Right',
        Enum: '|Pending|In Progress|Completed',
        EnumKeys: '|01|02|03',
        Range: true,
     }
]
```

### Read More
- [Defaults col](/docs/props/col/defaults)
- [Enum col](/docs/props/col/enum)
- [Range col](/docs/props/col/range)
- [Menu appendix](/docs/appx/menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
