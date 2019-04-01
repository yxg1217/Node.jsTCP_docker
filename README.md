# Node.jsTCP_docker

Le but est de lancer un Node.js TCP client and server dans docker et tester en temps réel.

Pour commencer, vous allez récupérer l'image docker officiel.

Puis créez un fichier server.js et un fichier client.js.

Puis créez les images server-js et client-js avec cette commande :
$ docker build -t server-js .

Et maintenant, pour lancer l'application à l'intérieur d'un conteneur, faire :
$ docker run -d --name node-server -p 8000:8000 -v $(pwd):/server server-js node /server/server.js

On fait la même choses pour client.js.

On créer un fichier yaml :docker-compose.yml

Entrer:

docker-compose up -d

Puis:

docker-compose logs

#Resume de Commande Docker#
osadmin@ubuntu-vm:~/server$ docker container ps -a

osadmin@ubuntu-vm:~/server$ docker container rm [container ID]

osadmin@ubuntu-vm:~/server$ docker rmi [images ID]

osadmin@ubuntu-vm:~/server$ docker start node-server

osadmin@ubuntu-vm:~/server$ docker logs -f node-server

osadmin@ubuntu-vm:~/server$ docker exec -it node-server /bin/bash

osadmin@ubuntu-vm:~/client$ docker build -t client-js .

osadmin@ubuntu-vm:~/client$ docker run -itd --name node-server -p 8000:8000 -v $(pwd):/server server-js node /server/server.js

osadmin@ubuntu-vm:~/client$ docker run -itd --name node-client -v $(pwd):/client client-js node /client/client.js
*local add: 127.0.0.1:8000*
*osadmin add: 192.168.1.27:8000*

https://putaindecode.io/articles/introduction-a-docker

-------------------------------
#Les Dockerfiles#
https://putaindecode.io/articles/les-dockerfiles/


#Commande Tc  - Test de Traffic Controller TC in Linux Operating System#
On creer un nouvau image avec le fichier tc.sh

On lance les trois images par docker-compose , pour tester le latence entre le serveur et le client.
