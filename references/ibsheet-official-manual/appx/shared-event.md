---
KEY: sharedEvent
KIND: appendix
PATH: appx/shared-event
ALIAS_EN: guide, explains, handle, events, uniformly, across, sheets, system
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/shared-event
---
# Common Event Handling Method ***(appendix)***
> This guide explains how to handle events uniformly across all sheets in the system.

> Unlike JavaScript's general event handling approach (addEventListener), the sheet's event handling method only allows connecting one task (function) to a single event.

> For this reason, difficulties arise when common post-processing (error message handling or page navigation) after ajax communication such as search or save needs to be configured alongside individual page event handling.





## When Common Events Are Overwritten by Individual Page Settings

Assuming a common developer has defined post-processing logic for errors during search across all sheets in [CommonOptions](/docs/static/common-options),
```javascript
// Event settings through [CommonOptions](/docs/static/common-options) in ibsheet-common.js
IBSheet.CommonOptions = {
    "Events":{
        //For all sheets on all screens, if the search result Result value is -100, determine session expired and redirect to login screen.
        "onBeforeDataLoad" : function(evtParam){
            if( evtParam.result == -100 ){
                alert("Session has expired.\nRedirecting to the login screen.");
                location.href = "/login.do";
            }else if( evtParam.result < 0 ){
                alert("An error has occurred.\n"+evtParam.message);
            }
        }
    }
}
```
If an individual screen developer uses the onBeforeDataLoad event as shown below, the event defined in [CommonOptions](/docs/static/common-options) will be overwritten.
```javascript
// Sheet event settings on individual screen
sheetOption = {
    "Cfg":{},
    "Cols":[ ... ],
    "Events":{
        "onBeforeDataLoad" : function(evtParam){
            var data = evtParam.data;
            for( var i = 0; i < data.length; i++ ){
                //Among the queried data, set the background color to "#FFAABB" for rows where the ValidReq column value is N
                if( data[i]["ValidReq"] == 'N' ){
                    data[i]["Color"] = "#FFAABB";
                }
            }
        }
    }
};
```

## Method for Handling Common Events
In the ibsheet-common.js file, save the events set on each screen in the [IBSheet.onBeforeCreate()](/docs/static/on-before-create) function, then call them after the common processing logic.

[IBSheet.onBeforeCreate()](/docs/static/on-before-create) is called right before [sheet object creation (IBSheet.create())](/docs/static/create).


```javascript
// ibsheet initialization common settings (the parameters passed to create() are delivered through obj)
IBSheet.onBeforeCreate = function(obj){
    //Create Events object if no Events settings exist
    if( !obj.options["Events"] ){     obj.options["Events"] = {};    }


    obj.options.PageEvent = {};

    //Store the events defined on each page (screen) separately in options.PageEvent property.
    if( obj.options["Events"]["onBeforeDataLoad"] ){
        obj.options.PageEvent["onBeforeDataLoad"] = obj.options["Events"]["onBeforeDataLoad"];
    }
    if( obj.options["Events"]["onAfterSave"] ){
        obj.options.PageEvent["onAfterSave"] = obj.options["Events"]["onAfterSave"];
    }
    if( obj.options["Events"]["onEndEdit"] ){
        obj.options.PageEvent["onEndEdit"] = obj.options["Events"]["onEndEdit"];
    }

    //Processing for onBeforeDataLoad event (common error handling during search)
    obj.options["Events"]["onBeforeDataLoad"] = function(evtParam){
        //Common logic processing!!!!!
        // result -1 to -9 are already reserved error codes
        if( evtParam.result == -100 ){
            alert("Session has expired.");
            location.href = "/login.do";
            return;
        }else if(evtParam.response.status == 404){
            location.href = "/noPageFound.do";
            return;
        }else if(evtParam.response.status == 500){
            location.href = "/serverError.do";
            return;
        }

        //Processing for individual screen events (calls the function stored in PageEvent above)
        if( evtParam.sheet.options.PageEvent && evtParam.sheet.options.PageEvent["onBeforeDataLoad"] ){
            //If the session has not expired, call the page's event.
           return evtParam.sheet.options.PageEvent["onBeforeDataLoad"](evtParam);
        }
    }

    //Processing for onAfterSave event (common error handling during save)
    obj.options["Events"]["onAfterSave"] = function(evtParam){
        //Common logic processing!!!!!
        // result -1 to -9 are already reserved error codes
        if( evtParam.result == -100 ){
            alert("Session has expired.");
            location.href = "/login.do";
            return;
        }else if(evtParam.result == -200){
            alert("An error occurred during save.");
            return;
        }else if(evtParam.response.status == 404){
            location.href = "/noPageFound.do";
            return;
        }else if(evtParam.response.status == 500){
            location.href = "/serverError.do";
            return;
        }


        //Processing for individual screen events (calls the function stored in PageEvent above)
        if( evtParam.sheet.options.PageEvent && evtParam.sheet.options.PageEvent["onAfterSave"] ){
            //If the session has not expired, call the page's event.
           return evtParam.sheet.options.PageEvent["onAfterSave"](evtParam);
        }
    }


    //Processing for onEndEdit event (common custom validation handling during editing)
    obj.options["Events"]["onEndEdit"] = function(evtParam){
        // Common validation processing for validation-related properties defined when creating each column.
        var rtnValue = evtParam.val;

        /*
         1. Processing for maxvalue (maximum allowed input value), minvalue (minimum allowed input value) properties
         These properties do not exist in the product, but if declared in Cols during sheet creation, they can be obtained through getAttribute.
         ex:
        OPT.Cols = [
            //                                These properties don't exist but are added during column configuration
            {Header:"TOTCS", Type:"Float", Name: "roe", maxvalue:100, minvalue:0}
        ];
        */
        // Check if maxvalue, minvalue properties exist for each column in all sheets on all screens
        if(evtParam.save === 1){// Only operate when the event is triggered by user editing
            var min = evtParam.sheet.getAttribute(evtParam.row, evtParam.col, "minvalue");
            if(typeof min != "undefined" && min > evtParam.val) {
                alert(`The minimum input value for this column is ${min}`);
                return true; // Returning true prevents editing from ending
            }
            var max = evtParam.sheet.getAttribute(evtParam.row, evtParam.col, "maxvalue");
            if(typeof max != "undefined" && max < evtParam.val) {
                alert(`The maximum input value for this column is ${max}`);
                return true; // Returning true prevents editing from ending
            }
        }

         /*
         2. Processing for replaceInput (replacement of input values) property
         These properties do not exist in the product, but if declared in Cols during sheet creation, they can be obtained through getAttribute.
         ex:
         function toUpper(str) {
            return str.toUpperCase();
         }
        OPT.Cols = [
            //                                These properties don't exist but are added during column configuration
            {Header:"TOTCS", Type:"Float", Name: "roe", replaceInput:toUpper}
        ];
        */
        // Check if replaceInput property exists for each column in all sheets on all screens
        if(evtParam.save === 1){// Only operate when the event is triggered by user editing
            var recInp = evtParam.sheet.getAttribute(evtParam.row, evtParam.col, "replaceInput");
            if(typeof recInp === "function") {
                rtnValue = recInp(rtnValue);
                evtParam.val = rtnValue;
            }
        }



        //Processing for individual screen events (calls the function stored in PageEvent above)
        if( evtParam.sheet.options.PageEvent && evtParam.sheet.options.PageEvent["onEndEdit"] ){
            //If the session has not expired, call the page's event.
           return evtParam.sheet.options.PageEvent["onEndEdit"](evtParam);
        }
        return rtnValue;
    }


    return obj; //Must return.
}
```
As shown above, you can freely configure whether to process individual page events after common logic processing, or reverse the order.

> **<mark>Caution</mark> :** 

> - **Even when using the above method, if events are set through the [bind](/docs/events/event) function after sheet creation, the commonly configured event content will be overwritten.**

> **Therefore, it is recommended to avoid setting events through the [bind](/docs/events/event) function as much as possible.**

> - **For events that have a return value (e.g., onClick), the return must be included when configuring common logic for it to work correctly.**

### Read More
- [Event usage basics](/docs/events/event)
- [CommonOptions static](/docs/static/common-options)
- [onBeforeCreate static](/docs/static/before-create)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
