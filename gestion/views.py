from django.contrib import messages
from django.contrib.auth import authenticate, login, get_user_model, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.utils.timezone import now

from .models import *
from collections import defaultdict
import io
import zipfile
from django.http import HttpResponse
from django.utils import timezone

user = get_user_model()

@login_required
def index(request):
    try:
        employe = Employe.objects.get(user=request.user)
        fichiers_raw = FichierDepartement.objects.filter(
            departement=employe.departement
        ).order_by('-date_ajout')

        print("fichier raw:",fichiers_raw)

        # Regroupement des fichiers par date
        fichiers_groupes = defaultdict(list)
        for fichier in fichiers_raw:
            date_cle = fichier.date_ajout.date()
            fichiers_groupes[date_cle].append(fichier)

        print("ficiers par date: ",fichiers_groupes)

    except Employe.DoesNotExist:
        messages.error(request, "Aucun employé associé à cet utilisateur.")
        fichiers_groupes = {}

    return render(request, "gestion/file_manager.html", {
        "fichiers_groupes": dict(fichiers_groupes)
    })

def connexion(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            print("utilisaaaaaaaaaaaa",user.username)
            login(request, user)
            return redirect('index')
        else:
            return render(request, 'gestion/login.html', {'error': 'Identifiants incorrects'})
    return render(request, 'gestion/login.html')

def upload_file(request):
    if request.method == 'POST' and request.FILES.get('fichier'):
        fichier = request.FILES['fichier']

        try:
            employe = Employe.objects.get(user=request.user)

        except Employe.DoesNotExist:
            messages.error(request, "Aucun employé associé à cet utilisateur.")
            return redirect('index')

        upload_file = FichierDepartement(
            departement = employe.departement,
            nom_fichier = fichier.name,
            fichier = fichier,
            ajoute_par = employe
        )
        upload_file.save()
        messages.success(request,"fichier uploadé avec succès")
        return redirect('index')

def download_files(request):
    if request.method == "POST":
        ids = request.POST.getlist("fichiers_selectionnes")
        if not ids:
            messages.error(request, "Vous devez sélectionner au moins un fichier.")
            return redirect(request.META.get("HTTP_REFERER", "/"))

        fichiers = FichierDepartement.objects.filter(id__in=ids)

        zip_buffer = io.BytesIO()
        with zipfile.ZipFile(zip_buffer, "w") as zip_file:
            for fichier in fichiers:
                fichier.fichier.open("rb")
                file_data = fichier.fichier.read()
                zip_file.writestr(fichier.nom_fichier, file_data)
                fichier.fichier.close()

        zip_buffer.seek(0)
        filename = f"fichiers_selectionnes_{now().strftime('%Y%m%d_%H%M%S')}.zip"
        response = HttpResponse(zip_buffer, content_type="application/zip")
        response['Content-Disposition'] = f'attachment; filename="{filename}"'
        return response

    return HttpResponse("Méthode non autorisée", status=405)


def logout_user(request):
    logout(request)
    return redirect('connexion')