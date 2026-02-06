---
KEY: controlsTag
KIND: config-property
PATH: props/cfg/controls-tag
ALIAS_EN: option, specifies, parent, tag, positioning, popup, menus, tooltips
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/controls-tag
---
# ControlsTag ***(cfg)***

> This option specifies the parent tag for positioning popup menus, tooltips, messages, and hints within the sheet. 

>
> If this option is not set, the parent tag is automatically created inside `document.body`. 

>
> In environments like SalesForce's Lightening Web Component or ShadowDOM where you need to set a specific component area within the page as the sheet's reference area instead of the entire `document.body`, you must create a separate div within that component and set that div as `(Cfg) ControlsTag`. 

>
> Caution
> * `ControlsTag` must be set when first creating the sheet and cannot be changed dynamically afterwards. 

> * `ControlsTag` must be in the same component area as the sheet's DIV, and must not be created in a parent component above the component where the sheet's DIV is created.
> * `ControlsTag` must be created with the `position:absolute;left:0px;top:0px;` style applied.

### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|Parent tag for positioning popup menus, tooltips, messages, and hints within the sheet|

### Example
```javascript

<template>
  <lightning-card>
    <div>
      <div class="IBControls" style="position:absolute;left:0px;top:0px;"  lwc:dom="manual"></div> <!-- Create a tag to serve as ControlsTag inside the LWC component -->
      <div class="sheetDiv" style="width: 100%; height: 400px;" lwc:dom="manual"></div>
    </div>
  </lightning-card>
</template>

...

options.Cfg = {
   ControlsTag: this.template.querySelector(".IBControls") // Set parent tag for positioning popup menus, tooltips, messages, and hints within the sheet
};
```

### Read More
- [DialogsArea cfg](/docs/props/cfg/dialogs-area)
- [IBSheet.QuerySelector static](/docs/static/query-selector)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.0|Feature added|
