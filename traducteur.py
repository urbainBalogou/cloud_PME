import os
import re
import requests
import html
import time

# === Dossier où se trouvent les fichiers HTML ===
DOSSIER_HTML = './templates'  # Modifiez selon votre arborescence de fichiers

# === Clé API DeepL (si vous en avez une, sinon utilisez l'API gratuite via requests) ===
# DEEPL_API_KEY = "votre_cle_api_deepl"  # Décommentez et ajoutez votre clé si vous en avez une

# === Balises dont nous voulons traduire le contenu ===
BALISES_A_TRADUIRE = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'a', 'button', 'label', 'title']

# === Dictionnaire de cache pour éviter de retraduire les mêmes textes ===
cache_traduction = {}


# === Fonction pour traduire le texte de l'anglais vers le français ===
def traduire_texte(texte):
    if not texte.strip():  # Ignorer les textes vides
        return texte

    try:
        # Ne pas traduire les variables Django {{...}} ou les balises {% ... %}
        if '{{' in texte or '{%' in texte:
            return texte

        # Ne pas traduire ce qui ressemble à du code ou des identifiants
        if re.search(r'[{}<>/]', texte):
            return texte

        # Ne pas traduire si texte trop court (probablement pas du contenu utile)
        if len(texte.strip()) < 3:
            return texte

        # Vérifier si la traduction est déjà dans le cache
        if texte in cache_traduction:
            return cache_traduction[texte]

        # Méthode 1: Utiliser l'API LibreTranslate (gratuite et open source)
        url = "https://translate.terraprint.co/translate"  # Instance publique de LibreTranslate

        payload = {
            "q": texte,
            "source": "en",
            "target": "fr"
        }

        headers = {"Content-Type": "application/json"}

        response = requests.post(url, json=payload, headers=headers)

        if response.status_code == 200:
            result = response.json()
            traduction = result["translatedText"]

            # Stocker la traduction dans le cache
            cache_traduction[texte] = traduction

            # Petite pause pour ne pas surcharger l'API
            time.sleep(0.5)

            return traduction
        else:
            print(f"⚠️ Erreur API: {response.status_code}, {response.text}")
            return texte

    except Exception as e:
        print(f"⚠️ Erreur de traduction: {e}")
        return texte  # En cas d'erreur, on garde le texte original


# === Fonction pour traiter une balise HTML spécifique ===
def traiter_balise(html_content, balise):
    # Regex pour capturer le contenu d'une balise HTML
    pattern = f'<{balise}([^>]*)>(.*?)</{balise}>'

    def replace_content(match):
        attributs = match.group(1)  # Les attributs de la balise
        contenu = match.group(2)  # Le contenu entre les balises

        # Ne pas traduire s'il y a des sous-balises (pour éviter les problèmes)
        if re.search(r'<[a-zA-Z]', contenu):
            return match.group(0)

        # Traduire le contenu
        contenu_traduit = traduire_texte(contenu)

        return f'<{balise}{attributs}>{contenu_traduit}</{balise}>'

    # Appliquer la regex avec remplacement
    return re.sub(pattern, replace_content, html_content, flags=re.DOTALL)


# === Fonction principale pour traiter un fichier HTML ===
def traduire_fichier_html(chemin_fichier):
    try:
        # Lire le contenu du fichier
        with open(chemin_fichier, 'r', encoding='utf-8') as f:
            contenu = f.read()

        contenu_original = contenu

        # Traiter chaque type de balise
        for balise in BALISES_A_TRADUIRE:
            contenu = traiter_balise(contenu, balise)

        # Vérifier si des modifications ont été faites
        if contenu != contenu_original:
            # Écrire le contenu modifié dans le fichier
            with open(chemin_fichier, 'w', encoding='utf-8') as f:
                f.write(contenu)
            print(f"✅ Traduit: {chemin_fichier}")
        else:
            print(f"📄 Aucune traduction nécessaire: {chemin_fichier}")

    except Exception as e:
        print(f"❌ Erreur lors du traitement de {chemin_fichier}: {e}")


# === Parcours des fichiers HTML ===
def parcourir_dossier():
    fichiers_traites = 0

    for root, dirs, files in os.walk(DOSSIER_HTML):
        for fichier in files:
            if fichier.endswith('.html'):
                chemin_complet = os.path.join(root, fichier)
                traduire_fichier_html(chemin_complet)
                fichiers_traites += 1

    return fichiers_traites


# === Exécution du script ===
if __name__ == "__main__":
    print("🚀 Démarrage de la traduction des fichiers HTML (anglais → français)...")
    nb_fichiers = parcourir_dossier()
    print(f"✨ Traitement terminé! {nb_fichiers} fichiers HTML ont été analysés.")