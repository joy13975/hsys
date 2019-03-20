"strict";

$(document).ready( function() {
	let today = new Date();
	let today_date_str = today.toISOString().slice(0, 10);

	// Default all dates to today.
    let date_eles = $('input[type=date]');
    date_eles.val(today_date_str);

    // Auto update age.
    let age_text = $("#age-text");
    let bd_picker = $('#bd-picker')
    bd_picker.on('change', function() {
    	yd = new Date(today - new Date(bd_picker.val())).getFullYear() - 1970;
    	age_text.html(yd + "歳");
    });
})