# syntax=docker/dockerfile:1
FROM ubuntu:latest
COPY . .
RUN echo "update"
RUN apt-get update
RUN echo "node"
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
RUN bash -c "source ${HOME}/.bashrc"
RUN nvm install --lts
RUN nvm install npm
RUN echo "install angular"
RUN npm install -g @angular/cli
CMD cd front-api-coletima
CMD ng serve
