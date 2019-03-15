<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<html>

<head>
    <title>株式会社HNS - Create</title>
    <link rel="stylesheet" href="../css/hsys_style.css">
</head>

<body>
    <div>
        <h1 class="inline">HNS 技術者スキルシート v15</h1>
        <span class="inline float-right">フォーム更新日：2019/3/15</span>
    </div>
    <h2>個人</h2>
    <table>
        <tr>
            <th>フリガナ</th>
            <td colspan="4">string</td>
            <td colspan="4">string</td>
            <th>性別</th>
        </tr>
        <tr>
            <th>名前</th>
            <td colspan="4">string</td>
            <td colspan="4">string</td>
            <td rowspan="2">enum</td>
        </tr>
        <tr>
            <th>英字</th>
            <td colspan="4">string</td>
            <td colspan="4">string</td>
        </tr>
        <tr>
            <th>現住所</th>
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
            <td colspan="8">date</td>
            <th>(int)歳</th>
        </tr>
        <tr>
            <th>所属</th>
            <td colspan="9">string/enum</td>
        </tr>
    </table>
    <h2>学歴</h2>
    <table>
        <tr>
            <th colspan="2">最終学歴</th>
            <td colspan="10">string</td>
        </tr>
        <tr>
            <th colspan="2">卒業年月日</th>
            <td colspan="3">date</td>
            <th colspan="2">経験年数</th>
            <td colspan="3">float</td>
            <th>年</th>
        </tr>
        <tr>
            <th colspan="8">取得資格．研修実績</th>
            <th colspan="4">取得年月日</th>
        </tr>
        <tr>
            <td colspan="8">string</td>
            <td colspan="4">date</td>
        </tr>
        <tr>
            <td colspan="12">(new btn)</td>
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