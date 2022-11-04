<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center"> Bixby Quiz Sample Capsule Multi language for Brazilian Developers / Cápsula Bixby de Exemplo Quiz Multilinguagem para Desenvolvidores Brasileiros </h1>
  <h1> Capsule in En-US & PT-BR</h1>
</p>

## Overview (En-US)

Do you have a great idea for a quiz that will entertain and delight Bixby users? Do you want to create a fun quiz to help you learn something new? A quiz to stump your friends? The quiz sample capsule is the perfect place to start building a Bixby quiz capsule!

Both the fundamentals of a Bixby Capsule and some more intermediate/advanced concepts are used. This is a great capsule to learn even more about how to develop for Bixby.

You can easily customize this capsule with your own quiz without any development! Just use the spreadsheet in the `contentUtility` folder and cut and paste from there into the `quizzes.js` file, update the `capsule.id` and `training` as necessary and you have made this capsule your own!

## Visão Geral (PT-BR)

Você tem uma ótima ideia para um quiz que irá entreter e encantar os usuários de Bixby? Você quer criar um teste divertido para ajudá-lo a aprender algo novo? Um teste para confundir seus amigos? A cápsula de amostra do quiz é o lugar perfeito para começar a construir uma cápsula do quiz Bixby!
Com essa cápsula você poderá descubrir o novo universo de tecnologia por voz que o mundo bixby pode lhe propor para desenvolvimento!
Ambos os fundamentos de uma cápsula Bixby e alguns conceitos mais intermediários / avançados são usados. Esta é uma ótima cápsula para aprender ainda mais sobre como desenvolver para Bixby.
Você pode facilmente personalizar esta cápsula com seu próprio questionário de perguntas e respostas sem qualquer desenvolvimento! Basta usar a planilha na pasta `contentUtility` e copiar e colar de lá no arquivo`quizzes.js`, atualizar `capsule.id` e` training` conforme necessário e pronto, você criou uma nova cápsula quiz!

## How to get started (EN-US)

* Download and install the Bixby Studio IDE from the [Bixby Developer Center](http://bixbydevelopers.com)
* Download this capsule (zip is the easiest way) from Github. Unzip in your directory of choice
* Open the Capsule in Bixby Studio
* Open the simulator and give it a try!

## Como começar (PT-BR)

* Faça download e instale o ambiente de desenvolvimento da bixby (Bixby Studio IDE) no [Bixby Developer Center](http://bixbydevelopers.com) (site somente em inglês) 
* Baixe esta cápsula (zip é a maneira mais fácil) aqui nessa página do Github. Descompacte em seu diretório de escolha ou padrão em (C:\Users\UserName\bixby-workspace) no Windows. 
* Abra a cápsula no Bixby Studio e edite os arquivos em formato string que interage com o usuário, como: quizzes_pt_BR.js, quizzes.js, textos/strings nos dialogs dos idiomas, etc.
* Abra o simulador e experimente como é treinar uma aplicação bixby!

## How to try (En-US)

Ask Bixby to start a quiz, try these:
```
Start a quiz (Bixby asks you which quiz you want to start)

Start a states quiz (Bixby starts a quiz about US States)

Start a presidents quiz (Bixby starts a quiz about US presidents)

Start a funny quiz (Bixby starts a quiz that is funny)

```
## Como testar (Pt-BR)

* No simulador, selecione a opção (bixby-mobile-en-US) e peça a Bixby para começar um teste, tente estes em inglês : 
```
Start a quiz (Bixby asks you which quiz you want to start)

Start a states quiz (Bixby starts a quiz about US States)

Start a presidents quiz (Bixby starts a quiz about US presidents)

Start a funny quiz (Bixby starts a quiz that is funny)

```
* Caso queira testar em Português Brasil, selecione a opção (bixby-mobile-pt-BR) e peça para que a bixby iniciar um teste com essas frases:
```
iniciar quiz (Bixby pergunta a você qual quiz você deseja iniciar)

me dê o quiz estado (Bixby começa um quiz sobre os estados dos EUA)

inicie o quiz presidente (Bixby começa um quiz sobre presidentes dos EUA)

inicie o quiz engracado (Bixby começa um quiz engraçado)

inicie o quiz lugares (Bixby começa um quiz lugares)

```

# How to customize (En-US)

* Change the capsule id to reflect your organization and your content. The capsule id is defined in `capsule.bxb` file. 
* Create your own quiz questions and answers by editing the `code/data/quizzes.js` file. You may also use the spreadsheet located in `contentUtility/createQuizContent` The `quizzes.js` file has comments that explain each of the fields and how they customize a quiz
* You can customize the Quiz NoResult dialog by modifying the `resources/en/dialogs/NoQuiz.dialog.bxb`
* You can customize the Quiz Found dialog by modifying the `resources/base/views/FindQuiz.view.bxb` view file
* You can customize the Quiz Question/Answer prompts by directly modifying the `resources/base/views/UpdateQuiz.view.bxb` file and by modifying the dialog macros in `resources/en/dialog/macros/`.
* The training in this sample capsule is basic. You will likely need to add additional training for your quiz
* Have fun!

# Como personalizar (PT-BR)

* Altere as informações da cápsula como o id para refletir sua organização e seu conteúdo. O ID da cápsula é definido no arquivo `capsule.bxb`.
* Crie suas próprias perguntas e respostas do quiz editando o arquivo `code / data / quizzes.js` inserindo em inglês e no arquivo `code / data / quizzes_pt-BR.js` para português brasil. Você também pode usar a planilha localizada em `contentUtility /createQuizContent` Os arquivos` quizzes.js` e ` quizzes_pt-BR.js` tem comentários que explicam cada um dos campos e como eles personalizam um quiz.
* Você pode personalizar a caixa de diálogo Quiz NoResult modificando o parâmetro `resources / en-US/ dialogs / NoQuiz.dialog.bxb` e `resources / pt-BR / dialogs / NoQuiz.dialog.bxb`
* Você pode personalizar a caixa de diálogo Quiz encontrado modificando o arquivo de visualização `resources / en-US / views / FindQuiz.view.bxb` e `resources / pt-BR / views / FindQuiz.view.bxb`
* Você pode personalizar os prompts de Pergunta / Resposta do Quiz modificando diretamente o arquivo `resources / en-US / views / UpdateQuiz.view.bxb` / `resources / pt-BR/ views / UpdateQuiz.view.bxb` e modificando as macros de diálogo em `resources / en / dialog / macros /Itens.dialog.bxb` / `resources /pt-BR/ dialog / macros /Itens.dialog.bxb`.
* O treinamento nesta cápsula de amostra é básico. Você provavelmente precisará adicionar treinamento adicional para os seus quizzes
* Diverta-se!

---

## Additional Resources (En-US)

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!
* [Bixby News, Blogs and Tutorials](https://bixby.developer.samsung.com/) - Bixby News, Tutorials, Blogs and Events

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Bixby Videos
* [Bixby Developers YouTube Channel](https://www.youtube.com/c/bixbydevelopers) - Tutorial videos, Presentations, Capsule Demos and more

### Bixby Podcast
* [Bixby Developers Chat](http://bixbydev.buzzsprout.com/) - Voice, Conversational AI and Bixby discussions 

### Bixby on Social Media
* [@BixbyDevelopers](https://twitter.com/bixbydevelopers) - Twitter
* [Facebook](https://facebook.com/BixbyDevelopers)
* [Instagram](https://www.instagram.com/bixbydevelopers/)

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”


## Recursos adicionais (PT-BR)

<h5 align="Center"> * Somenete em inglês</h5>

### Sua fonte para aprender muito mais sobre a bixby

* Centro de desenvolvimento bixby [Bixby Developer Center](http://bixbydevelopers.com) - Tudo que você precisa para começar com o Desenvolvimento Bixby!
* Bixby notícias, Blogs, Tutoriais e eventos [Bixby News, Blogs and Tutorials](https://bixby.developer.samsung.com/) 

### Guias e práticas recomendadas
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Construa sua primeira cápsula do zero com instruções.
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Melhores práticas para criação de aparência das suas cápsulas
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guias que o levam desde o design e modelagem até a implantação de suas cápsulas

### Bixby Videos
* [Bixby Developers YouTube Channel](https://www.youtube.com/c/bixbydevelopers) - Tutoriais em vídeos, apresentações, demonstrações de cápsulas e muito mais no canal oficial da bixby no Yout

### Bixby Podcast
* [Bixby Developers Chat](http://bixbydev.buzzsprout.com/) - Voz, conversação AI e discussões Bixby 

### Bixby nas Redes Sociais
* [@BixbyDevelopers](https://twitter.com/bixbydevelopers) - Twitter
* [Facebook](https://facebook.com/BixbyDevelopers) - Facebook
* [Instagram](https://www.instagram.com/bixbydevelopers/)  - Instagram

### Precisa de suporte?
* Tem uma solicitação de recurso? Por favor, sugira em inglês na nossa comunidade de suporte [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) para nos ajudar no aprimoramento da bixby.
* Tem uma questão técnica? Pergunte no [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) com a tag “bixby”

# Considerações finais  
 Essa cápsula foi criada para você que usa o português brasil ou que mora no brasil e queira desenvolver quizzes geniais para bixby ou contribuir com a expansão do universo bixby.
 Desenvolva sua cápsula quiz e não se esqueça de pernalizar também em inglês nessa cápsula exemplar, por padrão, você precisa criar para inglês, porque a maioria dos usuário
 globalmente usam a bixby em inglês (US).
