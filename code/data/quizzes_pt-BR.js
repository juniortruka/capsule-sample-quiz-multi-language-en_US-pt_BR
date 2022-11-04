module.exports = [
   // Quizzes da cápsula no formato json: 
   // Titúlo, tags, imagens, questões , opções, resposta e explicações.

  // Inicio do Quiz engraçado
  {
    title: "Quiz engraçado",
    // As tags servem para encontrar o quiz, caso o usuário não queira navegar no menu quiz da cápsula 
    tags: ["comédia", "animal", "engracado"], 
    // Essa é a imagem do quiz, escolha com atenção a imagem relacionada com o assunto do quiz.
    image: {
      url: "/images/Animals.jpeg",
    },
    // Questões do Quiz engraçado
    questions: [
      {
        // Primeira questão
        // question, como o nome dia, é a pergunta que irá ser perguntada 
        question: "O que os gatos gostam de comer em um dia quente?",
        // options é as alternativas que  irá aparecer para o usuário escolher
        options: ["Creme de rato", "Sorvete", "Creme esquentado"],
        // answer é a resposta que a cápsula ira mostrar para o usuário
        // Aqui está como (0), porque vai pegar a resposta com a posição certa da resposta.
        // Obs.: isso é um array (lista): options: ["0", "1", "2"],
        answer: 0,
      },
      // fim da primeira questão
      {// Segunda questão 
        question: "O que você chama de cachorro frio?",
        options: ["Frozen", "Cachorro quente", "Cachorro quente servindo com coque"],
        answer: "Cachorro quente servindo com coque",
        explanation: "Porque está frio. Te peguei?",
      }, 
      // fim da segunda questão, você pode criar mais questão aqui (abaixo desse), só cuidado para não digitar ou apagar uma chave importante para o jason 
      
      // Exemplo de criação e inseção, essa questão abaixo não tinha na cápsula exemplar original.
       {
        question: "O que a vela disse para a cor?",
        options: ["Luzvelado", "Colovela", "Cor-to-velando"],
        answer: "Cor-to-velando",
        explanation: "Porque a vela está Cor-to-velando. Eu sei, essá aqui foi pessima, peço desculpas.",
      },
    ],
  },
  // Fim do Quis engraçado 

  // Incio do Quiz Presitentes dos EUA
  {
    title: "Quiz Presidente do EUA",
    tags: ["presidente", "presidentes"],
    image: {
      url: "/images/Presidents.jpeg",
    },
    questions: [
      {
        question:
          "Qual presidente dos Estados Unidos disse 'Esforços e coragem não são suficientes sem propósito e direção.'?",
        options: ["Kennedy", "Obama"],
        answer: 0,
      },
      {
        question:
          "Qual presidente dos Estados Unidos disse 'Os homens não são prisioneiros do destino, mas apenas prisioneiros de suas próprias mentes'?",
        options: ["Hoover", "Roosevelt", "Truman"],
        // Você pode escolher em colocar na resposta (answer) a posição da oção correta ou o nome dele como String ("")
        answer: [
          "Roosevelt",
          "FDR",
          "Franklin Roosevelt",
          "Franklin D Roosevelt",
        ],
      },
      {
        question: "Qual presidente dos Estados Unidos disse 'Fale baixinho e carregue um grande bastão'?",
        options: ["Kennedy", "Roosevelt", "Obama"],
        answer: ["Teddy Roosevelt", "Roosevelt", "Theodore Roosevelt"],
        explanation:
          "Essa famosa citação descreve a política externa de Teddy Roosevelt",
      },
    ],
  },
  // Fim do quiz presidentes dos EUA

  // Inicio do quiz dos estados dos EUA
  {
    title: "Quiz Estados dos EUA",
    tags: ["estados", "estado", "estados unidos"],
    image: { url: "/images/us_map.png" },
    questions: [
      {
        question: "Qual estado dos EUA tem o apelido de 'Spud State'?",
        options: ["Idaho", "Wyoming", "Flórida"],
        answer: "Idaho",
        explanation:
          "O estado do Idaho é bem conhecido por cultivar batatas e, portanto, o apelido de Spud State",
      },
      {
        question: "Qual estado dos EUA tem o apelido de 'Peach State'?",
        options: ["Hawaii", "California", "Georgia"],
        // Aqui a resposta correta é a "Georgia", na posição do array/lista  [2]
        // options: [["0"], ["1"], ["2"]],
        answer: 2,
      },
      {
        question: "Qual estado dos EUA tem o apelido de 'Silver State'?",
        options: ["New York", "Montana", "Nevada"],
        answer: "Nevada",
        explanation:
          "Nevada teve uma corrida pela prata em meados de 1800, portanto, tem o apelido, Silver State",
      },
      {
        question: "Que estado dos EUA é conhecido como Terra dos 10.000 lagos?",
        options: ["Wisconsin", "Louisiana", "Minnesota"],
        answer: "Minnesota",
        explanation:
          "Minnesota tem mais de 11.000 lagos, então a terra de 10.000 lagos está sendo contabilizada!",
      },
      {
        question: "Qual estado dos EUA é o maior em área?",
        options: ["California", "Alaska", "Texas"],
        // O aswer é 1 porque esse aquivo é um array em json. posição 0 em array é o item 1
        answer: 1,
        explanation:
          "O Alasca (Alaska) é de longe o maior estado do EUA com 665.384 milhas quadradas. O segundo lugar é o Texas, que tem 268.596 milhas quadradas e o terceiro lugar é a Califórnia com 163.694 milhas quadradas",
      },
      {
        question: "Qual estado dos EUA é o maior produtor agrícola?",
        options: ["Iowa", "Kansas", "Califórnia"],
        answer: "Califórnia",
        explanation:
          "A Califórnia produz mais de 11% da produção agrícola do país, seguida por 2ª lugar o  Iowa, que produz mais de 8%.",
      },
      {
        question: "Qual dos seguintes estados dos EUA não possui um panhandle?",
        options: ["Idaho", "Flórida", "Novo México"],
        answer: "Novo México",
      },
      {
        question: "Qual estado dos EUA não faz fronteira com os Grandes Lagos?",
        options: ["Ohio", "Michigan", "Iowa"],
        answer: "Iowa",
      },
      {
        question: "Qual é o menor estado dos EUA?",
        options: ["Delaware", "Rhode Island", "Connecticut"],
        answer: "Rhode Island",
        explanation:
          "Rhode Island é o menor estado dos EUA com 1.045 milhas quadradas. O próximo menor é a Delaware com 1.954 milhas quadradas, que é quase o dobro do tamanho de Rhode Island",
      },
      {
        question: "Quantos estados dos EUA são prefixados com 'New'?",
        options: ["quatro", "4", "cinco", "5", "dois", "2"],
        answer: ["quatro", "4"],
        explanation:
          "São quadros estados dos EUA prefixado com 'New': New Hampshire, New Jersey, New Mexico e New York",
      },
    ],
  },
  // Fim do Quiz dos estados dos EUA
  // Você pode criar vários Quiz  em uma só Cápsula com assuntos quase semelhantes ou diferentes 
  // O Quiz abaixo foi criado somente no pt-BR, sendo que na cápsula original  não está disponível, será um exemplo de como criar mais 
   {
    title: "Quiz Lugares nos EUA",
    tags: ["lugar", "lugares"],
    image: {
      url: "/images/Citys_EUA.png",
    },
    questions: [
      {
        question:
          "Qual é a cidade dos EUA que mora a Estátua da Liberdade?",
        options: ["Nova York", "Las Vegas", "São Francisco"],
        answer: [
          "Nova York",
          "New York",
        ],
      },
      {
        question:
          "Qual é a cidade dos EUA fica a Casa Branca?",
        options: ["Novo México", "Las Vegas", "Washington, D.C."],
        // Você pode escolher em colocar na resposta (answer) a posição da oção correta ou o nome dele como String ("")
        answer: [
          "Washington, D.C.",
          "Capital dos EUA",
        ],
      },
      {
        question: "Qual estado dos EUA fica a ponte Golden Gate?",
        options: ["Nova Jersey", "Califórnia", "Carolina do Norte",],
        answer: ["Califórnia",],
      },
    ],
  },
];