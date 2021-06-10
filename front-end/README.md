![](https://i.imgur.com/xG74tOh.png)

# Desafio Front-end - Módulo 3

A empresa que você está trabalhando recebeu uma demanda de um cliente muito importante, trata-se de um projeto de dashboard para um Market Place, onde o usuário deve se cadastrar e logar na dashboard, após o login ele poderá adicionar, remover, excluir e alterar produtos da sua loja, bem como fazer a edição do seu perfil. Cada usuário irá representar uma loja no Market Place. Lembre-se, esse é um cliente muito importante e você é o responsável por entregar da melhor maneira a solução para o problema dele.

## Front-end

Telas que precisam ser desenvolvidas:

## Área não logada (Antes do login)

### Cadastro de usuário:
Nessa tela precisaremos ter um formulário onde iremos inserir informações para que o cadastro seja efetivado, veja abaixo dicas e regras:
- Regras:
    - É preciso já no front-end fazer uma validação de igualdade de senhas (senha e confirmação de senha);
    - Validar se os campos obrigatórios estão preenchidos antes de enviar a requisição para o back-end;
    - Depois do cadastro efetuado devemos redirecionar o usuário para a tela de login;
    - Campos que precisam ser criados na tela:
        - nome
        - nome_loja
        - email
        - senha
        - confirmação de senha
<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>react-hook-form</code></li>
    <li><code>react-router-dom</code></li>
    <li><code>fetch</code></li>
    <li>
        components de <code>input</code>,             <code>buttons</code> e <code>links</code> do Material UI
    <li>
        Wireframe da tela: <img src="https://i.imgur.com/gYEeI6D.jpg">
    </li>
    </li>
    </ul>
</details>



### Login: 
Na tela de login precisaremos fazer uma requisição para o back-end com a intenção de validar as credenciais de acesso (e-mail e senha), após isso precisaremos armazenar as informações de token para que possamos usar nas demais requisições internas da dashboard, veja abaixo dicas e regras:

- Regras:
    - Requisição para validar as credenciais;
    - Armazenar token para usar nas próximas requisições;
    - Campos que precisam ser criados:
        - email
        - senha

<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>react-hook-form</code></li>
    <li><code>react-router-dom</code></li>
    <li><code>fetch</code></li>
    <li>
        components de <code>input</code>,             <code>buttons</code> e <code>links</code> do Material UI
    </li>
    <li> persistir (armazenar) <code>token</code> para utilizarmos em requições futuras
    </li>
    <li>
        Wireframe da tela: <img src="https://i.imgur.com/ZJFQ0V3.jpg">
    </li>
    </ul>
</details>

## Área logada (após login)

## Navbar
Criar uma `navbar` para podermos navegar entre  perfil do usuário e loja, veja abaixo dicas:

<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>material-icons</code></li>
    <li><code>react-router-dom</code></li>
    <li>
        Wireframe da tela: <img src="https://i.imgur.com/lHKoHUm.png">
    </li>
    </ul>
</details>

### Perfil de usuário
Na tela de perfil do usuário iremos ter duas funcionalidades, primeiramente ela deve exibir as informações do usuário logado no momento, depois será possível fazer a edição dos dados de modo que haja uma atualização do perfil do usuário, lembre-se de que para alterar a senha é preciso informar a senha atual e a nova senha, veja abaixo dicas e regras:
- Regras:
    - Requisição para carregar os dados do perfil (ao entrar na tela);
    - Exibir as informações de perfil do usuário (menos a senha);
    - Permitir a edição das informações do perfil;
    - Ao realizar a atualização de senha é necessário informar a senha antiga, assim colocaremos um proteção para que somente quem possui a senha atual é que possa modificá-la;
    - Não deve ser possível fazer a atualização do e-mail cadastrado;
    - Após editar os campos, será necessário realizar uma requisição para o back-end enviando as informações atualizadas;
    - Campos que precisam ser criados:
        - nome 
        - nome_loja
        - email
        - senha;

<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>fetch</code></li>
    <li><code>react-hook-form</code></li>
    <li>
        components de <code>input</code>,             <code>buttons</code> e <code>links</code> do Material UI
    </li>
    <li>
        Wireframe da tela: <img src="https://i.imgur.com/bCS8izd.png">
    </li>
    </ul>
</details>


### Cadastro de produtos
Na tela de cadastro de produtos não teremos muitos segredos, nela nós iremos realizar a adição de um novo produto na nossa listagem de produtos, para isso usaremos um formulário, veja abaixo dicas e regras:
- Regras:
    - Validação de campos do formulário;
    - Realizar requisição para o back-end com o intuito de adicionar esse produto no banco de dados;
    - Após a inserção precisamos limpar o formulário e redirecionarmos o usuário para a tela de listagem de produtos;
    - Campos necessários no formulário:        
        - nome
        - preco
        - estoque
        - descricao
        - imagem (campo de input onde adicionaremos o link de uma imagem da internet)
        - usuario_id

<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>react-hook-form</code></li>
    <li><code>react-router-dom</code></li>
    <li><code>fetch</code></li>
    <li>
        components de <code>input</code>,             <code>buttons</code> e <code>links</code> do Material UI
    </li>
    <li>
        Wireframe da tela: 
        <ul>
            <li>Cadastro de produto: <img src="https://i.imgur.com/kChcO53.png"></li>
            <li>Cadastro de produto: <img src="https://i.imgur.com/KpwcUvG.png"></li>
        </ul>
    </li>
    </ul>
</details>

### Listagem de produtos cadastrados:
Nessa tela nós teremos uma lista de produtos que estão cadastrados na nossa loja, essa lista terá um scroll horizontal, assim nós conseguiremos arrastar e ver mais produtos, veja abaixo dicas e regras:
- Regras:
    - Realizar requição para preencher a lista de produtos;
    - Popular o `JSX` com a listagem de produtos;
    - Ao pastar o mouse (`mouse hover`) num produto, deve aparecer a opção de excluir ou editar o produto;
        - Ao clicar em editar devemos redirecionar o usuário para a tela de "cadastro de produtos" com os dados do produto atual preenchidos, nesse momento a tela de "cadastro de produtos" será a tela de "editar produtos";
        - Ao Clicar em excluir devemos realizar a confirmação da exclusão (por meio de um `modal`) e após a resposta afirmativa do usuário, enviar a requisição para o back-end dizendo qual produto deve ser excluído;
    - Termos uma lista horizontal de produtos cadastrados, essa lista contará com as seguintes informações:
        - imagem
        - nome
        - estoque
        - preco
        - descricao
    - Permitir a exclusão de um produto mediante confirmação via `modal`;

<details>
    <summary>Dicas</summary>
    <ul>
    <li><code>fetch</code></li>
    <li>
        components de <code>input</code>,             <code>buttons</code> e <code>links</code> do Material UI
    </li>
    <li>
        Wireframe da tela: 
        <ul>
            <li>Listagem de produtos: <img src="https://i.imgur.com/mbtzDSd.png"></li>
            <li>Dialog de confirmação - Parte 1: <img src="https://i.imgur.com/Snn7mQT.png"></li>
            <li>Dialog de confirmação concedida: <img src="https://i.imgur.com/SkPXS9f.png"></li>
            <li>Mouse Hover no produto: <img src="https://i.imgur.com/YkuNL8V.png"></li>
        </ul>
    </li>
    </ul>
</details>


## Requisitos obrigatórios
- Sua aplicação deve ser desenvolvida com `React`;
- Trabalhar com `Hooks` (`useState`, `useEffect`, `useRef`...)
- Trabalhar com `componentização`;
- Utilizar `context API` (Context);
- Utilizar roteamento (`react-router-dom`);
- Utilizar Material UI para criação das telas;
- As requisições devem ser feitas utilizando `fetch`;
- Integração ao back-end (sua API ou [inserir api do guido]());
- Seguir a estrutura de layout do wireframe que está no arquivo `.fig` que se encontra na pasta raiz do desafio;

## Requisitos extras
- Gerenciar o estado das requisições (utilizar component do Material UI para informar erros das requisições);
- Adicionar `skeleton` (Material UI) para carregamentos de informações vindas do back-end;
- Gerenciar o estado de formulários utilizando `react-hook-form`;
- Após a autenticação impedir que o usuário acesse a tela de login;
- Criar função de `sign-out` (deslogar) com um botão na nossa navBar;


## Links Úteis
- Documentação do ReactJS: https://reactjs.org/
    - Context API: https://reactjs.org/docs/context.html
    - Hooks (useState, useEffect, useRef): https://reactjs.org/docs/hooks-intro.html
- Documentação react-router-dom: https://reactrouter.com/web/guides/quick-start
- Documentação react-hook-form: https://react-hook-form.com/
- Documentação Material UI: https://material-ui.com/
- Documentação Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


**LEMBRE-SE**: Feito é melhor que perfeito!!!


###### tags: `front-end` `módulo 3` `React` `HTML` `CSS` `desafio`
