# syntax=docker/dockerfile:1
FROM ubuntu:latest
COPY . .
ENV NODE_VERSION=16.13.2
RUN apt-get update
RUN apt-get install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version
RUN echo "install angular"
RUN node --version
RUN npm --version
RUN sudo npm install -g npm@8.3.2
RUN sudo npm install -g @angular/cli
RUN cd front-api-coletima & npm install
CMD cd front-api-coletima & ng serve
