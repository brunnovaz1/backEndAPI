# Guia para rodar a API de Coleções de Músicas


##  Primeiro, clone o repositório remoto usando o comando git clone no terminal:

  - git clone <URL-do-repositório>


## Acesse a pasta do projeto:

  - cd <nome-do-repositório>


## Instale as dependências:

  - npm install
  - npm install mongoose dotenv
  - npm install swagger-ui-express yaml
  - npm install --save-dev nodemon jest supertest
  - npm install jsonwebtoken


## Execute o projeto em modo de desenvolvimento:

  - npm run dev 


## Abrir outro terminal e execute os testes:

  - npm run test


## Modelo BODY DO JSON para criar o Usuário:

{
  "email": "exemplo@com.br",
  "senha": "12345"
}


## Modelo BODY DO JSON para criar a Coleção de Músicas:

{
  "nome": "Exemplo",
  "autor": "John",
  "musicas": [
    {
      "titulo": "Música A",
      "artista": "Artista A"
    },
    {
      "titulo": "Música B",
      "artista": "Artista B"
    }
  ]
}