<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<html>

<head>
    <title>株式会社HNS - Create</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/create.js"></script>
</head>

<body>
    <div>
        <h1 class="inline">HNS 技術者スキルシート v15</h1>
        <span class="inline float-right">フォーム更新日：2019/3/15</span>
    </div>
    <h2>個人</h2>
    <form>
        <table>
            <tr>
                <th>漢字名前</th>
                <td colspan="4"><input type="text" name="last_name_kanji" placeholder="氏"></td>
                <td colspan="3"><input type="text" name="first_name_kanji" placeholder="名"></td>
            </tr>
            <tr>
                <th>フリガナ</th>
                <td colspan="4"><input type="text" name="last_name_furigana" placeholder="シ"></td>
                <td colspan="3"><input type="text" name="first_name_furigana" placeholder="メイ"></td>
            </tr>
            <tr>
                <th>英字</th>
                <td colspan="4"><input type="text" name="last_name_eng" placeholder="Mei"></td>
                <td colspan="3"><input type="text" name="first_name_eng" placeholder="Shi"></td>
            </tr>
            <tr>
                <th>性別</th>
                <td colspan="3">
                    <select class="select-center" name="gender">
                        <option class="option-center" value="male">男</option>
                        <option class="option-center" value="female">女</option>
                        <option class="option-center" value="other">他</option>
                    </select>
                </td>
                <th>現在所属</th>
                <td colspan="3"><input type="text" name="employee" placeholder="〇〇社"></td>
            </tr>
            <tr>
                <th>郵便番号</th>
                <td colspan="3">
                    <div style="display: inline-block">
                        <input type="number" class="single-number-input" name="postcode1" placeholder="0" min="0" max="9" onkeydown="limitNumber(event, this, 1);">
                        <input type="number" class="single-number-input" name="postcode2" placeholder="0" min="0" max="9" onkeydown="limitNumber(event, this, 1);">
                        <input type="number" class="single-number-input" name="postcode3" placeholder="0" min="0" max="9" onkeydown="limitNumber(event, this, 1);">
                    </div>
                    -
                    <div style="display: inline-block">
                        <input type="number" class="single-number-input" name="postcode4" placeholder="0" min="0" max="9" onkeydown="limitNumber(event, this, 1);">
                        <input type="number" class="single-number-input" name="postcode5" placeholder="0" min="0" max="9" onkeydown="limitNumber(event, this, 1);">
                        <input type="number" class="single-number-input" name="postcode6" placeholder="0" min="0" max="9" onkeydown="limitNumber(event, this, 1);">
                        <input type="number" class="single-number-input" name="postcode7" placeholder="0" min="0" max="9" onkeydown="limitNumber(event, this, 1);">
                    </div>
                </td>
                <th>町番地号</th>
                <td colspan="3">[int]-[int]-[int]</td>
            </tr>
        </table>
    </form>
    <table>
        <tr>
            <th>建物名前と部屋番号</th>
            <td colspan="9">string</td>
        </tr>
        <tr>
            <th>最寄駅</th>
            <td colspan="3">string</td>
            <th>線</th>
            <td colspan="4">string</td>
            <th>駅</th>
        </tr>
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