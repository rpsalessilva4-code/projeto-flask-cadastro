Sistema de Cadastro com Flask

Projeto desenvolvido com Python e Flask, com o objetivo de praticar o desenvolvimento de aplicações web, criação de rotas e processamento de formulários.

Tecnologias utilizadas

- Python
- Flask
- HTML5
- CSS3
- JavaScript

Funcionalidades

- Cadastro de usuários.
- Coleta de informações por meio de formulários.
- Exibição dos cadastros realizados.
- Navegação entre páginas utilizando rotas Flask.
- Interações com JavaScript.

Estrutura do projeto

projeto-flask-cadastro/
    static/
        script.js
        style.css
    templates/
    app.py
    requirements.txt
    .gitignore

Como executar o projeto

Siga os passos abaixo para baixar e executar o projeto em seu computador.

1. Instale os programas necessários

Antes de começar, você precisa ter instalado:

- "Python" (https://www.python.org/downloads/) (Python 3.10 ou superior).
- "Visual Studio Code" (https://code.visualstudio.com/), para abrir e editar os arquivos do projeto.
- "Git" (https://git-scm.com/), caso escolha baixar o projeto pelo terminal.

Durante a instalação do Python no Windows, marque a opção Add Python to PATH.

2. Baixe o projeto

Você pode baixar o projeto de duas maneiras:

Opção A: Pelo Git

Se tiver o Git instalado, abra o terminal e execute:

git clone https://github.com/rpsalessilva4-code/projeto-flask-cadastro.git

Depois, entre na pasta do projeto:

cd projeto-flask-cadastro

Opção B: Pelo navegador

1. Acesse o "repositório do projeto" (https://github.com/rpsalessilva4-code/projeto-flask-cadastro).
2. Clique no botão verde Code.
3. Selecione Download ZIP.
4. Extraia o arquivo ZIP em uma pasta do seu computador.

3. Abra o projeto no Visual Studio Code

1. Abra o Visual Studio Code.
2. Clique em File (Arquivo).
3. Selecione Open Folder (Abrir Pasta).
4. Escolha a pasta "projeto-flask-cadastro".
5. Clique em Selecionar Pasta.

4. Abra o terminal

Com o projeto aberto no VS Code:

1. Clique em Terminal, na barra superior.
2. Selecione New Terminal (Novo Terminal).

Um terminal aparecerá na parte inferior da tela. É nele que você deverá digitar os próximos comandos.

5. Crie um ambiente virtual

No terminal, execute:

python -m venv venv

O ambiente virtual serve para manter as bibliotecas utilizadas pelo projeto separadas de outras instalações do Python.

6. Ative o ambiente virtual

No Windows, execute:

venv\Scripts\activate

Se tudo funcionar, aparecerá "(venv)" no início da linha do terminal.

7. Instale as dependências

Com o ambiente virtual ativado, execute:

pip install -r requirements.txt

Esse comando instala as bibliotecas necessárias para o funcionamento do projeto.

8. Execute a aplicação

No mesmo terminal, execute:

python app.py

Após iniciar o servidor, abra seu navegador e acesse:

http://127.0.0.1:5000

Pronto! A aplicação estará funcionando localmente no seu computador.

9. Como encerrar a aplicação

Para interromper o servidor, volte ao terminal do VS Code e pressione:

CTRL + C

O servidor será encerrado.

Objetivo do projeto

Este projeto faz parte do meu aprendizado em desenvolvimento de aplicações web, permitindo colocar em prática conceitos de programação com Python, Flask, HTML, CSS e JavaScript.

Autor

Ryan Pietro da Silva Sales

Estudante de Informática no IFSP.

"GitHub" (https://github.com/rpsalessilva4-code)

---
