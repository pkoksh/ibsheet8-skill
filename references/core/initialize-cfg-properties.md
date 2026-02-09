# IBSheet8 Initialization Cfg Properties
## Basic Definition
- Cfg properties are properties that affect the entire ibsheet8 rather than specific columns or rows, and are set during the initialization process

### Cfg Property Usage Example

```javascript
document.addEventListener("DOMContentLoaded", function() {
    // Create ibsheet8
    IBSheet.create({
      id: "sheet",
      el: "sheetContainer",
      options: {
        Cfg: {
          SearchMode: 0, // Use FastLoad
          DataMerge: 3, // Column-priority merge
          HeaderMerge: 0, // Do not merge header area
          CanEdit: 0 // Entire data non-editable
          InfoRowConfig: {} // Create pagination or Row Count Indicator
        },
        ...
      }
    });
  });
```
---

## Key Cfg Properties

- [All property information](../ibsheet8-official-manual/props/cfg/index.md)

### Individual ibsheet8 Settings (properties commonly used per screen/page)
|Property|Type|Description|
|---|---|---|
|CanEdit|Boolean|Edit enabled for entire ibsheet8 area (when set to 0, CanEdit set on rows/columns is ignored, default:1)|
|SearchMode|Number|Rendering mode and paging setting (0:Fastload, 1:ClientPaging, 2:Lazyload(default), 3:ServerPaging)|
|DataMerge|Number|Data area auto merge setting (0:no merge(default), 1:column merge, 2:row merge, 3:column-priority merge, 4:row-priority merge)|
|HeaderMerge|Number|Header area auto merge setting (0:no merge(default), 1:column merge, 2:row merge, 3:column-priority merge, 4:row-priority merge)|
|MainCol|String|Column name where the tree is displayed when creating a tree ibsheet8|
|NoVScroll|Boolean|Removes vertical scroll from ibsheet8 and adjusts height based on loaded data count|
|MaxVScroll|Number|Maximum height when using NoVScroll (vertical scroll appears when data exceeds the set height)|
|MultiRecord|Number|Multi-record feature usage (0:disabled, 1:enabled, 2:enabled + allows mismatch between header row count and data row count)|
|ShowFilter|Boolean|Whether to create filter row|
|ZIndex|Number|z-index setting for the ibsheet8 div (z-index of calendars, dialogs, etc. created above ibsheet8 also changes based on the set value)|


### ibsheet8 Common Settings (typically set for all ibsheet8 instances in the project via CommonOptions in ibsheet-common.js)
|Property|Type|Description|
|---|---|---|
|InfoRowConfig|Object|Create pagination or Row count indicator [Feature reference](../ibsheet8-official-manual/props/cfg/info-row-config.md)|
|Alternate|Number|Background color for odd/even rows (0:disabled, 1:single color for all rows, 2:different colors for odd/even rows)|
|Export|Object|Server URL settings for file import/export functions (Url: server url for jsp files, Down2ExcelUrl: url for down2Excel function call, ...)|
|DataAutoTrim|Boolean|Whether to trim leading/trailing spaces from data|
|EnterMode|Number|Focus movement position when pressing Enter while editing in ibsheet8 (0:no focus movement, 1:move down, 3:move right)|
|FitWidth|Boolean|Whether to add an empty column at the right end when there are fewer columns than the ibsheet8 width|
|Hover|Number|Highlight feature on mouse cursor hover over cell or row (0:hover disabled, 1:cell level, 2:row level, 3:row and column highlight)|
|IgnoreFocused|Boolean|Focus after search (default:0, focus after search)|
|InEditMode|Number|Determines when to enter edit mode (1:edit mode on click, 2:edit mode on double-click or re-clicking focused cell(default))|
|MaxSort|Number|Maximum number of columns that can be sorted (default:3)|
|NoDataMessage|Number|Whether to display a message when there is no search data ([] empty array) (0:no message display, 1:display message on ibsheet8 creation, 2:display message on search, 3:display message on both ibsheet8 creation and search)|
|Undo|Boolean|Whether to use Undo/Redo feature|

---
