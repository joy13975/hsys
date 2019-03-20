<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<html>

<head>
    <title>株式会社HNS - Create</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="css/style.css">
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
    <script src="js/create.js"></script>
</head>

<body>
    <div>
        <h1 class="inline">HNS 技術者スキルシート v15</h1>
        <span class="inline float-right">フォーム更新日：2019/3/15</span>
    </div>
    <form>
        <div class="container">
            <h2>個人</h2>
            <hr>
            <div class="row">
                <div class="col-2">
                    <label class="pt-2">漢字名前:</label>
                </div>
                <div class="col-5">
                    <input type="text" class="form-control" id="lastname_kanji" placeholder="例：派遣（氏）" required>
                </div>
                <div class="col-5">
                    <input type="text" class="form-control" name="firstname_kanji" placeholder="例：太郎（名）" required>
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    <label class="pt-2">フリガナ:</label>
                </div>
                <div class="col-5">
                    <input type="text" class="form-control" name="lastname_furigana" placeholder="例：ハケン（氏）" required>
                </div>
                <div class="col-5">
                    <input type="text" class="form-control" name="firstname_furigana" placeholder="例：タロウ（名）" required>
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    <label class="pt-2">英字:</label>
                </div>
                <div class="col-5">
                    <input type="text" class="form-control" name="lastname_eng" placeholder="例：Haken（氏）" required>
                </div>
                <div class="col-5">
                    <input type="text" class="form-control" name="firstname_eng" placeholder="例：Tarou（名）" required>
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    <label class="pt-2">所属:</label>
                </div>
                <div class="col-10">
                    <input type="text" class="form-control" name="employee" placeholder="例：株式会社HNS" required>
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    <label class="pt-2">生年月日:</label>
                </div>
                <div class="col-5">
                    <div class="input-group">
                        <input id="bd-picker" name="birthdate" type="date" class="form-control">
                        <span class="input-group-append">
                            <span class="input-group-text" id="age-text">歳</span>
                        </span>
                    </div>
                </div>
                <div class="col-5">
                    <div class="field-margin">
                        <input type="checkbox" class="form-control" name="gender" checked data-toggle="toggle" data-on="男" data-off="女" data-onstyle="primary" data-offstyle="danger" required>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    <label class="pt-2">住所郵便番号:</label>
                </div>
                <div class="col-5">
                    <input type="text" class="form-control" name="postcode" placeholder="例：533-0033" required>
                </div>
                <div class="col-5">
                    <input type="text" class="form-control" name="address1" placeholder="都道府県…" disabled="">
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    <label class="pt-2">町番地号:</label>
                </div>
                <div class="col-2">
                    <input type="text" class="form-control" id="address2_text" name="address2" placeholder="例：6-6-9" required>
                    <span></span>
                </div>
                <div class="col-3">
                    <label for="address3_text" class="pt-2 float-right">建物名前と部屋番号:</label>
                </div>
                <div class="col-5">
                    <input type="text" class="form-control" id="address3_text" name="address3" placeholder="例：最高マンション111号" required>
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    <label>最寄駅:</label>
                </div>
                <div class="col-5">
                    <div class="input-group">
                        <input type="text" class="form-control" id="train_text" name="train" placeholder="例：御堂筋" required>
                        <span class="input-group-append">
                            <span class="input-group-text">線</span>
                        </span>
                    </div>
                </div>
                <div class="col-5">
                    <div class="input-group">
                        <input type="text" class="form-control" id="station_text" name="station" placeholder="例：梅田" required>
                        <span class="input-group-append">
                            <span class="input-group-text">駅</span>
                        </span>
                    </div>
                </div>
            </div>
            <!-- <div class="row">
                <div class="col-2">

                </div>
                <div class="col-10">

                </div>
            </div> -->
            <div class="row pt-2">
                <div class="col-md text-center">
                    <button type="submit" class="btn btn-primary">提出</button>
                </div>
            </div>
        </div>
    </form>
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