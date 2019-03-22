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

function delete_qual(ele) {
    $(ele).parent().parent().remove();
}

function add_qual() {
    // Insert after header if there are no existing rows, else insert after last row.
    let qual_table = $('#qual_table');
    let rows = qual_table.find('#qual_row');

    var insert_after;
    if (rows.length == 0) {
        insert_after = qual_table.find('#table-splitter');
    } else {
        insert_after = rows.last();
    }

    let new_row = build_qual_row();
    insert_after.after(new_row);
}

function build_qual_row() {
    let row = `
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
    </div>`;

    return row;
}