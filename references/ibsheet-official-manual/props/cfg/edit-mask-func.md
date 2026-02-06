---
KEY: editMaskFunc
KIND: config-property
PATH: props/cfg/edit-mask-func
ALIAS_EN: integrates, external, masking, library, editing, cells, specific, columns
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/edit-mask-func
---
# EditMaskFunc ***(cfg)***

> Integrates an external masking library to be used when editing cells in specific columns within the sheet.

> You must add both a property for applying masking and a property for removing masking as a pair (the actual value stored in the cell needs to be the unmasked value).

>
> It takes the target column name as a key and a masking callback function (with 1 parameter) that integrates the external masking library as the value.

> It takes a combination of the target column name and "Resolve" as a key and an unmasking callback function (with 1 parameter) as the value. This callback function <b>must return the unmasked value</b>. 

> e.g.) {"columnName" : func1, "columnNameResolve" : func2, "columnName2" : func3, "columnName2Resolve": func4 }


###
![EditMaskFunc usage example](/assets/imgs/editMaskFunc.png)
<!-- IMAGE: Screenshot/Example Image - EditMaskFunc usage example -->


Below is an example of applying a mask for date input using the Cleave or jquery.inputmask library.

### Type
`object`


### Example
```javascript
var cleave;

options.Cfg = {
    EditMaskFunc: {
        "sDate_yyyyMMdd": function(input) {
            // Integrate external Cleave library with "sDate_yyyyMMdd"
            cleave = new Cleave(input, {
                date: true,
                delimiter: '-',
                datePattern: ['Y', 'm', 'd']
            });
        },
        "sDate_yyyyMMResolve": function(input) {
            // Returns the unmasked value from the library integrated with "sDate_yyyyMMdd".
            return cleave.getRawValue();
        },
        "sDate_yyyyMM": function(input) {
            // Integrate external jquery.inputmask library with "sDate_yyyyMM"
            $(input).inputmask("9999/99");
        },
        "sDate_yyyyMMResolve": function(input) {
            // Returns the unmasked value from the library integrated with "sDate_yyyyMM".
            return $(input)[0].inputmask.unmaskedvalue();
        }
    }
};
```

### Try it
- [Demo of EditMaskFunc](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/EditMaskFunc/)

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
