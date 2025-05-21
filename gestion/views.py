from django.contrib import messages
from django.contrib.auth import authenticate, login, get_user_model, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from django.utils.timezone import now

from .models import *
from collections import defaultdict
import io
import zipfile
from django.http import HttpResponse, HttpResponseNotAllowed
from django.utils import timezone

user = get_user_model()

from collections import defaultdict
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.shortcuts import render
from .models import Employe, FichierDepartement

@login_required
def index(request):
    try:
        employe = Employe.objects.get(user=request.user)
        departements = employe.departements.all()

        fichiers_groupes = {}

        for dep in departements:
            fichiers = FichierDepartement.objects.filter(departement=dep).order_by('-date_ajout')
            fichiers_par_date = defaultdict(list)
            for fichier in fichiers:
                fichiers_par_date[fichier.date_ajout.date()].append(fichier)
            fichiers_groupes[dep.nom] = dict(fichiers_par_date)

    except Employe.DoesNotExist:
        messages.error(request, "Aucun employé associé à cet utilisateur.")
        fichiers_groupes = {}

    return render(request, "gestion/file_manager.html", {
        "fichiers_groupes": fichiers_groupes
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

def delete_file(request, id):
    if request.method == "POST":
        fichier = get_object_or_404(FichierDepartement, id=id)
        fichier.delete()
        messages.success(request, "Fichier supprimé avec succès.")
        return redirect("index")
    return HttpResponseNotAllowed(["POST"])


@login_required
def faire_demande(request):
    if request.method == "POST":
        objet = request.POST.get('objet')
        message = request.POST.get('message')

        if objet is not None and message is not None:
            demande = Demande(
                employe = request.user,
                objet = objet,
                message = message
            )

            demande.save()

            return redirect('demande')

    return render(request, "gestion/faire_demande.html")


@login_required
def liste_demande(request):
    if request.user.is_staff:
        demandes = Demande.objects.all().order_by('date_reponse')
    else:
        demandes = Demande.objects.filter(utilisateur=request.user).order_by('date_reponse')
    return render(request, 'gestion/liste_demandes.html', {'demandes': demandes})