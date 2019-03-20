"strict";

$(document).ready( function() {
	let today = new Date();
	let today_date_str = today.toISOString().slice(0, 10);

	// Set birthdate to today as default.
    let bd_picker = $('#bd-picker');
    bd_picker.val(today_date_str);

    let age_text = $("#age-text");
    bd_picker.on('change', function() {
    	yd = new Date(today - new Date(bd_picker.val())).getFullYear() - 1970;
    	age_text.html(yd + "歳");
    });
})