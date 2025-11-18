import frappe
import random

def execute():
    tickets = frappe.get_all("Airplane Ticket", filters={"seat": ["is", "not set"]}, pluck="name")

    for ticket_name in tickets:
        seat_number = f"{random.randint(1,99)}{random.choice(['A','B','C','D','E'])}"

        frappe.db.set_value("Airplane Ticket", ticket_name, "seat",seat_number)

    frappe.db.commit()
    frappe.msgprint(f"Populated seat numbers for {len(tickets)} existing tickets.")