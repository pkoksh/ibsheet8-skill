---
KEY: sync
KIND: config-property
PATH: props/cfg/sync
ALIAS_EN: feature, synchronizes, sheet, scrolling, sync, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/sync
---
# Sync ***(cfg)***

> A feature that synchronizes sheet scrolling. 

> When multiple sheets exist on the screen, setting `Sync` causes them to scroll simultaneously. 

> 

> `Restrictions` The following cases do not work properly: 

> 1. When `SearchMode` differs between sheets 

> 2. When `AutoRowHeight` settings differ between sheets

### Type
`string`

### Options
|Value|Description|
|-----|-----|
| `Cols` | Set column resize synchronization |
| `Vert` | Set vertical scroll synchronization |
| `Horz` | Set horizontal scroll synchronization |

### Example
```javascript
options.Cfg = {
    Sync: 'Vert,Horz'
};
```

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.16|Feature added|
