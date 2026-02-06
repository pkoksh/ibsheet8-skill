---
KEY: event
KIND: event
PATH: events/event
ALIAS_EN: sheet, events, configured, following, two, ways, event, usage
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/event
---
# Event Usage Basics
> Sheet events can be configured in the following two ways.

## 1. Setting Events at Object Creation Time
When setting the `options` properties to initialize the sheet, configure events through the `Events` property as follows.
```javascript
var OPTS = {
    Cfg:{ ... },
    Cols:[ ... ],
    "Events":{
        onAfterChange:function(evtParam){
            ... implement logic when event occurs ...
        }
    }
};
IBSheet.create(
    id:"sheet",
    el:"sheet_div",
    options:OPTS
)
```
## 2. Setting Events After Object Creation
After the object has been created, you can set events through the `bind` function.
```javascript
    // onAfterChange event
    sheet.bind("onAfterChange", function(evtParam) {

    });
```
When an event occurs, `evtParam` contains the `sheet object, row object, column name`, etc. for each respective event.

> **<mark>Caution</mark> : Adding events after object creation is not recommended as it may override logic commonly handled in [onBeforeCreate](/docs/static/on-before-create).**


### Example
```javascript
options.Events = {
    onAfterChange :function(evtParam){
        if(evtParam.row["ConFirmYn"]=="Y"){
            alert("This month's closing has been completed.</br>Please check the closing information and make corrections.");
        }else if(evtParam.value > evtParam.row["MaxBud"]){
            alert("The input value exceeds the maximum budget.");
        }
    },
    onClick:function(evtParam){
        if(evtParam.col == "myBtn1"){
            if(formValidWork()){
                document.frm.submit();
            }
        }
    }
}


```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
