<p align="center">
  <img src="https://image.ibb.co/m3cPEc/dsfsfsfsfdfsf.png" alt="Cabeçalho do Star Wars Game"/>
</p>

## Conteúdo
- [Visão Geral do Projeto](#visão-geral-do-projeto)
  - [Tecnologias](#tecnologias)
  - [Documentação Star Wars API](#documentação-star-wars-api)
- [Informações Iniciais](#informações-iniciais)
  - [Clonando o Repositório](#clonando-o-repositório)
  - [Instalando as Dependências](#instalando-as-dependências)
- [Servidor de Desenvolvimento](#servidor-de-desenvolvimento)
- [Novos Componentes](#novos-componentes)
- [Versão Compilada](#versão-compilada)
- [Testes](#testes)
- [Outras Informações](#outras-informações)

## Visão Geral do Projeto
O principal objetivo do desafio é o desenvolvimento de uma aplicação que servisse como cola para um jogo que consiste em descobrir um determinado planeta aleatório da fraquia Star Wars, fazendo perguntas sobre o mesmo. Estas perguntas seriam, por exemplo, qual o clima do local, o tipo de terreno, quantos filmes da franquia o local apareceu etc. A ideia é criar algo parecido com o *mockup* disponível nesse [link](https://gallery.mailchimp.com/690273598e6b17ca3a786d15d/images/e3bed735-b74c-454c-a125-6fcb8520c15b.png).

### Tecnologias
- HTML5

- CSS
  - [SCSS](https://sass-lang.com/)
  - [CSS Reset](https://gist.github.com/hcatlin/1027867)
  - [Hover.css](http://ianlunn.github.io/Hover/)
  - [SpinKit](http://tobiasahlin.com/spinkit/)
  - [Parallax Star](https://codepen.io/saransh/pen/BKJun) 
  
- JavaScript
  - TypeScript
  - Angular 5
  - Angular CLI  
  - Jasmine
  - Karma
  - Protractor

### Documentação Star Wars API
A documentação da API utilizada para obter os dados está disponível em: [SWAPI](https://swapi.co/).

## Informações Iniciais
Para realizar as ações a seguir, será necessário que tenha instalado em seu computador o **git** e o **node.js**. Abaixo seguem os sites para realizar o download e efetuar a instalação:
- [Git](https://git-scm.com/downloads)
- [Node.js - Windows/Mac](https://nodejs.org/en/download/)
- [Node.js - Linux](https://nodejs.org/en/download/package-manager/)

### Clonando o Repositório
Primeiro é preciso que efetue a clonagem do repositório para o seu computador para assim efetuar alterações de código. Mas antes de clonar o repositório é importante que realize um **fork**, ou seja, criar uma cópia do mesmo para o seu github. Para isso basta subir a página e clicar no botão de mesmo nome e aguardar alguns minutos. Depois basta clicar em **clone or download** e copiar a URL do respositório.

Já abrindo o bash do Git para efetuar a clonagem será necessário que digite a seguinte linha de código e informe a URL copiada anteriormente:
``` git
git clone <url-do-repositorio>
```

### Instalando as Dependências
Para instalar as dependências do projeto basta abrir o **Prompt de Comando do Node.js** (caso você esteja no linux, basta utilizar o terminal), acessar a pasta do repositório e inserir o seguinte comando:
``` node
npm install
```

## Servidor de Desenvolvimento
Basicamente você deverá escrever seu código e enquanto você efetua alterações no arquivo é necessário deixar o comando abaixo rodando:
``` node
ng serve
```
O código irá rodar o plugin **serve**, dessa forma gerando um servidor para o desenvolvimento (`http://localhost:4200/starwars`) sendo assim toda alteração de código nos arquivos de origem irá recarregar automaticamente a página.

## Novos Componentes
Para a criação de um novo componente execute o comando a seguir:
``` node
ng generate component component-name | ng g c component-name
```
Você também pode usar ng generate `directive | pipe | service | class | guard | interface | enum | module`

## Versão Compilada
Para a criação da versão compilada do seu código rode o comando a seguir:
``` node
ng build
```
Os artefatos de construção serão armazenados na pasta `dist/`. Utilize `ng build -prod` sinalizador para uma compilação de produção.

## Testes
Já para os testes será necessário que rode o seguinte comando dentro da pasta do repositório:
``` node
ng test
```
Basicamente ele irá rodar o comando que varrerá todos os arquivos de testes criados para apresentar se os mesmos passaram ou não. Mas, caso queira realizar testes ponta a ponta por meio do Protractor basta realizar o seguinte comando `ng e2e`.

## Outras Informações
- O motivo para não ter criado um componente apenas que mudaria de acordo com a categoria escolhida é que tornaria muito genérico e na prática cada componente poderá possuir recursos diferentes assim facilitando para possíveis mudanças.

- A API foi baseada no Django Rest Framework, que possui algumas opções para alteração de paginação que facilitaria nossa leitura para selecionar uma opção randomicamente, mas infelizmente ao ser criada não foi implementada tal opção, limitando nossas opções para consumo da api para selecionarmos apenas um registro randômico.

- Da forma que realizamos o consumo da API poderia ser implementado futuramente um cache, ou seja criaríamos um array que salvaria os dados de cada página, e caso já tenha salvo nele a determinada página ele não precisaria novamente consumir a API apenas buscar nesta variável o dado, assim dando resultados mais rápidos.

- Sobre as rotas futuramente poderia ser refatorada a forma que foi utilizada, criando uma rota pai na qual se chamaria `starwars` e tendo como filhas as outras como `categories` etc, seguindo assim as boas práticas.
