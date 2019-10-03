# doc: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:10-alpine

# working directory of the applicati
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY client/package*.json ./client/
COPY server/package*.json ./server/

RUN cd client && npm install && cd ../server && npm install && cd ..

COPY . .
