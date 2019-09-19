FROM node:10.12.0-alpine

#add bash

RUN apk update
RUN apk upgrade
RUN apk add bash

# Create app directory
WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]