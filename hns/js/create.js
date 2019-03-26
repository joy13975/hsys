"strict";

let today = new Date();
let today_date_str = today.toISOString().slice(0, 10);

$(function() {
    // Initialize datepickers
    let date_eles = $('input[is-datepicker=yes]');
    init_datepicker(date_eles);

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

function init_datepicker(dp) {
    dp.datepicker({
        format: 'yyyy/mm/dd',
        todayHighlight: true
    });

    dp.datepicker("update", today);
}

function delete_row(ele) {
    $(ele).parents('li').remove();
}

function add_row(ele, template) {
    // Insert after header if there are no existing rows, else insert after last row.
    let splitter = $(ele).parent().parent().prev().find('.table-splitter');
    let rows = splitter.nextAll('li');

    var insert_after = splitter;
    if (rows.length > 0) {
        insert_after = rows.last();
    }

    switch (template) {
        case "experience":
            add_exp_row(insert_after);
            break;
        case "qualification":
            add_qual_row(insert_after);
            break;
        default:
            console.log("Unknown template name: " + template);
    }
}

let qual_row_id = 0;

function add_qual_row(insert_after) {
    qual_row_id++;

    function ri(name) {
        return name + '-' + qual_row_id;
    }
    datepicker_name = ri('qual_date');

    row = $(`<li class="list-group-item">
        <div class="row">
            <div class="col-1">
            	<h4><span class="badge badge-secondary span-center-text" style="display: flex">#` + qual_row_id + `</span></h4>
            </div>
            <div class="col-6">
                <input type="text" class="form-control" name="` + ri('qual_name') + `" placeholder="例：普通自動車運転免許" required>
            </div>
            <div class="col-3">
                <input type="text" is-datepicker="yes" name="` + datepicker_name + `" class="form-control" required>
            </div>
            <div class="col-2 text-center">
                <button type="button" class="btn btn-danger fa fa-times-circle table-button" onclick="delete_row(this);"></button>
            </div>
        </div>
    </li>`);

    insert_after.after(row);

    dp = $("input[name=" + datepicker_name + "]");
    init_datepicker(dp);
}

let exp_row_id = 0;

function add_exp_row(insert_after) {
    exp_row_id++;

    function ri(name) {
        return name + '-' + exp_row_id;
    }
    case_start_dp_name = ri('case_start');
    case_end_dp_name = ri('case_end')

    cb_analysis_id = ri('cb_analysis');
    cb_req_def_id = ri('cb_req_def');
    cb_basic_design_id = ri('cb_basic_design');
    cb_detailed_design_id = ri('cb_detailed_design');
    cb_programming_id = ri('cb_programming');
    cb_unit_test_id = ri('cb_unit_test');
    cb_integrated_test_id = ri('cb_integrated_test');
    cb_overall_test_id = ri('cb_overall_test');
    cb_maintenance_and_application_id = ri('cb_maintenance_and_application');
    cb_helpdesk_id = ri('cb_helpdesk');

    row = $(`
		<li class="list-group-item">
			<div class="row">
				<h4><span class="badge badge-secondary span-center-text" style="display: flex">#` +
        exp_row_id + `</span></h4>
			</div>
		    <div class="row">
		        <div class="col-11">
		            <div class="row" name="` + ri('case_duration') + `">
		                <div class="col-2">
		                    <label class="pt-2 float-right">開始</label>
		                </div>
		                <div class="col-4">
		                    <input type="text" is-datepicker="yes" name="` + case_start_dp_name + `" class="form-control">
		                </div>
		                <div class="col-1">
		                    <label class="pt-2 float-right">終了</label>
		                </div>
		                <div class="col-4">
		                    <input type="text" is-datepicker="yes" name="` + case_end_dp_name + `" class="form-control">
		                </div>
		            </div>
		            <div class="row" name="` + ri('case_name') + `">
		                <div class="col-2">
		                    <label class="pt-2 float-right">案件名</label>
		                </div>
		                <div class="col-9">
		                    <input type="text" class="form-control" placeholder="例：〇〇ソフトウェアエンジニア" required>
		                </div>
		            </div>
		            <div class="row" name="` + ri('job_desc') + `">
		                <div class="col-2">
		                    <label class="pt-2 float-right">内容</label>
		                </div>
		                <div class="col-9">
		                    <textarea class="form-control" rows="3" min required></textarea>
		                </div>
		            </div>
		            <div class="row" name="` + ri('tasks') + `">
		                <div class="col-2">
		                    <label class="pt-2 float-right">業務</label>
		                </div>
		                <div class="col-9">
		                    <div class="row group-border m-0 pb-2">
		                        <div class="col-12">
		                            <div class="row ml-0 mr-0">
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cb_analysis_id + `" name="` + cb_analysis_id + `">
		                                    <label class="form-check-label" for="` + cb_analysis_id + `">
		                                        調査分析
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cb_req_def_id + `" name="` + cb_req_def_id + `">
		                                    <label class="form-check-label" for="` + cb_req_def_id + `">
		                                        要件定義
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cb_basic_design_id + `" name="` + cb_basic_design_id + `">
		                                    <label class="form-check-label" for="` + cb_basic_design_id + `">
		                                        基本設計
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cb_detailed_design_id + `" name="` + cb_detailed_design_id + `">
		                                    <label class="form-check-label" for="` + cb_detailed_design_id + `">
		                                        詳細設計
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cb_programming_id + `" name="` + cb_programming_id + `">
		                                    <label class="form-check-label" for="` + cb_programming_id + `">
		                                        プログラミング
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cb_unit_test_id + `" name="` + cb_unit_test_id + `">
		                                    <label class="form-check-label" for="` + cb_unit_test_id + `">
		                                        単体テスト
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cb_integrated_test_id + `" name="` + cb_integrated_test_id + `">
		                                    <label class="form-check-label" for="` + cb_integrated_test_id + `">
		                                        結合テスト
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cb_overall_test_id + `" name="` + cb_overall_test_id + `">
		                                    <label class="form-check-label" for="` + cb_overall_test_id + `">
		                                        総合テスト
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cb_maintenance_and_application_id + `" name="` + cb_maintenance_and_application_id + `">
		                                    <label class="form-check-label" for="` + cb_maintenance_and_application_id + `">
		                                        保守．運用
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cb_helpdesk_id + `" name="` + cb_helpdesk_id + `">
		                                    <label class="form-check-label" for="` + cb_helpdesk_id + `">
		                                        ヘルプデスク
		                                    </label>
		                                </div>
		                            </div>
		                            <div class="row mt-2">
		                                <div class="col-2">
		                                    <label class="pt-2">その他</label>
		                                </div>
		                                <div class="col-10">
		                                    <input type="text" class="form-control" name="` + ri('task_other') + `">
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
	`);

    insert_after.after(row);
}