---
KEY: maxVScroll
KIND: config-property
PATH: props/cfg/max-v-scroll
ALIAS_EN: novscroll, feature, allows, you, specify, height, scrollbar, created
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/max-v-scroll
---
# MaxVScroll ***(cfg)***

> When using `NoVScroll`, this feature allows you to specify the height at which a scrollbar should be created. It lets you set the maximum height before a scrollbar appears. 

>
> `Caution` Since this option changes the height of the DOM element where the sheet is created at sheet creation time, if you change this option after creation, you must reset the height of the element where the sheet is rendered.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Maximum height at which a scrollbar appears|

### Example
```javascript
options = {
    Cfg:{
      NoVScroll: 1,
      MaxVScroll: 500
    }
 };
```

### Read More
- [NoVScroll cfg](./no-v-scroll)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.23|Feature added|
