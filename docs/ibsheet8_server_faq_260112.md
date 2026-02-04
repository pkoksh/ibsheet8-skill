# IBSheet8 서버모듈 FAQ

> IBSheet8 서버 연동(엑셀 업로드/다운로드) 관련 기술 문의사항 정리
> RAG 시스템 최적화를 위해 핵심 내용만 선별하였습니다.

## 📋 개요

IBSheet8의 서버 모듈을 활용한 엑셀 파일 처리(업로드/다운로드) 시 자주 발생하는 문제와 해결 방법을 정리한 문서입니다.

### 주요 서버 모듈 구성
- **IBSheetLoad**: 엑셀 업로드 처리
- **IBSheetDown**: 엑셀 다운로드 처리
- **필수 라이브러리**: Apache POI, commons-io 등

---

## 📑 목차

- [down2Pdf 다운로드](#down2Pdf_다운로드) (1개)
- [엑셀 다운로드](#엑셀_다운로드) (73개)
- [엑셀 업로드](#엑셀_업로드) (45개)
- [기타](#기타) (1개)
- [데이터 형식](#데이터_형식) (1개)
- [서버모듈 버전](#서버모듈_버전) (6개)

---

## down2Pdf 다운로드

### 1. down2Pdf 기능 사용 시 한글이 표시되지 않는 현상

**질문:**
down2Pdf 기능을 사용하여 PDF 파일을 다운로드할 때, 한글이 제대로 표시되지 않습니다.

**답변:**
- 원인: down2Pdf.jsp에서 폰트 경로 설정 문제 가능성이 높음.  

  ```java
  ibPdf.setFontFolder("폰트파일경로")
  ```
---

## 엑셀 다운로드

### 1. down2Excel 시 에러 발생함 

**질문:**
다음과 같은 에러가 발생합니다:

오류메세지
```java
The method getDownError(String) is undefined for the type IBSheetDown
// e.printStackTrace();
OutputStream out2 = response.getOutputStream();
out2.write(down.getDownError("파일 다운로드 중 에러가 발생했습니다."));
out2.flush();
} catch (Error e) {
```
**답변:**
당사에서 제공하는 jar 버전이 2개 존재하여서 발생하는 현상으로
버전이 높은 라이브러리 1개만 적용해야 한다.

---

### 2. batik-all-xml.jar 사용 시 commons-io 충돌 문제

**질문:**
- `batik-all-xml.jar` 사용 시 `commons-io IOUtils` 클래스 중복 오류 발생
- `batik-all` 라이브러리가 필요한 기능과 권장 버전 문의

**답변:**
- `batik-all-xml.jar`는 down2Excel시 이미지 다운로드 기능에 사용됨
- `batik-all-xml.jar` 파일이 여러 jar를 하나로 묶으면서 모듈 충돌 문제가 발생함
- 기존 `batik-all-xml.jar` 삭제 후 아래 4개 jar로 교체 권장
  - `batik-all-1.17.jar`
  - `commons-io-2.11.0.jar`
  - `xml-apis-ext-1.3.04.jar`
  - `xmlgraphics-commons-2.9.jar`
- `ibsheet~.jar` 수정은 불필요

---

### 3. 대용량 데이터 다운로드 시 브라우저 메모리 이슈

**질문:**
약 15만 건 / 컬럼 100개 데이터를 exportData로 다운로드 시
브라우저 메모리 부족으로 종료되는 현상 발생

**답변:**
- exportData 방식으로 대용량 데이터를 다운로드하면 브라우저 메모리 부족으로 종료될 수 있음
- 대안으로 아래방법으로 처리
  1. down2Excel 방식으로 다운로드 시도
    프론트엔드에서 다운로드 할 데이터 가공하므로 처리 시간이 소요될 수 있음

  2.성능이 떨어질 경우 directDown2Excel 사용 권장
    다운로드 데이터를 백엔드에서 생성하여 처리

---

### 4. down2Excel 다운로드 시 오류 발생

**질문:**
다음과 같은 에러가 발생합니다:

오류메세지
```text
org.springframework.web.util.NestedServletException: Handler dispatch failed; nested exception is java.lang.NoSuchMethodError: org.apache.commons.io.IOUtils.readFully(Ljava/io/InputStream;[B)V
  at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1055)
  at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:943)
  at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006)
  at org.springframework.web.servlet.FrameworkServlet.doPost(FrameworkServlet.java:909)
  at javax.servlet.http.HttpServlet.service(HttpServlet.java:706)
  at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883)
  at javax.servlet.http.HttpServlet.service(HttpServlet.java:791)
  at jeus.servlet.engine.ServletWrapper.executeServlet(ServletWrapper.java:173)
  at jeus.servlet.filter.FilterChainImpl.internalDoFilter(FilterChainImpl.java:113)
  at jeus.servlet.filter.FilterChainImpl.doFilter(FilterChainImpl.java:87)
  at com.yettiesoft.vestweb.operation.VestWebFilter.doFilter(VestWebFilter.java:271)
  at jeus.servlet.filter.FilterChainImpl.internalDoFilter(FilterChainImpl.java:99)
  at jeus.servlet.filter.FilterChainImpl.doFilter(FilterChainImpl.java:87)
  at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:201)
  at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
  at jeus.servlet.filter.FilterChainImpl.internalDoFilter(FilterChainImpl.java:99)
  at jeus.servlet.filter.FilterChainImpl.doFilter(FilterChainImpl.java:87)
  at psl.beans.entity.comm.WebFilter.doFilter(WebFilter.java:80)
  at jeus.servlet.filter.FilterChainImpl.internalDoFilter(FilterChainImpl.java:99)
  at jeus.servlet.filter.FilterChainImpl.doFilter(FilterChainImpl.java:87)
  at jeus.servlet.engine.ServletWrapper.execute(ServletWrapper.java:148)
  at jeus.servlet.valve.ContextBasicValve.invoke(ContextBasicValve.java:82)
  at jeus.servlet.valve.VirtualHostBasicValve.invoke(VirtualHostBasicValve.java:15)
  at jeus.servlet.valve.WebContainerBasicValve.invoke(WebContainerBasicValve.java:67)
  at jeus.servlet.engine.RequestProcessor.run(RequestProcessor.java:210)
  at jeus.util.pool.ThreadPoolExecutor$Worker.runTask(ThreadPoolExecutor.java:1301)
  at jeus.util.pool.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:1345)
  at jeus.servlet.engine.WebThreadPoolExecutor$WebRequestWorker.run(WebThreadPoolExecutor.java:201)
  at java.lang.Thread.run(Thread.java:745)
```
**답변:**
- 본 오류는 commons-io 라이브러리 버전 충돌로 인해 발생한 것으로 판단됨
- `batik-all-xml.jar`는 `down2Excel` 사용 시 이미지 다운로드 기능에 사용됨
- `batik-all-xml.jar`는 여러 jar를 하나로 묶는 과정에서 모듈 충돌 문제가 발생함
- 기존 `batik-all-xml.jar` 삭제 후 아래 4개 jar로 교체 권장
  - `batik-all-1.17.jar`
  - `commons-io-2.11.0.jar`
  - `xml-apis-ext-1.3.04.jar`
  - `xmlgraphics-commons-2.9.jar`
---

### 5. 엑셀 다운로드 시 IBSheet의 데이터 상단 또는 하단에 검색조건 추가

**질문:**
엑셀다운로드 시 IBSheet의 데이터 상단 또는 하단에 화면의 검색조건을 추가하고 싶다.

**답변:**
- `down2Excel`, `directDown2Excel`, `exportData` 함수에서  
  - `exHead` : 시트 데이터 상단에 추가  
  - `exFoot` : 시트 데이터 하단에 추가  
  기능을 이용하면 가능.

- `down2Excel`, `directDown2Excel`은 기본적으로 POI 라이브러리를 사용하여 개발됨.  
  - POI가 있는 경우: 더 세밀한 스타일, 병합 등 추가 설정 가능(`exHead`, `exFoot`)
  - POI가 없는 경우: 기본 다운로드 기능은 동작하며,  
    `titleText`, `titleAlign`, `userMerge` 속성으로 간단한 헤더/정렬/병합 설정 가능
---

### 6. Java EE → Jakarta EE 환경 전환 시 엑셀 다운로드(`down2Excel` / `directDown2Excel`) 모듈 교체

**질문:**
Java EE에서 Jakarta EE로 환경이 바뀌었는데, 엑셀 다운로드 모듈 교체 시 고려 사항이 있나요?

**답변:**
- Jakarta EE 환경용 서버 모듈 제공 가능.
- 환경 전환 시 고려 사항
  1. ibsheets.js 최신 버전 필요
     - 기존 버전이 낮으면 엑셀 다운로드 기능이 동작하지 않을 수 있음
     - 최신 버전 적용 후 일부 화면 기능 테스트 필요
  2. 라이선스 키 재발급 필요
     - 화면 js 파일이 변경되므로 라이선스 키도 함께 교체
  3. POI 라이브러리
     - 최신 5.x 버전 사용 권장

- 화면 기능 테스트는 반드시 필요

---
### 7.  엑셀 다운로드 시 이미지 표시 문제

**질문:**
-컬럼 타입이 `img`인 경우,  엑셀 다운로드(down2Excel) 시 엑셀 파일에 이미지가 표시되지 않음


**답변:**
- 일반적으로 WAS 서버에 이미지 파일이 존재하지 않을 경우 발생.
- 먼저 해당 이미지가 서버에 정상적으로 존재하는지 확인 필요.
- 최근 SSL(HTTPS) 환경에서 이미지가 존재함에도 다운로드되지 않는 문제가 있어 패치 이력이 있음.
- 정상 동작을 위해서는 `WEB-INF/lib` 폴더 내 `ibsheet8-*.jar` 파일이 ibsheet8-1.1.34 이상 버전이어야 함.

---
### 8.  엑셀 다운로드 시 윈도우 이모지 표시문제 

**질문:**
- 엑셀 다운로드 시 윈도우 이모지가 `??`로 표시된다.


**답변:**
- POI 버전: POI 4.1.2 이상으로 업그레이드하면 이모지 엑셀에 정상 표시됨.

---
### 9. 엑셀 다운로드 시 파일 열기 경고 및 색상 포맷 문제

**질문:**
엑셀로 다운로드한 파일을 열면 다음과 같은 경고 메시지가 뜸:  
> "내용에 문제가 있습니다. 이 통합문서의 내용을 최대한 복구하시겠습니까? 이 통합 문서의 원본을 신뢰하는 경우 [예]를 클릭하세요"  
이 경고 메시지를 없앨 수 있는 방법이 있는가?

**답변:**
- 문제 원인
  - 숫자 포맷(`Format`)에 16진수(HEX) 색상 코드로 적용시 화면에서는 정상표시되지만 엑셀다운로드시 문제 발생
  - 예: `Format:"#,###;<span style='color:#EA002C;'>-#,###</span>;"`  
    
- 해결 가이드
  - Excel에서 지원하는 색상 코드 및 포맷만 사용
  - 숫자 포맷 예시:  
    - 정상: `Format:"#\,###;[Red]-#,###"`, `Format:"#\,###;<span style='color:red;'>-#,###</span>;"`
    - 잘못된 예: `Format:"#\,###;<span style='color:#ff0000;'>-#,###</span>;"`
  - Excel에서 지원되는 색상 값은 다음 8가지:
    - `black`, `white`, `red`, `green`, `blue`, `yellow`, `magenta`, `cyan`

---

### 10. 엑셀 다운로드 시 `NoClassDefFoundError: org/apache/xml/serializer/OutputPropertiesFactory` 오류

**질문:**
엑셀 다운로드 시 다음과 같은 오류가 발생합니다.  
```text
java.lang.NoClassDefFoundError: org/apache/xml/serializer/OutputPropertiesFactory
        at org.apache.xalan.templates.OutputProperties.<init>(OutputProperties.java:84)
        at org.apache.xalan.transformer.TransformerIdentityImpl.<init>(TransformerIdentityImpl.java:93)
        at org.apache.xalan.processor.TransformerFactoryImpl.newTransformer(TransformerFactoryImpl.java:818)
        at org.apache.poi.util.XMLHelper.newTransformer(XMLHelper.java:226)
        at org.apache.poi.openxml4j.opc.StreamHelper.saveXmlInStream(StreamHelper.java:56)
        at org.apache.poi.openxml4j.opc.internal.ZipContentTypeManager.saveImpl(ZipContentTypeManager.java:69)
        at org.apache.poi.openxml4j.opc.internal.ContentTypeManager.save(ContentTypeManager.java:452)
        at org.apache.poi.openxml4j.opc.ZipPackage.saveImpl(ZipPackage.java:520)
        at org.apache.poi.openxml4j.opc.OPCPackage.save(OPCPackage.java:1505)
        at org.apache.poi.ooxml.POIXMLDocument.write(POIXMLDocument.java:242)
        at org.apache.poi.xssf.streaming.SXSSFWorkbook.write(SXSSFWorkbook.java:953)
        at com.ibleaders.ibsheet8.excel.ExcelPOIHandler.finish(ExcelPOIHandler.java:2186)
        at com.ibleaders.ibsheet8.IBSheetDown.finish(IBSheetDown.java:1005)
        at com.ibleaders.ibsheet8.IBSheetDown.downToStream(IBSheetDown.java:983)
        at com.ibleaders.ibsheet8.IBSheetDown.downToStream(IBSheetDown.java:1000)
        at com.ibleaders.ibsheet8.IBSheetDown.downToBrowser(IBSheetDown.java:891)
        at org.apache.jsp.jsp.Down2Excel_jsp._jspService(Down2Excel_jsp.java:363)
        at org.apache.jasper.runtime.HttpJspBase.service(HttpJspBase.java:70)
        at javax.servlet.http.HttpServlet.service(HttpServlet.java:729)
        at org.apache.jasper.servlet.JspServletWrapper.service(JspServletWrapper.java:438)
        at org.apache.jasper.servlet.JspServlet.serviceJspFile(JspServlet.java:396)
        at org.apache.jasper.servlet.JspServlet.service(JspServlet.java:340)
        at javax.servlet.http.HttpServlet.service(HttpServlet.java:729)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:292)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:207)
        at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:240)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:207)
        at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:212)
        at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:94)
        at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:496)
        at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:141)
        at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:79)
        at org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:620)
        at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:88)
        at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:502)
        at org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1156)
        at org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:684)
        at org.apache.tomcat.util.net.AprEndpoint$SocketProcessor.doRun(AprEndpoint.java:2527)
        at org.apache.tomcat.util.net.AprEndpoint$SocketProcessor.run(AprEndpoint.java:2516)
        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
        at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61)
        at java.lang.Thread.run(Thread.java:748)
Caused by: java.lang.ClassNotFoundException: org.apache.xml.serializer.OutputPropertiesFactory
        at org.apache.catalina.loader.WebappClassLoaderBase.loadClass(WebappClassLoaderBase.java:1352)
        at org.apache.catalina.loader.WebappClassLoaderBase.loadClass(WebappClassLoaderBase.java:1180)
```
**답변:**
- 문제 원인
  - POI가 XML 저장 시 org.apache.poi.util.XMLHelper.getTransformerFactory()를 호출
  - 서버에 여러 개의 xalan.jar가 존재하여 클래스 충돌 발생
  - 이로 인해 NoClassDefFoundError가 발생

- 해결 가이드
  - 가능하면 중복된 xalan.jar를 제거하여 충돌 방지

---

### 11. 사진/이미지 다운로드 시 `TranscoderException` 오류

**질문:**
IBSheet에 사진이나 이미지가 표시되는데, 다운로드(down2Excel) 하면 에러가 발생한다.

```text
java.lang.NoClassDefFoundError: org/apache/batik/transcoder/TranscoderException
```
**답변:**
- batik 라이브러리가 없어서 발생하는 현상으로 파악됨.
- 아래 4개 jar로 추가
  - `batik-all-1.17.jar`
  - `commons-io-2.11.0.jar`
  - `xml-apis-ext-1.3.04.jar`
  - `xmlgraphics-commons-2.9.jar`

---

### 12. 이미지가 많은 엑셀 다운로드 시 Java Heap Memory 오류

**질문:**
컬럼에 사진이 3개 정도 들어가 있고, 사진 용량이 보통 1.5MB, 한 행에 약 4MB 수준입니다.  
32행(약 100MB)을 다운로드 시 `Java Heap Memory` 오류가 발생합니다.

**답변:**
- 문제 원인
  - 한 행에 4MB 정도 되는 이미지 데이터를 엑셀에 삽입하면서 메모리 사용량이 급증
  - Down2Excel은 이미지 데이터를 직접 엑셀 파일에 넣기 때문에, 큰 이미지가 다수 포함되면 Heap Memory 오류 발생이 불가피

- 해결 방법
  - 이미지 컬럼을 제외하고 엑셀 다운로드   
  - 근본적 해결이 어려운 경우, 서버 메모리 증설로 일부 완화 가능하지만, 대용량 이미지가 포함된 경우에는 여전히 오류 발생 가능

---

### 13. LOAT형 엑셀 다운로드 시 .0 표시 문제

**질문:**
FLOAT형일 때 화면과 동일하게 엑셀 다운로드 시 `.0`으로 끝나는 경우를 보이지 않게 하고 싶습니다.  

- 화면 예시: 정수만 있는 경우 정수까지 보임  
  - 1 
  - 0.8 
  - 2
- 엑셀 다운로드 시: 정수임에도 `.0`이 붙음 
  - 1.0 
  - 0.8 
  - 2.0

**답변:**

- IBSheet에서 `Type:"Float"`로 설정하면 기본 Format은:
  - Format:"#,##0.######"

- 그러나 엑셀에서는 #,##0.0##### Format로 셀서식이 설정됩니다.
- 즉, 화면과 동일하게 `.0`이 생략되는 포맷은 Excel에서 자동 적용 불가
- `numberFormatMode:1` 설정 → 데이터별로 셀 서식 지정 가능
- 장점: 화면과 동일한 표시 가능
- 단점: 데이터가 많으면 성능 저하 발생 

---


### 14.  Down2Excel 다운로드 시 IBSheetDown cannot be resolved 오류

**질문:**
엑셀 다운로드시(down2Excel) 아래와 같은 오류 발생한다.

```text
An error occurred at line: [19] in the jsp file: [/sheet8/jsp/Down2Excel.jsp]
IBSheetDown cannot be resolved to a type
         out.clear();
         out = pageContext.pushBody();
 
         down = new IBSheetDown();
```
**답변:**
- 원인
  - IBSheet 서버모듈 `ibsheet8~.jar` 파일이 없거나 JSP에서 제대로 인식되지 않음

- 해결 방법
  - 라이브러리 경로에 `ibsheet8~.jar` 추가

---

### 15. 엑셀 다운로드 시 comboValidation:1 에서 쉼표 포함 값 처리 문제

**질문:**
- 엑셀 다운로드 시 comboValidation:1을 사용하면, 다음과 같이 설정한 데이터에서 문제가 발생합니다.

```js
Enum: "|Aa|Bb|Cc|Dd,Ee|Ff"
```
**답변:**
- 원인
  - 엑셀에서 데이터 유효성 검사 목록 설정 시, `,`(쉼표)는 항목 구분자로 예약되어 있음
  - 따라서 `"Dd,Ee"`와 같이 쉼표를 포함한 값은 엑셀이 두 개 항목으로 잘못 인식

- 제한 사항
  - 엑셀 자체 기능상 쉼표를 구분자가 아닌 일반 문자로 사용하는 방법 제공되지 않음
  - 즉, comboValidation 방식으로는 쉼표 포함 값 정상 처리 불가

---

### 16. directDown2Excel 다운로드 시 Enum의 데이터가 TEXT 대신 CODE로 다운로드되는 문제

**질문:**
`directDown2Excel`로 `downCombo:"TEXT"` 설정 후 다운로드했는데, Enum의 값이 **CODE**로 다운로드됨 

**답변:**
- 해당 문제는 ibsheet8-1.1.38.jar에서 패치되어 수정됨  
- 최신 서버모듈(jar) 적용 시 정상 동작

---

### 17.파일 다운로드 오류 (xlsx 다운로드 시 temp 폴더 관련)

**질문:**
- 파일 다운로드 시 아래와 같은 오류 발생  

```text
Caused by: java.io.IOException: 그런 파일이나 디렉터리가 없습니다.
```

- 서버가 2대 구성되어 있으며, 한 대에서만 해당 현상 발생 

**답변:**
- 원인 분석 
  - 해당 오류는 xlsx 확장자로 다운로드할 때만 발생 
  - xlsx 다운로드 시 서버의 temp 폴더에 임시 파일을 생성하는데  
    특정 사유로 인해 temp 폴더가 삭제되어 발생한 문제 

- 확인 방법
- 서버의 temp 폴더 경로 확인:

```java
  System.getProperty("java.io.tmpdir");
```

- ibsheet8-1.1.40.jar 버전에서 해당 현상 패치 완료

---
### 18.  Float ,Int 타입 컬럼 빈 값 처리 문제 (엑셀 다운로드)

**질문:**
- Type: Float 또는 Int
- Format: #,###.###### 또는 #,###
- `""`, `null`, `undefined` 값이 화면에서는 빈 셀로 표시됨
- 엑셀 다운로드 시 `0`으로 출력됨

**답변:**
- 원인
숫자 타입 컬럼은 기본적으로 빈 값을 `0`으로 처리하며,  
다운로드 시에도 동일한 규칙이 적용됨.

- 해결
컬럼 옵션에 `CanEmpty: 1`을 설정하여  
빈 값(`""`, `null`, `undefined`)을 실제 빈 데이터로 처리한다.


---

### 19. 다운로드 함수에 downCols 설정 시 오류 발생

**질문:**

 다운로드 함수에 아래와 같이 `downCols` 옵션을 추가하면  
엑셀 다운로드가 실행되지 않습니다.

```js
downCols: "1|2|3|4|5|6|7|8|9|10|11|12"
```

**답변:**
- 원인:
sheet8에서 엑셀 다운로드 시 downCols에는
컬럼의 index 값이 아닌 Name 값을 지정해야 합니다.
숫자(index) 형태로 지정하면 오류가 발생합니다.

- 해결:
컬럼의 Name 값을 |로 구분하여 설정합니다.

downCols: "sPrice|sAMT|sTOTAL"

또한 현재 화면에 보이는 컬럼만 다운로드하고 싶을 경우에는
아래와 같이 간단하게 설정할 수 있습니다.

downCols: "Visible"

---

### 20.리눅스 환경에서 down2Excel 함수로 다운로드 시 오류 발생

**질문:**
down2Excel 함수로 엑셀 다운로드 시 아래 오류가 발생합니다.
java.lang.NoClassDefFoundError: Could not initialize class java.awt.GraphicsEnvironment$LocalGE
	at java.desktop/java.awt.GraphicsEnvironment.getLocalGraphicsEnvironment(GraphicsEnvironment.java:129)
	at java.desktop/sun.awt.X11FontManager.isHeadless(X11FontManager.java:464)
	at java.desktop/sun.awt.X11FontManager.getFontPath(X11FontManager.java:732)
	at java.desktop/sun.font.SunFontManager.getPlatformFontPath(SunFontManager.java:3196)
	at java.desktop/sun.font.SunFontManager$10.run(SunFontManager.java:3218)
	at java.base/java.security.AccessController.doPrivileged(Native Method)
	at java.desktop/sun.font.SunFontManager.loadFonts(SunFontManager.java:3214)
	at java.desktop/sun.awt.X11FontManager.loadFonts(X11FontManager.java:438)
	at java.desktop/sun.font.SunFontManager.findFont2D(SunFontManager.java:2231)
	at java.desktop/java.awt.Font.getFont2D(Font.java:506)
	at java.desktop/java.awt.Font.canDisplayUpTo(Font.java:2250)
	at java.desktop/java.awt.font.TextLayout.singleFont(TextLayout.java:469)
	at java.desktop/java.awt.font.TextLayout.<init>(TextLayout.java:530)
	at org.apache.poi.ss.util.SheetUtil.getDefaultCharWidth(SheetUtil.java:273)
	at org.apache.poi.xssf.streaming.AutoSizeColumnTracker.<init>(AutoSizeColumnTracker.java:117)
	at org.apache.poi.xssf.streaming.SXSSFSheet.<init>(SXSSFSheet.java:82)
	at org.apache.poi.xssf.streaming.SXSSFWorkbook.createAndRegisterSXSSFSheet(SXSSFWorkbook.java:684)
	at org.apache.poi.xssf.streaming.SXSSFWorkbook.createSheet(SXSSFWorkbook.java:705)
	at org.apache.poi.xssf.streaming.SXSSFWorkbook.createSheet(SXSSFWorkbook.java:88)
	at com.ibleaders.ibsheet.excel.ExcelPOIHandler.addSheet(ExcelPOIHandler.java:565)
	at com.ibleaders.ibsheet.excel.ExcelPOIHandler.addSheetParser(ExcelPOIHandler.java:258)
	at com.ibleaders.ibsheet.IBSheetDown.createExcel(IBSheetDown.java:547)
	at com.ibleaders.ibsheet.IBSheetDown.checkCreate(IBSheetDown.java:742)
	at com.ibleaders.ibsheet.IBSheetDown.downToStream(IBSheetDown.java:850)
	at com.ibleaders.ibsheet.IBSheetDown.downToStream(IBSheetDown.java:868)
	at com.ibleaders.ibsheet.IBSheetDown.downToBrowser(IBSheetDown.java:776)
	at org.apache.jsp.common.plugin.IBLeaders.jsp.Down2Excel_jsp._jspService(Down2Excel_jsp.java:352)
	at org.apache.jasper.runtime.HttpJspBase.service(HttpJspBase.java:70)
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:623)
	at org.apache.jasper.servlet.JspServletWrapper.service(JspServletWrapper.java:466)
	at org.apache.jasper.servlet.JspServlet.serviceJspFile(JspServlet.java:379)
	at org.apache.jasper.servlet.JspServlet.service(JspServlet.java:327)
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:623)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:209)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:153)
	at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:51)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:178)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:153)
	at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:168)
	at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:90)
	at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:481)
	at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:130)
	at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:93)
	at org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:670)
	at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:74)
	at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:342)
	at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:390)
	at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:63)
	at org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:928)
	at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1794)
	at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:52)
	at org.apache.tomcat.util.threads.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1191)
	at org.apache.tomcat.util.threads.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:659)
	at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61)
	at java.base/java.lang.Thread.run(Thread.java:829)

**답변:**
- down2Excel 기능에서 컬럼 자동 너비 계산(autoSizeColumn) 을 사용하는 경우 발생하는 현상입니다.
- autoSizeColumn은 내부적으로 Java AWT의 Font / GraphicsEnvironment 를 사용합니다.
- 리눅스 서버가 Headless 환경(GUI 없음) 이거나  
  폰트 및 그래픽 관련 라이브러리가 설치되어 있지 않은 경우,  
  AWT 초기화에 실패하여 해당 오류가 발생합니다.

- 조치방법
  - 서버에 폰트 및 그래픽 관련 라이브러리 설치
   | 패키지 | 설명 |
   |------|------|
   | fontconfig | 폰트 설정 및 검색 라이브러리 |
   | freetype | 폰트 렌더링 엔진 |
   | dejavu-sans-fonts | 기본 폰트 파일 |
   | libX11, libXext, libXrender, libXtst, libXi | AWT 그래픽 및 폰트 렌더링용 X11 라이브러리 |
   | cairo | 그래픽 렌더링 라이브러리 |
   | libpng, libjpeg-turbo | 이미지 처리 라이브러리 |

- 설치 예시 (CentOS / RHEL)

```bash
sudo yum install -y \
  fontconfig \
  freetype \
  dejavu-sans-fonts \
  libX11 \
  libXext \
  libXrender \
  libXtst \
  libXi \
  cairo \
  libpng \
  libjpeg-turbo

```
---

### 21. 페이징 조회 화면에서 엑셀 다운로드 시 현재 화면만 출력되는 문제

**질문:**
`SearchMode: 3`,`SearchMode: 4`로 페이징 조회 중인 화면에서  
`down2Excel`, `exportData`로 다운로드 했더니 현재 보여지는 화면만 엑셀로 다운로드됩니다.  

전체 데이터를 다운로드하는 방법이 있을까요?

**답변:**
`DirectDown2Excel`을 사용하면 전체 데이터를 다운로드할 수 있습니다. 

---

### 22. down2Excel 속성 공통 설정 방법

**질문:**
`down2Excel` 속성값을 개별 시트에서 설정하는 방식이 아니라  
모든 화면에서 공통으로 설정할 수 있는 방법이 있을까요?

**답변:**
`ibsheet-common.js` 파일의 `_IBSheet.CommonOptions` 영역에 `Down2ExcelConfig`를 설정하면,  
엑셀 다운로드 시 모든 화면에서 공통 속성을 적용할 수 있습니다.

```js
_IBSheet.CommonOptions = {
    Cfg: {
        // 모든 화면에서 엑셀 다운로드 시 기본 속성 설정
        Down2ExcelConfig: {
            "sheetDesign": 0,
            "merge": 1,
            "useXhr": true  
        }
    }
};
```

---

---

### 23. 닷넷 환경에서 엑셀 다운로드 속도 문제

**질문:**
엑셀 다운로드 시 100개 이상이면 속도가 느려지고,  
약 2000개 정도면 거의 동작하지 않을 정도입니다.  

- 닷넷 프레임워크: 4.0  
- IBSheet8 DLL 버전: 2.0.0.2  

이 부분에 대해 지원을 받고 싶습니다.

**답변:**
- IBSheet8 DLL 버전 2.0.0.3 배포로 개선

---

### 24. IBSheet 엑셀 다운로드 시 서버로 파라미터 전달 방법

**질문:**
IBSheet 그리드를 엑셀로 다운로드시 파라미터를 서버로 전달할 수 있을까요?

**답변:**
`down2Excel` 또는 `directDown2Excel` 함수에서 아래 속성을 설정하면 됩니다.
1. 화면에서 아래 파라미터를 설정
- extendParam: 서버로 전달할 파라미터 설정  
- extendParamMethod: 데이터를 GET 또는 POST 방식으로 전달 (기본값: GET)

  ```js
  sheet.down2Excel({
    extendParam: "A=11&B=222",
    extendParamMethod: "POST"
  });
  
 ```

 2. Down2Excel.jsp에서 아래 함수를 통해 파라미터 추출
  ```java
  down.getExtendParam(key);

  ```
---

### 25. 엑셀 다운로드를 서버 호출 로직(down2Excel)로 변경 또는 셋팅 방법

**질문:**
현재 엑셀 파일 다운로드를 `exportData` 함수를 통해 수행하고 있습니다.  
이를 백엔드 로직으로 변경하고 싶습니다. (down2Excel 사용)

**답변:**
`down2Excel` 사용 시 필요한 설정 및 서버 모듈 적용 방법은  
아래 링크를 참고하시기 바랍니다.

[IBSheet 지원 페이지 – down2Excel 관련 가이드](https://portal.ibsheet.com/support/solutions/folders/72000394868)

- 링크 내 가이드를 참고하여 다운로드 시 필요한 설정을 적용하면 됩니다.

---


### 55. 엑셀을 다운로드 할때 셀 서식이 '일반' 형식으로 내려오는데, 텍스트 서식을 내려받으려면 어떻게 해야 하나..

**질문:**
시트 데이타를 down2Excel 또는 exportData 를 이용하여 엑셀 파일로 내려받을때, 텍스트 컬럼의 서식이 일반으로 내려온다. 엑셀파일의 셀서식을 텍스트로 표시할 수 있나요? Enum 타입의 데이타도 downCombo:"CODE" 로 옵션을 넣어 다운로드 하면 일반 서식이다. 일반서식에서 Code 에 숫자형이 있는경우, 오류로 나오면서 한번 클릭하면 값이 변경된다. 

**답변:**
textToGeneral:0 을 설정하면 텍스트 서식으로 내려온다. [타입관련 옵션] allTypeToText:1 (default:0)로 설정하면 텍스트 타입의 서식을 따라가고, [서식관련 옵션] textToGeneral:0 (default:1)을 설정하면 텍스트 서식으로 내려온다.

---

### 56. 시트에 포함된 이미지를 파일로 다운로드 하는데 로컬에서는 다운로드가 잘되는데 개발서버에 올리면 다운로드가 안된다.

**질문:**
이미지를 다운로드 하는데 로컬에서는 다운로드가 잘되는데 개발서버에 올리면 다운로드가 안된다.

**답변:**
엑셀 다운로드시 이미지 오류가 발생한다면 down2Excel.jsp 의 사용자 환경 설정 중 이미지 설정을 확인해봐야 한다. 이미지 경로가 도메인 포함 전체 경로가 아니라면, down2Excel.jsp안에 WebServerDomain 을 설정해야 한다.
추가로, 오류 발생시 에러 로그를 보려면 주석 처리된 e.printStackTrace() 주석해제 후 확인할 수 있다.

---

### 57. 헤더색상이 엑셀 파일에 적용안되는 현상.

**질문:**
헤더에 color 속성을 추가한 후 엑셀 다운로드 시 헤더 색상이 안나온다..

**답변:**
엑셀 다운로드 시 기본적으로 main.css 에 적용된 헤더 배경색, 헤더 폰트 색상이 포함되어 다운로드 됩니다. 헤더에 별도 Color 를 설정에 엑셀 다운로드 된 파일에 반영되지 않는다면 현재 사용하는 버전을 확인해 보세요.
오류가 해결된 버전은 [ibsheet.js - Ver : 8.0.0.25-20220831-09],  [ibsheet-excel.js, Ver : 0.0.13-20220831-09], [서버모듈, Ver : ibsheet8-1.1.3.jar] 입니다.

---

### 59. directDown2Excel로 엑셀 다운로드시 머지를 적용하고 싶다.

**질문:**
directDown2Excel로 엑셀 다운로드시 머지를 적용하고 싶다

**답변:**
down2Excel 의 경우 헤더행 정보 + 데이타행 정보를 같이 전문으로 생성하여 서버로 전송하기 때문에 데이타 행 머지가 가능하지만, directDown2Excel 의 경우는 헤더행 정보만 전문으로 전송하기 때문에 헤더행 머지만 가능하다. 만약, 헤더행 머지도 안된다면, [ibsheet.js -8.0.0.19-20220224-13], [ibsheet-excel.js, Ver : 0.0.9-20220224-13] 이후 버전인지 확인해 봐야 한다. 

---

### 61. down2Excel 은 정상 동작하나, directDown2Excel 은 setService 수행시 nullpoint 오류가 발생한다.

**질문:**
directDown2Excel 호출할때, multipart:0 설정해보니, 엑셀 다운로드는 정상 동작한다. 그런데 요청헤더 "Content-Type" 속성이 "multipart/form-data" 에서 "application/x-www-form-urlencoded" 로 변경되어 전송된다. 서버 통신 표준은 파일을 포함하는 요청이 아닌경우 Content-Type을 application/json 형태로 전달해야 하는데, 변경할 수 있는 방법을 알고 싶다.

down2Excel은 되고 directDown2Excel 이 안되는 것이 이상하다. down2Excel.jsp 의 내용을 확인해 봐야 한다. 서버에서 받은 데이타를 아래와 같은 방식으로 처리한다면 direct 에도 동일하게 설정해야 한다. 
``` jsp
String data = request.getParameter("Data"); 
down.setData(data);
``` 

---

### 63. 하나의 화면에 여러개의 IBSheet 가 일때, 하나의 엑셀 파일로 내려받기 하고 싶다....

**질문:**
IBSheet 시트객체가 n개가 있을때, n개의 시트객체 내용을 1개의 엑세파일로 다운로드 받을 수 있을까요? 예를 들어 5개의 IBSheet 시트객체 가 있을때, 첨부한 엑셀파일 처럼 1개의 엑셀파일에 5개의 엑셀시트로 생성하고 싶다.

**답변:**
 Down2ExcelBuffer()를 이용하면 하나의 엑셀 파일의 여러개의 시트를 다운받을 수 있다. 

 ``` javascript
 // 버퍼링 동작 활성화.
 sheetObj.Down2ExcelBuffer(true); 
 // 첫번째 워크시트에 담아두기를 예약함. 
 firstSheet.Down2Excel({FileName:"excel2",SheetName:"sheet1"}); 
 // 두번째 워크시트에 담아두기를 예약함. 
 secondSheet.Down2Excel({FileName:"excel2",SheetName:"sheet2"}); 
 // 버퍼링된 모든 엑셀 자료를 1개의 엑셀문서에 모두 모아서 즉시 다운로드 한다. 
 fristSheet.Down2ExcelBuffer(false);
 ```
 
---

### 64. 엑셀 다운로드가 갑자기 안된다.브라우저 콘솔이나 서버콘솔에도 에러가 없다.

**질문:**
엑셀 다운로드가 갑자기 안된다.(down2Excel 호출) 브라우저 콘솔에 에러없고 다운로드시 서버콘솔에 에러 없다. 추가적으로 로그를 확인할 수 있는 방법이 있나?

**답변:**
down2Excel.jsp 에 추가적인 로그를 찍을 수 있는 방법 있다.

``` java
IBSheetDown down = null; 
// 서버모듈 및 사용 라이브러리 버전 출력하기
System.out.println(com.ibleaders.ibsheet.util.Version.getVersion()); 
...

down = new IBSheetDown(); 

down.setLog(true); //추가
```

---

### 65. directDown2Excel 메소드를 사용하면 엑셀파일은 정상적으로 다운로드 되는데, 개발IDE가 crash 됩니다...

**질문:**
directDown2Excel 메소드를 사용하면 엑셀파일은 정상적으로 다운로드 되는데, 개발IDE가 crash 됩니다. 재현율은 100%이고 IDE 로그를 보면 JAVA 9 버전이 필요하다는 로그가 있습니다. directDown2Excel 메소드 에 JAVA 버전 제한이 있나요? 저희 프로젝트는 Spring MVC로 작성중이고 JAVA는 8버전을 사용 중입니다. IBSheet8 구성은 " IBSheet8 공유배포 "를 참고해서 POI 4.1.2 기반으로 구성했습니다. IDE는 Eclipse로 JAVA 8를 지원하는 마지막 버전인 전자정부프레임워크3.10 (Eclipse IDE 4.16 2020-06) 를 사용중입니다. 

**답변:**
사용중인 IDE 버전과 JAVA, POI 관련 crash 연관성은 찾을 수 없습니다. IDE 에 설치된 다른 plugin 충돌이 아닌가 싶습니다. 당사 서버모듈은 현재 설정하신 환경에 오류가 발생하지 않습니다. 

---

### 68. down2excel 로 엑셀 다운로드시 어떤 사용자는 되고 어떤 사용자는 안된다.

**질문:**
down2excel 로 엑셀 다운로드시 어떤 사용자는 되고 어떤 사용자는 안된다.

**답변:**
로컬이나 개발서버에선 문제가 없는데 운영에서만 안된다. 개발서버에 배포한 파일과 운영에 배포한 파일이 같은지 확인해봐야 함. 혹시 war 로 묶어서 배포한다고 하면, 동일한 파일로 배포되는지 확인해보세요. 간혹 상위 java 버전에서 컴파일하면서 문제가 발생한 상태로 war 로 묶여 배포될 수 있어서, 동일 java 버전으로 빌드되어 올라가는지 확인해보고, 개발 서버의 class 들을 운영에 다시 배포해 보세요.

---

### 69. local에서는 정상적으로 엑셀 다운로드가 됐는데 운영서버에서는 down.downToBrowser() 에서 가 발생한다.

**질문:**
local에서는 정상적으로 엑셀 다운로드가 됐는데 운영서버에서는 down.downToBrowser() 에서 오류가 발생한다.

**답변:**
jar 파일과 라이브러리 파일들이 서버에 올라갔는지 확인해보세요.

---

### 70. down2Excel의 merge:1로 설정해서 다운로드 하면 헤더는 머지가 되는데 데이터행은 머지가 안된다.

**질문:**
down2Excel의 merge:1로 설정해서 다운로드 하면 헤더는 머지가 되는데 데이터행은 머지가 안된다.

**답변:**

down2Excel 호출시 설정되는 인자를 확인해보세요. 화면에 보여지는 컬럼대로 다운로드 하지 않으면 머지가 유지되지 않습니다. hiddenColumn:1 을 설정하거나, downRows 를 설정하면 머지가 동작하지 않습니다. 

---

### 71. 현재 시트의 헤더를 커스텀하여 흰색바탕인데, 엑셀 다운로드를 하면 데이타 행과 구분이 되지 않습니다. 엑셀 다운로드시 헤더 색상을 설정할 수 있나요?...

**질문:**
현재 시트의 헤더를 커스텀하여 흰색바탕이라 엑셀 다운로드를 하면 row와 구분이 잘 되지않아 문제가 있어 엑셀 다운로드 시에 헤더에 색상을 넣는 기능이 있는지

**답변:**
down2Excel.jsp 파일에 사용자 환경변수 설정이 있습니다. setHeaderBackColor 함수를 주석을 해제 후 색상을 지정하시기 바랍니다.

``` java
				//====================================================================================================
				// [ 사용자 환경 설정 #7 ]
				//====================================================================================================
				// 엑셀 다운로드 시 헤더행의 배경색을 적용하고 싶은 경우에 설정하세요.
				// #3366FF 형태의 웹 컬러로 설정해주세요.
				// 설정을 원하지 않는 경우 주석처리해주세요. 
				//====================================================================================================
				down.setHeaderBackColor("#FF2233");

```

---

## 엑셀 업로드

### 1. 엑셀업로드시 인용부호(아포스트로피) 가 들어 있을때, 업로드시 오류가 발생한다. 예를 들어 I&#39;PARK 데이타가 안올라간다. ...

**질문:**
IBSHEET에서 &#39; 가 존재할 경우 파일을 불러들이지 못하는 오류가 발생하고 있습니다.

**답변:**
서버모듈 ibsheet8-2.0.13 에서 큰따옴표와 작은따옴표를 업로드하도록 처리됨. &#34;와 &#39;에 대해 패치됨.

---

### 2.  엑셀업로드 패치 후 비밀번호가 설정되지 않은 파일인데 Incorrect password error 로 LoadExcelError 가 리턴됨....

**질문:**
엑셀업로드시 비밀번호가 설정되지 않은 파일인데 아래와 같은 리턴이 나옵니다.
``` java
 <script> var targetWnd = null; if (opener != null) { targetWnd = opener; } else { targetWnd = parent; } targetWnd.postMessage('IBSheetLoadExcelError^tempSheet^{\"result\" : -201, \"message\" : \"Incorrect password error.\"}', '*'); </script> 
```

**답변:**
손상된 엑셀 파일을 업로드 한것으로 보임. 손상된 파일 loadExcel 시 비밀번호가 걸려있지 않은 파일임에도 201 코드가 반환되어 문제가 되는 것임. 손상된 파일의 경우 500 에러를 리턴하도록 [서버모듈 : ibsheet8-2.0.9 ] 에서 패치됨.

---

### 3. 한셀에서 만든 엑셀 파일을 업로드 하면 아무 반응도 없고 onImportFinish 가 안탄다....

**질문:**
특정 엑셀파일에서만 업로드시 오류가 난다. 서버 콘솔에 [Cannot invoke " because the return value of " is null] 가 나온다. 또 onImportFinish 도 발생하지 않는다. 

**답변:**
해당 오류는 한셀에서 만들어진 파일을 업로드하면서 발생한 것임. 오류가 나고 catch로 안떨어져서 response 가 없고, onImportFinish 가 안타는것임. 서버모듈 : 2.0.8 에서 패치됨.

---

### 5. 한셀에서 엑셀확장자로 저장후 loadexcel에서 로드 하는 기능 요청

**질문:**
한셀에서 엑셀확장자로 저장후 loadexcel에서 로드 하는 기능 요청

**답변:**
확장자에 따라 poi 를 사용하거나 안하도록 분기처리하여 패치함. [서버모듈: 2.0.8 ]에서 패치됨.

---

### 6. 업로드 하는 엑셀파일 의 헤더 행에 컬럼명이 동일한 경우, 중복에 대해 판단하거나 피드백 하는 함수 또는 기능이 있나요?...

**질문:**
엑셀파일 내 헤더영역의 컬럼명이 동일한 경우에 대해 중복에 대해 판단하여 피드백해주는 함수나 기능이 있을까요? 업로드 모드 가 HeaderMatch, noHeader 등의 여부와 상관 없이 엑셀 파일에서 중복된 헤더 값이 존재하는 경우에 후속 프로세스를 수행하지 않고 에러를 반환하는 프로세스를 필요로 합니다. 관련된 API가 없다면 간단한 샘플코드를 제공해주세요.

**답변:**
엑셀 업로드 시 엑셀 파일 내의 헤더 중복 확인을 확인하는 방법이 2.0.9 버전에 추가되었습니다. [서버모듈 : ibhseet8-2.0.9.jar ] 버전 이상으로 업그레이드 후, loadExcel.jsp 에  load.setDisallowDuplicatedHeader(true); 설정 하면, 업로드한 엑셀 파일이 중복헤더가 있는 경우 catch (IBSheetException e) 로 빠지게 되며 에러코드 : -18 Exception 이 발생합니다.

---

### 7. DirectLoadExcel시에 Ymd 데이터가 년월일시분초의 값으로 리턴됩니다....

**질문:**
DirectLoadExcel시에 Ymd 데이터가 년월일시분초의 값으로 리턴됩니다.

**답변:**
directloadexcel.jsp 에 load.setServerFormatAdjustment(true); 를 추가하면 년월일 데이타로 처리되도록 [서버모듈 :2.0.9] 에서 패치되었습니다. 

---

### 10. onImportFinish event 에서 정해진 오류코드를 제외한 "-500" 관련 오류 메세지 처리가 가능할까요?

**질문:**
onImportFinish event 에서 정해진 오류코드를 제외한 "-500" 관련 오류 메세지 처리가 가능한 지 확인요청 드립니다. 빈파일, 암호걸린 엑셀파일, DRM 처리된 엑셀 파일, 엑셀파일이 아닌 파일 등 loadExcel.jsp 에서 load.setService, load.loadFile 시 발생하는 오류에 대해 evtParam.message 처리가 가능한 지 확인 요청 드립니다.

**답변:**
loadExcel.jsp 의  try catch 문에서 catch 에 들어가는 ErrorCode 에 따라 message 변경 처리가 가능하다. 단, onImportFinish 에서 내부적으로 정의된 오류코드 및 메시지와 겹치지 않도록 설정해야 한다.

``` java
 try{
 ...
 }
 catch (IBSheetException e) {
        OutputStream out2 = response.getOutputStream();
        if(e.getErrorCode() == '500'){ //예시
          out2.write(load.getLoadError(-500, "보내려는 메시지"));
        }else{
       ​   out2.write(load.getLoadError(e.getErrorCode(), e.getErrorMessage()));
        }
        out2.flush();
       e.printStackTrace();
    }
```
---

### 11. 엑셀업로드 오류시, onImportFinish event 의 evtParam["result"] 는 리턴되지만 evtParam[""message"]를 받을 수 있을까요..

**질문:**
엑셀업로드 오류시, onImportFinish event 의 evtParam["result"] 는 "-500"으로 리턴되지만, evtParam[""message"] 는 리턴되지 않습니다. evtParam[""message"]를 받을 수 있을까요?

**답변:**
onImportFinish의 파라미터인 result와 message는 한쌍으로 결과를 출력합니다. (onImportFinish 메뉴얼 참고) 예를 들어, LoadExcel. jsp에서 최대 행 갯수를 설정하는 setMaxRows를 설정하고 그보다 많은 행의 갯수를 가진 엑셀파일을 업로드하면 오류가 발생합니다. 
``` java
// [ 사용자 환경 설정 #5 ] 
// LoadExcel 처리를 허용할 최대 행 수를 설정한다. 엑셀 데이터가 지정한 행 수보다 많은 경우 메시지를 출력하고 처리가 종료된다...

load.setMaxRows(100);

```
---

### 12. 엑셀업로드시 백엔드에 ibsheet에서 제공해준 라이브러리를 사용하는데 특정 엑셀을 업로드시 Zip bomb detected 에러가 발생합니다...

**질문:**
엑셀업로드시 서버에 오류가 발생한다.java.io.IOException: Zip bomb detected! The file would exceed the max. ratio of compressed file size to the size of the expanded data

**답변:**
Excel 업로드 오류 (`Zip bomb detected`)에 대한 답변입니다. 해당 오류는 Apache POI 라이브러리에서 비정상적으로 높은 압축률을 가진 파일을 보안상 "Zip bomb"으로 간주하여 읽기를 차단하는 보호 메커니즘입니다. Apache POI 기본 허용 비율은 0.01 인데, 문제가 되는 파일은 압축비율이 0.009995로 파일 내부 구성요소(`xl/styles.xml`)가 너무 고압축되어 있어, 기본 설정 기준을 약간 초과하게 된 것으로 보입니다. 압축 허용 비율 기준을 완화하는 코드를 추가하여 해당 오류를 회피할 수 있습니다. 단, 해당 구간은 보안관련으로 제품내에의 기본값을 조정하지 않고, LoadExcel.jsp 에서 아래와 같이 추가하여 변경할 수 있습니다.

``` java
//LoadExcel.jsp
import org.apache.poi.openxml4j.util.ZipSecureFile;

ZipSecureFile.setMinInflateRatio(0.001); // 또는 무제한(0.0)까지도 가능

```

---

### 13. loadExcel시 onImportFinish 이벤트가 발생하지 않는다.

**질문:**
loadExcel시 onImportFinish 이벤트가 발생하지 않는다.

**답변:**
ibsheet 서버모듈 jakarta 버전 중 일부에서 해당 오류가 있으며,  패치된 2.0.5 버전이상으로 교체하시기 바랍니다.

---

### 14. 엑셀 업로드 시 loadexcel.jsp 내부의 load.writeToBrowser() 까지는 빠른데 화면 랜더링이 느리다....

**질문:**
엑셀 업로드 시 loadexcel.jsp 내부에 load.writeToBrowser() 통해서 데이타가 추출되는데, 여기까지는 빠르지만 화면 결과표시가 느리다. 데이타 건수는 몇만건 된다. 

**답변:**
 엑셀 업로드라도 화면에는 loadSearchData 로 들어오는거라, 데이타 건수가 몇만건이라면 느릴 수 밖에 없다. 이 정도 데이타라면 directLoadExcel 를 통해 업로드 내용을 서버에 저장하고 서버페이징방식을 조회하는 것을 권장한다. 

---

### 15. 엑셀 업로드 시 loadexcel.jsp 내부의 load.writeToBrowser() 까지는 빠른데 화면 랜더링이 느리다....
**질문:**
엑셀 업로드 시 엑셀 데이터를 화면에서 확인할 수 있는지?
**답변:**
onImportFinish 이벤트의 parameter 로 data 가 들어온다. evt.data로 데이터 확인이 가능하다. 확인만하고 따로 안쓸거면  이벤트 마지막에 return 1 를 넣어주면 된다.

---

### 19. 엑셀 업로드 시 Int 컬럼에 값이 비어있으면 빈값이 들어온다. 업로드 후 더블클릭하면 0이 생성된다. 정상적인 동작이 맞는지?

**질문:**
엑셀 업로드 시 Int 컬럼에 값이 비어있으면 빈값이 들어온다. 업로드 후 더블클릭하면 0이 생성된다. 정상적인 동작이 맞는지?

**답변:**
정상적인 동작이 맞다. 업로드는 행추가 동작과 동일하기 때문에 행추가 후 엑셀의 데이터를 넣어주는 것이므로 공백이 들어가며, 그리드 편집 이후에는 Format:"#,##0"이 Int 타입의 기본이기 때문에 0이 생기는 것이다. 

---

### 21. 엑셀 다운로드로 다운 받은 파일을 업로드 하려고 하면 하단의 오류가 발생합니다. 확인 7월 15, 2025 1:24:04 오후 invoke 심각...

**질문:**
엑셀 다운로드로 다운 받은 파일을 업로드 하려고 하면 하단의 오류가 발생합니다. org.apache.catalina.core.StandardWrapperValve invoke
심각: 경로 []의 컨텍스트 내의 서블릿 [jsp]을(를) 위한 Servlet.service() 호출이, 근본 원인(root cause)과 함께, 예외 [JSP를 위한 클래스를 컴파일할 수 없습니다.:
JSP 파일 [/3rd/private/ibsheet8/jsp/LoadExcel.jsp]의 [121] 행에서 오류가 발생했습니다.
The method getLoadError() is undefined for the type IBSheetLoad

**답변:**
jar 파일과 라이브러리가 정상 등록됐는지 확인해보고, 혹시 다른 버전의 jar 가 2개 올라간것인지 확인해봐야 한다. 위의 내용을 보면 jsp 컴파일 오류인데, jsp 에 있는 라이브러리가 로드가 안된것으로 보인다.
---

### 24. 서버모듈 sheet7 과 sheet8 를 모두 사용중인데, 동일한 class 명을 가지고 있는것 같다. 

**질문:**
서버모듈 sheet7 과 sheet8 를 같이 사용중인데, 클래스명이 동일하여 문제가 된다. 

**답변:**
서버모듈 ibsheet8-2.0.0.jar 부터 sheet7과 다른 패키지명으로 릴리즈 된다. 

---

### 25. directloadexcel 시에 drm을 해제 하고 싶다 어떻게 해야 하나 ...

**질문:**
스트링 부트3.0 이고, jakarta EE 인데,  directloadexcel 시에 drm을 해제 하고 싶다 어떻게 해야 하나 엑셀 다운로드는 클라이언트 모듈을 이용했다고 함

**답변:**
jakarta 용 ibsheet8 서버모듈 라이브러리가 필요합니다. 또한 서버모듈 관련 jsp 파일은 servlet 으로 변환처리해야 합니다. (portal 사이트에서 ibsheetFileImportExportController.java 파일을 참고하세요.)
DirectLoadExcel 함수에서 client에서 보낸 파일 쓰는 구간이 있으므로 그쪽에서 drm 해제를 한 후 정상적인 파일을 setData 함수를 통해 주입하여 주시면 됩니다.
---

### 26. loadExcel 나 down2Excel 시 cors 오류가 난다. ...

**질문:**
loadExcel 나 down2Excel시 cors 오류가 난다. 컨트롤러에서 수정을 하면 된다고 하는데 임의로 수정하면 안될것같다. 어떻게 수정해야 하는지. 

**답변:**
ibsheet8 의 엑셀연동 모듈은 iframe form submit 으로 전송하기 때문에 크로스 도메인 오류가 발생할 수 있다. xhr 통신을 사용하여 엑셀 업로드와 다운로드 되도록 각 함수에 해당 인자를 추가해야 한다.

``` javascript
sheet.loadExcel({useXhr:true});

sheet.down2Excel({useXhr:true});
```
---

### 27. 엑셀 업로드, 다운로드에 관한 질문입니다. 첨부한 파일 보시면, 전달 받은 예제로 컨터롤러 부분을 적용하려 했는데, 주신 lib 안의 jar파일의 구조가 맞지 않는다...

**질문:**
엑셀 업로드, 다운로드를 구현하려는데, 전달 받은 lib 안의 jar파일을 보니, 구조가 맞지 않아 import 오류가 나온다.

**답변:**
서버모듈은 기본 JAVA 로 배포됩니다. Jakarta 환경라면 jakarta 용 서버모듈 설치가 필요합니다. 

---

### 28. 엑셀 업로드할 때 활성화된 워크시트를 업로드 하는 방법이 있는지?

**질문:**
엑셀 업로드할 때 활성화된 워크시트를 업로드 하는 방법이 있는지?

**답변:**
서버모듈 2.0.15 버전 부터 활성화 시트를 로드하는 기능이 추가되었습니다. 

``` javascript

sheet.loadExcel({activeSheet:true}); // 사용자가 마지막 저장한 활성 시트만 업로드 하도록 설정
```

---

### 29. DRM 을 사용중인데 엑셀파일 업로드를 처리하는 방법 문의함. 다른 사이트에서 ibsheet.js 에서 처리했다고 하던데, 방법을 모르겠다고 함....

**질문:**
DRM 을 사용중인데 엑셀파일 업로드를 처리하는 방법 문의함. 다른 사이트에서 ibsheet.js 에서 처리했다고 하던데, 방법을 모르겠다고 함.

**답변:**
DRM 처리를 위해서는 반드시 서버모듈을 사용해야 하고, LoadExcel.jsp 에서 주석으로 들어간 구간에 DRM 업체에서 지원받은 해제 모듈을 넣어서, 복호화된 파일을 리턴에서 우리쪽 모듈을 태워야 합니다. (클라이언트 모듈은 Blob 형태로 엑셀 파일을 다운로드 받아, DRM 해제하도록 해당 서버로 보내서 처리할 수 있는데, 이것도 DRM 업체에 따라 달라져서 현재 사용하시는 DRM 에서 지원 가능한지를 업체에 문의해야 합니다.)

---

### 30. 엑셀 다운로드 업로드시 temp 폴더를 사용자가 지정 할 수 있는 방법이 있는지.

**질문:**
엑셀 다운로드 업로드시 temp 폴더를 사용자가 지정 할 수 있는 방법이 있는지.

**답변:**
엑셀 다운로드 와 업로드시에 호출되는 jsp 파일에 임시 폴더를 지정하는 함수가 있다. 다운로드의 경우 path 하위 ib_tmp 폴더를 사용하게 된다. 함수명이 각기 다르기 때문에, 맞는 함수명을 설정해야 한다. 
``` java
//Down2Excel.jsp

down.setTempFolder(path) 

//LoadExcel.jsp
load.setTempPath(path)
```

---

### 31. loadExcel 시에 일치하지 않는 시트를 매핑하면 최초에 한번은 빈값이 들어오고, 두번째에 일치하는 데이타를 매핑하면 잘 들어오는데, 세번째...

**질문:**
loadExcel 시에 일치하지 않는 시트를 매핑하면 최초에 한번은 빈값이 들어오고, 두번째에 일치하는 데이타를 매핑하면 잘 들어오는데, 세번째, 일치하지 않는 데이타를 매핑하면, 2줄의 빈 데이타가 들어오면서 loadExce 이 다시 호출되는거 같다. (request 가 다시 나감)

**답변:**
소스 분석결과 시트를 그릴때 dispose()를 하고 나서 다시 그리는데 이때 loadExcel 이 호출되면서 문제가 발생하는 것임. 엑셀 업로드시 이상동작하는 현상은 ibsheet-common.js 파일의 beforeCreate 이벤트에서 버튼에 대한 click 이벤트를 등록하는데 시트를 삭제 하고 다시 그릴때 click 이벤트가 계속 등록되어 나타나는 현상입니다. 다운로드쪽은 이벤트 제거 후 다시 등록 하는 로직이 있는데 업로드 쪽은 그 내용이 없습니다. 업로드쪽도 이벤트를 삭제 하고 다시 등록 하는 로직을 삽입하여 보시기 바랍니다.

---

### 32. directLoadExcel 시에 특정 셀의 데이터가 들어가지 않는현상이 있다. .

**질문:**
directLoadExcel 시에 특정 셀의 데이터가 들어가지 않는 현상이 있다. 엑셀 문서의 셀에 수식이 들어가 있는데,그것때문인지.

**답변:**
 ibsheet poi 4.x 버전에 해당 이슈가 있어서 패치된 이력이 있습니다. poi4 버전의 경우 서버모듈 ibsheet8-1.1.13.jar 이상으로 업그레이드 필요합니다. 

---

### 33. ajax 통신 할때 withCredential: true 속성을 추가 하여 Cross Domin에서 cookie ...

**질문:**
지원번호 37773와 관련하여 ajax 통신 할때 withCredential: true 속성을 추가 하여 Cross Domin에서 cookie 를 사용 할수 있도록 설정 했다. 문제는 loadExcel 시에 cookie 값이 사라진다.

**답변:**
시트에서 엑셀 다운로드/업로드를 서버측에서 처리 하는 방식으로 이용할 경우 iframe를 form submit 하는 형태로 동작 합니다. 이 방법을 ajax 형태로 동작하려면 useXhr을 설정하거나 reqHeader를 설정하면 됩니다. 
``` javascript
//1.reqHeader 설정 
sheet.down2Excel({reqHeader: {Auth:"Basic login:password", Products: "IBSheet8" } }); 
//2.useXhr 설정 
sheet.down2Excel({useXhr:true}); 
```
---

### 34. 엑셀을 업로드할때 onSelectFile 과 onImportFinish 가 타는데, 이런 이벤트에서 워크시트명을 선택할 수 있나요?...

**질문:**
엑셀을 업로드할때 onSelectFile 과 onImportFinish 가 타는데, 이벤트구간에서 워크시트명을 선택할 수 있나요? 지금 이슈는 업로드시 workSheetName를 설정했는데, 해당 워크시트 명이 없으면 무조건 첫번째 워크시트가 올라오와서 문제가 됩니다. 
workSheetName 이 매핑하는 워크시트가 엑셀에 없으면 아무런 표시가 안됐으면 합니다. 

**답변:**
 workSheetName 이 설정된 경우, 매핑하는 워크시트가 없으면 error 를 리턴하도록 core-8.1.0.33 / 서버모듈 1.1.11.jar 버전에서 패치되었습니다. 워크시트가 없는경우, result=-17 / message = 'WorkSheet does not exist' 기 리턴됩니다. 


---

### 39. onSelectFile에서 대기 이미지를 띄웠다. DirectLoadExcel 쪽은 대기 이미지를 어디서 닫아야 하나 ...

**질문:**
onSelectFile에서 대기 이미지를 띄웠다. DirectLoadExcel 쪽은 대기 이미지를 어디서 닫아야 하나?

**답변:**
DirectLoadExcel 완료 후 onImportFinish 이벤트가 발생하도록 수정된 버전을 적용해야 합니다. core- 8.1.0.25(20230622-15) , ibsheet8-1.1.8.jar 

---

### 40. 시간 업로드 시 900 은 09:00 으로 올라가는데 1000 은 00:00으로 올라간다.

**질문:**
시간 업로드 시 900 은 09:00 으로 올라가는데 1000 은 00:00으로 올라간다.

**답변:**
DataFormat 과 Format 을 확인해야 한다. DataFormat:"HHmm" 으로 되어 있으면 무조건 4자리로 데이타가 들어와야 한다.9시이더라도 0900으로 조회 해야 한다. 마찬가지로 엑셀 데이터도 0900으로 되어 있어야 정상적으로 load 할 수 있다.

---

### 42. 스프링부트 프레임웍을 쓴다. jsp를 쓰지 못하는데 엑셀 업로드/다운로드를 어떻게 해야 하나

**질문:**
스프링부트 프레임웍을 쓴다. jsp를 쓰지 못하는데 엑셀 업로드/다운로드를 어떻게 해야 하나

**답변:**
배포된 제품파일 폴더안에 서블릿으로 사용할 java 파일이 들어 있습니다. 배포된 제품파일 경로 중 아래 경로에서 해당 파일을 확인하시기 바랍니다. product\서버모듈\spring servlet\ ibsheetExcelDownUploadController.java 

---

### 43. Log4j 취약점이 이슈가 있는데 Log4j 를 사용하는지 알려주세요....

**질문:**
Log4j 취약점이 이슈가 있는데, ibsheet 에 Log4j 취약점과 연관이 있는지 알려주세요. 

**답변:**
당사 배포파일에는 문제가 되는 log4j jar 파일이 없습니다.
---

### 44. 서버에서 request 처리하는 과정에서 아래와 같은 오류가 발생합니다. SaveNames does not exists at com...

**질문:**
서버에서 request 처리하는 과정에서 아래와 같은 오류가 발생합니다. String Data = request. getParameter("Data"); down. setData(Data); java.lang.Exception: SaveNames does not exists at com.ibleaders.ibsheet.IBSheetData.setSheetConfigMap(IBSheetData.java:2858)

**답변:**
엑셀 다운로드/업로드시 시트의 정보(데이터 및 컬럼의 정보)를 서버로 전송합니다. 전송되는 데이터의 구조는 xml 형태의 구조 입니다. 보내 주신 메일의 내용으로 볼때 <,>,<,/> 이 부분이 다른 문자열로 치환 되는듯 합니다. 이 부분을 아래와 같이 설정 하여 보시기 바랍니다. 
(cfg)MarkupTagDelimiter를 이용하여 다른 문자로 변경해 보시기 바랍니다. 만약, 모든 시트에 적용하고자 할경우 plugins/ibsheet-common.js에 해당 속성을 설정하시고 ibsheet.js 파일을 링크를 걸때 ibsheet-common.js 이 파일을 같이 링크를 걸어주시기 바랍니다. 
down2excel.jsp, loadexcel.jsp 소스에 보면 setMarkupTagDelimiter 부분이 있습니다.

---

### 46. 날짜 형식에 맞지 않는 날짜 데이터를 로드 할 경우 데이터가 이상하게 변경되어서 로드 된다.
 
**질문:**
`Type: "Date"` 컬럼에 유효하지 않은 날짜 데이터가 로드될 경우 날짜 값이 자동 보정되어 다른 날짜로 변경되어 표시된다.
 
- 입력 값: `2002-13-22` → 로드 후: `2003-01-22`
- 입력 값: `2001-01-55` → 로드 후: `2001-02-24`
 
**답변:**
`Cfg.DateStrictMode = 1`로 설정하면 날짜 데이터의 유효성이 맞지 않는 경우 해당 데이터를 표시하지 않는다. 

---

### 47. XLSX 파일 로드 시 숫자 값이 날짜 문자열로 변경되는 현상 (POI 미사용)
 
**질문:**
XLSX 파일을 로드하면 일부 숫자 값이 정수임에도 실수 형태로 바뀌거나 날짜 문자열(`yyyyMMddHHmmss`)로 표시된다. 예: 엑셀 값 `1` → 로드 시 `19000101000000`
 
**답변:**
- 원인: IBSheet 로드 기능은 기본적으로 **Apache POI** 사용 
- POI 미사용 시(`POI 파일 없거나 load.setUsePOI(false) 설정시`) 숫자 / 날짜 타입을 정확히 해석하지 못함  
- 엑셀 내부 날짜 시리얼 규칙:  
  > 날짜 = 1900-01-01 + (숫자 - 1)일  
  → POI 미사용 시 시리얼 값이 `yyyyMMddHHmmss` 형태로 변환됨
 
- 재현 조건:  
  - IBSheet jar 버전: **8-2.0.10 미만**
  - XLSX 파일
  - 숫자 값 입력  
  - POI 미사용
 
```java
//LoadExcel.jsp

load.setUsePOI(false);

``` 
---

### 48. LoadExcel.jsp에서 `load.setOverLimitAllow(true)` 적용 시 Z열까지만 로드되는 증상
 
**질문:**
 LoadExcel.jsp에서 `load.setOverLimitAllow(true)`로 적용 시, Z열까지만 로드되는 증상이 발생한다.
 
**답변:**
- 원인: `load.setOverLimitAllow(true)` 사용 시 내부적으로 `load.setUsePOI(false)`가 동작하며, → POI를 사용하지 않고 동작하게 되므로 컬럼 제한이 발생함.  
- 해결: 8-0.0.21 버전에서 패치됨.

---

## 🔧 참고 정보

### 주요 서버 모듈 메소드

**IBSheetLoad (업로드)**
- `loadExcel()`: 엑셀 파일 업로드
- `setLog()`: 로그 활성화
- `setMode()`: 업로드 모드 설정 (HeaderMatch, NoHeader 등)
- `setDisallowDuplicatedHeader()`: 중복 헤더 검사

**IBSheetDown (다운로드)**
- `down2Excel()`: 엑셀 다운로드
- `directDown2Excel()`: 직접 다운로드
- `setSheetName()`: 시트명 설정
- `setEncoding()`: 인코딩 설정

### 지원 라이브러리 버전
- Apache POI: 5.2.x 이상 권장
- commons-io: 2.11.0 이상
- Jakarta EE: jakarta 모듈 별도 제공

---

*본 문서는 실제 고객 문의를 기반으로 작성되었습니다.*
