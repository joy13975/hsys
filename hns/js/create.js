"strict";

let today = new Date();
let today_date_str = today.toISOString().slice(0, 10);

$(function() {
    initSpecialInputs($('html'));

    // Init age.
    onBrithdateChange($('#bd_picker'));
});

function onExampleBtnClick(ele) {
    $('input[name=lastname_kanji]').val('派遣');
    $('input[name=firstname_kanji]').val('太郎');
    $('input[name=lastname_furigana]').val('ハケン');
    $('input[name=firstname_furigana]').val('タロウ');
    $('input[name=lastname_eng]').val('Haken');
    $('input[name=firstname_eng]').val('Tarou');
    $('input[name=employer]').val('株式会社HNS');
    $('input[name=birthdate]').datepicker("update", new Date('1992-01-03'));
    $('input[name=zipcode]').val('413-0010')

}

function onAddressClick(ele) {
    setAddress1($(ele).html().trim());
    $('#address_modal').modal('hide');
}

function askForAddress(results) {
    // Multi address zipcode example: 0790177
    const modal = $('#address_modal');
    modal.modal('show', {
        keyboard: false,
        backdrop: 'static'
    });

    const list = modal.find('#address_list');
    list.empty();
    results.forEach((r) => {
        const addr = r['address1'] + r['address2'] + r['address3'];
        list.append(`
		<a href="#" class="list-group-item list-group-item-action" onclick="onAddressClick(this)">
            ` + addr + `
        </a>
        	`);
    });
}

function setAddress1(addr) {
    $('input[name=address1]').val(addr);
}

const zipcodeApi = `http://zipcloud.ibsnet.co.jp/api/search`;

function searchAddress(zipcode, callback) {
    $.getJSON(zipcodeApi + '?callback=?', {
        'zipcode': zipcode
    }, callback);
}

function sanitizeZipcode(zipcode) {
    console.log('TODO: sanitizeZipcode()');
    return zipcode;
}

function zipcodeErrorHighlight(ele, valid) {
    const $ele = $(ele);
    // const valid = $ele.attr('valid') === 'true';
    console.log('valid=' + valid);
    if (valid) {
        $ele.css('border-color', '#ced4da');
    } else {
        $ele.css('border-color', 'red');
    }
}

function onZipcodeFocusout(ele) {
    const zipcode = sanitizeZipcode($(ele).val());
    const addr1Ele = $('input[name=address1]');

    if (zipcode) {
        searchAddress(zipcode, function(data, status, xhr) {
            let addrVal = '';
            let valid = false;
            if (data['status'] == 200) {
                const results = data['results'];
                if (results) {
                    if (results.length > 1) {
                        askForAddress(results);
                    } else {
                        const result = results[0];
                        addrVal = result['address1'] + result['address2'] + result['address3'];
                    }
                    valid = true;
                } else {
                    addrVal = "エラー：郵便番号不明"
                }
            } else {
                addrVal = "エラー(" + data.status + ")：" + data.message;
                alert(addrVal);
            }
            addr1Ele.attr('valid', valid);

            setAddress1(addrVal);
            zipcodeErrorHighlight(ele, valid);
        });
    } else {
        zipcodeErrorHighlight(ele, /*valid=*/ false);
    }
}

function onBrithdateChange(ele) {
    let $ele = $(ele);
    let yd = new Date(today - new Date($ele.val())).getFullYear() - 1970;
    $ele.next('span').find('#age_text').html(yd + "歳");
}

function onNumberFocusout(ele, min, max, step) {
    console.log(ele, "min=" + min, "max=" + max, "step=" + step);
}

function initSpecialInputs(root) {
    initDatepicker(root);
    initTokenfields(root);
    initTextareas(root);
}

function initDatepicker(root) {
    // Set format and default value for all datepickers in root.
    let dp = $(root).find('input[is-datepicker=yes]')
    dp.datepicker({
        format: 'yyyy/mm/dd',
        todayHighlight: true
    });

    dp.datepicker("update", today);
}

function initTokenfields(root) {
    // Call initialization method for all tokenfields in root element.
    let tf = $(root).find('input[is-tokenfield=yes]');
    tf.tokenfield({
        delimiter: [',', ' ']
    });
}

function initTextareas(root) {
    // Set min heights for all textarea in root element.
    ta = $(root).find('textarea');
    ta.css('min-height', ta.height() + "px");
}

function deleteRow(ele) {
    $(ele).parents('li').remove();
}

function addRow(ele, template) {
    // Insert after header if there are no existing rows, else insert after last row.
    let splitter = $(ele).parent().parent().prev().find('table-splitter');
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

    let row = $(`<li class="list-group-item">
        <div class="row">
            <div class="col-1">
            	<h4><span class="badge badge-secondary span-center-text row-badge">#` + qualRowID + `</span></h4>
            </div>
            <div class="col-6">
                <input type="text" class="form-control" name="` + ri('qual_name') + `" placeholder="例：普通自動車運転免許" required>
            </div>
            <div class="col-3">
                <input type="text" is-datepicker="yes" name="` + ri('qual_date') + `" class="form-control" required>
            </div>
            <div class="col-2 text-center">
                <button type="button" class="btn btn-danger fa fa-times-circle table-button" onclick="deleteRow(this);"></button>
            </div>
        </div>
    </li>`);

    insertAfter.after(row);
    initSpecialInputs(row);
}

let expRowID = 0;

function addExpRow(insertAfter) {
    expRowID++;

    function ri(name) {
        return name + '-' + expRowID;
    }

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

    let row = $(`
		<li class="list-group-item">
			<div class="row">
				<h4><span class="badge badge-secondary span-center-text row-badge ml-2">#` +
        expRowID + `</span></h4>
			</div>
		    <div class="row">
		        <div class="col-11">
		            <div class="row" name="` + ri('case_duration') + `">
		                <div class="col-2">
		                    <label class="pt-2 float-right">開始</label>
		                </div>
		                <div class="col-4">
		                    <input type="text" is-datepicker="yes" name="` + ri('case_start') + `" class="form-control">
		                </div>
		                <div class="col-2">
		                    <label class="pt-2 float-right">終了</label>
		                </div>
		                <div class="col-4">
		                    <input type="text" is-datepicker="yes" name="` + ri('case_end') + `" class="form-control">
		                </div>
		            </div>
		            <div class="row" name="` + ri('case_name') + `">
		                <div class="col-2">
		                    <label class="pt-2 float-right">案件名</label>
		                </div>
		                <div class="col-10">
		                    <input type="text" class="form-control" placeholder="例：〇〇ソフトウェアエンジニア" required>
		                </div>
		            </div>
		            <div class="row" name="` + ri('job_desc') + `">
		                <div class="col-2">
		                    <label class="pt-2 float-right">内容</label>
		                </div>
		                <div class="col-10">
		                    <textarea class="form-control" rows="3" min required></textarea>
		                </div>
		            </div>
		            <div class="row" name="` + ri('tasks') + `">
		                <div class="col-2">
		                    <label class="pt-2 float-right">業務</label>
		                </div>
		                <div class="col-10">
		                    <div class="row group-border m-0 pb-2">
		                        <div class="col">
		                            <div class="row ml-0 mr-0">
		                                <div class="col-3 form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbAnalysisID + `" name="` + cbAnalysisID + `">
		                                    <label class="form-check-label" for="` + cbAnalysisID + `">
		                                        調査分析
		                                    </label>
		                                </div>
		                                <div class="col-3 form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbReqDefID + `" name="` + cbReqDefID + `">
		                                    <label class="form-check-label" for="` + cbReqDefID + `">
		                                        要件定義
		                                    </label>
		                                </div>
		                                <div class="col-3 form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbBasicDesignID + `" name="` + cbBasicDesignID + `">
		                                    <label class="form-check-label" for="` + cbBasicDesignID + `">
		                                        基本設計
		                                    </label>
		                                </div>
		                                <div class="col-3 form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbDetailedDesignID + `" name="` + cbDetailedDesignID + `">
		                                    <label class="form-check-label" for="` + cbDetailedDesignID + `">
		                                        詳細設計
		                                    </label>
		                                </div>
		                                <div class="col-3 form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbProgrammingID + `" name="` + cbProgrammingID + `">
		                                    <label class="form-check-label" for="` + cbProgrammingID + `">
		                                        プログラミング
		                                    </label>
		                                </div>
		                                <div class="col-3 form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbUnitTestID + `" name="` + cbUnitTestID + `">
		                                    <label class="form-check-label" for="` + cbUnitTestID + `">
		                                        単体テスト
		                                    </label>
		                                </div>
		                                <div class="col-3 form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbIntegratedTestID + `" name="` + cbIntegratedTestID + `">
		                                    <label class="form-check-label" for="` + cbIntegratedTestID + `">
		                                        結合テスト
		                                    </label>
		                                </div>
		                                <div class="col-3 form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbOverallTestID + `" name="` + cbOverallTestID + `">
		                                    <label class="form-check-label" for="` + cbOverallTestID + `">
		                                        総合テスト
		                                    </label>
		                                </div>
		                                <div class="col-3 form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbMaintenanceAndApplicationID + `" name="` + cbMaintenanceAndApplicationID + `">
		                                    <label class="form-check-label" for="` + cbMaintenanceAndApplicationID + `">
		                                        保守．運用
		                                    </label>
		                                </div>
		                                <div class="col-3 form-check">
		                                    <input class="form-check-input" type="checkbox" value="" id="` + cbHelpdeskID + `" name="` + cbHelpdeskID + `">
		                                    <label class="form-check-label" for="` + cbHelpdeskID + `">
		                                        ヘルプデスク
		                                    </label>
		                                </div>
		                            </div>
		                            <div class="row mt-2">
		                                <div class="col-3">
		                                    <label class="pt-2">その他</label>
		                                </div>
		                                <div class="col-9">
		                                    <input type="text" class="form-control" name="` + ri('task_other') + `">
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div class="row" name="scale">
		                <div class="col-2">
		                    <label class="pt-2 float-right">規模</label>
		                </div>
		                <div class="col-2">
		                    <label class="pt-2 float-right">全体</label>
		                </div>
		                <div class="col-3">
		                    <div class="input-group">
		                        <input name="` + ri('total_scale') + `" type="number" onfocusout="onNumberFocusout(this, 1, "none", 1)" step="1" min="1" value="1" class="form-control">
		                        <span class="input-group-append">
		                            <span class="input-group-text" id="total_scale_text">人</span>
		                        </span>
		                    </div>
		                </div>
		                <div class="col-2">
		                    <label class="pt-2 float-right">チーム</label>
		                </div>
		                <div class="col-3">
		                    <div class="input-group">
		                        <input name="` + ri('team_scale') + `" type="number" onfocusout="onNumberFocusout(this, 1, "none", 1)" step="1" min="1" value="1" class="form-control">
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
		                <div class="col-10">
		                    <div class="input-group">
		                        <input name="` + ri('os') + `" type="text" is-tokenfield="yes" class="form-control">
		                    </div>
		                </div>
		            </div>
		            <div class="row" name="proglang_tools">
		                <div class="col-2">
		                    <label class="pt-2 float-right">言語やツール</label>
		                </div>
		                <div class="col-10">
		                    <div class="input-group">
		                        <input name="` + ri('proglang_tools') + `" type="text" is-tokenfield="yes" class="form-control">
		                    </div>
		                </div>
		            </div>
		            <div class="row" name="db_types">
		                <div class="col-2">
		                    <label class="float-right" style="text-align: right">DBMSミドルウェア</label>
		                </div>
		                <div class="col-10">
		                    <div class="input-group">
		                        <input name="` + ri('db') + `" type="text" is-tokenfield="yes" class="form-control">
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
    initSpecialInputs(row);
}