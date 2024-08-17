#exec normal da imagem
FROM node:lts-alpine

ENV HOME=/app
WORKDIR $HOME

COPY package*.json ./

COPY public ./

RUN apk update && apk add --no-cache bash
RUN yarn && yarn cache clean
