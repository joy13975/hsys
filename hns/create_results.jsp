<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<%@page import="java.util.*" %>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%@page import="java.text.SimpleDateFormat"%>
<%!
public class StrMap extends HashMap<String, String> {}

public class StatementPrepper {
	private int val_pos_ = 1;
	private PreparedStatement pstmt_;
	private StrMap data_;

	public StatementPrepper(PreparedStatement pstmt, StrMap data) {
		pstmt_ = pstmt;
		data_ = data;
	}

	public void setString(String name) throws SQLException {
		pstmt_.setString(val_pos_++, data_.get(name));
	}
	public void setDate(String name) throws Exception {
		// TODO: check/unify date format.
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd");
		java.util.Date parsedDate = formatter.parse(data_.get(name));
		pstmt_.setDate(val_pos_++, new java.sql.Date(parsedDate.getTime()));
	}
	public void setInt(String name) throws SQLException {
		String cleansedStr = data_.get(name).replaceAll("[^0-9]+", "");
		int num = Integer.parseInt(cleansedStr);
		pstmt_.setInt(val_pos_++, num);
	}
	public void setTimestamp(String name) throws SQLException {
		pstmt_.setTimestamp(val_pos_++, new Timestamp(System.currentTimeMillis()));
	}
}



private String insertPersonnel(StrMap data) {
	String result = "";
	int rows_created = -1;

    // データベースへのアクセス開始
    Connection con = null;
    Statement stmt = null;
    ResultSet rs = null;
    PreparedStatement pstmt;
	StatementPrepper sp;
    try {
        // データベースに接続するConnectionオブジェクトの取得
        con = DriverManager.getConnection(
            "jdbc:mysql://localhost/hsys",
            "hsys_user", "ja9j23lksjf10=02i13");

        String sql = 
        	"INSERT INTO personnel(" + 
			"lastname_kanji," +
			"firstname_kanji," +
			"lastname_furigana," +
			"firstname_furigana," +
			"lastname_eng," +
			"firstname_eng," +
			"employer," +
			"birthdate," +
			"gender," +
			"zipcode," +
			"address2," +
			"address3," +
			"train," +
			"station," +
			"degree," +
			"graduation," +
			"last_update)" +
			"VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		pstmt = con.prepareStatement(sql);

		// データを埋める
		sp = new StatementPrepper(pstmt, data);
		sp.setString("lastname_kanji");
		sp.setString("firstname_kanji");
		sp.setString("lastname_furigana");
		sp.setString("firstname_furigana");
		sp.setString("lastname_eng");
		sp.setString("firstname_eng");
		sp.setString("employer");
		sp.setDate("birthdate");
		sp.setString("gender");
		sp.setInt("zipcode");
		sp.setString("address2");
		sp.setString("address3");
		sp.setString("train");
		sp.setString("station");
		sp.setString("degree");
		sp.setDate("graduation");
		sp.setTimestamp("last_update");

        rows_created = pstmt.executeUpdate();
        result = rows_created + " rows created.";
    } catch (Exception e) {
		StringWriter sw = new StringWriter();
		PrintWriter pw = new PrintWriter(sw);
		e.printStackTrace(pw);
		result = "Exception: " + sw.toString();
    } finally {
        // データベースとの接続をクローズ
        try { rs.close(); } catch (Exception e) {}
        try { stmt.close(); } catch (Exception e) {}
        try { con.close(); } catch (Exception e) {}
    }

    return result;
}
%>

<%

try {
    // JDBCドライバをロード
    Class.forName("com.mysql.jdbc.Driver");
} catch (Exception e) {
    e.printStackTrace();
}

request.setCharacterEncoding("UTF-8");
%>
<html lang="jp">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>提出結果</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="css/style.css">
    <!-- Bootstrap 4.3.1 compiled and minified CSS -->
    <link rel="stylesheet" href="../css/bootstrap-4.3.1.min.css">
    <!-- Font Awesome 4.7.0 -->
    <link rel="stylesheet" href="../css/font-awesome-4.7.0.min.css">
    <!-- jQuery 3.3.1 library -->
    <script src="../js/jquery-3.3.1.min.js"></script>
    <!-- Bootstrap 4.3.1 compiled JavaScript -->
    <script src="../js/bootstrap-4.3.1.min.js"></script>
</head>

<body>
    <div class="jumbotron jumbotron-fluid m-4" id="results_jumbotron">
        <div class="container">
            <h1 class="display-4">結果</h1>
            <p class="lead">
			<% 
	            Enumeration en = request.getParameterNames();
	            StrMap data = new StrMap();
	            while (en.hasMoreElements()) {
	                String name = (String) en.nextElement();
	                String val = request.getParameter(name);
	                out.println(name+": "+val+"<br/>");
	                data.put(name, val);
	            }

	            String res = insertPersonnel(data);
	            out.println("Result: " + res + "<br/>");
        	%>
        	</p>
        </div>
    </div>
</body>

</html>