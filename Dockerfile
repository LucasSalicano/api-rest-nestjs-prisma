FROM node:lts

RUN apt-get update
RUN apt-get install -y openssl

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app
