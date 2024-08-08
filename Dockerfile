FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY prisma/. /usr/src/app/prisma/.

RUN yarn install

COPY . .

CMD [ "yarn", "dev" ]