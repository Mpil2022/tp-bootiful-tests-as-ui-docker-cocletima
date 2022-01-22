# syntax=docker/dockerfile:1
FROM node:16.13.2
COPY front-api-cocletima .
RUN npm install -g npm@8.3.2
RUN npm install -g @angular/cli
RUN npm install
CMD cd front-api-coletima & ng serve
