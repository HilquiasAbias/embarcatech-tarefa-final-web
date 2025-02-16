const questionsByCategory = {
  conhecimentos_gerais: [
    {
      question: 'PHP foi desenvolvido para qual fim?',
      answers: [
        { answer: 'Back-End', correct: true },
        { answer: 'Front-End', correct: false },
        { answer: 'Sistema operacional', correct: false },
        { answer: 'Banco de dados', correct: false },
      ]
    },
    {
      question: 'Qual empresa desenvolveu o sistema operacional Windows?',
      answers: [
        { answer: 'Apple', correct: false },
        { answer: 'Microsoft', correct: true },
        { answer: 'Google', correct: false },
        { answer: 'IBM', correct: false },
      ]
    },
    {
      question: 'O que significa a sigla CPU?',
      answers: [
        { answer: 'Central Processing Unit', correct: true },
        { answer: 'Computer Personal Unit', correct: false },
        { answer: 'Control Processing Utility', correct: false },
        { answer: 'Central Personal Unit', correct: false },
      ]
    },
    {
      question: 'Qual navegador foi criado pela empresa Google?',
      answers: [
        { answer: 'Firefox', correct: false },
        { answer: 'Edge', correct: false },
        { answer: 'Chrome', correct: true },
        { answer: 'Safari', correct: false },
      ]
    },
    {
      question: 'Quem é conhecido como o pai da computação?',
      answers: [
        { answer: 'Alan Turing', correct: true },
        { answer: 'Bill Gates', correct: false },
        { answer: 'Steve Jobs', correct: false },
        { answer: 'Charles Babbage', correct: false },
      ]
    }
  ],
  matematica: [
    {
      question: 'Quanto é 2 + 2?',
      answers: [
        { answer: '4', correct: true },
        { answer: '3', correct: false },
        { answer: '5', correct: false },
      ]
    },
    {
      question: 'Qual é o resultado de 5 × 6?',
      answers: [
        { answer: '30', correct: true },
        { answer: '25', correct: false },
        { answer: '20', correct: false },
      ]
    },
    {
      question: 'Qual é o valor de π (pi) arredondado para duas casas decimais?',
      answers: [
        { answer: '3.14', correct: true },
        { answer: '3.16', correct: false },
        { answer: '3.10', correct: false },
      ]
    },
    {
      question: 'Se um triângulo tem lados de 3, 4 e 5, ele é um triângulo?',
      answers: [
        { answer: 'Retângulo', correct: true },
        { answer: 'Equilátero', correct: false },
        { answer: 'Isósceles', correct: false },
      ]
    },
    {
      question: 'Qual é a raiz quadrada de 81?',
      answers: [
        { answer: '9', correct: true },
        { answer: '8', correct: false },
        { answer: '7', correct: false },
      ]
    }
  ],
  historia: [
    {
      question: 'Quem foi o primeiro presidente do Brasil?',
      answers: [
        { answer: 'Deodoro da Fonseca', correct: true },
        { answer: 'Getúlio Vargas', correct: false },
        { answer: 'Juscelino Kubitschek', correct: false },
        { answer: 'Dom Pedro II', correct: false },
      ]
    },
    {
      question: 'Em que ano ocorreu a Revolução Francesa?',
      answers: [
        { answer: '1789', correct: true },
        { answer: '1804', correct: false },
        { answer: '1750', correct: false },
        { answer: '1815', correct: false },
      ]
    },
    {
      question: 'Quem foi o líder do movimento pelos direitos civis nos EUA na década de 1960?',
      answers: [
        { answer: 'Martin Luther King Jr.', correct: true },
        { answer: 'Malcolm X', correct: false },
        { answer: 'Abraham Lincoln', correct: false },
        { answer: 'John F. Kennedy', correct: false },
      ]
    },
    {
      question: 'Qual foi o nome da embarcação usada por Pedro Álvares Cabral ao chegar ao Brasil?',
      answers: [
        { answer: 'Nau Capitânia', correct: true },
        { answer: 'Santa Maria', correct: false },
        { answer: 'São Gabriel', correct: false },
        { answer: 'Endeavour', correct: false },
      ]
    },
    {
      question: 'Quem foi responsável pela unificação da Alemanha no século XIX?',
      answers: [
        { answer: 'Otto von Bismarck', correct: true },
        { answer: 'Napoleão Bonaparte', correct: false },
        { answer: 'Karl Marx', correct: false },
        { answer: 'Genghis Khan', correct: false },
      ]
    }
  ],
  geografia: [
    {
      question: 'Qual é o maior oceano do mundo?',
      answers: [
        { answer: 'Oceano Pacífico', correct: true },
        { answer: 'Oceano Atlântico', correct: false },
        { answer: 'Oceano Índico', correct: false },
        { answer: 'Oceano Ártico', correct: false },
      ]
    },
    {
      question: 'Qual é o país mais populoso do mundo?',
      answers: [
        { answer: 'China', correct: true },
        { answer: 'Índia', correct: false },
        { answer: 'Estados Unidos', correct: false },
        { answer: 'Brasil', correct: false },
      ]
    },
    {
      question: 'Qual é a capital da Austrália?',
      answers: [
        { answer: 'Canberra', correct: true },
        { answer: 'Sydney', correct: false },
        { answer: 'Melbourne', correct: false },
        { answer: 'Brisbane', correct: false },
      ]
    },
    {
      question: 'O Monte Everest está localizado em qual continente?',
      answers: [
        { answer: 'Ásia', correct: true },
        { answer: 'Europa', correct: false },
        { answer: 'América do Sul', correct: false },
        { answer: 'África', correct: false },
      ]
    },
    {
      question: 'Qual é o maior país em extensão territorial?',
      answers: [
        { answer: 'Rússia', correct: true },
        { answer: 'Canadá', correct: false },
        { answer: 'China', correct: false },
        { answer: 'Estados Unidos', correct: false },
      ]
    }
  ],
  idiomas: [
    {
      question: 'Qual é o idioma mais falado no mundo?',
      answers: [
        { answer: 'Inglês', correct: false },
        { answer: 'Chinês mandarim', correct: true },
        { answer: 'Espanhol', correct: false },
        { answer: 'Hindi', correct: false },
      ]
    },
    {
      question: 'O alemão é o idioma oficial de qual país?',
      answers: [
        { answer: 'Alemanha', correct: true },
        { answer: 'França', correct: false },
        { answer: 'Itália', correct: false },
        { answer: 'Espanha', correct: false },
      ]
    },
    {
      question: 'Qual é a língua oficial do Brasil?',
      answers: [
        { answer: 'Português', correct: true },
        { answer: 'Espanhol', correct: false },
        { answer: 'Inglês', correct: false },
        { answer: 'Francês', correct: false },
      ]
    },
    {
      question: 'Qual destes idiomas usa o alfabeto cirílico?',
      answers: [
        { answer: 'Russo', correct: true },
        { answer: 'Inglês', correct: false },
        { answer: 'Alemão', correct: false },
        { answer: 'Italiano', correct: false },
      ]
    },
    {
      question: 'Como se diz "obrigado" em francês?',
      answers: [
        { answer: 'Merci', correct: true },
        { answer: 'Gracias', correct: false },
        { answer: 'Danke', correct: false },
        { answer: 'Thank you', correct: false },
      ]
    }
  ]
};


let generatedQuestions = [];
let currentSelectionIndex = 0;
let points = 0;
let actualQuestion = 0;
const letters = ['a', 'b', 'c', 'd', 'e'];

document.getElementById('quiz-config').addEventListener('submit', function (e) {
  e.preventDefault();

  const totalQuestions = parseInt(document.getElementById('total-questions').value);
  const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
    .map(c => c.value);

  // Gerar questões aleatórias
  generatedQuestions = selectedCategories
    .flatMap(category => questionsByCategory[category])
    .sort(() => Math.random() - 0.5)
    .slice(0, totalQuestions);

  if (generatedQuestions.length === 0) {
    alert('Selecione categorias válidas com perguntas!');
    return;
  }

  document.getElementById('config-container').classList.add('hide');
  document.getElementById('quizz-container').classList.remove('hide');
  actualQuestion = 0;
  points = 0;
  createQuestion(0);
});

function createQuestion(i) {
  const question = generatedQuestions[i];
  const answerBox = document.querySelector('#answers-box');
  answerBox.innerHTML = '';

  document.getElementById('question-text').textContent = question.question;
  document.getElementById('question-number').textContent = i + 1;

  question.answers.forEach((answer, index) => {
    const template = document.querySelector('.answer-template').cloneNode(true);
    template.classList.remove('hide', 'answer-template');
    template.querySelector('.btn-letter').textContent = letters[index];
    template.querySelector('.question-answer').textContent = answer.answer;
    template.setAttribute('correct-answer', answer.correct);
    answerBox.appendChild(template);
  });

  currentSelectionIndex = 0;
  answerBox.children[0].classList.add('selected-answer');
  actualQuestion++;
}

function checkAnswer(btn) {
  const buttons = document.querySelectorAll('#answers-box button');
  buttons.forEach(button => {
    const isCorrect = button.getAttribute('correct-answer') === 'true';
    button.classList.add(isCorrect ? 'correct-answer' : 'wrong-answer');
    if (button === btn && isCorrect) points++;
  });
  nextQuestion();
}

function nextQuestion() {
  setTimeout(() => {
    if (actualQuestion >= generatedQuestions.length) showSuccessMessage();
    else createQuestion(actualQuestion);
  }, 1200);
}

function showSuccessMessage() {
  document.getElementById('quizz-container').classList.add('hide');
  document.getElementById('score-container').classList.remove('hide');

  const score = ((points / generatedQuestions.length) * 100).toFixed(2);
  document.querySelector('#display-score span').textContent = score;
  document.getElementById('correct-answers').textContent = points;
  document.getElementById('questions-qty').textContent = generatedQuestions.length;
}

document.getElementById('restart').addEventListener('click', () => {
  document.getElementById('config-container').classList.remove('hide');
  document.getElementById('score-container').classList.add('hide');
});

function moveSelection(direction) {
  const buttons = document.querySelectorAll('#answers-box button');
  const total = buttons.length;

  buttons[currentSelectionIndex].classList.remove('selected-answer');

  if (direction === 'up') {
    currentSelectionIndex = (currentSelectionIndex - 1 + total) % total;
  } else {
    currentSelectionIndex = (currentSelectionIndex + 1) % total;
  }

  buttons[currentSelectionIndex].classList.add('selected-answer');
}

function confirmSelection() {
  const buttons = document.querySelectorAll('#answers-box button');
  checkAnswer(buttons[currentSelectionIndex]);
}

const ws = new WebSocket('ws://' + window.location.host + '/api/ws');
ws.onmessage = (e) => {
  const msg = e.data.toLowerCase();
  if (msg === 'up') moveSelection('up');
  else if (msg === 'down') moveSelection('down');
  else if (msg === 'confirm') confirmSelection();
};

