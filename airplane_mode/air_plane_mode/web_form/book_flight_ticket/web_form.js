frappe.ready(function () {
    const urlParams = new URLSearchParams(window.location.search);

    const flight = urlParams.get("flight");
    const price = urlParams.get("price");

    // Set Flight value (Link field)
    if (flight) {
        frappe.web_form.set_value("flight", flight);
    }

    // Set Flight Price
    if (price) {
        frappe.web_form.set_value("flight_price", price);
    }

    // Make price read only
    frappe.web_form.fields_dict["flight_price"].df.read_only = 1;
    frappe.web_form.refresh_field("flight_price");
});
