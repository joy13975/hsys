<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<%@page import="java.util.*" %>
<%@page import="java.sql.*"%>
<%@page import="java.io.*"%>
<%!
// サーブレットのinitメソッドに相当
public void jspInit() {
    try {
        // JDBCドライバをロード
        Class.forName("com.mysql.jdbc.Driver");
    } catch (Exception e) {
        e.printStackTrace();
    }
}

public String testSql() {
	String result = "";

    // データベースへのアクセス開始
    Connection con = null;
    Statement stmt = null;
    ResultSet rs = null;
    try {
        // データベースに接続するConnectionオブジェクトの取得
        con = DriverManager.getConnection(
            "jdbc:mysql://localhost/hsys",
            "hsys_user", "ja9j23lksjf10=02i13");
        // データベース操作を行うためのStatementオブジェクトの取得
        stmt = con.createStatement();
        // SQL()を実行して、結果を得る
        rs = stmt.executeQuery("select no, name, price from fruit");

        // 得られた結果をレコードごとに表示
        while (rs.next()) {
            // rs.getString("name")
        }
    } catch (Exception e) {
	    StringWriter sw = new StringWriter();
		PrintWriter pw = new PrintWriter(sw);
		e.printStackTrace(pw);
		pw.flush();
		result += sw.toString();
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
	            while (en.hasMoreElements()) {
	                String parameterName = (String) en.nextElement();
	                String parameterValue = request.getParameter(parameterName);
	                out.println(parameterName+": "+parameterValue+"<br />");
	            }
        	%>
        	</p>
        </div>
    </div>
</body>

</html>