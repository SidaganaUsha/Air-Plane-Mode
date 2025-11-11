// Copyright (c) 2025, Usha Sidagana and contributors
// For license information, please see license.txt

frappe.ui.form.on('Airplane Ticket', {
	refresh(frm) {
		// your code here
	},

    flight_price(frm){
        frm.trigger("update_total_amount");
    },

    update_total_amount(frm){
    let total_add_on = 0;
        for (let row of frm.doc.adds_on){
            total_add_on += row.amount;
        }
        const total= frm.doc.flight_price * total_add_on;
        frm.set_value("total_amount", total)
    }
});

frappe.ui.form.on('Airplane Ticket Add-on Item', {
	refresh(frm) {

	},

    add_on(frm, cdt, cdn) {
		let row = locals[cdt][cdn];
		if (!row.add_on) return;

		// check for duplicate add-ons
		let duplicates = frm.doc.adds_on.filter(r => r.add_on === row.add_on);

		if (duplicates.length > 1) {
			frappe.msgprint(`Add-on "${row.add_on}" is already added.`);
			// remove the duplicate row
			frm.get_field("adds_on").grid.grid_rows_by_docname[cdn].remove();
			frm.refresh_field("adds_on");
		}
	},

    amount(frm, cdt, cdn){
        frm.trigger("update_total_amount");
    },
    adds_on_remove(frm){
        frm.trigger("update_total_amount");
    }

})