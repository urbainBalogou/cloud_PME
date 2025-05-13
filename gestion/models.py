from django.db import models
from django.contrib.auth.models import User

class Departement(models.Model):
    nom = models.CharField(max_length=100)

    def __str__(self):
        return self.nom

class Employe(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    departement = models.ForeignKey(Departement, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.user.get_full_name()

class FichierDepartement(models.Model):
    departement = models.ForeignKey(Departement, on_delete=models.CASCADE)
    nom_fichier = models.CharField(max_length=255)
    fichier = models.FileField(upload_to='fichiers/')
    ajoute_par = models.ForeignKey(Employe, on_delete=models.SET_NULL, null=True)
    date_ajout = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nom_fichier} ({self.departement.nom})"
