<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<html lang="jp">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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
    <!-- Bootstrap 4.3.1 compiled JavaScript -->
    <script src="../js/bootstrap-4.3.1.min.js"></script>
    <!-- Bootstrap 4 Switch Button (Toggle) -->
    <link rel="stylesheet" href="../css/bootstrap4-toggle.min.css">
    <script src="../js/bootstrap4-toggle.min.js"></script>
    <script src="../js/bootstrap-tokenfield.js"></script>
    <script src="../js/bootstrap-tokenfield.min.js"></script>
    <link rel="stylesheet" href="../css/bootstrap-tokenfield.css">
    <script src="js/create.js"></script>
    <!-- Bootstrap Datepicker 1.6.4 -->
    <script src="../js/bootstrap-datepicker-1.6.4.min.js"></script>
    <link rel="stylesheet" href="../css/bootstrap-datepicker-1.6.4.min.css">
</head>

<body>
    <!-- Address Dialog Modal -->
    <div class="modal fade" id="address_modal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">住所を選択ください</h5>
                </div>
                <div class="modal-body">
                    <ul class="list-group list-group-flush" id="address_list">
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Main Form -->
    <div class="container-fluid pt-4">
        <div class="row mx-auto" style="width: 90%">
            <div class="col-lg-9">
                <h1>HNS スキルシート Web</h1>
            </div>
            <div class="col-lg-3">
                <div class="row">
                    <button class="form-control btn-info" onclick="onExampleBtnClick(this)">例を打ち込む</button>
                </div>
                <div class="row">
                    <button class="form-control btn-primary" onclick="onSubmitClick()">提出</button>
                </div>
            </div>
        </div>
        <div class="row">
            <form action="create_results.jsp" method="post">
                <!-- Prevent implicit submission of the form -->
                <button type="submit" disabled style="display: none" aria-hidden="true"></button>
                <div class="container-fluid">
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
                                    <input type="text" class="form-control" name="firstname_furigana" placeholder="例：タロウ" required>
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
                                    <input type="text" class="form-control" name="firstname_eng" placeholder="例：Tarou" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <label class="pt-2 float-right">所属</label>
                            </div>
                            <div class="col-10">
                                <input type="text" class="form-control" name="employer" placeholder="例：株式会社HNS" value="株式会社HNS" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <label class="pt-2 float-right">生年月日</label>
                            </div>
                            <div class="col-5">
                                <div class="input-group">
                                    <input type="text" id="bd_picker" is-datepicker="yes" name="birthdate" onchange="onBrithdateChange(this)" class="form-control">
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
                        <div class="row m-3"></div>
                        <div class="row">
                            <div class="col-2">
                                <label class="pt-2 float-right">住所郵便番号</label>
                            </div>
                            <div class="col-10">
                                <input type="text" class="form-control" name="zipcode" placeholder="例：531-0071" onblur="onZipcodeBlur(this)" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                            </div>
                            <div class="col-10">
                                <input type="text" class="form-control" name="address1" placeholder="都道府県…" disabled="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <label class="pt-2 float-right">町番地号</label>
                            </div>
                            <div class="col-md-10">
                                <input type="text" class="form-control" name="address2" placeholder="例：1-3-6" required>
                                <span></span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <label class="pt-2 float-right">建物・室号</label>
                            </div>
                            <div class="col-md-10">
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
                                    <input type="text" class="form-control" name="station" placeholder="例：中津" required>
                                    <span class="input-group-append">
                                        <span class="input-group-text">駅</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row m-3"></div>
                        <div class="row">
                            <div class="col-2">
                                <label class="pt-2 float-right">最終学歴</label>
                            </div>
                            <div class="col-5">
                                <input type="text" class="form-control" name='degree' placeholder="例：大阪大学情報工学博士" required>
                            </div>
                            <div class="col-5">
                                <div class="input-group">
                                    <span class="input-group-prepend">
                                        <span class="input-group-text">卒業</span>
                                    </span>
                                    <input type="text" id="gd_picker" is-datepicker="yes" name="graduation" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div id="qualifications">
                        <h2 class="pt-2">資格．研修</h2>
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <ul class="list-group list-group-flush" id="qual_list">
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
                                        <table-splitter>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-2">
                            <div class="col text-center">
                                <button type="button" class="btn btn-info fa fa-plus table-button" id="add_qual_btn" onclick="addRow(this, 'qualification');"></button>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div id="experiences">
                        <h2 class="pt-2">経歴</h2>
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <ul class="list-group list-group-flush" id="exp_list">
                                        <li class="list-group-item">
                                            <small class="form-text text-muted">*職務：PM（プロジェクトマネージャー）　PL（プロジェクトリーダー）　SE（システム．エンジニア） SE/PG（SE兼PG） PG（プログラマー） OP（オプレータ）</small>
                                        </li>
                                        <table-splitter>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-2">
                            <div class="col text-center">
                                <button type="button" class="btn btn-info fa fa-plus table-button" id="add_exp_btn" onclick="addRow(this, 'experience');"></button>
                            </div>
                        </div>
                    </div>
                    <div class="row space"></div>
                    <div class="row pt-2">
                        <div class="col-md text-center">
                            <button onclick="onSubmitClick()" class="btn btn-primary btn-lg btn-block">提出</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>

</html>