---
KEY: showTreeLevel
KIND: method
PATH: funcs/core/show-tree-level
ALIAS: sheet.showTreeLevel, showTreeLevel()
ALIAS_EN: collapses, expands, tree, specified, level, showtreelevel, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-tree-level
---
# showTreeLevel ***(method)***
> Collapses or expands the tree to the specified level.


### Syntax
```javascript
void showTreeLevel( level, ignoreEvent, childMode );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|level|`number`|Required|Level value to display (starting from `1` for the topmost node)|
|ignoreEvent|`boolean`|Optional|Whether to call events ([onBeforeExpand event](/docs/events/on-before-expand), [onAfterExpand event](/docs/events/on-after-expand))
`0(false)`:Call events (`default`)
`1(true)`:Do not call events|
|childMode|`number`|Optional|Settings for collapsing/expanding child nodes below the specified level.
`0`:Maintain current collapsed/expanded state (`default`)
`1`:Collapse all child nodes
`2`:Expand all child nodes|

### Return Value
***none***

### Example
```javascript
//Collapse to level 3 only.
sheet.showTreeLevel(3);

//Collapse to the topmost node.
sheet.showTreeLevel(1);

//Collapse to level 2 and do not call events.
sheet.showTreeLevel(2, 1);

//Collapse to level 3 and collapse all child nodes.
sheet.showTreeLevel(3, 0, 1);
```
### Read More
- [onBeforeExpand event](/docs/events/on-before-expand)
- [onAfterExpand event](/docs/events/on-after-expand)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.4|`ignoreEvent` argument added|
|core|8.0.0.7|`childMode` argument added|
