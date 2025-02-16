// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'PHP foi desenvolvido para qual fim?',
    answers: [
      {
        answer: 'Back-End',
        correct: true,
      },
      {
        answer: 'Front-End',
        correct: false,
      },
      {
        answer: 'Sistema operacional',
        correct: false,
      },
      {
        answer: 'Banco de dados',
        correct: false,
      },
    ],
  },
  {
    question: 'Uma forma de declarar variável em JavaScript:',
    answers: [
      {
        answer: '$var',
        correct: false,
      },
      {
        answer: 'var',
        correct: true,
      },
      {
        answer: '@var',
        correct: false,
      },
      {
        answer: '#let',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o seletor de id no CSS?',
    answers: [
      {
        answer: '#',
        correct: true,
      },
      {
        answer: '.',
        correct: false,
      },
      {
        answer: '@',
        correct: false,
      },
      {
        answer: '/',
        correct: false,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, index) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[index];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);
  });

  // Selecionar primeira alternativa automaticamente
  const answerButtons = answerBox.querySelectorAll('button:not(.answer-template)');
  currentSelectionIndex = 0;
  if (answerButtons.length > 0) {
    answerButtons[currentSelectionIndex].classList.add('selected-answer');
  }

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

function moveSelection(direction) {
  const buttons = answerBox.querySelectorAll('button:not(.answer-template)');
  const totalAnswers = buttons.length;

  // Remove seleção atual
  buttons[currentSelectionIndex].classList.remove('selected-answer');

  // Atualiza índice com navegação circular
  if (direction === 'up') {
    currentSelectionIndex = (currentSelectionIndex - 1 + totalAnswers) % totalAnswers;
  } else if (direction === 'down') {
    currentSelectionIndex = (currentSelectionIndex + 1) % totalAnswers;
  }

  // Aplica nova seleção
  buttons[currentSelectionIndex].classList.add('selected-answer');
}

// Função para confirmar seleção
function confirmSelection() {
  const buttons = answerBox.querySelectorAll('button:not(.answer-template)');
  checkAnswer(buttons[currentSelectionIndex]);
}

// Inicialização do WebSocket
const ws = new WebSocket('ws://' + window.location.host + '/api/ws');

ws.onopen = () => {
  console.log('WebSocket conectado');
};

ws.onmessage = (event) => {
  const message = event.data.toLowerCase();

  if (message === 'up') {
    moveSelection('up');
  } else if (message === 'down') {
    moveSelection('down');
  } else if (message === 'confirm') {
    confirmSelection();
  }
};

ws.onclose = () => {
  console.log('WebSocket desconectado');
};

ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};


// inicialização do quizz
init();
