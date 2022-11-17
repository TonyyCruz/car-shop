<h1 align="center">Projeto Car Shop</h1>
<p align="center">Neste projeto, foi desenvolvida uma API para gerenciar uma concessionária de veículos utilizando <strong>typeScript</strong> e <strong>POO</strong> em uma arquitetura <strong>MSC</strong> (Model, Service, Controller) além de testes unitários.

<br>

<h2 align="center">📃 Sobre o Projeto</h2>

<p align="center">
  Foi desenvolvida uma aplicação em Node.js com typeScript usando o ODM (Object Data Modeling) mongoose para fazer um CRUD (create, read, update, delete) de veículos em um banco de dados MongoDb respeitando os princípios do REST.
  Para segurança da aplicação, foram feitos testes unitários nas camadas Controller, Service e Models utilizando Mocha e Chai.
</p>

<br>

<h2 align="center">Rotas utilizáveis</h2>

<details>
  <summary><strong>Ver rotas</strong></summary><br />
  
  - POST `/cars` para cadastrar novo carro. Utilize um body nesse formato:

```jsx
{
  "model": "Batmobile",
  "year": 2021,
  "color": "black",
  "buyValue": 36500000,
  "seatsQty": 2,
  "doorsQty": 2
}
```
  
---
  
- POST `/motorcycles` para cadastrar uma nova moto. Utilize um body nesse formato:

```jsx
{
  "model": "batcycle",
  "year": 2016,
  "color": "black",
  "buyValue": 12000000,
  "category": "Custom",
  "engineCapacity": 2500
}
```

---

- GET `/cars` traz todos os carros cadastrados.

---

- GET `/cars/:id` traz o carro correspondente ao id enviado se ele existir  no banco de dados.

---

- GET `/motorcycles` todas as motos cadastradas.

---
  
- GET `/motorcycles/:id` traz a moto correspondente ao id enviado se ele existir  no banco de dados.

---

- PUT `/cars/:id` para atualizar o carro com o id informado. Utilize um body nesse formato:

```jsx
{
  "_id": "4edd40c86762e0fb12000003",
  "model": "the Mean Machine",
  "year": 1968,
  "color": "purple",
  "buyValue": 15000,
  "seatsQty": 2,
  "doorsQty": 2
}
```

---
  
- PUT `/motorcycles/:id` para atualizar o carro com o id informado. Utilize um body nesse formato:

```jsx
{
   "_id": "4edd40c86762e0fb12000003",
  "model": "Hell Cycle",
  "year": 2007,
  "color": "silver",
  "buyValue": 6500000,
  "category": "Custom",
  "engineCapacity": 1000
}
```

---
  
- DELETE `/cars/:id` deleta o carro com o id correspondente ao enviado caso exista.
  
---
  
- DELETE `/motorcycles/:id` deleta a moto com o id correspondente ao enviado caso exista.

</details>

<br>

---

### 🛠 Tecnologias e Bibliotecas utilizadas no desenvolvimento do projeto

- **[Node.js](https://nodejs.org/en/)**

- **[MongoDb](https://www.mongodb.com/)**

- **[mongoose](https://www.mongodb.com/tools/mongoose)**

- **[Express](http://expressjs.com/pt-br/)**

- **[Nodemon](https://www.npmjs.com/package/nodemon)**
  
- **[Zod](https://github.com/colinhacks/zod)**

- **[POO](https://www.javatpoint.com/pt/conceitos-de-poo-em-java)**

- **[TypeScript](https://www.typescriptlang.org/)**

---

### 🚀 Como executar o projeto

_Pré-requisitos_

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Mysql](https://www.mongodb.com/docs/manual/installation/) para rodar local ou [Docker](https://docs.docker.com/get-docker/) para rodar em container.


É recomendado utilizar algum cliente HTTP, como [Postman](https://www.postman.com/) ou o [Insomnia](https://insomnia.rest/download).

Também é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---

_Clone o repositorio_

```jsx
git git@github.com:TonyyCruz/car-shop.git
```

---


<details>
  <summary><strong>:whale: Rodando no Docker</strong></summary><br />
  
  ## Com Docker
 
 
_Rode o serviço na raiz do projeto o comando_

```jsx
  docker-compose up -d
```

- Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão `(27017)`, ou adapte, caso queria fazer uso da aplicação em containers.

- Esse serviço irá inicializar dois containers chamados car_shop e outro chamado car_shop_db.
- A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

_Via CLI use o comando_
```jsx
docker exec -it car_shop bash
```
- Ele te dará acesso ao terminal interativo do container blogs_api(node) criado pelo compose, que está rodando em segundo plano.

_Instale as dependências `dentro do container` com_

```jsx
npm install
```

⚠️Atenção: Caso opte por utilizar o Docker, TODOS os scripts disponíveis no package.json devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec.
  
  </details>
  
---
  
<details>
  <summary><strong>:computer: Rodando Localmente</strong></summary><br />
 
 _Instale as dependências com o comando_
 
 ```jsx
npm install
```
- Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
  - Recomenda-se a versão `^16`
  
 ⚠️Atenção: Não esqueça de renomear/configurar o arquivo .env.example
</details>

---


### 💡 Scripts prontos
<details>
  <summary><strong>Scripts</strong></summary><br />

  - Iniciar o servidor:
  ```sh
    npm run dev
  ```

  - Iniciar rodar os testes:
  ```sh
    npm run test:dev
  ```
  
    - Verificar cobertura dos testes:
  ```sh
    npm run test:coverage
  ```

  <br />
</details>

---
