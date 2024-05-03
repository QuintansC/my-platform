# Criando interface de plataforma

Inteface de plataforma utilizando NextJS e Prisma

### Em desenvolvimento

- [x] Implentar funcionalidades das tasks

### Features

- [x] Utilizar nextJS
- [x] Home
- [x] Cadastro
- [x] Login
- [x] Dashboard
- [x] Chat Page
- [x] Backend
- [x] Dockerizar dependencias
- [x] Prisma
- [ ] Implentar funcionalidades das tasks
- [ ] Implementar Funcionalidades
- [ ] Backend
- [ ] Dockerizar dependencias
- [ ] KanBan
- [ ] To do List

# Indices da aplicação

<!--ts-->

- [Features](#Features)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Como usar](#comandos)
- [Sobre](#Detalhes-da-aplicação)
<!--te-->

<details>
  <summary>Telas da aplicação</summary>
    <img src="public/images/README/home.png" width='340px' height='150px'>
    <img src="public/images/README/cadastro.jpeg" width='340px' height='150px'>
    <img src="public/images/README/login.jpeg" width='340px' height='150px'>
</details>

## Tecnologias

<br>
Tecnologias utilizadas:<br>

<a href="https://code.visualstudio.com/">![Badge](https://img.shields.io/badge/-Visual%20Studio%20Code-000000?style=for-the-badge&logo=visual-studio-code)</a>
<a href="https://pt-br.reactjs.org/">![Badge](https://img.shields.io/badge/-Next%20JS-000000?style=for-the-badge&logo=nextdotjs)</a>
<a href="https://www.w3schools.com/css/">![Badge](https://img.shields.io/badge/-CSS-blue?style=for-the-badge&logo=css3)</a>
<a href="https://www.typescriptlang.org/">![Badge](https://img.shields.io/badge/-Typescript-000000?style=for-the-badge&logo=typescript)</a>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## Installation

Here are the steps you need to follow to install the dependencies.

1. Download and extract the template from Next.js Templates.

2. After that **cd** into the template directory then run this command to install all the dependencies

```
npm install
```

or

```
yarn install
```

3. Now run this command to start the developement server

```
npm run dev
```

or

```
yarn dev
```

# Comandos para utilitarios

- Para rodar as migration

```
npx prisma migrate dev --name init

```

- Para composer rodar o composer

```
docker compose up --build
```

- Comando pra criar Minha Imagem Docker para Uso

```
docker run --name my-platform-node -p 3000:3000 -d my-platform
```

- Para rodar o container docker

```
docker build -t my-platform .
```
