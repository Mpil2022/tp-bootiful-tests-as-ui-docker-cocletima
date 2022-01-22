# syntax=docker/dockerfile:1
FROM node:16.13.2
COPY . .
RUN npm install -g npm@8.3.2
RUN npm install -g @angular/cli
RUN cd front-api-coletima & npm install
CMD cd front-api-coletima & ng serve
