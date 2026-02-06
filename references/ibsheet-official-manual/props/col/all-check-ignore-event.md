---
KEY: allCheckIgnoreEvent
KIND: column-property
PATH: props/col/all-check-ignore-event
ALIAS_EN: option, whether, trigger, onafterchange, event, checking, unchecking, checkboxes
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/all-check-ignore-event
---
# AllCheckIgnoreEvent ***(col)***

> An option to set whether to trigger the `onAfterChange` event when checking/unchecking all checkboxes in the header for Type: "Bool".

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|The `onAfterChange` event is triggered. (`default`)|
|`1(true)`|The `onAfterChange` event is not triggered.|

### Example
```javascript
options.Cols = [
    ...
    // The onAfterChange event will not be triggered when clicking the select-all checkbox in the header.
    {Header: {Value: "Department", HeaderCheck: 1}, Type: "Bool", Width: 80, Align: "Center", Name:"ORG_NM", AllCheckIgnoreEvent:1}
    ...
];
```

### Read More

- [setAllCheck method](/docs/funcs/core/set-all-check)
- [onAfterChange event](/docs/events/on-after-change)
- [onCheckAllFinish event](/docs/events/on-check-all-finish)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.15|Feature added|
