# Calculadora de CDB

Este projeto consiste em uma aplicação para calcular o valor bruto e líquido de um investimento em CDB (Certificado de Depósito Bancário).

## Estrutura do Projeto

- **Backend**: Desenvolvido em .NET 8, fornecendo uma Web API para calcular o CDB.
- **Frontend**: Desenvolvido em Angular 18, fornecendo uma interface para entrada de dados e visualização dos resultados.

## Requisitos

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js e npm](https://nodejs.org/en/download/) (para o frontend)
- [Angular CLI](https://angular.io/cli) (para o frontend)

## Configuração e Execução

### Backend

1. Navegue até o diretório do projeto backend:

    ```bash
    cd CDBCalculatorApi
    ```

2. Restaure as dependências:

    ```bash
    dotnet restore
    ```

3. Compile a aplicação:

    ```bash
    dotnet build
    ```

4. Execute a aplicação:

    ```bash
    dotnet watch run
    ```

4. A API estará disponível em `https://localhost:5064`.

### Frontend

1. Navegue até o diretório do projeto frontend:

    ```bash
    cd CDBCalculatorWeb
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Execute a aplicação:

    ```bash
    ng serve --open
    ```

4. A aplicação será aberta no navegador em `http://localhost:4200`.

## Testes

### Backend

Para executar os testes do backend e garantir cobertura de teste acima de 90% na camada lógica:

1. Navegue até o diretório do projeto backend:

    ```bash
    cd CDBCalculatorApi
    ```

2. Execute os testes:

    ```bash
    dotnet test
    ```

### Frontend

Para executar os testes do frontend:

1. Navegue até o diretório do projeto frontend:

    ```bash
    cd CDBCalculatorWeb
    ```

2. Execute os testes:

    ```bash
    ng test
    ```
**Nota**: É necessário ter o Google Chrome instalado para executar os testes do frontend.
