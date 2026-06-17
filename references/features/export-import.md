# 내보내기 및 가져오기

IBSheet8은 두 가지 방식의 내보내기/가져오기를 제공합니다.

| 구분 | 서버 기반 | 클라이언트 기반 |
|------|----------|---------------|
| 엑셀 내보내기 | `down2Excel()` | `exportData()` |
| 엑셀 가져오기 | `loadExcel()` | `importData()` |
| 텍스트 내보내기 | `down2Text()` | `exportData()` (txt/csv) |
| 텍스트 가져오기 | `loadText()` | `importData()` (txt/csv) |
| PDF 내보내기 | `down2Pdf()` | - |
| 한글(Hwpx) 내보내기 | `down2Hwpx()` | - |
| 다중 시트 내보내기 | `down2ExcelBuffer()` | `exportDataBuffer()` |
| 대량 데이터 직접 처리 | `directDown2Excel()` / `directLoadExcel()` | - |

---

## 사전 준비

### 서버 기반 함수 사용 시

1. **서버 모듈 설치**

   - Java: `ibsheet8-1.x.x.jar` + Apache POI 라이브러리를 `WEB-INF/lib`에 추가
   - .NET: `IBSheet8-4.0.dll` + Syncfusion 라이브러리를 bin 또는 참조에 추가

2. **플러그인 파일 include**

   ```html
   <script src="/plugins/ibsheet-excel.js"></script>
   ```

3. **Export 경로 설정**

   ```javascript
   // 시트 생성 시 Cfg에 설정
   Cfg: {
     Export: {
       Url: "/assets/ibsheet/jsp"  // JSP/ASPX 파일이 위치한 경로
     }
   }
   ```

   모든 시트에 공통으로 설정하려면 `IBSheet.CommonOptions`를 사용합니다.

### 클라이언트 기반 함수 사용 시

- `plugins/jszip.min.js` 파일이 반드시 존재해야 합니다.
- 서버 모듈 없이 브라우저에서 직접 처리됩니다.
- 지원 파일 형식: **xlsx, txt, csv**

---

## 엑셀 내보내기

### 서버 기반: down2Excel

```javascript
// 기본 사용
sheet.down2Excel({
  fileName: "데이터목록.xlsx",
  sheetDesign: 1,
  merge: 1
});

// 주요 옵션 활용
sheet.down2Excel({
  fileName: "홍길동 교통비 내역.xlsx",
  sheetName: "교통비",            // 워크시트 이름
  downCols: "name|dept|amount",   // 특정 열만 다운로드 ("Visible": 보이는 열만)
  downRows: "1|3|5",              // 특정 행만 다운로드 ("Visible": 보이는 행만)
  downHeader: 1,                  // 헤더행 포함 (default: 1)
  downSum: 1,                     // 합계행 포함 (default: 1)
  sheetDesign: 1,                 // 디자인 반영 (0:미적용, 1:전체적용, 2:외곽선 제외, 3:모두 미적용, 4:헤더만)
  merge: 1,                       // 머지 반영 (0:미사용, 1:사용(값 유지), 2:사용(값 비움))
  wordWrap: 1,                    // 텍스트 줄바꿈 (default: 1)
  excelFontSize: 10,              // 폰트 크기
  excelRowHeight: 20,             // 행 높이 (-1: 자동 조절)
  freezePane: 1,                  // 틀 고정 (1:헤더, 2:헤드영역, 4:왼쪽고정열, 비트연산 조합 가능)
  hiddenColumn: 1,                // 숨은 컬럼을 엑셀 "열 숨기기"로 다운로드
  downCombo: "TEXT",              // Enum 다운로드 형식 ("TEXT":표시값, "CODE":코드값)
  workbookPassword: "1234",       // 엑셀 파일 비밀번호 (xlsx만 지원)
  enableFilter: 1                 // 엑셀 필터 기능 활성화
});
```

⚠️ **함정 — `Visible:0` 숨김 컬럼이 엑셀에 그대로 다운로드됨** 🚨
화면에서 안 보이는 내부용 컬럼(예: 밴딩 판정용 `css`, 정렬 키, FK id 등)을 `Visible:0` 으로 숨겨도 `exportData`/`down2Excel` 은 **기본적으로 그 컬럼을 엑셀에 포함**한다 (`hiddenColumn:1` 기본 동작 = "열 숨기기"로 들어감). 사용자 보고: "엑셀에 안 보이는 컬럼까지 내려받아짐".
```javascript
// ✅ 해당 컬럼에 CanExport:0 — 엑셀/텍스트 다운로드에서 제외 (화면엔 그대로 hidden)
{ Header: 'css', Name: 'css', Type: 'Text', Visible: 0, CanExport: 0 }
// 또는 export 시 보이는 열만: down2Excel({ downCols: 'Visible' }) / exportData({ downCols: 'Visible' })
```
`downCols` 명시값이 `CanExport` 보다 우선([props/col/can-export](../ibsheet-official-manual/props/col/can-export.md)). 내부 컬럼이 많으면 컬럼별 `CanExport:0` 이 누락 위험 적음.
> 참고 화면: UIDT8040M00 (검사건수 월별 통계 — hidden `css` 밴딩 컬럼 export 제외)

**titleText / userMerge로 타이틀 영역 추가:**

```javascript
sheet.down2Excel({
  fileName: "보고서.xlsx",
  titleText: "||2024년 3월 교통비\r\n|||||||홍길동",
  userMerge: "0,2,1,4",   // row,col,아래병합수,우측병합수 (여러 개는 공백으로 구분)
  titleAlign: "center"
});
```

**exHead/exFoot으로 상단/하단 커스텀 영역 추가:**

```javascript
sheet.down2Excel({
  fileName: "보고서.xlsx",
  exHead: [
    {
      Height: 30,
      Cells: [
        { Value: "부서", Color: "#DEDEDE", TextSize: 12, TextStyle: 1 },
        { Value: "총무부", ColSpan: 3 }
      ]
    }
  ],
  exFoot: [
    {},  // 빈 행
    { Height: 30, Cells: [{ Value: "출력: 2024-01-01 홍길동" }] }
  ]
});
// 주의: exHead/exFoot 사용 시 titleText, userMerge는 무시됩니다.
```

**★ Nexacro `gfn_excelExportMultiGrid([grd_header, grd_list], ...)` → IBSheet8 `exHead`**

AS-IS 통계 화면은 화면엔 `visible="false"` 인 **제목용 그리드(grd_header)** 를 별도로 두고, 엑셀 출력 시 `gfn_excelExportMultiGrid` 로 [제목그리드 + 데이터그리드]를 한 시트로 합쳐 출력하는 패턴이 흔하다 (예: UIDT8066M00 "혈액학팀 TAT 분석보고서" + 기간/설명 3줄 헤더). React 에선 별도 헤더 그리드를 만들지 말고 **`exportData({ exHead })`** 로 데이터 그리드 헤더 위에 제목 영역을 삽입한다.

```js
sheet.exportData({
  fileName, sheetName,
  exHead,            // 아래 boxRow 들의 배열
  merge: 1,          // 2단 헤더 머지 + 데이터
  sheetDesign: 1,    // Total 합계행 등 셀 배경색 반영
})
```

- **`titleText` 와 병용 금지** — exHead 가 있으면 titleText/userMerge 는 무시된다. 제목은 전부 exHead Cells 로.
- **`TextStyle` 는 비트마스크**: Bold=1, Italic=2, **Underline=4**, Strike=8 → 굵게+밑줄 = `5` (원본 `font="bold ... underline"` 대응).
- **ColSpan 박스 보더는 각 셀에 따로** — 제목을 `ColSpan:N` 으로 병합해도 박스 테두리는 병합 셀에만 주면 끊긴다. 첫 셀에 `Value+ColSpan+상하좌` 보더, 나머지 N-1 셀에 `상하`(+마지막 셀 `우`) 보더를 **각각** 명시해야 박스가 이어진다.
- 제목 박스 폭은 보통 **좌측 고정(LeftCols) 컬럼 수**에 맞추면 AS-IS 와 정렬이 맞다.
- ⚠ `exHead`/`exFoot` 는 **xlsx 전용 + core 8.1.0.30 이상**. 구버전이면 제목 없이 나오므로 버전 확인.

```js
// 제목 1행 = 첫 셀 Value+ColSpan, 나머지 셀엔 보더만 (박스가 안 끊기게)
const boxRow = (value, { height, textSize, textStyle, color }) => {
  const cells = [{
    Value: value, Align: 'Left', Wrap: 0, ColSpan: SPAN,
    TextSize: textSize, TextStyle: textStyle,
    BorderTop: `1 solid ${color}`, BorderBottom: `1 solid ${color}`, BorderLeft: `1 solid ${color}`,
  }]
  for (let i = 1; i < SPAN; i++)
    cells.push({ BorderTop: `1 solid ${color}`, BorderBottom: `1 solid ${color}`,
      ...(i === SPAN - 1 ? { BorderRight: `1 solid ${color}` } : {}) })
  return { Height: height, Cells: cells }
}
const exHead = [
  boxRow(str1, { height: 44, textSize: 24, textStyle: 5, color: '#4e8a4e' }), // 제목(굵게+밑줄)
  boxRow(str2, { height: 22, textSize: 11, textStyle: 0, color: '#b4b4b4' }),
  boxRow(str3, { height: 22, textSize: 11, textStyle: 0, color: '#b4b4b4' }),
]
```

**템플릿 파일 활용:**

```javascript
// 미리 준비된 엑셀 템플릿에 데이터 삽입
sheet.down2Excel({
  fileName: "sheet.xlsx",
  tempFile: "template.xlsx",  // 서버에 미리 준비한 템플릿 파일명
  startRow: 4,                // 데이터 작성 시작 행 (0부터)
  startCol: 2,                // 데이터 작성 시작 열 (0부터)
  sheetNo: 0                  // 템플릿 내 워크시트 번호
});
// 서버 사이드에서 Down2Excel.jsp에 TempRoot 설정 필요
```

### 클라이언트 기반: exportData

서버 모듈 없이 브라우저에서 직접 엑셀 파일을 생성합니다. `down2Excel`과 대부분의 옵션이 동일합니다.

```javascript
// xlsx 다운로드
sheet.exportData({
  fileName: "재고리스트.xlsx",
  downRows: "Visible",
  sheetDesign: 1,
  merge: 1
});

// txt 다운로드
sheet.exportData({
  fileName: "데이터.txt",
  colDelim: ","
});

// csv 다운로드
sheet.exportData({
  fileName: "데이터.csv",
  downSum: 0
});

// 용지 설정 (xlsx만 지원)
sheet.exportData({
  fileName: "보고서.xlsx",
  excelPage: {
    orientation: "landscape",  // 가로 방향 ("portrait": 세로)
    paperSize: "A4",
    marginLeft: 1.8,
    marginRight: 1.8,
    marginTop: 1.9,
    marginBottom: 1.9,
    fitToWidth: 1,
    fitToHeight: 0
  }
});
```

---

## 엑셀 가져오기

### 서버 기반: loadExcel

파일 다이얼로그를 표시하고, 선택된 엑셀 파일을 서버에서 파싱하여 시트에 로드합니다.

```javascript
// 기본 사용 (HeaderMatch 모드)
sheet.loadExcel({
  mode: "HeaderMatch",
  startRow: 5,
  workSheetName: "12월결산"
});

// HeaderSkip 모드로 특정 위치부터 읽기
sheet.loadExcel({
  mode: "HeaderSkip",
  startRow: 4,
  startCol: 3
});

// 기존 데이터에 추가
sheet.loadExcel({
  append: 1,
  mode: "HeaderMatch"
});

// 컬럼 매핑 (시트 1번째 컬럼에 엑셀 5번째 컬럼 매핑)
sheet.loadExcel({
  columnMapping: "5|4|3|2|1"
});

// FullLoad 모드: 모든 워크시트를 다이얼로그에 로드
sheet.loadExcel({
  mode: "FullLoad"
});
```

**mode 옵션 설명:**

| mode | 설명 |
|------|------|
| `"HeaderMatch"` | 시트 헤더 타이틀과 엑셀 헤더를 비교하여 매칭 (default) |
| `"NoHeader"` | 헤더 없이 첫 행부터 순서대로 매핑 |
| `"HeaderSkip"` | 헤더 행 수만큼 건너뛰고 순서대로 매핑 |
| `"FullLoad"` | 모든 워크시트를 다이얼로그에 로드하여 선택 |

**주요 옵션:**

| 옵션 | 설명 |
|------|------|
| `append` | 기존 데이터 뒤에 추가 여부 (default: 0) |
| `startRow` | 엑셀에서 시작할 행 번호 (1부터) |
| `startCol` | 엑셀에서 시작할 열 번호 (1부터) |
| `endRow` | 읽어들일 마지막 행 (0부터) |
| `workSheetName` | 워크시트 이름 지정 |
| `workSheetNo` | 워크시트 순번 지정 |
| `columnMapping` | 컬럼 매핑 (`"5\|4\|3\|2\|1"`) |
| `maxFileSize` | 최대 파일 크기 (MB) |
| `fileExt` | 허용 확장자 (default: `"xls\|xlsx"`) |
| `skipEmptyRow` | 빈 행 건너뛰기 (default: 1) |
| `workbookPassword` | 비밀번호가 설정된 파일 열기 (xlsx만) |
| `activeSheet` | 활성화된 워크시트 업로드 |

### 클라이언트 기반: importData

서버 없이 브라우저에서 직접 엑셀 파일을 파싱합니다. `loadExcel`과 유사한 옵션을 제공합니다.

```javascript
// 기본 사용
sheet.importData({
  mode: "HeaderMatch",
  startRow: 3,
  workSheetName: "sheet"
});

// 컬럼 매핑으로 순서 변경
sheet.importData({
  columnMapping: "3|4|5|2|1"
});

// file 객체 직접 전달 (파일 다이얼로그 미표시)
sheet.importData({
  file: fileObject,  // File 객체 또는 Blob 객체
  mode: "HeaderMatch"
});

// 텍스트/CSV 파일 가져오기
sheet.importData({
  fileExt: "csv|txt",
  colSeparator: ",",
  encoding: "utf-8"
});
```

---

## 다중 시트 엑셀 내보내기

### 서버 기반: down2ExcelBuffer

여러 개의 IBSheet를 하나의 엑셀 파일에 각각 다른 워크시트로 내보냅니다.

```javascript
// 버퍼링 시작
sheet1.down2ExcelBuffer(true);

// 각 시트 데이터 버퍼링
sheet1.down2Excel({ fileName: "여행경비.xlsx", sheetName: "교통비" });
sheet2.down2Excel({ sheetName: "식비" });
sheet3.down2Excel({ sheetName: "숙박비" });

// 버퍼링 종료 및 다운로드 실행
sheet1.down2ExcelBuffer(false);
```

하나의 시트에서 컬럼별로 워크시트를 나눌 수도 있습니다:

```javascript
sheet.down2ExcelBuffer(true);
sheet.down2Excel({ sheetName: "1-2분기", downCols: "q1Cost|q1Profit|q2Cost|q2Profit" });
sheet.down2Excel({ sheetName: "3-4분기", downCols: "q3Cost|q3Profit|q4Cost|q4Profit" });
sheet.down2ExcelBuffer(false);
```

같은 워크시트에 이어붙이려면 `appendPrevSheet: 1` 옵션을 사용합니다.

### 클라이언트 기반: exportDataBuffer

`down2ExcelBuffer`의 클라이언트 버전으로, 사용법이 동일합니다.

---

## 텍스트/CSV 내보내기 및 가져오기

### 서버 기반: down2Text / loadText

```javascript
// txt 다운로드
sheet.down2Text({ fileName: "데이터.txt" });

// csv 다운로드
sheet.down2Text({
  fileName: "데이터.csv",
  colDelim: ",",
  downloadEncoding: "UTF-8(BOM)"  // 엑셀에서 한글 깨짐 방지
});

// 주요 옵션
sheet.down2Text({
  fileName: "데이터.csv",
  downCols: "name|dept|amount",
  downRows: "Visible",
  downHeader: 1,
  downSum: 0,
  rowDelim: "\r\n",        // 행 구분자 (default: "\r\n")
  colDelim: ","             // 열 구분자 (txt: 탭, csv: 콤마)
});
```

```javascript
// 텍스트 파일 가져오기
sheet.loadText({
  mode: "NoHeader",
  append: 1,
  colSeparator: "\t",
  encoding: "utf-8"
});
```

### 클라이언트 기반

`exportData`, `importData` 함수에서 파일 확장자를 `txt` 또는 `csv`로 지정하면 됩니다.

---

## PDF 내보내기

서버 기반으로만 제공됩니다. Java: `ib-itext.jar` 필요, .NET: `wkhtmltopdf.exe` 필요.

```javascript
sheet.down2Pdf({
  fileName: "보고서.pdf",
  title: "홍길동 교통비 내역",
  titleStyle: "color:red; font-size:100px;",
  paper: "landscape",         // 용지 방향 ("portrait": 세로, "landscape": 가로)
  fontTo: "Gulim",            // 한글 폰트 ("Gulim" 또는 "Gothic")
  dpi: 2000,                  // 축소/확대 비율 (작을수록 크게, 50~32840)
  downCols: "Visible"         // 보이는 열만
});
```

> **주의:** 멀티레코드(`MultiRecord`) 기능을 사용하는 시트에서는 제약이 있습니다.

---

## 대량 데이터 직접 처리

### directDown2Excel

시트에 조회된 데이터 대신 서버에서 직접 생성한 데이터로 엑셀을 다운로드합니다. 대량 데이터에 의한 서버 부하를 줄일 수 있습니다.

```javascript
sheet.directDown2Excel({
  url: "./apex/yearApexDataList.do",            // 데이터 조회 서버 URL (필수)
  extendParam: "year=2024&deptNo=0041",         // 서버에 전달할 파라미터
  fileName: "년단위 결산 정보.xlsx"
});
```

서버에서는 `List<Map>` 구조의 데이터를 `SHEETDATA`라는 이름으로 request에 담아 `DirectDown2Excel.jsp`로 forward합니다.

### directLoadExcel

엑셀 파일을 시트에 로드하지 않고, 서버의 원하는 서블릿으로 직접 전달하여 DB에 저장합니다.

```javascript
sheet.directLoadExcel({
  startRow: 5,
  workSheetName: "sheet4",
  // FP 파라미터로 최종 데이터를 받을 서블릿 경로를 지정해야 합니다.
  extendParam: "year=2024&deptNo=0041&FP=./save/empExcelData.do"
});
```

---

## 클립보드

```javascript
sheet.copy();       // 선택 영역 복사
sheet.copyAll();    // 전체 복사
sheet.paste();      // 붙여넣기

// 설정
Cfg: {
  CanPaste: true,
  PasteMode: 1    // 0: 덮어쓰기, 1: 행 추가
}
```

---

## 관련 이벤트

| 이벤트 | 설명 |
|--------|------|
| `onBeforeExport` | 내보내기 실행 전 호출 |
| `onExportFinish` | 내보내기 완료 후 호출 |
| `onSelectFile` | 파일 선택 시 호출 (가져오기) |
| `onImportFinish` | 가져오기 완료 후 호출 |

---

## 관련 설정 (Cfg)

| 속성 | 설명 |
|------|------|
| `Export.Url` | 서버 JSP/ASPX 파일 경로 |
| `AutoExcelMode` | 자동 엑셀 모드 설정 |
| `Down2ExcelConfig` | down2Excel 기본 옵션 설정 |
| `LoadExcelConfig` | loadExcel 기본 옵션 설정 |
