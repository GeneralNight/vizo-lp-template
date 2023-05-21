
Guilherme Tinen Ortolani, <br/>
(19) 99298-0598 | guilherme.ortolani@vizo.dev <br/>
May 21, 2023. <br/>
<br/>

With great power comes great responsibility.
<br/>
<br/>

<h1>
Etapa Um - Como começar? <br/>
</h1> 

1 - É necessário ter instalado o node e npm, você pode fazer o download <a href="https://nodejs.org/en/download">aqui</a> (Baixe a versão LTS) <br/>
2 - Instale a versão do Gulp de maneira global executando o código abaixo <br/>
`npm install --global gulp-cli` <br/>
3 - Agora é necessário instalar as dependências do projeto. Execute um dos comandos abaixo: <br/>
`npm install` OU `npm i` <br/>
4 - Dependências instaladas, agora basta rodar o comando `gulp`. <br/><br/>
Para os demais projetos, os passos 1 e 2 não precisaram ser repetidos. <br/><br/>

<h1>
Etapa Dois - Entendendo a estrutura <br/>
</h1> 

Como de costume, o código HTML será realizado no `index.html` caso o projeto tenha mais páginas, não há problema algum em criar outros arquivos .html desde que estejam na raiz do projeto. <br/> <br/>

Para `estilização`, utilizamos o SASS, uma extensão CSS que nos permite escrever o CSS aninhado, tornando o código mais fácil de se ler. <br/>
Temos 3 arquivos iniciais: <br/>
 - `responsive.scss` - Possui mixins que ajudarão na hora da responsividade <br/>
 - `global.scss` - Para a definição de estilos globais <br/>
 - `styles.scss` - Para a importação dos demais arquivos scss (é a partir deste arquivo que o style.css será gerado) <br/><br/>

É recomendado que novos arquivos sejam criados de acordo com as seções da LP. Por exemplo: `section1.scss, section2.scss ...` <br/>
Os arquivos devem ser criados dentro da pasta scss e importados no arquivo `styles.scss`<br/>
Qualquer alteração nos arquivos de estilos dentro da pasta `scss` fará com que o estilo final seja compilado novamente.<br/> Portanto, não será necessário recarregar a página (embora algumas vezes ser necessário por conta de bugs). <br/>
Para a utilização dos `mixins do arquivo responsives.scss` é necessário importar o `responsives.scss` no topo de cada arquivo.scss <br/><br/>

Para `arquivos.js`, o funcionamento é parecido! <br/>
Todo o código é criado dentro da pasta `js/components` e por meio do gulp, os arquivos serão compilados para um único arquivo, o `main.js`<br/>
Novamente, é recomendado modularizar os arquivos de acordo com sua responsabilidade. Por exemplo: `header.js`, `form-sec-1.js` ...<br/>
Para a criação de novos arquivos, é de extrema importância que o `todo o código esteja dentro do escopo, ou seja entre { }.` Por exemplo: { Seu código aqui  } <br/><br/>

Para imagens, os arquivos devem ser importados dentro da `pasta imgs` <br/>
Para fontes, importar para dentro da `pasta fonts` <br/><br/>

Quanto a estilos e JS, uma vez inicializado o gulp, não é necessário importar nada nos arquivos.html uma vez que os códigos são compilados e transportados para os arquivos `styles.css e main.js` respectivamente, e estes já estão sendo importados para dentro do arquivo `index.html`. Apenas para novos arquivos, se atentar à importação dos arquivos `styles.css e main.js`<br/><br/>

<h1>
Etapa três - Minificação das imagens <br/>
</h1>
Após realizado o desenvolvimento da LP, você deve notar que algumas imagens estarão pesasando o carregamento do site. Conforme a qualidade e velocidade da internet do cliente, isso pode ser imperceptível quanto também pode ser bem aparente. Como uma boa prática, vamos otimizar as imagens! <br/><br/>

Para isso, temos dois comandos possíveis: <br/>

- `gulp webP` -
Essa tarefa converte todas as imagens que se encontram dentro do diretório: "assets/imgs/" para o formato webp, duplicando as imagens para o diretório: "assets/imgs/webp/". Após esse comando é necessário corrigir o caminho das imagens dentro do arquivo HTML.

- `gulp imageMin` -
Essa tarefa otimiza todas as imagens que se encontram dentro do diretório: "assets/imgs/", duplicando as imagens para o diretório: "assets/img/compact/".
Após esse comando é necessário corrigir o caminho das imagens dentro do arquivo HTML.

<h1>
Etapa Quatro - Meta tags e SEO <br/>
</h1>
Após a minificação das imagens, também é necessário se preocupar com o quanto a página está otimizada para buscas.<br/>
Preencha as tags de SEO pré declaradas no `head do index.html` <br/>
Caso tenha dúvidas, você pode verificar para quê cada tag serve <a href="https://rockcontent.com/br/blog/meta-tags-para-redes-sociais/">aqui</a>

<br/><br/>

<h1>
Etapa Cinco - Preparação do ambiente para deploy<br/>
</h1>

Para o deploy, ou seja colocar o site no ar, não é necessário subir todos os arquivos. Basta subir: <br/>
- Todos os `arquivos.html`
- A pasta de assets






