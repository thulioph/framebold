
#FrameBold

Este documento foi criado com base na tradução da documentação original do HTML5 Boilerplate, ele contém um mix de arquivos do Initializr e do HTML5 Boilerplate que resolvi utilizar no meu dia-a-dia.

Author: @thulioph_ <br>
Date: 07/04/2013 <br>
Company: Bold Comunicaçao <br> 

Foi utilizado como base o modelo do initializr responsive, na minha rotina este é o mais ideal, você pode personalizar ou escolher outro modelo pelo site, a estrutura não irá mudar muita coisa. 


- HTML5 BOILERPLATE <br>

Link: http://html5boilerplate.com/ <br>
Documetação: https://github.com/h5bp/html5-boilerplate/blob/master/doc/TOC.md

- INITIALIZR <br>

Link: http://www.initializr.com/ <br>
Documentação: https://github.com/verekia/initializr-website


=================================================================================================================================================

## Estrutura Básica


Estrutura básica das pastas do projeto:

```

├── arquivos
├── css
│   ├── main.css
│   └── normalize.css
│   └── normalize.min.css
├── doc
├── img
├── inc
├── js
│   ├── main.js
│   ├── plugins.js
│   └── vendor
│       ├── head.min.js
│       ├── html5-3.6-respond-1.1.0.min.js
│       ├── jquery.min.js
│       └── modernizr.min.js
├── .htaccess
├── 404.html
├── favicon.ico
├── humans.txt
└── index.html
```

Abaixo uma visão geral de cada parte e como usa-las:


### Arquivos 


Neste diretório, irá conter todos os arquivos relacionados ao projeto, briefing, imagens não utilizadas, PSD'S etc..  

=================================================================================================================================================


### css


Este diretório deve conter todos os arquivos do seu projeto CSS. Ele inclui alguns CSS inicial para ajudar você a começar a partir de
uma base sólida.

- normalize.css  [ http://necolas.github.io/normalize.css ]

Normalize.css é uma alternativa moderna para redefinir o CSS, faz os navegadores processarem todos os elementos de forma mais consistente
e em linha com os padrões modernos, afeta somente os estilos que precisam ser normalizados. Utiliza-se normalize ao invés do reset, pois o reset é uma forma muito "grosseira".

=================================================================================================================================================

### doc

Este diretório deverá conter toda a documentação de seu projeto.

=================================================================================================================================================

### img

Este diretório deverá conter todas as imagens do projeto, fica ao seu critério criar subpastas dentro deste diretório, de acordo com a sua necessidade..

=================================================================================================================================================

### inc

Este diretório deverá conter todos os arquivos de include.
Para facilitar o entendimento e a localização no código, utilizaremos como padrão a seguinte nomenclatura:

```
	< ?php include("nome.inc.php"); ? >
```
=================================================================================================================================================


### js

Este diretório deve conter todos os arquivos do seu projeto JS. Bibliotecas, plugins, e código personalizado podem ser incluídos aqui. 
Ele inclui alguns JS iniciais para ajudar você a começar.

- vendor

Este diretório pode ser usado para conter todo o código da biblioteca de terceiros. Versões minificadas do jQuery, Modernizr, Head.js
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

Arquivo de configuração para o servidor APACHE.

=================================================================================================================================================


### 404.html

Página de error 404 para personalizar.

=================================================================================================================================================


### index.html


Este é o esqueleto padrão HTML que você utiliza como base para todas as páginas em seu projeto.

Para evitar deixar cache local, utiliza-se os parâmetros: 

```
< link rel="stylesheet" href="css/normalize.min.css?v=2" > 
< link rel="stylesheet" href="css/normalize.min.css?i=<?php echo rand(); ?>" >
```

* Não esquecer de alterar o trecho correspondente ao ANALYTICS, só é preciso trocar o ID da aplicação, pois a versão desse projeto é a minificada e a mais aconselhada para utilizar.

=================================================================================================================================================


### humans.txt

Neste arquivo deverá conter os membros que trabalharam no projeto e a tecnologia por detrás dele, assim como agradecimentos ou outras informações do gênero.

=================================================================================================================================================


### Apple-touch-icon


Ícones para gadgets da APPLE, utilizar esse tamanho de ícone e personalizar para incluir no projeto, o PSD do arquivo se encontra 
no diretório ARQUIVOS.

=================================================================================================================================================


##Observações

#### Classe "no-js" na tag html

Modernizr é uma biblioteca JavaScript que adiciona classes para o elemento html com base nos resultados do teste de função e que garante que todos os navegadores pode fazer uso de elementos HTML5. Isso permite que você direcione as partes do seu CSS e JavaScript com base nos recursos suportados por um navegador.

A utilização dessa clase, auxilia na detectação dos recursos que o browser aceita, "trabalha em conjunto" com o MODERNIZR.
E cria classes com o prefixo "no-(propriedade)" assim, você pode utilizar um css opcional, caso o browser não dê suporte a alguma propriedade do css.


#### meta-tags

1. Charset deve vim antes de qualquer código dentro do head para evitar problemas de segurança, inclusive antes do 'title' .

2. Meta tag http-equiv para o modelo de compatibilidade deve ser inserida logo após o charset.

3. É possivel que o usuário não esteja utilizando a engine mais recente do seu navegador, para corrigir isso utiliza-se da meta tag
"meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" principalmente para usuários do IE, para fazer com que a engine do seu navegador seja a mais recente. Essa meta tag "diz que" o usuário deve utilizar a engine mais recente do seu navegador, caso contrário utilize a do chrome, garatindo uma experiência para o navegador e o usuário melhor possível.

4. A meta tag "meta name="viewport" content="width=device-width, initial-scale=1.0" é utilizada para dizer ao navegador para usar como largura do layout, a largura da viewport, desativando a escala inicial, isso faz com que o site fique flexível se baseando no tamanho do aparelho.