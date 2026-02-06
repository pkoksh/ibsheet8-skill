---
KEY: customFormat
KIND: column-property
PATH: props/col/custom-format
ALIAS_EN: defines, masking, original, data, customformat, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/custom-format
---
# CustomFormat ***(col)***
> Defines masking for the original data.

> <mark>Available when Type is Text or Lines</mark>, this is a user-defined format that can also specify custom format functions declared by the user.

> Multiple formats can be specified using the `|` delimiter.

> The reserved words available in `CustomFormat` are as follows:
> |Value|Description|
> |-----|-----|
> |`#`|Character displayed as-is|
> |`*`|Character masked with * (asterisk)|
> |`PostNo`|Postal code|
> |`IdNoMask`|Resident registration number (last 6 digits masked with * (asterisk))|
> |`IdNo`|Resident registration number (full text)|
> |`SaupNo`|Business registration number|
> |`CardNo`|Card number|
> |`PhoneNo`|Phone number (mobile number)|


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Various format strings depending on the column Type|


### Example
```javascript

options.Cols = [
    ...
    // Define phone number format
    {Type: "Text", Name: "sPhone", CustomFormat: 'PhoneNo' ...}, // Input 0226212288 displays as 02-2621-2288, input 01073213834 displays as 010-7321-3834
    // Define a custom format
    {Type: "Text", Name: "sawonNo", CustomFormat: '###-#####' ...}, // Input 12345678 displays as 123-45678
    // Format that hides the last digits of a resident registration number
    {Type: "Text", Name: "cNo", CustomFormat: 'IdNoMask' ...}, // Input 8501242384211 displays as 850124-2******
     // Specify based on data digit count
    {Type: "Text", Name: "cNo", CustomFormat: 'IdNoMask|SaupNo' ...}, // Input 8501242384211 (resident registration number) displays as 850124-2******, input 6258412458 (business registration number) displays as 625-84-12458
    // Process with a custom function
    {Type: "Text", Name: "ISDNS", CustomFormat: function(v, sheet, col){
        // Display in different formats depending on the character count of the value
        if (v.length > 10) {
            //######-#######
            return v.substr(0,6) + "-" + v.substr(6);
        } else {
            //#####-#####
            return v.substr(0,5) + "-" + v.subst(5);
        }

    }},
    ...
];
```

### Read More
- [Format appendix](/docs/appx/format)
- [Format col](./format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.87|Added sheet object and column name arguments when using function|
