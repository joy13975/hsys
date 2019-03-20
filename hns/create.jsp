<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<html>

<head>
    <title>株式会社HNS - Create</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="css/style.css">
    <!-- <script src="js/create.js"></script> -->
    <!-- Bootstrap 4.3.1 compiled and minified CSS -->
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <!-- Font Awesome 4.7.0 -->
    <link rel="stylesheet" href="../css/font-awesome.min.css">
    <!-- jQuery 3.3.1 library -->
    <script src="../js/jquery.min.js"></script>
    <!-- Popper JS 1.14.7 -->
    <script src="../js/popper.min.js"></script>
    <!-- 4.3.1 compiled JavaScript -->
    <script src="../js/bootstrap.min.js"></script>
    <!-- Bootstrap 4 Switch Button (Toggle) -->
    <link rel="stylesheet" href="../css/bootstrap4-toggle.min.css">
    <script src="../js/bootstrap4-toggle.min.js"></script>
    <!-- Moment 2.22.2 for Japanese dates -->
    <script src="../js/moment.min.js" type="text/javascript"></script>
    <script src="../js/locale/ja.js" type="text/javascript"></script>
    <!-- Bootstrap DatePicker -->
    <link rel="stylesheet" href="../css/bootstrap-datetimepicker.min.css">
    <script src="../js/bootstrap-datetimepicker.min.js"></script>
</head>

<body>
    <div>
        <h1 class="inline">HNS 技術者スキルシート v15</h1>
        <span class="inline float-right">フォーム更新日：2019/3/15</span>
    </div>
    <h2>個人</h2>
    <hr>
    <form class="padding10">
        <label>名前</label>
        <div class="form-group">
            <div class="input-group">
                <input type="text" class="form-control margin10" id="last_name_kanji" placeholder="氏（例：派遣）" required>
                <span></span>
                <input type="text" class="form-control margin10" id="first_name_kanji" placeholder="名（例：太郎）" required>
            </div>
        </div>
        <div class="form-group">
            <label>フリガナ</label>
            <div class="input-group">
                <input type="text" class="form-control margin10" id="last_name_furigana" placeholder="氏（例：ハケン）" required>
                <span></span>
                <input type="text" class="form-control margin10" id="first_name_furigana" placeholder="名（例：タロウ）" required>
            </div>
        </div>
        <div class="form-group">
            <label>英字</label>
            <div class="input-group">
                <input type="text" class="form-control margin10" name="last_name_eng" placeholder="氏（例：Haken）" required>
                <span></span>
                <input type="text" class="form-control margin10" name="first_name_eng" placeholder="名（例：Tarou）" required>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <div class="margin10">
                    <input type="checkbox" class="form-control margin10" name="gender" checked data-toggle="toggle" data-on="男" data-off="女" data-onstyle="primary" data-offstyle="danger" required>
                </div>
                <input type="text" class="form-control margin10" name="employee" placeholder="所属（例：HNS）" required>
            </div>
        </div>
        <div class="form-group">
            <label>住所</label>
            <div class="input-group">
                <input type="text" class="form-control margin10" name="postcode" placeholder="郵便番号（例：533-0033）" required>
                <span></span>
                <input type="text" class="form-control margin10" name="address1" placeholder="都道府県…" disabled="">
            </div>
            <div class="input-group">
                <input type="text" class="form-control margin10" name="address2" placeholder="町番地号（例：6-6-9）" required>
                <span></span>
                <input type="text" class="form-control margin10" name="address3" placeholder="建物名前と部屋番号（例：最高マンション111号）" required>
            </div>
        </div>
        <div class="form-group">
            <label>最寄駅</label>
            <div class="input-group" id="station_info">
                <input type="text" class="form-control margin10" id="nearest_train_id" name="nearest_train" placeholder="線（例：御堂筋線）" required>
                <span></span>
                <input type="text" class="form-control margin10" name="nearest_station" placeholder="駅（例：梅田）" required>
            </div>
        </div>
        <div class="form-group">
            <label>生年月日</label>
            <div class="input-group date" id="birthday">
                <label for="birthday" class="pt-2 pr-2">日付:</label>
                <input type="text" class="form-control" />
                <span class="input-group-append">
                    <span class="input-group-text"><i class="fa fa-calendar"></i></span>
                </span>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">提出</button>
    </form>
    <table>
        <tr>
            <th>生年月日</th>
            <td colspan="4">[date]=(int)歳</td>
        </tr>
    </table>
    <h2>学歴</h2>
    <table>
        <tr>
            <th>最終学歴</th>
            <td colspan="4">string</td>
            <th>卒業年月日</th>
            <td colspan="4">date</td>
        </tr>
        <tr>
            <th colspan="8">取得資格．研修実績</th>
            <th colspan="2">取得年月日</th>
        </tr>
        <tr>
            <td colspan="8">string</td>
            <td colspan="2">date</td>
        </tr>
        <tr>
            <td colspan="10">(new btn)</td>
        </tr>
    </table>
    <h2>技術経歴</h2>
    <p>*職務：PM（プロジェクトマネージャー）　PL（プロジェクトリーダー）　SE（システム．エンジニア） SE/PG（SE兼PG） PG（プログラマー） OP（オプレータ）</p>
    <table>
        <tr>
            <th>開始</th>
            <td colspan="4">date</td>
            <th>終了</th>
            <td colspan="4">date</td>
            <th>案件名</th>
            <td colspan="8">string</td>
        </tr>
        <tr>
            <th>調査分析<input type="checkbox"></th>
            <th>要件定義<input type="checkbox"></th>
            <th>基本設計<input type="checkbox"></th>
            <th>詳細設計<input type="checkbox"></th>
            <th>プログラミング<input type="checkbox"></th>
            <th>単体テスト<input type="checkbox"></th>
            <th>結合テスト<input type="checkbox"></th>
            <th>総合テスト<input type="checkbox"></th>
            <th>保守．運用<input type="checkbox"></th>
            <th>ヘルプデスク<input type="checkbox"></th>
            <th>その他<input type="checkbox"></th>
        </tr>
        <tr>
            <th>職務</th>
            <td>string</td>
            <th>規模</th>
            <td>int</td>
            <th>人</th>
            <th>機種OS</th>
            <td>string</td>
            <th>DB/DCミドルウェア</th>
            <td>string</td>
            <th>言語ツール</th>
            <td>string</td>
        </tr>
    </table>
</body>

</html>