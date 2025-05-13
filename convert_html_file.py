import os  # Pour parcourir les fichiers dans un dossier
import re  # Pour faire les recherches et remplacements avec des expressions régulières (regex)

# === Dossier où se trouvent les fichiers HTML ===
DOSSIER_HTML = './templates'  # ➤ Change-le si tes fichiers HTML sont ailleurs (relatif ou absolu)

# === Regex : recherche toutes les balises src="..." ou href="..." ===
# Regex décomposée :
#   (src|href)  ➤ capture soit src, soit href
#   ="([^"]+)"  ➤ capture tout ce qu’il y a entre les guillemets après = (le chemin du fichier)
regex_pattern = r'(src|href)="([^"]+)"'


# === Fonction qui décide si on remplace ou pas, selon les règles ===
def replacer(match):
    attribut = match.group(1)  # ➤ src ou href
    chemin = match.group(2)  # ➤ le chemin ex: "images/logo.png"

    # Si c’est href, on vérifie si ça se termine par .css
    if attribut == 'href' and not chemin.endswith('.css'):
        # Si ce n’est PAS .css ➤ on ne touche pas, on garde tel quel
        return match.group(0)  # ➤ retourne exactement ce qui a été trouvé

    # Sinon (src OU href qui finit par .css), on remplace par le code Django static
    return f'{attribut}="{{% static \'{chemin}\' %}}"'
    # ➤ Exemple : src="{% static 'images/logo.png' %}"


# === Parcours de tous les fichiers dans le dossier (et sous-dossiers) ===
for root, dirs, files in os.walk(DOSSIER_HTML):
    for file in files:
        if file.endswith('.html'):  # On ne travaille que sur les fichiers .html
            file_path = os.path.join(root, file)  # ➤ Chemin complet du fichier

            # ➤ Lecture du contenu du fichier
            with open(file_path, 'r', encoding='utf-8') as f:
                contenu = f.read()

            # ➤ Application de la regex + remplacement avec la fonction 'replacer'
            nouveau_contenu = re.sub(regex_pattern, replacer, contenu)

            # ➤ On écrase le fichier avec le contenu modifié
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(nouveau_contenu)

            print(f'✅ Modifié : {file_path}')  # ➤ Log pour voir les fichiers traités

print('🚀 Traitement terminé avec la condition .css pour href ✅')
