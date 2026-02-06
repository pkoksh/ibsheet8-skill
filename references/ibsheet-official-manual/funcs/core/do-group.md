---
KEY: doGroup
KIND: method
PATH: funcs/core/do-group
ALIAS: sheet.doGroup, doGroup()
ALIAS_EN: groups, specified, columns, function, dogroup, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/do-group
---
# doGroup ***(method)***
> Groups the specified columns in a function.
### Syntax
```javascript
void doGroup( cols );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|cols|`string`|Required|Column names to group, delimited by "," in order


### Return Value
***none***

### Example
```javascript
//Group department and team columns in order
sheet.doGroup("dempNm,teamNm");
```

### Read More
- [Group cfg](/docs/props/cfg/group)
- [onBeforeGroup event](/docs/events/on-before-group)
- [onAfterGroup  event](/docs/events/on-after-group)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.3|groupcols argument name changed -> cols, unified with other APIs|
