# Conteúdo do arquivo README.md

# CheckSync

CheckSync é um aplicativo web que permite aos usuários gerenciar checklists de forma eficiente. O aplicativo utiliza Firebase para autenticação de usuários e armazenamento de dados.

## Estrutura do Projeto

- `src/pages/login.html`: Página de login com formulário de autenticação.
- `src/pages/menu.html`: Página do menu acessada após a autenticação.
- `src/styles/login.css`: Estilos para a página de login.
- `src/styles/menu.css`: Estilos para a página do menu.
- `src/js/auth.js`: Lógica de autenticação utilizando Firebase.
- `src/js/firebase-config.js`: Configuração do Firebase.
- `src/js/menu.js`: Lógica para a página do menu.
- `src/assets`: Diretório para arquivos estáticos.

## Instalação

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd checksync-app
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

1. Configure suas credenciais do Firebase no arquivo `.env`.
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
3. Acesse o aplicativo em seu navegador.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License.