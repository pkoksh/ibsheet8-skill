---
KEY: selectMode
KIND: config-property
PATH: props/cfg/select-mode
ALIAS_EN: changes, behavior, selecting, cells, rows, mouse, operations, selectmode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/select-mode
---
# SelectMode ***(cfg)***

> Changes the behavior when selecting cells or rows through mouse operations.

> When using shift + drag with `SelectMode: 1, 2`, previously selected areas are deselected.
<!--!
  * `[Private Description]` SelectMode: 0 (existing) deselects only when SelectingCells is not 0 during shift + drag
!-->
### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`| Focus is not changed by ctrl + click or mouse drag selection. (default)
 When a newly selected area includes already selected cells, the previously selected cells and the new area are deselected. |
|`1`| Focus is changed by ctrl + click or mouse drag selection. 
 When selecting with shift + click, the previous selection is canceled and only the newly selected area is maintained.|
|`2`| Focus is changed by ctrl + click or mouse drag selection. 
 When selecting with shift + click, both the previous selection and the newly selected area are maintained.|

### Example
```javascript
options.Cfg = {
   SelectMode: 1
};
```

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.28|Feature added|
