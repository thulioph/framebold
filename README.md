# Framebold
 
Considere o Framebold como um template de pré-projetos que utilizo no meu dia-a-dia. <br>
Com ele você terá acesso a organização dos meus diretórios, alguns plugins que utilizo, assim como uma estrutura de HTML, um CSS já com algumas coisas que utilizo e umas configurações em diversos arquivos que tenho como base para início de projeto.
 
## Instalação
 
`cd minha-pasta-de-projetos` <br>
`git clone https://github.com/thulioph/framebold.git`
 
## Esqueleto
 
Estrutura do template <br>

```
├── arquivos
├── css
│   ├── main.css
│   └── plugins
│       └── css-do-plugin
│   └── fonts
│       └── pasta-nome-da-font
├── img
├── inc
│   └── head.inc.php
├── js
│   ├── main.js
│   └── vendor
│       ├── modernizr.min.js
│       ├── colorbox.min.js
│       ├── head.min.js
│       ├── jquery-1.9.1.js
│       ├── jquery.cycle.all.js
│       ├── jquery.lazyload.min.js
│       └── mask_input.js
├── .htaccess
├── .gitignore
├── .bowerrcc
├── bower.json
├── 404.html
├── apple-touch-icon-ipad.png
├── apple-touch-icon-iphone4.png
├── apple-touch-icon.png
├── favicon.ico
├── humans.txt
├── README.md
└── index.php
```

## Resumo do diretório
 
* arquivos - todos os arquivos relacionados com o projeto; <br>
* css - todo o css envolvido no projeto, as subpastas são para o css dos plugins e as fonts ficam em uma pasta a parte; <br>
* img - todas as imagens que serão utilizadas no projeto; <br>
* inc - diretório contendo os includes; <br>
* js - todo javascript utilizado no projeto ficará no arquivo `main.js` e a pasta vendor irá conter os plugins utilizados ; <br>
* .htaccess - arquivo de configuração do servidor apache; <br>
* humans.txt - informações sobre membros envolvidos no projeto, tecnologia utilizada, última atualização, etc..;
* bower.json - arquivo de configuração do bower, com algumas informações das dependências, autor do projeto, versão, etc..;
* .bowerrcc - arquivo de configuração para alterar o caminho das dependências instaladas no projeto;

## Como contribuir?
 
1. Faça um fork deste projeto!
2. Crie uma branch com sua melhorias: `git checkout -b minhas-melhorias`
3. Commit suas alterações: `git commit -am 'Minhas alterações'`
4. Dê um push na branch: `git push origin minhas-melhorias`
5. Envie um pull request.
 
## Creditos
 
A todos os grupos e amigos do Facebook, vocês tem contribuido e muito no meu aprendizado :P
 
