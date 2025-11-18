# Copyright (c) 2025, Usha Sidagana and contributors
# For license information, please see license.txt


import frappe
from frappe.website.website_generator import WebsiteGenerator

class AirplaneFlight(WebsiteGenerator):
    def on_submit(self):
        self.status = "Completed"

    def before_save(self):
        if getattr(self, "is_published", False):
            self.route = f"/airplane-flight/{self.name}"
