"strict";

let today = new Date();
let today_date_str = today.toISOString().slice(0, 10);

$(document).ready(function() {
    // Default all dates to today.
    let date_eles = $('input[type=date]');
    date_eles.val(today_date_str);

    // Auto update age.
    let age_text = $("#age_text");
    let bd_picker = $('#bd_picker')
    bd_picker.on('change', function() {
        yd = new Date(today - new Date(bd_picker.val())).getFullYear() - 1970;
        age_text.html(yd + "歳");
    });

    // Set min heights for all textarea.
    tas = $('textarea');
    tas.css('min-height', tas.height() + "px");

    // Initialize tokenfields.
    let tfs = $('input[tokenfield=yes]');
    tfs.tokenfield();
    tfs.html("");
})

function delete_row(ele) {
    $(ele).parents('li').remove();
}

let row_templates = {
	"qualification": `
	<li class="list-group-item">
        <div class="row" id="qual_row">
            <div class="col-7">
                <input type="text" class="form-control" placeholder="例：普通自動車運転免許" required>
            </div>
            <div class="col-3">
                <input type="date" class="form-control">
            </div>
            <div class="col-2 text-center">
                <button type="button" class="btn btn-danger fa fa-times-circle table-button" onclick="delete_row(this);"></button>
            </div>
        </div>
    </li>`,
	"experience": `
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
            <button type="button" class="btn btn-danger fa fa-times-circle table-button" onclick="delete_row(this);"></button>
        </div>
    </div>
</li>
	`,
};

function add_row(ele, template) {
    // Insert after header if there are no existing rows, else insert after last row.
    let splitter = $(ele).parent().parent().prev().find('.table-splitter');
    let rows = splitter.nextAll('li');

    var insert_after = splitter;
    if (rows.length > 0) {
        insert_after = rows.last();
    }

    let new_row = row_templates[template];
    insert_after.after(new_row);
}