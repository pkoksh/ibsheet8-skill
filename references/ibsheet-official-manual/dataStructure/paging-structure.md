---
KEY: pagingStructure
KIND: data-structure
PATH: dataStructure/paging-structure
ALIAS_EN: paging, data, structure
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/dataStructure/paging-structure
---
# Paging Data Structure ***(paging structure)***
Defines the `server response data structure` used when binding data with the `doSearchPaging` function.

## doSearchPaging Method Data Structure
- The server response data has the `Data` property at the top level, and the `Data` property contains an array of objects, each representing an item.
- The length of the `Data` array is based on the `(Cfg) PageLength` setting value, and may be smaller for the last page.
- The `Total` property must contain the total number of records in the database, and is used for paging UI calculation.
- Other properties and data formats are applied the same as in `1. Data Structure`.


```js
//Server response example: Data array containing cfg.PageLength number of items
{"Data":
    [
        {"sa_name":"John","sa_no":"940154","sa_dept":"A021"},
        {"sa_name":"Jane","sa_no":"950757","sa_dept":"B022"}
    ],
 "Total":25410      //<-- Total record count in the DB
}
```
```jsp
// ※ This is example code. Modify according to actual DB / SQL / paging method for production use.
// Server example
import java.io.IOException;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import org.json.JSONArray;
import org.json.JSONObject;

public class PagingExampleServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json;charset=UTF-8");

        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        // Requested page
        int page = Integer.parseInt(request.getParameter("ibpage"));
        // Data count per page, same as the count set in (Cfg) PageLength
        int pageLength = Integer.parseInt(request.getParameter("ibpagelength"));
        int total = 0; // Total record count

        try {
            conn = getConnection(); // DB connection

            // 1. Check total count on first search
            if (page == 1) {
                pstmt = conn.prepareStatement("SELECT COUNT(1) AS CNT FROM TABLE_NAME");
                rs = pstmt.executeQuery();
                if (rs.next()) {
                    total = rs.getInt("CNT");
                }
                rs.close();
                pstmt.close();
            }

            // 2. Page calculation
            int startRow = (page - 1) * pageLength + 1;
            int endRow = startRow + pageLength - 1;

            // 3. Data query (ROWNUM based)
            StringBuilder sb = new StringBuilder();
                          sb.append("SELECT * FROM (")
                         .append("  SELECT ROWNUM RN, EMP, EMP_NO, DEPT ")
                         .append("  FROM (SELECT EMP, EMP_NO, DEPT FROM TABLE_NAME ORDER BY EMP_NO)")
                         .append(") WHERE RN BETWEEN ? AND ?");

            String query = sb.toString();

            pstmt = conn.prepareStatement(query);
            pstmt.setInt(1, startRow);
            pstmt.setInt(2, endRow);
            rs = pstmt.executeQuery();

            // 4. Create JSON object
            JSONObject json = new JSONObject();
            JSONArray dataArr = new JSONArray();

            while (rs.next()) {
                JSONObject row = new JSONObject();
                row.put("RN", rs.getInt("RN"));
                row.put("EMP", rs.getString("EMP"));
                row.put("EMP_NO", rs.getString("EMP_NO"));
                row.put("DEPT", rs.getString("DEPT"));
                dataArr.put(row);
            }

            json.put("Data", dataArr);
            json.put("Total", total);

            // 5. JSON output
            response.getWriter().print(json.toString());

        } catch (Exception e) {
            e.printStackTrace();
            response.getWriter().print("{\"error\":\""+e.getMessage()+"\"}");
        } finally {
            try { if(rs!=null) rs.close(); } catch(Exception e) {}
            try { if(pstmt!=null) pstmt.close(); } catch(Exception e) {}
            try { if(conn!=null) conn.close(); } catch(Exception e) {}
        }
    }

    private Connection getConnection() throws SQLException {
        // Example: Use Oracle DataSource or DriverManager
        // return DriverManager.getConnection(dbUrl, user, password);
        return null;
    }
}
```

### Read More
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [getChangedData method](/docs/funcs/core/get-changed-data)
- [onReceiveData](/docs/events/on-receive-data)
- [onBeforeDataLoad](/docs/events/on-before-data-load)
- [onDataLoad](/docs/events/on-data-load)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
