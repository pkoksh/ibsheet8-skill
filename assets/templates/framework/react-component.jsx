import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

/**
 * IBSheet React Wrapper Component
 * 
 * @example
 * <IBSheetGrid
 *   id="mySheet"
 *   options={sheetOptions}
 *   data={data}
 *   onReady={(sheet) => console.log('Sheet ready')}
 *   onChange={(data) => console.log('Data changed', data)}
 *   height="500px"
 * />
 */

// ============================================================
// Custom Hook: useIBSheet
// ============================================================
export function useIBSheet(id, options, initialData = []) {
  const containerRef = useRef(null);
  const sheetRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !window.IBSheet) {
      console.error('IBSheet library not loaded or container not found');
      return;
    }

    window.IBSheet.create({
      id,
      el: containerRef.current,
      options: {
        ...options,
        Events: {
          ...options.Events,
          onRenderFirstFinish: (evt) => {
            sheetRef.current = window.IBSheet.getSheetById(id);
            setIsReady(true);
            options.Events?.onRenderFirstFinish?.(evt);
          }
        }
      },
      data: initialData
    });

    return () => {
      if (sheetRef.current) {
        window.IBSheet.dispose(id);
        sheetRef.current = null;
        setIsReady(false);
      }
    };
  }, [id]);

  const loadData = useCallback((data) => {
    sheetRef.current?.loadSearchData({ data });
  }, []);

  const getData = useCallback((options = {}) => {
    return sheetRef.current?.getSaveJson(options);
  }, []);

  const addRow = useCallback((init = {}) => {
    return sheetRef.current?.addRow({ init, focus: true });
  }, []);

  const deleteRow = useCallback((row) => {
    sheetRef.current?.deleteRow(row || sheetRef.current.getFocusedRow());
  }, []);

  const acceptChanges = useCallback(() => {
    sheetRef.current?.acceptChanges();
  }, []);

  const validate = useCallback(() => {
    return sheetRef.current?.validate();
  }, []);

  return {
    containerRef,
    sheet: sheetRef.current,
    isReady,
    loadData,
    getData,
    addRow,
    deleteRow,
    acceptChanges,
    validate
  };
}

// ============================================================
// IBSheetGrid Component
// ============================================================
const IBSheetGrid = ({
  id,
  options,
  data = [],
  height = '500px',
  onReady,
  onChange,
  className,
  style
}) => {
  const containerRef = useRef(null);
  const sheetRef = useRef(null);

  // Memoize options to prevent unnecessary re-renders
  const memoizedOptions = useMemo(() => ({
    ...options,
    Events: {
      ...options.Events,
      onRenderFirstFinish: (evt) => {
        sheetRef.current = window.IBSheet.getSheetById(id);
        options.Events?.onRenderFirstFinish?.(evt);
        onReady?.(sheetRef.current);
      },
      onAfterChange: (evt) => {
        options.Events?.onAfterChange?.(evt);
        if (onChange && sheetRef.current) {
          onChange(sheetRef.current.getSaveJson());
        }
      },
      onAfterRowAdd: (evt) => {
        options.Events?.onAfterRowAdd?.(evt);
        if (onChange && sheetRef.current) {
          onChange(sheetRef.current.getSaveJson());
        }
      },
      onAfterRowDelete: (evt) => {
        options.Events?.onAfterRowDelete?.(evt);
        if (onChange && sheetRef.current) {
          onChange(sheetRef.current.getSaveJson());
        }
      }
    }
  }), [id, options, onReady, onChange]);

  // Initialize sheet
  useEffect(() => {
    if (!containerRef.current || !window.IBSheet) {
      console.error('IBSheet library not loaded');
      return;
    }

    window.IBSheet.create({
      id,
      el: containerRef.current,
      options: memoizedOptions,
      data
    });

    return () => {
      if (sheetRef.current) {
        window.IBSheet.dispose(id);
        sheetRef.current = null;
      }
    };
  }, [id]);

  // Update data when prop changes
  useEffect(() => {
    if (sheetRef.current && data?.length > 0) {
      sheetRef.current.loadSearchData({ data });
    }
  }, [data]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: '100%', height, ...style }}
    />
  );
};

export default IBSheetGrid;

// ============================================================
// Example Usage Component
// ============================================================
export function ProductGridExample() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const sheetRef = useRef(null);

  const sheetOptions = useMemo(() => ({
    Cfg: {
      SearchMode: 0,
      CanEdit: true,
      HeaderCheck: true
    },
    Cols: [
      { Header: '선택', Name: 'chk', Type: 'CheckBox', Width: 50 },
      { Header: 'ID', Name: 'id', Type: 'Int', Width: 60, CanEdit: false },
      { Header: '상품명', Name: 'name', Type: 'Text', Width: 200, Required: true },
      { 
        Header: '카테고리', 
        Name: 'category', 
        Type: 'Combo', 
        Width: 100,
        ComboCode: 'ELEC|CLOTH|FOOD',
        ComboText: '전자제품|의류|식품'
      },
      { Header: '가격', Name: 'price', Type: 'Int', Width: 100, Format: '#,##0' },
      { Header: '재고', Name: 'stock', Type: 'Int', Width: 80 },
      { 
        Header: '상태', 
        Name: 'status', 
        Type: 'Combo', 
        Width: 80,
        ComboCode: 'Y|N',
        ComboText: '판매중|중지'
      }
    ]
  }), []);

  const handleReady = useCallback((sheet) => {
    sheetRef.current = sheet;
    console.log('Sheet is ready');
  }, []);

  const handleChange = useCallback((data) => {
    console.log('Data changed:', data);
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Replace with actual API call
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = () => {
    sheetRef.current?.addRow({
      init: { status: 'Y', stock: 0 },
      focus: true,
      focusCol: 'name'
    });
  };

  const handleDelete = () => {
    const checkedRows = sheetRef.current?.getCheckedRows() || [];
    if (checkedRows.length === 0) {
      alert('삭제할 항목을 선택하세요.');
      return;
    }
    
    if (window.confirm(`${checkedRows.length}건을 삭제하시겠습니까?`)) {
      checkedRows.forEach(row => sheetRef.current?.deleteRow(row));
    }
  };

  const handleSave = async () => {
    const sheet = sheetRef.current;
    if (!sheet) return;

    // Validate
    const validation = sheet.validate();
    if (!validation.valid) {
      alert(validation.message);
      sheet.setFocus(validation.row, validation.col);
      return;
    }

    const saveData = sheet.getSaveJson({ check: 1 });
    if (saveData.data.length === 0) {
      alert('변경된 데이터가 없습니다.');
      return;
    }

    try {
      setIsLoading(true);
      // Replace with actual API call
      await fetch('/api/products/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(saveData)
      });

      sheet.acceptChanges();
      alert('저장되었습니다.');
    } catch (error) {
      console.error('Failed to save:', error);
      alert('저장 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-grid-container">
      <div className="toolbar" style={{ marginBottom: '10px', display: 'flex', gap: '8px' }}>
        <button onClick={fetchData} disabled={isLoading}>
          {isLoading ? '로딩...' : '조회'}
        </button>
        <button onClick={handleAdd}>추가</button>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleSave} style={{ marginLeft: 'auto' }}>
          저장
        </button>
      </div>

      <IBSheetGrid
        id="productSheet"
        options={sheetOptions}
        data={products}
        onReady={handleReady}
        onChange={handleChange}
        height="500px"
      />
    </div>
  );
}

// ============================================================
// TypeScript Type Definitions (for reference)
// ============================================================
/*
interface IBSheetColumn {
  Header: string;
  Name: string;
  Type?: 'Text' | 'Int' | 'Float' | 'Date' | 'Combo' | 'CheckBox' | 'Button';
  Width?: number;
  Align?: 'Left' | 'Center' | 'Right';
  Format?: string;
  CanEdit?: boolean;
  Required?: boolean;
  ComboCode?: string;
  ComboText?: string;
}

interface IBSheetConfig {
  SearchMode?: number;
  CanEdit?: boolean;
  CanSort?: boolean;
  HeaderCheck?: boolean;
}

interface IBSheetOptions {
  Cfg?: IBSheetConfig;
  Cols: IBSheetColumn[];
  Events?: Record<string, Function>;
}

interface IBSheetGridProps {
  id: string;
  options: IBSheetOptions;
  data?: any[];
  height?: string;
  onReady?: (sheet: any) => void;
  onChange?: (data: any) => void;
  className?: string;
  style?: React.CSSProperties;
}
*/
