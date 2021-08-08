<h2 align="center">
   Desafio para a vaga de Desenvolvedor Full Stack na Growth Tech.
</h2>

<p align="center">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/danielcti/growthtech-fullstack-challenge">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/danielcti/growthtech-fullstack-challenge">
  
  <a href="https://github.com/danielcti/growthtech-fullstack-challenge/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danielcti/growthtech-fullstack-challenge">
</a>

<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

</br>

<ul>
   <li> :camera: <a href="#camera-imagens-do-projeto">Imagens do projeto</a> </li>
   <li> :gear: <a href="#gear-tecnologias">Tecnologias</a> </li>
   <li> :pager: <a href="#pager-desafio">Desafio Proposto</a> </li>
   <li> :running: <a href="#running-executando">Rodando o Projeto</a> </li>
   <li> :memo:<a href="#memo-licença">Licença</a> </li>
   <li> :phone: <a href="#phone-contato">Contato</a> </li>
</ul>

## :camera: Imagens do projeto

  <p  align="center">
<img src="https://github.com/danielcti/growthtech-fullstack-challenge/blob/main/readme_assets/companies-light.png?raw=true" width=51% />
<img src="https://github.com/danielcti/growthtech-fullstack-challenge/blob/main/readme_assets/companies-dark.png?raw=true" width=48% />
  </p>
  <p  align="center">
<img src="https://github.com/danielcti/growthtech-fullstack-challenge/blob/main/readme_assets/users-light.png?raw=true" width=52% />
<img src="https://github.com/danielcti/growthtech-fullstack-challenge/blob/main/readme_assets/users-dark.png?raw=true" width=46% />
  </p>
  <p  align="center">
<img src="https://github.com/danielcti/growthtech-fullstack-challenge/blob/main/readme_assets/company-light.png?raw=true" width=48% />
<img src="https://github.com/danielcti/growthtech-fullstack-challenge/blob/main/readme_assets/company-dark.png?raw=true" width=51% />
  </p>
  <p  align="center">
<img src="https://github.com/danielcti/growthtech-fullstack-challenge/blob/main/readme_assets/user-light.png?raw=true" width=52% />
<img src="https://github.com/danielcti/growthtech-fullstack-challenge/blob/main/readme_assets/user-dark.png?raw=true" width=47% />
  </p>
  <p  align="center">
<img src="https://github.com/danielcti/growthtech-fullstack-challenge/blob/main/readme_assets/post-light.png?raw=true" width=49% />
<img src="https://github.com/danielcti/growthtech-fullstack-challenge/blob/main/readme_assets/post-dark.png?raw=true" width=46% />
  </p>
 </h3>

## :gear: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- <h3>Back-end:
- [Node.js](https://nodejs.org/en/)
  </br> Express, Axios e Nodemon.
- <h3>Front-end:
- [React](https://reactjs.org)
  </br> Axios, Styled Components, Polished e React Icons.

## :pager: Desafio

Uma empresa deseja realizar um monitoramento de outros grupos empresariais em um site X para analisar seus posts. Sua tarefa é criar uma simples API que captura apenas os usuários (http://jsonplaceholder.typicode.com/users) os quais a empresa em que trabalham fazem parte de um grupo e exiba seus posts (http://jsonplaceholder.typicode.com/posts) unido do nome do funcionário e sua empresa. Além disso criar uma tela para facilitar a leitura desses posts.


## :running: Executando

Rode o comando `yarn` nas pastas backend e frontend para baixar todas as depêndencias necesárias para rodar a aplicação.

<h4> Inicie o projeto em modo desenvolvimento com os seguintes comandos: </h4>

<h4> Front-end: </h4>

```
yarn start
-> O backend precisa estar rodando.
```

<h4> Back-end: </h4>

```
yarn dev
```

<h3>Rotas Disponíveis:</h3>

| método | caminho                      | recebe                            | retorna                               |
|:------:|------------------------------|-----------------------------------|---------------------------------------|
| get    | companies                    |                                   | Lista de empresas disponíveis         |
| get    | companies/:slug              | ex: companies/romaguera-crona     | Empresa com o slug informado          |
| get    | users                        |                                   | Lista de usuários disponíveis         |
| get    | users/:id                    | ex: users/1                       | Usuário com o id informado            |
| get    | users/:id/posts              | ex: users/1/posts                 | Posts do usuário com o id informado   |
| get    | posts?company=<company_name> | ex: posts?company=Romaguera Crona | Posts da empresa com o nome informado |
| get    | posts/:id                    | ex: posts/1                       | Post com o id informado               |

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## :phone: Contato

<p align="center">
<a href="https://www.linkedin.com/in/dpc2/" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-@dpc2-blue?style=flat&logo=linkedin"></a>
<a href="mailto:dpc2@cin.ufpe.br"><img alt="Email" src="https://img.shields.io/badge/Email-dpc2@cin.ufpe.br-blue?style=flat&logo=gmail"></a>
</p>