---
KEY: touchScrolling
KIND: config-property
PATH: props/cfg/touch-scrolling
ALIAS_EN: determines, whether, touch, scrolling, sheet, body, area, works
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/touch-scrolling
---
# TouchScrolling ***(cfg)***

> Determines whether touch scrolling in the sheet body area works in a mobile environment. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
| `0` | Touch scrolling in the sheet body area does not work in a mobile environment.|
| `1` | Touch scrolling in the sheet body area works in a mobile environment. (`default`)|

### Example
```javascript
options = {
    Cfg :{
        TouchScrolling: 0, // Disable touch scrolling in the sheet body area in a mobile environment.
        ...
    }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.38|Feature added|
