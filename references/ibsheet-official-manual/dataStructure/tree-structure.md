---
KEY: treeStructure
KIND: data-structure
PATH: dataStructure/tree-structure
ALIAS_EN: tree, data, structure
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/dataStructure/tree-structure
---
# Tree Data Structure ***(tree structure)***
Defines the `tree data structure` bound through the doSearch or loadSearchData functions.


## Tree Data Structure

### General tree data format
- The server response data has the `Data` property at the top level, and the `Data` property contains an array of objects, each representing an item.
- When child rows exist, they are included as an array in the `Items` property of the object, expressing a `tree structure` of data.
```js
// Structured by adding child rows inside the Items property
{"Data":
    [
        //1 Depth
        {sProduct:"Internal System Development Project",sCustomer:"Company B",sDate:"20180116", sCustomerRowSpan:2,
            //2 Depth
            Items:[
                {sProduct:"Global Integrated HR System",sKind:"Project", sCount:"1",sPrice:"192"},
                {sProduct:"LEGACY SW Supply",sKind:"Software", sCount:"1",sPrice:"420"}
            ]
        },
        //1 Depth
        {sProduct:"Service Pay Enhancement System",sCustomer:"Company D",sDate:"20171031",
            //2 Depth
            Items:[
                {sProduct:"Hospital Electronic Procurement and Supply System",sKind:"Delivery",sCount:"1",sPrice:"303",sDiscount:"10" }
            ]
        },
        //1 Depth
        {sProduct:"2017~2018 Solution Delivery and Sales",sCustomer:"Company E",sDate:"20170520",
            //2 Depth
            Items:[
                {sProduct:"Hospital Development/CDP Construction",sKind:"Project",sCount:"1",sPrice:"29"},
                {sProduct:"Performance Improvement Military Support Training Materials",sKind:"Project",sCount:"1",sPrice:"15.5",sDiscount:"5"},
                {sProduct:"SHE System Construction",sKind:"Project",sCount:"1",sPrice:"79"},
                {sProduct:"Cost Quotation System",sKind:"Project",sCount:"1",sPrice:"3"},
                {sProduct:"Enterprise Business Support System",sKind:"Project",sCount:"1",sPrice:"59.5"},
                {sProduct:"Integrated Sales Management System",sKind:"Project",sCount:"1",sPrice:"39"},
                {sProduct:"E-HR System",sKind:"Maintenance",
                    //3 Depth
                    Items:[
                        {sProduct:"Property E-HR System",sKind:"Other",sCount:"1",sPrice:"4"},
                        {sProduct:"Manufacturing E-HR System",sKind:"Other",sCount:"1",sPrice:"4" }
                    ]
                },
                {sProduct:"Construction Outsourcing Performance Unit Price System",sKind:"Delivery",sCount:"1",sPrice:"95"},
                {sProduct:"Talent Development System",sKind:"Project",sCount:"1",sPrice:"7"},
                {sProduct:"Website ActiveX Removal Related SW Purchase",sKind:"Project", sCount:"1",sPrice:"22.5" }
        ]}
    ]
}
```

### Simple tree data format
- When the Items-based data structure cannot be used, you can express a hierarchical structure by specifying a `Level` value for each data object.
- The top-level node must start from `0`, and child nodes must be set sequentially with a `value incremented by 1 from the parent node`.
```js
var treeData = {
    "Data":[
        {Level:0 ,sProduct:"Hospital Development/CDP Construction",sKind:"Project",sCount:"1",sPrice:"29"},
        {Level:1 ,sProduct:"Performance Improvement Military Support Training Materials",sKind:"Project",sCount:"2",sPrice:"15.5",sDiscount:"5"},
        {Level:2 ,sProduct:"SHE System Construction",sKind:"Project",sCount:"1",sPrice:"79"},
        {Level:2 ,sProduct:"Cost Quotation System",sKind:"Project",sCount:"1",sPrice:"3"},
        {Level:3 ,sProduct:"Enterprise Business Support System",sKind:"Project",sCount:"1",sPrice:"59.5"},
        {Level:3 ,sProduct:"Integrated Sales Management System",sKind:"Project",sCount:"1",sPrice:"39"},
    ]
}
```
- Data containing `Level` values as above is converted to an Items-based tree structure through the `convertTreeData` function provided in the `ibsheet-common.js` file. (Note the case sensitivity of Level)
```js
var convertData = IBSheet.v7.convertTreeData(treeData);
sheet.loadSearchData(convertData);
```
- When searching with the `doSearch` function, it can be processed in the `onReceiveData` event.


### Read More
- [doSearch method](/docs/funcs/core/do-search)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [getChangedData method](/docs/funcs/core/get-changed-data)
- [onReceiveData](/docs/events/on-receive-data)
- [onBeforeDataLoad](/docs/events/on-before-data-load)
- [onDataLoad](/docs/events/on-data-load)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
