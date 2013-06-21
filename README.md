
#FrameBold

O intúito de realizar este "guia" não é imitar ou copiar, fiz este documento para minha utilização e para os desenvolvedores da empresa onde trabalho que é a <a href="http://www.boldcomunicacao.com.br" target="_blank">Bold Comunicação</a> pois muitos não conhecem os links ou as ferramentas que citei aqui, o propósito disso é ser um guia rápido onde irá reunir coisas que utilizamos ou que podemos utilizar para nos ajudar nos projetos.
Será atualizado a medida do possível por mim, ou por outros que quiserem contribuir com o projeto. 

Author: @thulioph_ <br>
Date: 07/04/2013 <br>


Este documento foi criado com base na tradução da documentação original do HTML5 Boilerplate, ele contém um mix de arquivos do Initializr e do Boilerplate que resolvi utilizar no meu dia-a-dia.


- HTML5 BOILERPLATE <br>

Link: http://html5boilerplate.com/ <br>
Documetação: https://github.com/h5bp/html5-boilerplate/blob/master/doc/TOC.md

- INITIALIZR <br>

Link: http://www.initializr.com/ <br>
Documentação: https://github.com/verekia/initializr-website


No final deste documento, existe uma sessão sobre dicas que foram retiradas a partir do projeto http://browserdiet.com . 

================================================================================================================================================

## Estrutura Básica


Estrutura básica das pastas do projeto:

```

├── arquivos
├── css
│   ├── main.css
├── doc
├── img
├── inc
├── js
│   ├── main.js
│   ├── plugins.js
│   └── vendor
│       ├── colorbox.min.js
│       ├── head.min.js
│       ├── jquery-1.9.1.js
│       ├── jquery.cycle.all.js
│       ├── jquery.lazyload.min.js
│       └── mask_input.js
├── .htaccess
├── 404.html
├── favicon.ico
├── humans.txt
└── index.php
```

Abaixo uma visão geral de cada parte e como usa-las:


### Arquivos 


Neste diretório, irá conter todos os arquivos relacionados ao projeto, briefing, imagens não utilizadas, PSD'S, fontes ou qualquer outra coisa relacionado ao projeto etc..  

=================================================================================================================================================


### css


Este diretório deve conter todos os arquivos do seu projeto CSS. 

Como padrão, sempre utilizo uma única folha de estilo, bem comentada e dividida por partes de formatação. Esse arquivo inclui o reset e umas formatações que gosto de fazer sempre. 

=================================================================================================================================================

### doc

Este diretório deverá conter toda a documentação de seu projeto.

=================================================================================================================================================

### img

Este diretório deverá conter todas as imagens do projeto, fica ao seu critério criar subpastas dentro deste diretório, de acordo com a sua necessidade..

=================================================================================================================================================

### inc

Este diretório deverá conter todos os arquivos include.
Para facilitar o entendimento e a localização no código, utilizo como padrão a seguinte nomenclatura para includes:

```
  < ?php include("nome.inc.php"); ? >
```
=================================================================================================================================================


### js

Este diretório deve conter todos os arquivos do seu projeto JS. Bibliotecas, plugins, e código personalizado podem ser incluídos aqui. 

- vendor

Este diretório deve ser usado para conter todo o código da biblioteca de terceiros. Versões minificadas do jQuery, Colorbox, Head, etc 
são incluídos por padrão neste diretório.


- main.js

Este arquivo deve ser composto por código criado pelo desenvolvedor. 
Ex: uma validação de formulário 100% em javascript, o código deve ser colocado aqui. 


- plugins.js

Este arquivo deve ser utilizado para inserir os códigos jquery para ativação dos seus plugins, ou outros scripts.
Colocar plugins jQuery dentro de uma

```
(function($){ ... })(jQuery); 
```

para se certificar de que eles estão no cobertor de segurança jQuery namespace.

=================================================================================================================================================


### htaccess

Arquivo de configuração para o servidor APACHE. Neste modelo existente já está habilitada algumas funcionalidades, este aquivo ainda está em fase de desenvolvimento (por mim) para aproveitar 100% do seu poder.

=================================================================================================================================================


### 404.html

Página de error 404 para personalizar.

=================================================================================================================================================


### humans.txt

Neste arquivo deverá conter os membros que trabalharam no projeto e a tecnologia por detrás dele, assim como agradecimentos ou outras informações do gênero. O arquivo deverá ficar na raiz do projeto, para mais informações consulte: <a href=" http://humanstxt.org" target="_blank">Humans org</a>

=================================================================================================================================================


### index.php

Este é o esqueleto padrão que utilizo em meus projetos, basicamente são chamadas definidas por uma ordem no cabeçalho, scripts no final do projeto e comentários que utilizo para localização de início e fim de projeto. A extensão utilizada é .php pois trabalho com includes, for, etc e preciso de arquivos php. 
(OBS: Você pode alterar e trabalhar com .html ou qualquer outra extensão da sua necessidade)


==================================================================================================================================================

##Observações

#### meta-tags

1. Charset deve vim antes de qualquer código dentro do head para evitar problemas de segurança, inclusive antes do 'title' .

1. Meta tag http-equiv para o modelo de compatibilidade deve ser inserida logo após o charset.  

<a href="http://www.w3.org/International/O-charset.pt-br.php"> mais informações</a>

3. É possivel que o usuário não esteja utilizando a engine mais recente do seu navegador, para corrigir isso utiliza-se da meta tag
"meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" principalmente para usuários do IE, para fazer com que a engine do seu navegador seja a mais recente. Essa meta tag "diz que" o usuário deve utilizar a engine mais recente do seu navegador, caso contrário utilize a do chrome, garatindo uma experiência para o navegador e o usuário melhor possível.

4. A meta tag "meta name="viewport" content="width=device-width, initial-scale=1.0" é utilizada para "dizer ao navegador" para usar como largura do layout, a largura da viewport, desativando a escala inicial, isso faz com que o site fique flexível se baseando no tamanho do aparelho.


#### DICAS

Abaixo existe uma lista com técnicas que poderão lhe ajudar e irão melhorar tanto a sua performance quanto a do seu projeto, no final de cada explicação existe um link para uso da ferramenta:

- <strong>Evitar código incorporado ou inline</strong>: Adotaremos como padrão, a utilização para carregamento de arquivos externos onde o css e o javascript é carregado da seguinte forma:

```
<link rel="stylesheet" href="css/nomedoarquivo.css">
<script src="js/nomedoarquivo.js"></script>
```

- <strong>Estilo e Scripts</strong>: css no topo (dentro do < head >) e script no rodapé (antes do fechamento do < /body >).

- <strong>Utilização do async</strong>: Quando não se utiliza o async a página aguarda o script terminar de carregar antes de continuar a renderização, isso só torna o projeto mais lento. Com a utilização do async o download do script é feito de forma assíncrona, ou seja a página irá renderizar junto com o script, um exemplo de como ficaria o código com o async:

```
<script async src="js/nomedoarquivo.js"></script>
```

- <strong>Combinar arquivos css/js</strong>: Para evitar que o browser faça diversas requisições ao servidor para fazer download dos arquivos css/js, evitaremos utilizar vários css/js para arquivos diferentes, e iremos utilizar todos em um só.

Evitaremos fazer isso:
```
<link rel="stylesheet" href="nomedoarquivo01.css" media="all">
<link rel="stylesheet" href="nomedoarquivo02.css" media="all">
<link rel="stylesheet" href="nomedoarquivo03.css" media="all">
<link rel="stylesheet" href="nomedoarquivo04.css" media="all">

<script async src="js/nomedoarquivo01.js"></script>
<script async src="js/nomedoarquivo02.js"></script>
<script async src="js/nomedoarquivo03.js"></script>
<script async src="js/nomedoarquivo04.js"></script>
``` 

Faremos isso:
```
<link rel="stylesheet" href="main.css" media="all">

<script async src="js/main.js"></script>
```

- <strong>Utilizar sempre a última versão do jQuery</strong>: Para evitar utilizar uma versão do jQuery antiga, ou que tenha bugs, iremos sempre utilizar a última versão do jQuery, uns optam utilizar o <a href="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" target="_blank"> cdn da google </a> outros optam por fazer o download direto pelo site do <a href="http://jquery.com/" target="_blank">jQuery</a>.

Como forma de "segurança" iremos mencionar o cdn da google e caso ele não funcione ou esteja fora do ar, irá utilizar o nosso dentro da pasta js, o código ficará assim:

```
<script async src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
```

- <strong>Spritesheets</strong>: A utilização de spritesheets evita que o browser faça diversas requisições para verificar as imagens, sem falar na performance que o usuário ganha ao navegar no site, pois irá parecer que o site é mais rápido. 
<a href="http://spritepad.wearekiss.com/" target=_blank>Link</a> 

- <strong>Otimizar as imagens</strong>: Ao se utilizar imagens com extensão .png o ideal é otimiza-las, pois elas contém informações que não são importantes para o usuário e muito menos para o servidor. Existem links na web que fazem esse trabalho para você: <a href="http://tinypng.org/" target="_blank"> Link </a>.
Nem todo projeto é feito só com imagens em .png , caso você precise trabalhar com imagens em .jpeg é aconselhável utilizar JPEGs progressivos. Como fazer?

No photoshop: 
SAVE AS -> ESCOLHA O FORMATO .jpg -> NA TELA QUE SE ABRE (FORMAT OPTIONS) VOCÊ MARCA A OPÇÃO PROGRESSIVE SCANS 5 -> OK

E pronto, sua imagem está um .jpg progressivo e irá aparecer de forma gradativa para o usuário, melhorando o carregamento.


- <strong>Para evitar deixar cache local, utiliza-se o parâmetro</strong>: 

```
<link rel="stylesheet" href="css/nomedoarquivo.css?i=<?php echo rand(); ?>">
```

- <strong>Gzip</strong>: Boa parte do conteúdo que trafegamos em um site é texto (HTML, CSS, JavaScript, JSON, XML etc). Para esse tipo de conteúdo, é uma boa prática habilitar a compressão GZIP no servidor, que tem como função comprimir os dados do servidor antes de enviar para o navegador do usuário através da rede. É como "zipar" os arquivos antes de enviar, isso faz com que os arquivos fiquem bem menores. Para isso, é feito uma configuração no arquivo do seu servidor, como modelo utilizarei o servidor Apache, para realizar esse procedimento, iremos ediar o arquivo <code> .htaccess </code> para habilitar o deflate.

```
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE application/javascript
```

- <strong>Ferramentas para diagnóstico</strong>: Após finalizar o seu projeto é indicado você diagnostica-lo para saber o resultado final dele, saber se o mesmo está carregando de forma rápida, se existe alguma técnica que você pode não ter feito que seria ideal, etc.. Para isso existem ferramentas online, ou extensões para browsers que são instaladas e lhe dão essas informações.  Os links que estão aqui são relacionados ao PageSpeed do google, que é o que utilizo e sempre me deu dicas e informações precisas, caso não goste ou não queria utilizar, uma rápida pesquisa na internet sobre o gênero, irá encontrar muita coisa útil.

Extensão para o navegador Chrome: <a href="https://developers.google.com/speed/pagespeed/insights_extensions" target="_blank">Link</a>. <br>

Teste online: <a href="https://developers.google.com/speed/pagespeed/insights">Link</a>.


### Fim :)