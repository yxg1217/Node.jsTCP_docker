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

https://github.com/yxg1217/Node.jsTCP_docker/edit/master/README.md


########################################################
export PATH="$PATH:/home/osadmin/go/bin"
/root/go/bin/comcast
/root/go/src/github.com/tylertreat/comcast
PATH=$PATH:/root/go/bin


osadmin@ubuntu-vm:~$ ls
client  docker-compose.yml  go  server
osadmin@ubuntu-vm:~$ cd go/src/
osadmin@ubuntu-vm:~/go/src$ ls
github.com
osadmin@ubuntu-vm:~/go/src$ ls *
tylertreat
osadmin@ubuntu-vm:~/go/src$ cd github.com/tylertreat/comcast/
##################################################################
root@78922b63db1f:/server# apt-get install iproute2 #pour installer tc

osadmin@ubuntu-vm:~$ docker run -t -i server-js
root@2e252a968197:/server# exit
osadmin@ubuntu-vm:~$ docker commit -m "add sudo" -a "xiaogey" 2e252a968197 server-js

