# Projeto Denúncia Comunitária

Este repositório contém um sistema para facilitar a denúncia de problemas comunitários, como buracos em ruas, falta de iluminação, entre outros. O objetivo é permitir que os cidadãos reportem esses problemas de forma rápida e eficiente, para que as autoridades competentes possam tomar as devidas providências.

## Instalação
1. Clone o repositório
2. Instale as dependências com `npm install`
3. Configure as variáveis de ambiente conforme o arquivo `.env.example`
4. Inicie o servidor com `npm start`

##  Tecnologias Utilizadas

- Node.js
- Express
- CORS
- TypeScript
- Thunder Client 
- MongoDB Atlas
- Mongoose

## Funcionalidades

A API possui as seguintes rotas:

### POST/denuncias
Cria uma nova denúncia.

![POST](./prints/POSTdenuncia.png)

### GET/denuncias
Lista todas as denúncias.

![GET](./prints/GETdenuncia.png)

### GET/denuncias/categoria
Lista todas as denúncias de uma categoria.

![GET](./prints/GETdenuncia-categoria.png)
![GET response](./prints/GETdenuncia-categoria-response.png)

## Conexão com Banco de Dados

A API foi conectada ao MongoDB Atlas utilizando o Mongoose.

![MongoDB conexão](./prints/mongodb-conectado.png)

## Deploy
A aplicação foi deployada no Google Cloud Run.

## Autoria

Este projeto foi desenvolvido por **Geovana Mendes**, estudante de Sistemas de Informação, como parte do programa **Aprofunda** da **PretaLab**.
