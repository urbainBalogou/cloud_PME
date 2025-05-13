# fichier_extras.py
from django import template
import os

register = template.Library()

@register.filter
def extension(filename):
    return os.path.splitext(filename)[1].lower()
