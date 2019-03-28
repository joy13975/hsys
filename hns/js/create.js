"strict";

let today = new Date();
let today_date_str = today.toISOString().slice(0, 10);
let qualRowID = 0;
let expRowID = 0;

$(function() {
    initSpecialInputs($('html'));

    // Init age.
    onBrithdateChange($('#bd_picker'));
});

function onSubmitClick() {
	console.log('TODO: onSubmitClick()');
	$('form').trigger('submit');
}

function onExampleBtnClick(ele) {
    $('input[name=lastname_kanji]').val('派遣');
    $('input[name=firstname_kanji]').val('太郎');
    $('input[name=lastname_furigana]').val('ハケン');
    $('input[name=firstname_furigana]').val('タロウ');
    $('input[name=lastname_eng]').val('Haken');
    $('input[name=firstname_eng]').val('Tarou');
    $('input[name=employer]').val('株式会社HNS');
    $('input[name=birthdate]').datepicker("update", new Date('1992-01-03'));
    $('input[name=zipcode]').val('531-0071').trigger('blur');
    $('input[name=address2]').val('1-3-6');
    $('input[name=address3]').val('最高マンション111号');
    $('input[name=train]').val('御堂筋線');
    $('input[name=station]').val('中津');
    $('input[name=degree]').val('大阪大学情報工学博士');

    qualRowID = 0;
    clearList('#qual_list', 1);

    $('#add_qual_btn').trigger('click');
    $('input[name=qual_name-1]').val('普通自動車運転免許');
    $('input[name=qual_date-1]').datepicker("update", new Date('2015-04-01'));

    $('#add_qual_btn').trigger('click');
    $('input[name=qual_name-2]').val('初級システムアドミニストレータ試験');
    $('input[name=qual_date-2]').datepicker("update", new Date('2015-05-01'));

    expRowID = 0;
    clearList('#exp_list', 1)

    $('#add_exp_btn').trigger('click');
    $('input[name=case_start-1]').datepicker("update", new Date('2015-04-01'));
    $('input[name=case_end-1]').datepicker("update", new Date('2017-03-31'));
    $('input[name=case_name-1]').val('〇〇ソフトウェアエンジニア');
    $('textarea[name=case_desc-1]').val('素晴らしいERPの開発を担当しました。');
    $('input[name=cb_req_def-1]').attr('checked', true);
    $('input[name=cb_basic_design-1]').attr('checked', true);
    $('input[name=cb_detailed_design-1]').attr('checked', true);
    $('input[name=cb_programming-1]').attr('checked', true);
    $('input[name=cb_unit_test-1]').attr('checked', true);
    $('input[name=cb_helpdesk-1]').attr('checked', true);
    $('input[name=total_scale-1]').val(20);
    $('input[name=team_scale-1]').val(5);

    $('input[name=os-1]').tokenfield('setTokens', ['Linux', 'Windows', 'MacOS']);
    $('input[name=proglang_tools-1]').tokenfield('setTokens', ['C', 'C++', 'Lisp']);
    $('input[name=dbms-1]').tokenfield('setTokens', ['Microsoft SQL Server', 'MongoDB']);
}

function clearList(selector, offset=0) {
    const rows = () => {
        return $(selector + ' li');
    }
    while (rows().length > offset) {
        rows()[offset].remove();
    }
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
    if (valid) {
        $ele.css('border-color', '#ced4da');
    } else {
        $ele.css('border-color', 'red');
    }
}

function onZipcodeBlur(ele) {
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

function onNumberBlur(ele, minV, maxV, step) {
    const $ele = $(ele);
    let v = $ele.val();
    v = Math.round(v / step) * step;
    if (minV != 'none' && v < minV) v = minV;
    if (maxV != 'none' && v > maxV) v = maxV;

    $ele.val(v);
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

function addQualRow(insertAfter) {
    qualRowID++;

    function ri(name) {
        return name + '-' + qualRowID;
    }

    let row = $(`<li class="list-group-item" row-id=` + qualRowID + `>
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
		<li class="list-group-item" row-id=` + expRowID + `>
			<div class="row">
				<h4><span class="badge badge-secondary span-center-text row-badge ml-2">#` +
        expRowID + `</span></h4>
			</div>
		    <div class="row">
		        <div class="col-11">
		            <div class="row">
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
		            <div class="row">
		                <div class="col-2">
		                    <label class="pt-2 float-right">案件名</label>
		                </div>
		                <div class="col-10">
		                    <input type="text" class="form-control" name="` + ri('case_name') + `" placeholder="例：〇〇ソフトウェアエンジニア" required>
		                </div>
		            </div>
		            <div class="row">
		                <div class="col-2">
		                    <label class="pt-2 float-right">内容</label>
		                </div>
		                <div class="col-10">
		                    <textarea class="form-control" rows="3" name="` + ri('case_desc') + `" required></textarea>
		                </div>
		            </div>
		            <div class="row">
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
		                        <input name="` + ri('total_scale') + `" type="number" onblur="onNumberBlur(this, 1, 'none', 1)" step="1" min="1" value="1" class="form-control">
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
		                        <input name="` + ri('team_scale') + `" type="number" onblur="onNumberBlur(this, 1, 'none', 1)" step="1" min="1" value="1" class="form-control">
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
		                        <input name="` + ri('dbms') + `" type="text" is-tokenfield="yes" class="form-control">
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