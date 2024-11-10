# Criando interface de plataforma

Inteface de plataforma utilizando NextJS e Prisma

<img src="public/images/logo/logo.png" width='340px' height='150px'>

### Em desenvolvimento

- [x] Implentar funcionalidades das tasks
- [x] Backend
- [x] KanBan

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
- [x] Deploy na vercel
- [x] Dockerizar dependencias
- [ ] Implementar Funcionalidades

# Indices da aplicação

<!--ts-->

- [Features](#Features)
- [Tecnologias](#tecnologias)
- [Como usar](#Comandos-para-utilitários)
- [Instalação](#Installation)
- [Imagens da Aplicação](#Detalhes-da-aplicação)
<!--te-->

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

- Aqui estao os passos que você precisa para instalar as dependencias.

1. Depois de entrar no diretorio rode esse comando para instalar todas as dependencias

```
npm install
```

or

```
yarn install
```

2. Agora rode o comando para iniciar o servidor de desenvolvimento

```
npm run dev
```

or

```
yarn dev
```

# Comandos para utilitários

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

- Para rodar o container dockerfile

```
docker build -t my-platform .
```

# Detalhes da aplicação

<details>
  <summary>Telas da aplicação</summary>
    <img src="public/images/application/ecomerceDash.png" width='640px' height='350px'>
    <img src="public/images/application/kanban.png" width='640px' height='350px'>
    <img src="public/images/application/calendario.png" width='640px' height='350px'>
    <img src="public/images/application/list.png" width='640px' height='350px'>
    <img src="public/images/application/ecomerceDashWhite.png" width='640px' height='350px'>
    <img src="public/images/application/kanbanWhite.png" width='640px' height='350px'>
    <img src="public/images/application/calendarioWhite.png" width='640px' height='350px'>
    <img src="public/images/application/listWhite.png" width='640px' height='350px'>
    <img src="public/images/application/loginPage.png" width='640px' height='350px'>
    <img src="public/images/application/registerPage.png" width='640px' height='350px'>
</details>
