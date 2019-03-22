<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<html>

<head>
    <title>株式会社HNS - Create</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="css/style.css">
    <!-- Bootstrap 4.3.1 compiled and minified CSS -->
    <link rel="stylesheet" href="../css/bootstrap-4.3.1.min.css">
    <!-- Font Awesome 4.7.0 -->
    <link rel="stylesheet" href="../css/font-awesome-4.7.0.min.css">
    <!-- jQuery 3.3.1 library -->
    <script src="../js/jquery-3.3.1.min.js"></script>
    <!-- Popper JS 1.14.7 -->
    <script src="../js/popper-1.14.7.min.js"></script>
    <!-- 4.3.1 compiled JavaScript -->
    <script src="../js/bootstrap-4.3.1.min.js"></script>
    <!-- Bootstrap 4 Switch Button (Toggle) -->
    <link rel="stylesheet" href="../css/bootstrap4-toggle.min.css">
    <script src="../js/bootstrap4-toggle.min.js"></script>
    <script src="../js/bootstrap-tokenfield.js"></script>
    <script src="../js/bootstrap-tokenfield.min.js"></script>
    <link rel="stylesheet" href="../css/bootstrap-tokenfield.css">
    <script src="js/create.js"></script>
</head>

<body>
    <div>
        <h1>HNS スキルシート Web</h1>
    </div>
    <form>
        <div class="container">
            <div id="personal_info">
                <h2 class="pt-2">個人</h2>
                <div class="row">
                    <div class="col-2">
                        <label class="pt-2 float-right">漢字名前</label>
                    </div>
                    <div class="col-5">
                        <div class="input-group">
                            <span class="input-group-prepend">
                                <span class="input-group-text">氏</span>
                            </span>
                            <input type="text" class="form-control" name="lastname_kanji" placeholder="例：派遣" required>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="input-group">
                            <span class="input-group-prepend">
                                <span class="input-group-text">名</span>
                            </span>
                            <input type="text" class="form-control" name="firstname_kanji" placeholder="例：太郎" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <label class="pt-2 float-right">フリガナ</label>
                    </div>
                    <div class="col-5">
                        <div class="input-group">
                            <span class="input-group-prepend">
                                <span class="input-group-text">氏</span>
                            </span>
                            <input type="text" class="form-control" name="lastname_furigana" placeholder="例：ハケン" required>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="input-group">
                            <span class="input-group-prepend">
                                <span class="input-group-text">名</span>
                            </span>
                            <input type="text" class="form-control" name="firstname_furigana" placeholder="例：タロウ）" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <label class="pt-2 float-right">英字</label>
                    </div>
                    <div class="col-5">
                        <div class="input-group">
                            <span class="input-group-prepend">
                                <span class="input-group-text">氏</span>
                            </span>
                            <input type="text" class="form-control" name="lastname_eng" placeholder="例：Haken" required>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="input-group">
                            <span class="input-group-prepend">
                                <span class="input-group-text">名</span>
                            </span>
                            <input type="text" class="form-control" name="firstname_eng" placeholder="例：Tarou）" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <label class="pt-2 float-right">所属</label>
                    </div>
                    <div class="col-10">
                        <input type="text" class="form-control" name="employee" placeholder="例：株式会社HNS" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <label class="pt-2 float-right">生年月日</label>
                    </div>
                    <div class="col-5">
                        <div class="input-group">
                            <input id="bd_picker" name="birthdate" type="date" class="form-control">
                            <span class="input-group-append">
                                <span class="input-group-text" id="age_text">歳</span>
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
                        <label class="pt-2 float-right">住所郵便番号</label>
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
                        <label class="pt-2 float-right">町番地号</label>
                    </div>
                    <div class="col-2">
                        <input type="text" class="form-control" name="address2" placeholder="例：6-6-9" required>
                        <span></span>
                    </div>
                    <div class="col-3">
                        <label class="pt-2 float-right">建物名前と部屋番号</label>
                    </div>
                    <div class="col-5">
                        <input type="text" class="form-control" name="address3" placeholder="例：最高マンション111号" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <label class="pt-2 float-right">最寄駅</label>
                    </div>
                    <div class="col-5">
                        <div class="input-group">
                            <input type="text" class="form-control" name="train" placeholder="例：御堂筋" required>
                            <span class="input-group-append">
                                <span class="input-group-text">線</span>
                            </span>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="input-group">
                            <input type="text" class="form-control" name="station" placeholder="例：梅田" required>
                            <span class="input-group-append">
                                <span class="input-group-text">駅</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <label class="pt-2 float-right">最終学歴</label>
                    </div>
                    <div class="col-5">
                        <input type="text" class="form-control" placeholder="例：大阪大学情報工学博士" required>
                    </div>
                    <div class="col-5">
                        <div class="input-group">
                            <span class="input-group-prepend">
                                <span class="input-group-text">卒業</span>
                            </span>
                            <input id="gd_picker" name="graduation" type="date" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div id="qualifications">
                <h2 class="pt-2">資格．研修</h2>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-7 text-center">
                                            <label>概要</label>
                                        </div>
                                        <div class="col-3 text-center">
                                            <label>取得年月日</label>
                                        </div>
                                        <div class="col-2 text-center">
                                            編集
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row" id="qual_row">
                                        <div class="col-7">
                                            <input type="text" class="form-control" placeholder="例：普通自動車運転免許" required>
                                        </div>
                                        <div class="col-3">
                                            <input type="date" class="form-control">
                                        </div>
                                        <div class="col-2 text-center">
                                            <button type="button" class="btn btn-danger fa fa-times-circle table-button" onclick="delete_qual(this);"></button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row pt-2">
                    <div class="col-12 text-center">
                        <button type="button" class="btn btn-info fa fa-plus table-button" onclick="add_qual();"></button>
                    </div>
                </div>
            </div>
            <hr>
            <div id="experiences">
                <h2 class="pt-2">経歴</h2>
                <small class="form-text text-muted">*職務：PM（プロジェクトマネージャー）　PL（プロジェクトリーダー）　SE（システム．エンジニア） SE/PG（SE兼PG） PG（プログラマー） OP（オプレータ）</small>
                <div class="row">
                    <div class="card">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col-11">
                                        <div class="row" name="case_duration">
                                            <div class="col-2">
                                                <label class="pt-2 float-right">開始</label>
                                            </div>
                                            <div class="col-4">
                                                <input id="exp_start_picker" name="start" type="date" class="form-control">
                                            </div>
                                            <div class="col-1">
                                                <label class="pt-2 float-right">終了</label>
                                            </div>
                                            <div class="col-4">
                                                <input id="exp_end_picker" name="end" type="date" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row" name="case_name">
                                            <div class="col-2">
                                                <label class="pt-2 float-right">案件名</label>
                                            </div>
                                            <div class="col-9">
                                                <input type="text" class="form-control" placeholder="例：〇〇ソフトウェアエンジニア" required>
                                            </div>
                                        </div>
                                        <div class="row" name="job_desc">
                                            <div class="col-2">
                                                <label class="pt-2 float-right">内容</label>
                                            </div>
                                            <div class="col-9">
                                                <textarea class="form-control" rows="3" min required></textarea>
                                            </div>
                                        </div>
                                        <div class="row" name="tasks">
                                            <div class="col-2">
                                                <label class="pt-2 float-right">業務</label>
                                            </div>
                                            <div class="col-9">
                                                <div class="row group-border m-0 pb-2">
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="form-check">
                                                                <input cb0="form-check-input" type="checkbox" value="" id="cb1">
                                                                <label class="form-check-label" for="cb1">
                                                                    調査分析
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input cb0="form-check-input" type="checkbox" value="" id="cb2">
                                                                <label class="form-check-label" for="cb2">
                                                                    要件定義
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input cb0="form-check-input" type="checkbox" value="" id="cb3">
                                                                <label class="form-check-label" for="cb3">
                                                                    基本設計
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input cb0="form-check-input" type="checkbox" value="" id="cb4">
                                                                <label class="form-check-label" for="cb4">
                                                                    詳細設計
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input cb0="form-check-input" type="checkbox" value="" id="cb5">
                                                                <label class="form-check-label" for="cb5">
                                                                    プログラミング
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input cb0="form-check-input" type="checkbox" value="" id="cb6">
                                                                <label class="form-check-label" for="cb6">
                                                                    単体テスト
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input cb0="form-check-input" type="checkbox" value="" id="cb7">
                                                                <label class="form-check-label" for="cb7">
                                                                    結合テスト
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input cb0="form-check-input" type="checkbox" value="" id="cb8">
                                                                <label class="form-check-label" for="cb8">
                                                                    総合テスト
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input cb0="form-check-input" type="checkbox" value="" id="cb9">
                                                                <label class="form-check-label" for="cb9">
                                                                    保守．運用
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input cb0="form-check-input" type="checkbox" value="" id="cb10">
                                                                <label class="form-check-label" for="cb10">
                                                                    ヘルプデスク
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-2">
                                                                <label class="pt-2 float-right">その他</label>
                                                            </div>
                                                            <div class="col-10">
                                                                <input type="text" class="form-control" name="task_other">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" name="scale">
                                            <div class="col-2">
                                                <label class="pt-2 float-right">全体規模</label>
                                            </div>
                                            <div class="col-4">
                                                <div class="input-group">
                                                    <input name="total_scale" type="number" step="1" min="1" value="1" class="form-control">
                                                    <span class="input-group-append">
                                                        <span class="input-group-text" id="total_scale_text">人</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-1">
                                                <label class="pt-2 float-right">チーム</label>
                                            </div>
                                            <div class="col-4">
                                                <div class="input-group">
                                                    <input name="team_scale" type="number" step="1" min="1" value="1" class="form-control">
                                                    <span class="input-group-append">
                                                        <span class="input-group-text" id="team_scale_text">人</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" name="os_types">
                                            <div class="col-2">
                                                <label class="pt-2 float-right">機種OS</label>
                                            </div>
                                            <div class="col-9">
                                                <div class="input-group">
                                                    <input name="os" type="text" tokenfield="yes" class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" name="proglang_tools">
                                            <div class="col-2">
                                                <label class="pt-2 float-right">言語やツール</label>
                                            </div>
                                            <div class="col-9">
                                                <div class="input-group">
                                                    <input name="proglang_tools" type="text" tokenfield="yes" class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" name="db_types">
                                            <div class="col-2">
                                                <label class="float-right" style="text-align: right">DBや<br>DCミドルウェア</label>
                                            </div>
                                            <div class="col-9">
                                                <div class="input-group">
                                                    <input name="db" type="text" tokenfield="yes" class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1 text-center" style="display: flex">
                                        <button type="button" class="btn btn-danger fa fa-times-circle table-button" onclick="delete_exp(this);"></button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row pt-2">
                    <div class="col-12 text-center">
                        <button type="button" class="btn btn-info fa fa-plus table-button" onclick="add_exp();"></button>
                    </div>
                </div>
            </div>
            <div class="row space"></div>
            <div class="row pt-2">
                <div class="col-md text-center">
                    <button type="submit" class="btn btn-primary btn-lg btn-block">提出</button>
                </div>
            </div>
        </div>
    </form>
</body>

</html>