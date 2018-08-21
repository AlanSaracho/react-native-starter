#Imagen Docker para react native
FROM ubuntu:bionic
MAINTAINER Johander Vazquez <johander.vazquez@enerminds.com>

#Instalando node
RUN apt update && \
	apt install -y curl && \
	apt install -y gnupg && \
	curl -sL https://deb.nodesource.com/setup_8.x | bash && \
	apt install -y nodejs

#Instalando React Native
RUN npm install -g react-native-cli

#Instalando java
RUN apt install -y software-properties-common && \
	echo "oracle-java8-installer shared/accepted-oracle-license-v1-1 select true" | debconf-set-selections && \
	echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" > /etc/apt/sources.list.d/webupd8team-java-trusty.list && \
	apt-key adv --keyserver keyserver.ubuntu.com --recv-keys EEA14886 && \
	apt-get update && \
	DEBIAN_FRONTEND=noninteractive apt install -y --force-yes --no-install-recommends oracle-java8-installer && \
	apt-get clean

#Instalando soporte para 32 bit de android SDK
RUN dpkg --add-architecture i386 && \
	apt-get update -q && \
	DEBIAN_FRONTEND=noninteractive apt-get install -y libc6:i386 libstdc++6:i386 libgcc1:i386 libncurses5:i386 libz1:i386 libglu1

ENV	ANDROID_HOME /root/Android/Sdk
ENV PATH ${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${ANDROID_HOME}/platform-tools
ENV ANDROID_SDK_ROOT /root/Android/Sdk
ENV ANDROID_AVD_ROOT /root/.android/avd

#Instalando sdk
RUN mkdir $HOME/Android && \
	mkdir $HOME/Android/Sdk && \
	mkdir $HOME/Android/Sdk/platforms && \
	apt install -y wget && \
	apt install -y unzip && \
	apt install -y qemu-kvm libvirt-bin virtinst bridge-utils cpu-checker libvirt-bin ubuntu-vm-builder bridge-utils && \
	wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip && \
	unzip sdk-tools-linux-4333796.zip && \
	wget https://dl.google.com/android/repository/platform-tools_r28.0.0-linux.zip && \
	unzip platform-tools_r28.0.0-linux.zip && \
	mv tools $HOME/Android/Sdk && \
	mv platform-tools $HOME/Android/Sdk && \
	yes | sdkmanager --licenses

# Create emulator
RUN touch /root/.android/repositories.cfg && \
	sdkmanager "system-images;android-26;google_apis;x86_64" && \
	echo "no" | avdmanager create avd -n Nexus_5_26 -k "system-images;android-26;google_apis;x86_64"

# Limpiando y creando directorio de trabajo
RUN apt-get clean && \
	mkdir -p $HOME/workspace

WORKDIR $HOME/workspace
