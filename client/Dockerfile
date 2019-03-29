# Image de base
FROM ubuntu

# Installation de curl avec apt-get
RUN apt-get update \
&& apt-get install -y curl \
&& rm -rf /var/lib/apt/lists/*

# Installation de Node.js Ã  partir du site officiel
RUN curl -LO "https://nodejs.org/dist/v0.12.5/node-v0.12.5-linux-x64.tar.gz" \
&& tar -xzf node-v0.12.5-linux-x64.tar.gz -C /usr/local --strip-components=1 \
&& rm node-v0.12.5-linux-x64.tar.gz

# Ajout du fichier de dépendances package.json
ADD package.json /client/

# Changement du repertoire courant
WORKDIR /client

# Installation des dépendances
RUN npm install

# Ajout tout les fichiers
ADD . /client

# On expose le port 8000
EXPOSE 8000

# On partage un dossier
VOLUME /client

# On lance le serveur quand on demarre le conteneur
CMD node client.js
