from django.contrib import admin
from .models import Departement, Employe, FichierDepartement

@admin.register(Departement)
class DepartementAdmin(admin.ModelAdmin):
    list_display = ['nom']

@admin.register(Employe)
class EmployeAdmin(admin.ModelAdmin):
    list_display = ['user', 'departement']

@admin.register(FichierDepartement)
class FichierDepartementAdmin(admin.ModelAdmin):
    list_display = ['nom_fichier', 'departement', 'get_employe_name', 'date_ajout']
    list_filter = ['departement']

    @admin.display(description='Ajouté par')
    def get_employe_name(self, obj):
        return obj.ajoute_par.user if obj.ajoute_par else "-"

