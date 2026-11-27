# Automação de Testes Web com Cypress e JavaScript

## 1. Visão geral do projeto

Projeto de automação de testes Web com Cypress e JavaScript, aplicando práticas de organização e reutilização de comandos para validação funcional.

## 2. Objetivos

Desenvolver uma solução de automação de testes Web, priorizando:

- Automação de fluxos funcionais.
- Validação de cenários positivos e negativos.
- Reutilização de comandos e ações.
- Organização e manutenibilidade dos testes.
- Execução automatizada por meio de CI/CD.

## 3. Aplicação sob teste

[SauceDemo](https://www.saucedemo.com/), aplicação de demonstração de comércio eletrônico.

## 4. Tecnologias utilizadas

- **Cypress 13.1.0:** framework de automação de testes End-to-End.
- **JavaScript:** linguagem utilizada no desenvolvimento dos testes.
- **Node.js e npm:** ambiente de execução e gerenciamento de dependências.
- **Git:** controle de versão.
- **GitHub Actions:** integração contínua e execução automatizada dos testes.

## 5. Estratégia de testes

A estratégia contempla a automação de fluxos funcionais da aplicação SauceDemo, abrangendo autenticação, gerenciamento do carrinho de compras e finalização de pedidos.

Na implementação, são adotadas práticas que favorecem a organização e a reutilização:

- Separação dos cenários por funcionalidades.
- Utilização de Custom Commands para encapsular ações reutilizáveis.
- Utilização de seletores `data-test` e outros atributos da interface.
- Aplicação de assertions para validar os resultados dos cenários.
- Execução dos testes em modo interativo e headless.

## 6. Escopo de testes

O escopo automatizado contempla três funcionalidades principais:

| Funcionalidade | Cenários |
|---|---|
| Login | Autenticação com credenciais válidas, usuário inválido, senha inválida, usuário vazio, senha vazia e ambos os campos vazios |
| Logout | Encerramento de sessão com sucesso |
| Carrinho de compras | Adição de produto, remoção de produto e finalização de compra |

**Total: 10 cenários automatizados.**

### Principais validações

- Acesso à página de produtos após autenticação.
- Exibição de mensagens de erro para credenciais inválidas.
- Validação de campos obrigatórios no login.
- Retorno à página de autenticação após logout.
- Adição e remoção de produtos do carrinho.
- Confirmação da finalização de compra.

## 7. Arquitetura do projeto

A automação utiliza a estrutura nativa do Cypress para organizar os testes e centralizar ações reutilizáveis por meio de Custom Commands.

Os componentes estão organizados com responsabilidades específicas:

- **E2E Specs:** implementação dos cenários automatizados e respectivas assertions.
- **Custom Commands:** encapsulamento de ações reutilizáveis, como login, logout e operações do carrinho.
- **Support:** carregamento dos comandos personalizados utilizados pelos testes.
- **Cypress Configuration:** configuração da URL base e dos parâmetros de execução.

## 8. Estrutura do projeto

```text
cypress-js-web-test/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── logout.cy.js
│   │   └── shoppingCart.cy.js
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## 9. Pré-requisitos

A execução dos testes requer:

- Node.js.
- npm.
- Git.
- Visual Studio Code ou outra IDE compatível com JavaScript.

O Cypress e suas dependências são instalados por meio do npm.

## 10. Instalação e configuração

**Clonar o repositório:**

```bash
git clone <URL_DO_REPOSITORIO>
```

**Acessar o diretório:**

```bash
cd cypress-js-web-test
```

**Instalar as dependências:**

```bash
npm install
```

## 11. Execução dos testes

O projeto disponibiliza comandos para execução dos testes em modo interativo e headless.

**Execução pela interface do Cypress:**

\```bash
# Abrir o Cypress
npm run cy:open
\```

Após a abertura da interface, selecionar o arquivo de teste desejado.

**Execução pelo terminal:**

\```bash
# Executar todos os testes em modo headless
npm test

# Executar utilizando o comando npx
npx cypress run
\```

**Execução com viewport reduzida:**

O projeto também disponibiliza scripts com viewport de 410 × 860 pixels, permitindo executar os fluxos em uma resolução menor.

\```bash
# Abrir o Cypress com viewport reduzida
npm run cy:open:mobile

# Executar os testes com viewport reduzida
npm run test:mobile
\```

Essa configuração altera as dimensões da janela de visualização, mas não substitui testes em dispositivos móveis reais ou emuladores Android e iOS.

## 12. Integração contínua

O projeto utiliza GitHub Actions para automatizar a execução dos testes em eventos de push e pull request.

A pipeline contempla:

- Preparação do ambiente de execução.
- Execução dos testes End-to-End utilizando Cypress no navegador Chrome.
- Publicação de screenshots gerados durante a execução como artefatos.
- Disponibilização dos artefatos para consulta no GitHub Actions.

Os artefatos são configurados para retenção de até 7 dias.

A gravação de vídeos está desabilitada na configuração atual do Cypress.
