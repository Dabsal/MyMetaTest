# MyMetaTest

Um projeto **Ruby on Rails** com **Vite** e **TailwindCSS**, containerizado em **Docker**, que exibe um catálogo de projetos em formato de carrossel interativo.  
A interface é dinâmica: ao passar o mouse sobre um projeto, sua imagem se torna o **plano de fundo da página**, criando uma experiência imersiva.

---

## Requisitos

Verifique se você possui instalado:

1. [Docker](https://docs.docker.com/get-docker/)  
2. [Docker Compose](https://docs.docker.com/compose/) (opcional, se preferir usar `docker-compose up`)  
3. Git (para clonar o repositório)  

---

## Clonando o Repositório

1. Clone o repositório com o seguinte comando na pasta desejada para armazenar os arquivos:

   git clone https://github.com/Dabsal/MyMetaTest.git

2. Acesse a pasta do projeto com o seguinte comando:

   cd MyMetaTest

---

## Executando com Docker

1. Com o docker rodando, por exemplo com o docker desktop aberto, Crie a imagem Docker:

   docker build -t metatest .

2. Remova o container anterior (caso exista):

   docker rm -f metatest

3. Execute o container:

   docker run -d -p 3000:80 -e RAILS_MASTER_KEY=$(cat config/master.key) --name metatest metatest

4. Acesse o projeto no navegador de preferencia:

   http://localhost:3000

---

## Estrutura do Projeto

1. `app/controllers` → Controladores Rails (os dados dos projetos são simulados no controller)  
2. `app/views` → Views em **ERB** com **TailwindCSS**  
3. `app/javascript` → Código JS integrado com **Stimulus** e **Vite**  
4. `Dockerfile` → Configuração para build e execução no Docker  
5. `vite.config.ts` → Configuração do Vite  

---

## Funcionalidades

1. Carrossel interativo com navegação por setas  
2. Cards dinâmicos carregados do controller  
3. Background da página alterado de acordo com o projeto em destaque  
4. Layout responsivo com **TailwindCSS**  
5. Build de assets gerenciado pelo **Vite Ruby**  

## Autor

Feito por **Davi Saldanha**  
GitHub: [@Dabsal](https://github.com/Dabsal)

