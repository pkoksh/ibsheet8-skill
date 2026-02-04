<template>
  <div class="ibsheet-wrapper">
    <!-- Toolbar (optional) -->
    <div v-if="showToolbar" class="toolbar">
      <slot name="toolbar">
        <button @click="handleRefresh" :disabled="loading">
          {{ loading ? '로딩...' : '조회' }}
        </button>
        <button @click="handleAdd">추가</button>
        <button @click="handleDelete">삭제</button>
        <button @click="handleSave" class="btn-primary">저장</button>
      </slot>
    </div>
    
    <!-- Grid Container -->
    <div 
      ref="containerRef" 
      :style="{ width: '100%', height: height }"
    ></div>
    
    <!-- Loading Overlay -->
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner">로딩 중...</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch, defineComponent } from 'vue';

export default defineComponent({
  name: 'IBSheetGrid',
  
  props: {
    // Required props
    id: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true
    },
    
    // Optional props
    data: {
      type: Array,
      default: () => []
    },
    height: {
      type: String,
      default: '500px'
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    autoLoad: {
      type: Boolean,
      default: false
    }
  },
  
  emits: ['ready', 'change', 'row-add', 'row-delete', 'save'],
  
  setup(props, { emit, expose }) {
    const containerRef = ref(null);
    const sheet = ref(null);
    const isReady = ref(false);
    const loading = ref(false);
    
    // Initialize sheet
    const initSheet = () => {
      if (!containerRef.value || !window.IBSheet) {
        console.error('IBSheet library not loaded or container not found');
        return;
      }
      
      window.IBSheet.create({
        id: props.id,
        el: containerRef.value,
        options: {
          ...props.options,
          Events: {
            ...props.options.Events,
            onRenderFirstFinish: (evt) => {
              sheet.value = window.IBSheet.getSheetById(props.id);
              isReady.value = true;
              props.options.Events?.onRenderFirstFinish?.(evt);
              emit('ready', sheet.value);
            },
            onAfterChange: (evt) => {
              props.options.Events?.onAfterChange?.(evt);
              emit('change', getChangedData());
            },
            onAfterRowAdd: (evt) => {
              props.options.Events?.onAfterRowAdd?.(evt);
              emit('row-add', evt);
            },
            onAfterRowDelete: (evt) => {
              props.options.Events?.onAfterRowDelete?.(evt);
              emit('row-delete', evt);
            }
          }
        },
        data: props.data
      });
    };
    
    // Destroy sheet
    const destroySheet = () => {
      if (sheet.value) {
        window.IBSheet.dispose(props.id);
        sheet.value = null;
        isReady.value = false;
      }
    };
    
    // API Methods
    const loadData = (data) => {
      sheet.value?.loadSearchData({ data });
    };
    
    const getData = (options = {}) => {
      return sheet.value?.getSaveJson(options);
    };
    
    const getChangedData = () => {
      return sheet.value?.getSaveJson({ check: 1 });
    };
    
    const addRow = (init = {}, focus = true) => {
      return sheet.value?.addRow({ init, focus, focusCol: getFirstEditableCol() });
    };
    
    const deleteRow = (row) => {
      const targetRow = row || sheet.value?.getFocusedRow();
      if (targetRow) {
        sheet.value?.deleteRow(targetRow);
      }
    };
    
    const getCheckedRows = () => {
      return sheet.value?.getCheckedRows() || [];
    };
    
    const acceptChanges = () => {
      sheet.value?.acceptChanges();
    };
    
    const validate = () => {
      return sheet.value?.validate();
    };
    
    const setFocus = (row, col) => {
      sheet.value?.setFocus(row, col);
    };
    
    const getFirstEditableCol = () => {
      const cols = props.options.Cols || [];
      const editableCol = cols.find(col => 
        col.CanEdit !== false && 
        col.Type !== 'CheckBox' && 
        col.Type !== 'RowNum' &&
        col.Name !== '_STATUS'
      );
      return editableCol?.Name || null;
    };
    
    // Toolbar handlers
    const handleRefresh = () => {
      emit('refresh');
    };
    
    const handleAdd = () => {
      addRow({});
    };
    
    const handleDelete = () => {
      const checkedRows = getCheckedRows();
      if (checkedRows.length === 0) {
        const focusedRow = sheet.value?.getFocusedRow();
        if (focusedRow) {
          if (confirm('선택한 항목을 삭제하시겠습니까?')) {
            deleteRow(focusedRow);
          }
        } else {
          alert('삭제할 항목을 선택하세요.');
        }
        return;
      }
      
      if (confirm(`${checkedRows.length}건을 삭제하시겠습니까?`)) {
        checkedRows.forEach(row => deleteRow(row));
      }
    };
    
    const handleSave = () => {
      // Validate
      const validation = validate();
      if (!validation?.valid) {
        alert(validation?.message || '유효성 검사 실패');
        if (validation?.row && validation?.col) {
          setFocus(validation.row, validation.col);
        }
        return;
      }
      
      const saveData = getChangedData();
      if (!saveData?.data?.length) {
        alert('변경된 데이터가 없습니다.');
        return;
      }
      
      emit('save', saveData);
    };
    
    // Watch for data changes
    watch(() => props.data, (newData) => {
      if (sheet.value && newData?.length > 0) {
        loadData(newData);
      }
    }, { deep: true });
    
    // Lifecycle
    onMounted(() => {
      initSheet();
    });
    
    onUnmounted(() => {
      destroySheet();
    });
    
    // Expose methods to parent
    expose({
      getSheet: () => sheet.value,
      loadData,
      getData,
      getChangedData,
      addRow,
      deleteRow,
      getCheckedRows,
      acceptChanges,
      validate,
      setFocus
    });
    
    return {
      containerRef,
      sheet,
      isReady,
      loading,
      handleRefresh,
      handleAdd,
      handleDelete,
      handleSave
    };
  }
});
</script>

<script>
// ============================================================
// Composable: useIBSheet (Alternative approach)
// ============================================================
import { ref, onMounted, onUnmounted } from 'vue';

export function useIBSheet(id, options, initialData = []) {
  const containerRef = ref(null);
  const sheet = ref(null);
  const isReady = ref(false);

  const initSheet = () => {
    if (!containerRef.value || !window.IBSheet) return;

    window.IBSheet.create({
      id,
      el: containerRef.value,
      options: {
        ...options,
        Events: {
          ...options.Events,
          onRenderFirstFinish: (evt) => {
            sheet.value = window.IBSheet.getSheetById(id);
            isReady.value = true;
            options.Events?.onRenderFirstFinish?.(evt);
          }
        }
      },
      data: initialData
    });
  };

  onMounted(() => initSheet());
  
  onUnmounted(() => {
    if (sheet.value) {
      window.IBSheet.dispose(id);
    }
  });

  return {
    containerRef,
    sheet,
    isReady,
    loadData: (data) => sheet.value?.loadSearchData({ data }),
    getData: (opts) => sheet.value?.getSaveJson(opts),
    addRow: (init) => sheet.value?.addRow({ init, focus: true }),
    deleteRow: (row) => sheet.value?.deleteRow(row),
    acceptChanges: () => sheet.value?.acceptChanges()
  };
}
</script>

<style scoped>
.ibsheet-wrapper {
  position: relative;
}

.toolbar {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 4px;
}

.toolbar button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ddd;
}

.toolbar button:hover {
  background: #e0e0e0;
}

.toolbar button.btn-primary {
  background: #1976d2;
  color: white;
  border-color: #1976d2;
  margin-left: auto;
}

.toolbar button.btn-primary:hover {
  background: #1565c0;
}

.toolbar button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.loading-spinner {
  padding: 20px 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
</style>

<!--
============================================================
Example Usage in Parent Component
============================================================

<template>
  <div>
    <IBSheetGrid
      ref="gridRef"
      id="productSheet"
      :options="sheetOptions"
      :data="products"
      height="500px"
      @ready="onSheetReady"
      @change="onDataChange"
      @save="onSave"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import IBSheetGrid from './IBSheetGrid.vue';

const gridRef = ref(null);
const products = ref([]);

const sheetOptions = reactive({
  Cfg: {
    SearchMode: 0,
    CanEdit: true,
    HeaderCheck: true
  },
  Cols: [
    { Header: '선택', Name: 'chk', Type: 'CheckBox', Width: 50 },
    { Header: 'ID', Name: 'id', Type: 'Int', Width: 60, CanEdit: false },
    { Header: '상품명', Name: 'name', Type: 'Text', Width: 200, Required: true },
    { Header: '가격', Name: 'price', Type: 'Int', Width: 100, Format: '#,##0' },
    { Header: '재고', Name: 'stock', Type: 'Int', Width: 80 }
  ]
});

const onSheetReady = (sheet) => {
  console.log('Sheet ready:', sheet);
};

const onDataChange = (data) => {
  console.log('Data changed:', data);
};

const onSave = async (saveData) => {
  try {
    await fetch('/api/products/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(saveData)
    });
    
    gridRef.value?.acceptChanges();
    alert('저장되었습니다.');
  } catch (error) {
    alert('저장 실패');
  }
};

onMounted(async () => {
  const response = await fetch('/api/products');
  products.value = await response.json();
});
</script>
-->
