"strict";

let today = new Date();
let today_date_str = today.toISOString().slice(0, 10);

$(function() {
    // Initialize datepickers
    let dateEles = $('input[is-datepicker=yes]');
    initDatepicker(dateEles);

    // Auto update age.
    let ageText = $("#age_text");
    let bdPicker = $('#bd_picker')
    bdPicker.on('change', function() {
        yd = new Date(today - new Date(bdPicker.val())).getFullYear() - 1970;
        ageText.html(yd + "歳");
    });

    // Set min heights for all textarea.
    tas = $('textarea');
    tas.css('min-height', tas.height() + "px");

    // Initialize tokenfields.
    let tfs = $('input[tokenfield=yes]');
    tfs.tokenfield();
    tfs.html("");
})

function onNumberFocusOut(ele, min, max, step) {
    console.log(ele, "min=" + min, "max=" + max, "step=" + step);
}

function initDatepicker(dp) {
    dp.datepicker({
        format: 'yyyy/mm/dd',
        todayHighlight: true
    });

    dp.datepicker("update", today);
}

function deleteRow(ele) {
    $(ele).parents('li').remove();
}

function addRow(ele, template) {
    // Insert after header if there are no existing rows, else insert after last row.
    let splitter = $(ele).parent().parent().prev().find('.table-splitter');
    let rows = splitter.nextAll('li');

    var insertAfter = splitter;
    if (rows.length > 0) {
        insertAfter = rows.last();
    }

    switch (template) {
        case "experience":
            addExpRow(insertAfter);
            break;
        case "qualification":
            addQualRow(insertAfter);
            break;
        default:
            console.log("Unknown template name: " + template);
    }
}

let qualRowID = 0;

function addQualRow(insertAfter) {
    qualRowID++;

    function ri(name) {
        return name + '-' + qualRowID;
    }
    dpName = ri('qual_date');

    row = $(`<li class="list-group-item">
        <div class="row">
            <div class="col-1">
            	<h4><span class="badge badge-secondary span-center-text" style="display: flex">#` + qualRowID + `</span></h4>
            </div>
            <div class="col-6">
                <input type="text" class="form-control" name="` + ri('qual_name') + `" placeholder="例：普通自動車運転免許" required>
            </div>
            <div class="col-3">
                <input type="text" is-datepicker="yes" name="` + dpName + `" class="form-control" required>
            </div>
            <div class="col-2 text-center">
                <button type="button" class="btn btn-danger fa fa-times-circle table-button" onclick="deleteRow(this);"></button>
            </div>
        </div>
    </li>`);

    insertAfter.after(row);

    dp = $("input[name=" + dpName + "]");
    initDatepicker(dp);
}

let expRowID = 0;

function addExpRow(insertAfter) {
    expRowID++;

    function ri(name) {
        return name + '-' + expRowID;
    }
    startDpName = ri('case_start');
    endDpName = ri('case_end')

    cbAnalysisID = ri('cb_analysis');
    cbReqDefID = ri('cb_req_def');
    cbBasicDesignID = ri('cb_basic_design');
    cbDetailedDesignID = ri('cb_detailed_design');
    cbProgrammingID = ri('cb_programming');
    cbUnitTestID = ri('cb_unit_test');
    cbIntegratedTestID = ri('cb_integrated_test');
    cbOverallTestID = ri('cb_overall_test');
    cbMaintenanceAndApplicationID = ri('cb_maintenance_and_application');
    cbHelpdeskID = ri('cb_helpdesk');

    row = $(`
		<li class="list-group-item">
			<div class="row">
				<h4><span class="badge badge-secondary span-center-text" style="display: flex">#` +
        expRowID + `</span></h4>
			</div>
		    <div class="row">
		        <div class="col-11">
		            <div class="row" name="` + ri('case_duration') + `">
		                <div class="col-2">
		                    <label class="pt-2 float-right">開始</label>
		                </div>
		                <div class="col-4">
		                    <input type="text" is-datepicker="yes" name="` + startDpName + `" class="form-control">
		                </div>
		                <div class="col-1">
		                    <label class="pt-2 float-right">終了</label>
		                </div>
		                <div class="col-4">
		                    <input type="text" is-datepicker="yes" name="` + endDpName + `" class="form-control">
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
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbAnalysisID + `" name="` + cbAnalysisID + `">
		                                    <label class="form-check-label" for="` + cbAnalysisID + `">
		                                        調査分析
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbReqDefID + `" name="` + cbReqDefID + `">
		                                    <label class="form-check-label" for="` + cbReqDefID + `">
		                                        要件定義
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbBasicDesignID + `" name="` + cbBasicDesignID + `">
		                                    <label class="form-check-label" for="` + cbBasicDesignID + `">
		                                        基本設計
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbDetailedDesignID + `" name="` + cbDetailedDesignID + `">
		                                    <label class="form-check-label" for="` + cbDetailedDesignID + `">
		                                        詳細設計
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbProgrammingID + `" name="` + cbProgrammingID + `">
		                                    <label class="form-check-label" for="` + cbProgrammingID + `">
		                                        プログラミング
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbUnitTestID + `" name="` + cbUnitTestID + `">
		                                    <label class="form-check-label" for="` + cbUnitTestID + `">
		                                        単体テスト
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbIntegratedTestID + `" name="` + cbIntegratedTestID + `">
		                                    <label class="form-check-label" for="` + cbIntegratedTestID + `">
		                                        結合テスト
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbOverallTestID + `" name="` + cbOverallTestID + `">
		                                    <label class="form-check-label" for="` + cbOverallTestID + `">
		                                        総合テスト
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbMaintenanceAndApplicationID + `" name="` + cbMaintenanceAndApplicationID + `">
		                                    <label class="form-check-label" for="` + cbMaintenanceAndApplicationID + `">
		                                        保守．運用
		                                    </label>
		                                </div>
		                                <div class="form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbHelpdeskID + `" name="` + cbHelpdeskID + `">
		                                    <label class="form-check-label" for="` + cbHelpdeskID + `">
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
		                        <input name="total_scale" type="number" onfocusout="onNumberFocusOut(this, 1, "none", 1)" step="1" min="1" value="1" class="form-control">
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
		                        <input name="team_scale" type="number" onfocusout="onNumberFocusOut(this, 1, "none", 1)" step="1" min="1" value="1" class="form-control">
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
		            <button type="button" class="btn btn-danger fa fa-times-circle table-button" onclick="deleteRow(this);"></button>
		        </div>
		    </div>
		</li>
	`);

    insertAfter.after(row);

    start_dp = $("input[name=" + startDpName + "]");
    end_dp = $("input[name=" + endDpName + "]");
    initDatepicker(start_dp);
    initDatepicker(end_dp);
}