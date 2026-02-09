# Events Reference

## Event Common Notes
1. All events in ibsheet8 have a single parameter in object format.
2. Some events can stop event processing through return values. To stop processing, return 1 (or true).
3. [Full event list](../ibsheet8-official-manual/events/index.md)

## Event Registration

```javascript
// Register at creation time
IBSheet.create({
  options: {
    Events: {
      onRenderFirstFinish: function(evt) { },
      onClick: function(evt) { }
    }
  }
});

// Dynamic registration
sheet.bind("onClick", function(evt) { });
```
### Notes on Event Registration via bind
1. Re-calling bind() for the same event overwrites the existing handler.
2. The onRenderFirstFinish event, which is called during ibsheet8 creation, cannot be registered via bind.
3. It is recommended to register events at object creation time. Registering after creation is disadvantageous for common event handling.
---

## Lifecycle Events

### [onRenderFirstFinish](../ibsheet8-official-manual/events/on-render-first-finish.md)

ibsheet8 initial rendering complete.

```javascript
onRenderFirstFinish: function(evt) {
  evt.sheet.loadSearchData({ url: "/api/data/list" });
}
```

### [onSearchFinish](../ibsheet8-official-manual/events/on-search-finish.md)

Data load complete. (Also fires after xlsx import)

```javascript
onSearchFinish: function(evt) {
  console.log(`${evt.sheet.getDataRows().length} rows loaded`);
}
```

---

## Click/Selection Events

### [onClick](../ibsheet8-official-manual/events/on-click.md)

- Fires on mouse click. (Fires before focus moves)
- To get the clicked cell's value, use `evt.row[evt.col]`
- Prefer using onAfterClick over onClick when possible

```javascript
onClick: function(evt) {
  console.log(`Whether the focused cell was clicked again: ${evt.row == evt.sheet.getFocusedRow() }`);
}
```

### [onAfterClick](../ibsheet8-official-manual/events/on-after-click.md)
- Fires after mouse click, focus move, and check/uncheck (Bool, Radio)

```javascript
onAfterClick: function(evt) {
  console.log(`Row ${evt.sheet.getRowIndex(evt.row)} clicked!`);
}
```

onClick, onAfterClick Event Parameters (both events are identical)

| Property | Description |
|------|------|
| evt.row | Row object |
| evt.col | Column name |
| evt.x | Mouse cursor x coordinate |
| evt.y | Mouse cursor y coordinate |
| evt.event | JavaScript mouse event object |


### [onIconClick](../ibsheet8-official-manual/events/on-icon-click.md)

- Fires when clicking the [Icon](../ibsheet8-official-manual/props/col/icon.md) on the left side of cell text
- Both events fire regardless of CanEdit or Disable status

```javascript
onIconClick: function(evt) {
  if(evt.col == "employee") showEmployeePopup(evt.sheet.getRowValue(evt.row));
}
```


### [onButtonClick](../ibsheet8-official-manual/events/on-button-click.md)
- Fires when clicking the [Button](../ibsheet8-official-manual/props/col/button.md) on the right side of cell text
```javascript
onButtonClick: function(evt) {
  console.log(`Popup button on row ${evt.sheet.getRowIndex(evt.row)} was clicked.`);
}
```

---

## Edit Events

### [onStartEdit](../ibsheet8-official-manual/events/on-start-edit.md)

- Event that fires when editing starts. Not called for Bool and Radio types.

```javascript
onStartEdit: function(evt) {
  if (evt.sheet.getValue(evt.row, "status") === "Completed") {
    return true;  // Prevent editing
  }
}
```

### [onEditEnd](../ibsheet8-official-manual/events/on-end-edit.md)

- Event that fires when edit mode ends.

```javascript
onEndEdit: function(evt) {
  if (evt.col == 'SCORE' && evt.val > 100) {
    alert('Score cannot exceed 100.');
    return true;  // Prevent editing
  }
}
```


### [onBeforeChange](../ibsheet8-official-manual/events/on-before-change.md)

- Event before value change. **The data to be saved can be changed by returning a value.**
- Not called for changes made through API (setValue)
- Also called when modifying to the same value as before.

```javascript
onBeforeChange: function(evt) {
  if (evt.col === "quantity" && evt.val < 0) {
    alert("Negative values not allowed");
    return evt.oldval; // Revert to previous value
  }
  // Value conversion
  if (evt.col === "code") {
    return evt.val.toUpperCase();
  }
}
```

| Property | Description |
|------|------|
| evt.row | Row object |
| evt.col | Column name |
| evt.val | Modified value |
| evt.oldval | Value before change |

### [onAfterChange](../ibsheet8-official-manual/events/on-after-change.md)

- After value change. Used for calculating related fields.
- Not called for changes made through API (setValue)
- Not called when modifying to the same value as before

```javascript
onAfterChange: function(evt) {
  if (evt.col === "quantity" || evt.col === "price") {
    const total = evt.sheet.getValue(evt.row, "quantity") * evt.sheet.getValue(evt.row, "price");
    evt.sheet.setValue(evt.row, "total", total);
  }
}
```

### [onBeforePaste](../ibsheet8-official-manual/events/on-before-paste.md)

- Fires before pasting via ctrl+v
- Modifying parameter values will paste the modified values

```javascript
onBeforePaste:function(evtParam){
  var pasteArr = evtParam.pastedtext;
    for(var i = 0; i < pasteArr.length; i++){
      // If the pasted content contains an ID number pattern [######-#######], replace the last 6 digits with '*'
      pasteArr[i] = pasteArr[i].replace(/([0-9]{6}\-[0-9]{1})[0-9]{6}/g, "$1"+"******");
      // If the pasted content starts with "SN-", cancel the paste.
      if(pasteArr[i].startsWith("SN-")) return true;
    }

}
```
|Property|Type|Description|
|---|---|---|
|cols|array[string]|Array of colNames where paste will occur (modifiable)|
|pastedtext|array[string]|Content to be pasted for each row (modifiable)|
---

## Row Operation Events

### [onAddRow](../ibsheet8-official-manual/funcs/core/add-row.md)

- Called before a new row added through the addRow function is rendered
- Initial values can be set for the row within the event.

```javascript
onAddRow: function(evt) {
  // Set initial value the same as the C-CODE value of the row above
  evt.row["C-CODE"] = evt.sheet.getPrevRow(evt.row)["C-CODE"];
}
```
### [onBeforeRowDelete](../ibsheet8-official-manual/events/on-before-row-delete.md)

Called when changing a row's status to Deleted (Deleted:1) using deleteRow (or deleteRows), or when canceling deletion of a row with Deleted status

```javascript
onBeforeRowDelete: function(evt) {
  if(evt.type === 0){
    if (evt.sheet.getValue(evt.row, "status") === "Approved") {
      alert("Approved items cannot be deleted");
      return true;
    }
    return !confirm("Do you want to delete?");
  }
}
```
| Property | Description |
|------|------|
| evt.row | Row object to be deleted |
| evt.type | Delete status (0: delete, 1: cancel delete) |
| evt.rows | Array of row objects when deleting multiple rows with deleteRows function |

---

## Sort/Filter Events

### [onBeforeSort](../ibsheet8-official-manual/events/on-before-sort.md)
Event called when the user clicks a header cell to sort.
Return -1 to cancel sorting, return 1 to only change the header sort icon without actual sorting.

```javascript
onBeforeSort: function(evt) {
  if (evt.sheet.hasChangedData()) {
    alert("Please save changed data first");
    return -1;
  }
}
```
| Property | Description |
|------|------|
| evt.col | Sort column name |
| evt.sort | Sort details for multiple columns (e.g., "colName4, -colName2, colName6")<br>(Columns separated by "," character, "-" prefix indicates descending sort) |

### [onAfterSort](../ibsheet8-official-manual/events/on-after-sort.md)
Event called after sorting is completed

### [onBeforeFilter](../ibsheet8-official-manual/events/on-before-filter.md)
Called before filtering. Return 1 (true) to cancel filtering.

### [onAfterFilter](../ibsheet8-official-manual/events/on-after-filter.md)
Event called after filtering is completed

---

## Keyboard Events

### [onKeyDown](../ibsheet8-official-manual/events/on-key-down.md)
Called when a key is pressed in the focused ibsheet8. Return 1 (true) to ignore the key's default behavior.

```javascript
onKeyDown: function(evt) {
  // Ctrl+S: Save
  if (evt.ctrlKey && evt.keyCode === 83) {
    evt.event.preventDefault();
    saveData();
  }
  // Ctrl+N: Add row
  if (evt.ctrlKey && evt.keyCode === 78) {
    evt.sheet.addRow();
  }
}
```

---

## Server Communication Events

### [onBeforeDataLoad](../ibsheet8-official-manual/events/on-before-data-load.md)
Called before data is loaded into ibsheet8 through loadSearchData, doSearch, or doSearchPaging functions. The data to be loaded can be changed via the evt.data parameter.

```javascript
onBeforeDataLoad: function(evt) {
  showLoading();
  // Change the background color of the first row to blue
  evt.data[0]["Color"] = "#0000FF";
}
```

### [onBeforeSave](../ibsheet8-official-manual/events/on-before-save.md)
Called before data transmission when doSave is invoked. Return 1 (true) to stop saving.

```javascript
onBeforeSave: function(evt) {
  // Stop saving if the data to be sent to the server contains forbidden word 1 or forbidden word 2
  if (source.params.indexOf("forbidden1") > -1 || source.params.indexOf("forbidden2") > -1) {
      return true;
  }

}
```
|Property|Description|
|---|---|
|evt.source.params|Data to send to server. querystring format (available when queryMode: 1, 2 in doSave)|
|evt.source.data|Data to send to server. JSON format (available when queryMode: 0 in doSave)|

### [onAfterSave](../ibsheet8-official-manual/events/on-after-save.md)
Called after receiving the server save response. Determine success/failure via evt.result.

```javascript
onAfterSave: function(evt) {
  hideLoading();
  if (evt.result< 0 ) {
    evt.sheet.acceptChangedData();
    alert("Save complete");
  }
}
```
|Property|Description|
|---|---|
|result| Processing result (0 or above: save success, below 0: save failure)|
|message|Message received from server|
|response|Server response object|
---

## Checkbox Events

### [onBeforeCheckAll](../ibsheet8-official-manual/events/on-before-check-all.md)
- Called when the user clicks the header check or when check/uncheck for the entire column occurs through the setAllCheck function.
- Unlike other events, this event is stopped only when return false.

```javascript
onBeforeCheckAll: function(evt) {
  if(document.querySelector("#code").value == "F") {
    return false;  // Stop check
  }
}
```

### [onCheckAllFinish](../ibsheet8-official-manual/events/on-check-all-finish.md)
Called when select all/deselect all is completed.

---

## Focus/Scroll Events

### [onBeforeFocus](../ibsheet8-official-manual/events/on-before-focus.md)
Called before cell focus moves. Return 1 (true) to prevent focus movement.

### [onFocus](../ibsheet8-official-manual/events/on-focus.md)
Called after cell focus is completed.

### [onScroll](../ibsheet8-official-manual/events/on-scroll.md)
Called after ibsheet8 scroll (horizontal/vertical) movement.

### [onVScrollEndPoint](../ibsheet8-official-manual/events/on-v-scroll-end-point.md)
Fires when the vertical scrollbar reaches the top or bottom.

```javascript
onVScrollEndPoint: function(evt) {
  // Append below existing data
  if (evt.vpos > 0) {
    loadMoreData();
  }
}
```
