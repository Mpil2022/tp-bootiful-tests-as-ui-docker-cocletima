# syntax=docker/dockerfile:1
FROM ubuntu:latest
COPY . .
RUN echo "update"
RUN apt-get update
RUN echo "node"
RUN apt-get install nodejs -y
RUN echo "install angular"
RUN npm install -g angular
CMD cd front-api-coletima
CMD ng serve
