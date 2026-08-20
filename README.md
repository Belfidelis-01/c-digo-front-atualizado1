# Frontend — Sistema Web

## 1. Introdução

Este projeto corresponde ao frontend do sistema web desenvolvido durante o curso de **Técnico em Informática para Internet**.

O frontend é responsável pela interface de interação entre o usuário e o sistema, permitindo realizar operações como:

* Acesso à página principal;
* Cadastro de usuários;
* Login;
* Atualização de senha;
* Interação com as funcionalidades disponibilizadas pelo backend;
* Comunicação com a API através de requisições HTTP.

A aplicação foi desenvolvida utilizando **React** e utiliza componentes reutilizáveis para organização da interface.

---

## 2. Tecnologias utilizadas

* React
* JavaScript
* React Router DOM
* Axios
* JWT Decode
* React Icons
* HTML
* CSS
* Node.js
* npm
* Git/GitHub
* Vercel

O projeto foi criado utilizando o **Create React App** e possui scripts para execução em ambiente de desenvolvimento, testes e geração da versão de produção.

---

## 3. Arquitetura

O frontend utiliza uma arquitetura baseada em componentes e páginas React.

A aplicação utiliza o React para construção da interface e o React Router para gerenciamento da navegação entre as páginas.

As requisições realizadas pelo frontend são feitas através da biblioteca Axios, permitindo a comunicação com a API do backend.

```text
Usuário
   │
   ▼
Interface React
   │
   ├── Pages
   ├── Components
   └── React Router
          │
          ▼
        Axios
          │
          │ HTTP/HTTPS
          ▼
       Backend / API
          │
          ▼
       Banco de Dados
```

O fluxo básico da aplicação ocorre da seguinte maneira:

```text
Usuário
  ↓
React
  ↓
Componente / Página
  ↓
Axios
  ↓
API REST
  ↓
Backend
```

---

## 4. Estrutura do projeto

A estrutura principal do projeto está organizada da seguinte maneira:

```text
c-digo-front-atualizado1/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │
│   ├── pages/
│   │
│   ├── App.js
│   └── ...
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### Components

A pasta `components` contém componentes reutilizáveis da aplicação, utilizados para organizar partes da interface.

Entre os componentes existentes estão:

* Header;
* PopUp de login;
* PostBox;
* Componentes relacionados ao cadastro;
* Componentes de entrada de dados.

### Pages

A pasta `pages` contém as páginas principais da aplicação.

Entre elas estão:

* Página principal;
* Página de cadastro;
* Página de atualização de senha.

---

## 5. Instalação

### 5.1 Pré-requisitos

Para executar o frontend localmente, é necessário possuir:

* Node.js;
* npm;
* Git;
* Acesso ao backend da aplicação.

### 5.2 Clonar o projeto

Execute:

```bash
git clone https://github.com/Belfidelis-01/c-digo-front-atualizado1.git
```

Acesse a pasta do projeto:

```bash
cd c-digo-front-atualizado1
```

### 5.3 Instalar dependências

Execute:

```bash
npm install
```

O comando instala as dependências definidas no `package.json`.

### 5.4 Executar o projeto

Para iniciar o ambiente de desenvolvimento:

```bash
npm start
```

Após iniciar a aplicação, ela fica disponível normalmente em:

```text
http://localhost:3000
```

O Create React App também realiza a atualização automática da página durante o desenvolvimento quando os arquivos são modificados.

---

## 6. Dependências principais

As principais dependências utilizadas pelo projeto são:

| Dependência        | Função                                            |
| ------------------ | ------------------------------------------------- |
| `react`            | Biblioteca principal para construção da interface |
| `react-dom`        | Integração do React com o DOM                     |
| `react-router-dom` | Gerenciamento das rotas da aplicação              |
| `axios`            | Realização de requisições HTTP                    |
| `jwt-decode`       | Decodificação de informações presentes em JWT     |
| `react-icons`      | Utilização de ícones na interface                 |
| `react-scripts`    | Scripts e configuração do Create React App        |

Essas dependências estão declaradas no `package.json` do projeto.

---

## 7. Rotas da aplicação

O projeto utiliza `BrowserRouter`, `Routes` e `Route` para controlar a navegação entre as páginas.

As rotas atualmente configuradas são:

| Método | Rota              | Descrição                        |
| ------ | ----------------- | -------------------------------- |
| GET    | `/`               | Página principal                 |
| GET    | `/registrar`      | Página de cadastro               |
| GET    | `/atualizarsenha` | Página para atualização de senha |

### `/`

Corresponde à página principal da aplicação.

```text
/
```

### `/registrar`

Página destinada ao cadastro de usuários.

```text
/registrar
```

### `/atualizarsenha`

Página destinada à atualização da senha do usuário.

```text
/atualizarsenha
```

---

## 8. Comunicação com o Backend

O frontend utiliza **Axios** para realizar requisições HTTP para o backend.

Entre as operações implementadas atualmente estão:

```text
POST /login
PUT  /atualizar
```

### POST `/login`

Utilizado para realizar o login do usuário.

O frontend envia:

```json
{
  "email": "usuario@email.com",
  "senha": "senha"
}
```

A requisição é realizada através do Axios.

Atualmente, a implementação presente no código utiliza:

```text
http://localhost:5000/login
```

Após o login, o nome retornado pelo backend é armazenado no `localStorage` através da chave:

```text
nome
```

---

## 9. Atualização de senha

A aplicação possui uma página específica para atualização de senha.

A requisição é realizada através de:

```text
PUT /atualizar
```

O frontend envia:

```json
{
  "email": "usuario@email.com",
  "novaSenha": "novaSenha",
  "confirmarSenha": "novaSenha"
}
```

Atualmente, a requisição utiliza:

```text
http://localhost:5000/atualizar
```

Após uma resposta considerada bem-sucedida, a aplicação apresenta a mensagem:

```text
Senha atualizada com sucesso!
```

---

## 10. Autenticação

O projeto possui estrutura relacionada à autenticação de usuários.

O login é realizado através do componente de login, que envia as credenciais para o endpoint:

```text
POST /login
```

O projeto também possui a dependência:

```text
jwt-decode
```

destinada à decodificação de informações presentes em tokens JWT.

No código atual, o nome do usuário retornado pelo login é armazenado no `localStorage`.

```javascript
localStorage.setItem('nome', response.data.nome);
```

> **Observação:** a implementação atual não deve ser descrita como um sistema completo de gerenciamento de JWT no frontend, pois o código disponibilizado no repositório não demonstra armazenamento e envio de um token JWT nas requisições apresentadas.

---

## 11. Componentes

O projeto utiliza componentes React para dividir e organizar a interface.

Entre os componentes presentes estão:

### Header

Responsável pela estrutura do cabeçalho da aplicação.

### PopUp

Componente utilizado para exibição da interface de login.

O usuário informa:

* E-mail;
* Senha.

O componente realiza a requisição de login através do Axios.

### PostBox

Componente utilizado para a área relacionada às postagens e interação com os dados disponibilizados pelo sistema.

### Componentes de cadastro

Responsáveis pela interface utilizada para entrada dos dados necessários ao cadastro.

---

## 12. Testes

O projeto possui configuração de testes através do Create React App.

Para executar os testes:

```bash
npm test
```

O comando inicia o ambiente de testes em modo interativo.

---

## 13. Build de produção

Para gerar a versão de produção da aplicação, utilize:

```bash
npm run build
```

O comando gera uma versão otimizada da aplicação na pasta:

```text
build/
```

Essa versão pode ser utilizada para implantação em serviços de hospedagem compatíveis com aplicações React.

---

## 14. Deploy

O frontend está disponibilizado através do **Vercel**.

O repositório do GitHub possui o projeto associado ao domínio:

```text
https://c-digo-front-atualizado1.vercel.app
```

O processo de implantação pode ser representado da seguinte maneira:

```text
GitHub
   ↓
Vercel
   ↓
Frontend React
   ↓
Usuário
```

### Processo de implantação

1. Conectar o repositório GitHub ao Vercel;
2. Selecionar o projeto frontend;
3. Configurar o ambiente de execução;
4. Configurar o comando de build;
5. Realizar o deploy;
6. Acessar a aplicação através do domínio disponibilizado.

---

## 15. Integração com o Backend

A integração entre frontend e backend ocorre através de requisições HTTP.

O fluxo da aplicação é:

```text
Usuário
   ↓
Frontend React
   ↓
Axios
   ↓
API REST
   ↓
Node.js + Express
   ↓
Sequelize
   ↓
PostgreSQL
```

O frontend depende do backend para realizar operações relacionadas aos dados e à autenticação.

### Atenção sobre o ambiente de produção

No código atual, algumas requisições utilizam diretamente:

```text
http://localhost:5000
```

Isso significa que essas requisições estão configuradas para acessar um backend executado localmente.

Para utilização completa do frontend publicado no Vercel, as URLs das requisições devem apontar para a URL pública do backend ou ser configuradas através de variáveis de ambiente.

---

## 16. Variáveis de ambiente

No estado atual do repositório, as URLs da API aparecem diretamente em alguns componentes, utilizando:

```text
http://localhost:5000
```

Uma melhoria recomendada para o projeto é utilizar uma variável de ambiente para definir a URL da API.

Por exemplo:

```env
REACT_APP_API_URL=https://URL_DO_BACKEND
```

Assim, as requisições poderiam utilizar a variável:

```javascript
axios.post(`${process.env.REACT_APP_API_URL}/login`, dados)
```

Essa abordagem facilita a utilização do mesmo projeto em ambientes de desenvolvimento e produção.

> **Importante:** essa configuração é uma recomendação de melhoria e não representa uma configuração atualmente implementada no código.

---

## 17. Integração Frontend ↔ Backend

A comunicação entre as aplicações pode ser representada da seguinte forma:

```text
                 INTERNET
                    │
                    ▼
              ┌───────────┐
              │  Vercel   │
              │  Frontend │
              │   React   │
              └─────┬─────┘
                    │
                  Axios
                    │
                 HTTP/HTTPS
                    │
                    ▼
              ┌───────────┐
              │  Render   │
              │  Backend  │
              │ Node/Express
              └─────┬─────┘
                    │
                Sequelize
                    │
                    ▼
              ┌───────────┐
              │ PostgreSQL│
              └───────────┘
```

---

## 18. URLs

### Repositório

```text
https://github.com/Belfidelis-01/c-digo-front-atualizado1
```

### Aplicação

```text
https://c-digo-front-atualizado1.vercel.app
```

> A aplicação frontend está associada ao Vercel através do repositório GitHub.

### Backend

```text
URL_DO_BACKEND
```

Substitua pela URL pública do backend após o deploy.

---

## 19. Possíveis melhorias

Algumas melhorias podem ser realizadas futuramente no frontend:

* Utilizar variáveis de ambiente para a URL da API;
* Remover URLs `localhost` do código de produção;
* Centralizar as requisições Axios em um serviço ou arquivo de configuração;
* Implementar tratamento visual de erros das requisições;
* Melhorar o gerenciamento do token JWT;
* Adicionar estados de carregamento;
* Implementar testes dos principais componentes;
* Melhorar a responsividade da interface;
* Adicionar documentação visual das principais telas.

Essas melhorias não fazem parte necessariamente da implementação atual, mas podem facilitar a manutenção e evolução do sistema.

---

## 20. Autor

**Isabel dos Santos Fidélis**

Curso: Técnico em Informática para Internet

Disciplina: Projeto Front-End
