# syntax=docker/dockerfile:1
FROM node:16.13.2
COPY front-api-cocletima front-api-cocletima
RUN npm install -g npm@8.3.2
RUN npm install -g @angular/cli
RUN cd front-api-cocletima && npm install
CMD cd front-api-cocletima && ng serve --host 0.0.0.0
EXPOSE 4200
