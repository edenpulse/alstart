# changelog v4.2.0 (05 mai 2015)

- possibilité d'ajouter un namespace à l'ensemble des classes (configurable dans le fichier config de Less et Sass)

# changelog v4.1.6 (17 avril 2015)

- mise en commentaire des sauts de page print avant un h1
- correction d'anomalie sur les input (user-select: none)
- correction d'erreur de compilation Sass

# changelog v4.1.4 (14 avril 2015)

- ajout de node_modules dans le .gitignore
- ajout d'un gulpfile.js et des dépendances dans package.json
- ajout de la classe .unstyled destinée aux éléments de formulaires

# changelog v4.1.3 (13 avril 2015)

Les classes relatives à flexbox ont été renommées pour ne pas entrer en conflit avec des outils tels que Modernizer (qui ajoutent aux-aussi ce genre de classes).

Anciens noms :

```
.flexbox, .flexbox-h
.flexbox-v
.flexitem-fluid
.flexitem-center
.flexitem-first, .flexitem-medium, .flexitem-last
```

Nouveaux noms :

```
.flex-container, .flex-container-h
.flex-container-v
.flex-item-fluid
.flex-item-center
.flex-item-first, .flex-item-medium, .flex-item-last
```

# changelog v4.1.1 (30 mars 2015)

## Vite fait

* grosse remise à jour, orientée vers les technos modernes (flexbox, rem, calc,  ...) et moins de "bidouille"
* fin du support d'IE6-IE8 Si vous souhaitez utiliser KNACSS sur d'anciens navigateurs, préférez la [Version 3](https://github.com/raphaelgoetter/KNACSS/tree/3.1.0)
* ajout du reset [normalize.css](http://necolas.github.io/normalize.css/)
* un grand merci à @7studio pour ses conseils et observations sur la version beta de KNACSS 4.0
* attention : rétrocompatibilité non préservée pour certaines classes ( .left, .start, .txtleft, .fl, .table-, .flex-start, .flex-end)
* attention : rétrocompatibilité non préservée pour les grilles de mise en page (passage à flexbox et simplification de la structure)

## done

* documentation en français
* PDF pense-bête mis à jour : http://knacss.com/KNACSS-cheatsheet.pdf
* gros ménage de printemps (gros nettoyage de tous les espaces et tabulations disgrâcieux)
* dans la section "quick print reset", ajout des classes .p-like, h1-like, h2-like etc.
* mise en commun globale de tous les styles p avec .p-like (h1 et h1-like, etc.).
* déplacement et commentaire sur la règle body > script
* correction du bug des height: auto sur les images au format SVG
* meilleure intégration de box-sizing
* suppression du fichier dédié aux réglages des bugs des anciennes versions d'IE6-IE8
* fin du support d'IE9 pour les grilles : KNACSS v4 compatible IE10+ pour ce qui concerne les mises en page en grilles (flexbox FTW!)
* réorganisation des fichiers (le fichier dédié "IE.css" disparait, le fichier "booleans" devient "misc" (plus cohérent), le fichier "gmaps" est désormais inclus dans "misc")
* ajout des préfixes ".table-" devant les styles de décoration des tableaux
* suppression du fichier icons.css, statistiquement inutile en pratique
* meilleure cohérence de nommage entre .left, .start, .txtleft, .fl
* ajout d'un fichier de reset dédié à WordPress
* refonte intégrale des grilles en Flexbox (et en plus ça marche sur IE10 !)
* ajout d'un fichier .editorconfig (http://editorconfig.org/)
* passage des :before/:after en ::before/::after
* ajout de sourcemaps CSS
* suppression des images noir et blanc forcées en media print
* correction de la formule LESS `{calc(1em * .625);`
* ajout du reset [normalize.css](http://necolas.github.io/normalize.css/)
* mise à jour du générateur de gabarits [Schnaps.it](http://schnaps.it/)
