## Qu'est-ce ?

Réalisation du [tutoriel du site officiel](https://facebook.github.io/react/docs/tutorial.html) de React.

## Pré-requis

- NodeJS et npm
- Grunt-cli `sudo npm install -g grunt-cli`

## Mise en place

Récupérer le repo :

`git clone http://git.aubm.net/kendo5731/react-tutorial.git`

Installer les dépendances :

`cd react-tutorial`

`sudo npm install`

Générer le `dist/js/app.js` :

`grunt`

## Utilisation

Ouvrir le fichier index.html dans un browser

## Développer

Grunt peut surveiller les modifications apportées dans les fichiers `.js` et `.jsx` du répertoire `src/js`, et regénérer le fichier `dist/js/app.js` à la volée. Pour cela, il faut utiliser la commande suivante :

`grunt watch`
