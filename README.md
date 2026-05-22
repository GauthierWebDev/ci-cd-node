# Exécuter le projet

## NodeJS

1. Installation des dépendances : `npm install`
2. Lancement du serveur : `npm start` ou  `node index.js`

## Docker

### Build en local

1. Build de l'image Docker : `docker build -t node-ci-cd .`
2. Exécution de l'image dans un conteneur : `docker run -p 3000:3000 node-ci-cd`

### Depuis le GHCR

1. Connexion au GHCR : `echo <token ghcr> | docker login ghcr.io -u <nom_d_utilisateur> --password-stdin`
2. Récupération de l'image : `docker pull ghcr.io/<nom_d_utilisateur | organisation>/<image>:<version>`
3. Exécution de l'image : `docker run ghcr.io/<nom_d_utilisateur | organisation>/<image>:<version>`

> **Note :**  
> L'image actuellement disponible sur mon GHCR n'est pas publiquement accessible.  
> Ces étapes ne sont donc pas reproductibles depuis ce repository.