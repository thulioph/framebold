# [Framebold](#framebold "Framebold")

Considere o Framebold como um template de pré-projetos que utilizo no meu dia-a-dia. <br>
Com ele você terá acesso a organização dos meus diretórios, alguns plugins que utilizo, assim como uma estrutura de `html`, um `css` já com algumas coisas que utilizo e umas configurações em diversos arquivos que tenho como base para início de projeto.

## [Instalação](#instalacao "Instalação")

`cd minha-pasta-de-projetos` <br>
`$ git clone https://github.com/thulioph/framebold.git`

## [Esqueleto](#esqueleto "Esqueleto")

Estrutura do template.
<br>

```
├── arquivos
├── build
│   ├── css
│   │    └── fonts
│   │    └── reset.css
│	├── img
│   └── js
├── inc
│   └── head.inc.php
├── src
│   ├── css
│   │    └── plugins
│	│    │    └── colorbox.css
│   │    └── main.css
│	├── img
│   │    └── colorbox
│	├── js
│   │    └── vendor
│	│    │    └── colorbox.min.js
│	│    │    └── head.min.js
│	│    │    └── jquery-1.10.2.min.js
│	│    │    └── jquery.cycle.all.js
│	│    │    └── jquery.lazyload.min.js
│	│    │    └── mask_input.js
│   │    └── main.js
│   └── scss
├── .bowerrcc
├── .gitignore
├── .htaccess
├── 404.html
├── bower.json
├── apple-touch-icon-ipad.png
├── apple-touch-icon-iphone4.png
├── apple-touch-icon.png
├── favicon.ico
├── humans.txt
├── README.md
└── index.php
```

## [Resumo do diretório](#resumo "Resumo do diretório")

#### [arquivos](#arquivos "Arquivos")
Pasta contendo todos os arquivos relacionados ao projeto como: .psd, .txt, arquivos diversos, etc..
<br>

#### [build](#build "Build")
Pasta contendo todos os arquivos já otimizados  e prontos para serem enviados para o servidor;
<br>

* `css` - nesta pasta será despejado o css minificado e desminificado, fica ao seu critério qual utilizar, já contem o arquivo _reset.css_ e a pasta para inserir as fontes do projeto.
* `img` - nesta pasta será despejada todas as imagens já otimizadas.
* `js` - nesta pasta será despejado todos os javascripts, minificados, concatenados e validados.

#### [inc](#inc "inc")
Pasta contendo todos os includes do projeto, já contém o _head.inc.php_ com todas as meta tags e chamadas para arquivos externos.
Você deve ficar atento para a chamada do livereload, que deverá ser retirada quando enviada para o servidor.
<br>

#### [src](#src "src")
Pasta contendo todos os arquivos que serão trabalhados antes de otimiza-los e enviar para o servidor.
<br>

* `css` - nesta pasta será despejado o css compilado e desminificado para consulta local, fica a seu critério ter esta pasta ou não.
* `img` - esta pasta terá todas as imagens que serão utilizadas no projeto antes de serem otimizadas.
* `js` - esta pasta terá todos os scripts/libs que serão utilizadas no projeto, na raiz existe o arquivo _main.js_ com as chamadas de js e a pasta _vendor_ irá conter os plugins utilizados.
* `scss` - nesta pasta irá conter os arquivos de sass e compass que serão utilizados no projeto.
* `.bowerrc` - arquivo de configuração para alterar o caminho das dependências instaladas no projeto através do bower.
* `.gitignore` - arquivo de configuração para alterar o caminho das dependências instaladas no projeto através do bower.
* `.htaccess` - arquivo de configuração do servidor apache.
* `404.html` - página de Erro 404 que poderá ser personalizada de acordo com o seu projeto.
* `bower.json` - arquivo de configuração do bower, com algumas informações das dependências, autor do projeto, versão, etc.
* `Gruntfile.js` - arquivo de configuração do Grunt.
* `humans.txt` - informações sobre membros envolvidos no projeto, tecnologia utilizada, última atualização, etc.
* `index.php` - arquivo _index_ com estrutura mínima para iniciar o projeto.
* `Package.json` - arquivo de configuração do Grunt.
* `README.md` - arquivo que contém toda a descrição deste documento.

## [Como contribuir?](#contribuir "Como contribuir?")

1. Faça um fork deste projeto!
2. Crie uma branch com sua melhorias: `git checkout -b minhas-melhorias`
3. Commit suas alterações: `git commit -am 'Minhas alterações'`
4. Dê um push na branch: `git push origin minhas-melhorias`
5. Envie um pull request.

## [Créditos](#creditos "Créditos")

A todos os grupos e amigos do Facebook, vocês tem contribuido e muito no meu aprendizado :P
