#RUN NEW CONTAINERS

docker run busybox:1.24 echo "hello World"

docker run busybox:1.24 ls /

docker run -i -t busybox:1.24

#docker --detach MODE # run on background

docker run -d busybox:1.24 sleep 1000

docker ps

docker ps -a

#remove container after it finish

docker run --rm busybox:1.24 sleep 1000

#set container Name --name

docker run --name busyboxName busybox:1.24 sleep 1000

#inspect container information

docker inspect CONTAINER_ID
