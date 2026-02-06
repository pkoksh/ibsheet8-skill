---
KEY: menuHSeparator
KIND: config-property
PATH: props/cfg/menu-h-separator
ALIAS_EN: menu, docs, props, col, you, specify, item, separator
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/menu-h-separator
---
# MenuHSeparator ***(cfg)***
> When using [Menu](/docs/props/col/menu), you can specify an item separator. 

> Additionally, `-` and `-*` work as reserved words that create separators when set in the [EnumKeys](/docs/props/col/enum-keys) option. If you want to use `-` or `-*` as actual data in [EnumKeys](/docs/props/col/enum-keys), you can use this option to specify a string other than `-` or `-*`.

![MenuHSeparator](/assets/imgs/MenuHSeparator.png "MenuHSeparator Feature")
<!-- IMAGE: Screenshot/Example Image - MenuHSeparator -->


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Reserved word to designate as menu item separator|


### Example
```javascript
options.Cfg = {
    MenuHSeparator : '!',     // Change the separator for displaying -------- as menu item separator to !
};

options.Cols = [
   { Type: 'Enum', "Enum": "|Pending|-|In Progress|Completed","EnumKeys": "|01|-|02|03|04", Name: 'char' ... },      // Separator reserved words like '-' can also be used as data
   { Type: "Text", Menu: "|Proceed|Reject|Approve|Hold", Name: "procs" ... }
];

```

### Read More
- [Enum col](/docs/props/col/enum)
- [EnumKeys col](/docs/props/col/enum-keys)
- [Menu col](/docs/props/col/menu)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
