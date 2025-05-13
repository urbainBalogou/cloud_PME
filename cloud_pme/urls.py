from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from gestion import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.connexion, name='connexion'),
    path('accueil/', views.index, name='index'),
    path('upload/', views.upload_file, name='upload_file'),
    path('download_files/', views.download_files, name='download_files'),
    path('logout/', views.logout_user, name='logout'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
