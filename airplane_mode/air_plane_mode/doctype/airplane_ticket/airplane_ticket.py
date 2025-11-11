# Copyright (c) 2025, Usha Sidagana and contributors
# For license information, please see license.txt

import frappe
import random

from frappe.model.document import Document


class AirplaneTicket(Document):
	def before_save(self):
		seat_number = f"{random.randint(1, 99)}{random.choice(['A', 'B', 'C', 'D', 'E'])}"
		self.seat = seat_number