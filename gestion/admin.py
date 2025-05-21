from django.contrib import admin
from .models import Departement, Employe, FichierDepartement,EmployeDepartement,Demande

@admin.register(Departement)
class DepartementAdmin(admin.ModelAdmin):
    list_display = ['nom']


@admin.register(Demande)
class DemandeAdmin(admin.ModelAdmin):
    list_display = ['objet','employe']

class EmployeDepartementInline(admin.TabularInline):
    model = EmployeDepartement
    extra = 1


@admin.register(Employe)
class EmployeAdmin(admin.ModelAdmin):
    list_display = ['user', 'get_departements']
    inlines = [EmployeDepartementInline]

    @admin.display(description='Départements')
    def get_departements(self, obj):
        return ", ".join([dep.nom for dep in obj.departements.all()])

@admin.register(FichierDepartement)
class FichierDepartementAdmin(admin.ModelAdmin):
    list_display = ['nom_fichier', 'departement', 'get_employe_name', 'date_ajout']
    list_filter = ['departement']

    @admin.display(description='Ajouté par')
    def get_employe_name(self, obj):
        return obj.ajoute_par.user if obj.ajoute_par else "-"

