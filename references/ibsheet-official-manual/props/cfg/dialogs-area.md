---
KEY: dialogsArea
KIND: config-property
PATH: props/cfg/dialogs-area
ALIAS_EN: specifies, area, setting, position, dialogs, within, sheet, dialogsarea
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/dialogs-area
---
# DialogsArea ***(cfg)***

> Specifies the area for setting the position of dialogs within the sheet. 

>
> In environments like SalesForce's Lightning Web Component or ShadowDOM, where you cannot set `document.body` as the entire reference area for dialogs and instead need to set a specific component area within the page as the reference area, you can set the body of that component as `(Cfg) DialogsArea`. 

>
> Additionally, `DialogsArea` must be in the same component area as the sheet's DIV, and it must not be created in a parent component above the component where the sheet's DIV is created. 


### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|Area for setting the position of dialogs within the sheet|

### Example
```javascript

<template>
  <lightning-card> <!-- Area corresponding to the Body in the LWC component -->
    <div>
      <div class="IBControls" lwc:dom="manual"></div>
      <div class="sheetDiv" style="width: 100%; height: 400px;" lwc:dom="manual"></div>
    </div>
  </lightning-card>
</template>

...

options.Cfg = {
   DialogsArea: this.template.firstChild, // Set the lightning-card tag as the area for positioning dialogs within the sheet
};
```

### Read More
- [ControlsTag cfg](/docs/props/cfg/controls-tag)
- [IBSheet.QuerySelector static](/docs/static/query-selector)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.0|Feature added|
