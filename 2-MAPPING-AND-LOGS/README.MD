#run tomcat 8 image

# PORT SINTAX [HOSTPORT]:[CONTAINERPORT]

docker run -it --rm -p 8888:8080 tomcat:8.0

docker logs CONTAINER_ID

docker history tomcat:8.0 #show layers of image

## TOMCAT RESPONSE EXAMPLE

ef6a7c98d192 2 years ago /bin/sh -c #(nop) CMD ["catalina.sh" "run"] 0B
<missing> 2 years ago /bin/sh -c #(nop) EXPOSE 8080/tcp 0B
<missing> 2 years ago /bin/sh -c set -e && nativeLines="$(catalin…   0B
<missing>           2 years ago         /bin/sh -c set -eux;   savedAptMark="$(apt-m… 17.7MB
<missing> 2 years ago /bin/sh -c #(nop) ENV TOMCAT_ASC_URLS=https… 0B
<missing> 2 years ago /bin/sh -c #(nop) ENV TOMCAT_TGZ_URLS=https… 0B
<missing> 2 years ago /bin/sh -c #(nop) ENV TOMCAT_SHA512=cd8a4e4… 0B
<missing> 2 years ago /bin/sh -c #(nop) ENV TOMCAT_VERSION=8.0.53 0B
<missing> 2 years ago /bin/sh -c #(nop) ENV TOMCAT_MAJOR=8 0B
<missing> 2 years ago /bin/sh -c #(nop) ENV GPG_KEYS=05AB33110949… 0B
<missing> 2 years ago /bin/sh -c apt-get update && apt-get install… 1.84MB
<missing> 2 years ago /bin/sh -c set -ex; currentVersion="$(dpkg-…   7.34MB
<missing>           2 years ago         /bin/sh -c #(nop)  ENV OPENSSL_VERSION=1.1.0…   0B
<missing>           2 years ago         /bin/sh -c #(nop)  ENV LD_LIBRARY_PATH=/usr/…   0B
<missing>           2 years ago         /bin/sh -c #(nop)  ENV TOMCAT_NATIVE_LIBDIR=…   0B
<missing>           2 years ago         /bin/sh -c #(nop) WORKDIR /usr/local/tomcat     0B
<missing>           2 years ago         /bin/sh -c mkdir -p "$CATALINA_HOME" 0B
<missing> 2 years ago /bin/sh -c #(nop) ENV PATH=/usr/local/tomca… 0B
<missing> 2 years ago /bin/sh -c #(nop) ENV CATALINA_HOME=/usr/lo… 0B
<missing> 2 years ago /bin/sh -c set -ex; if [ ! -d /usr/share/m… 159MB
<missing> 2 years ago /bin/sh -c #(nop) ENV JAVA_DEBIAN_VERSION=7… 0B
<missing> 2 years ago /bin/sh -c #(nop) ENV JAVA_VERSION=7u181 0B
<missing> 2 years ago /bin/sh -c #(nop) ENV JAVA_HOME=/docker-jav… 0B
<missing> 2 years ago /bin/sh -c ln -svT "/usr/lib/jvm/java-7-open… 33B
<missing> 2 years ago /bin/sh -c { echo '#!/bin/sh'; echo 'set… 87B
<missing> 2 years ago /bin/sh -c #(nop) ENV LANG=C.UTF-8 0B
<missing> 2 years ago /bin/sh -c apt-get update && apt-get install… 1.95MB
<missing> 2 years ago /bin/sh -c set -ex; if ! command -v gpg > /… 0B
<missing> 2 years ago /bin/sh -c apt-get update && apt-get install… 41.1MB
<missing> 2 years ago /bin/sh -c #(nop) CMD ["bash"] 0B
<missing> 2 years ago /bin/sh -c #(nop) ADD file:8d73a09e59fe50289… 127MB
