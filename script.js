// Variáveis Globais de Controle
const menuContainer = document.getElementById('menu-container');
const quizContainer = document.getElementById('quiz-container');
const quizBody = document.getElementById('quiz-body');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const navigation = document.getElementById('navigation');
const resultsContainer = document.getElementById('results');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const quizHeader = document.getElementById('quiz-header');
const quizTitle = document.getElementById('quiz-title');
const resultsTitle = document.getElementById('results-title');

let currentQuizData = [];
let currentQuestion = 0;
let userAnswers = [];
let currentLevel = '';

function toggleTopic(header) {
    const topicCard = header.parentElement;
    topicCard.classList.toggle('active');
}

function startQuiz(level) {
    currentLevel = level;
    switch (level) {
        case 'aeronauta_nivel1':
            currentQuizData = quizDataAeronautaN1;
            quizTitle.innerHTML = `Regulamentação do Aeronauta <span>Nível 1 - Conceitos Gerais</span>`;
            resultsTitle.innerText = "Quiz Nível 1 (Aeronauta) Finalizado!";
            quizHeader.className = '';
            progressBar.className = '';
            break;
        case 'aeronauta_nivel2':
            currentQuizData = quizDataAeronautaN2;
            quizTitle.innerHTML = `Regulamentação do Aeronauta <span>Nível 2 - Conhecimento Aprofundado</span>`;
            resultsTitle.innerText = "Quiz Nível 2 (Aeronauta) Finalizado!";
            quizHeader.className = 'level-2';
            progressBar.className = 'level-2';
            break;
        case 'fisiologia_nivel1':
            currentQuizData = quizDataFisiologiaN1;
            quizTitle.innerHTML = `Aspectos Fisiológicos <span>Nível 1 - Fundamentos</span>`;
            resultsTitle.innerText = "Quiz Nível 1 (Fisiologia) Finalizado!";
            quizHeader.className = 'fisiologia';
            progressBar.className = '';
            break;
        case 'fisiologia_nivel2':
            currentQuizData = quizDataFisiologiaN2;
            quizTitle.innerHTML = `Aspectos Fisiológicos <span>Nível 2 - Detalhes e Aplicações</span>`;
            resultsTitle.innerText = "Quiz Nível 2 (Fisiologia) Finalizado!";
            quizHeader.className = 'level-2 fisiologia';
            progressBar.className = 'level-2';
            break;
        case 'emergencia_abordo':
            currentQuizData = quizDataEmergencia;
            quizTitle.innerHTML = `Emergência a Bordo <span>Equipamentos e Procedimentos</span>`;
            resultsTitle.innerText = "Quiz de Emergência Finalizado!";
            quizHeader.className = 'emergencia';
            progressBar.className = 'emergencia';
            break;
        case 'prova_rpa':
            currentQuizData = quizDataProvaRPA;
            quizTitle.innerHTML = `Preparatório Prova RPA <span>Questões Essenciais</span>`;
            resultsTitle.innerText = "Quiz Preparatório RPA Finalizado!";
            quizHeader.className = 'rpa-prep';
            progressBar.className = 'rpa-prep';
            break;
    }
    
    menuContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    navigation.classList.remove('hidden');

    loadProgress();
    showQuestion();
}

function backToMenu() {
    saveProgress();
    quizContainer.classList.add('hidden');
    menuContainer.classList.remove('hidden');
}

function showQuestion() {
    const questionData = currentQuizData[currentQuestion];
    quizBody.innerHTML = '';
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');
    const questionText = document.createElement('h3');
    questionText.innerHTML = `${currentQuestion + 1}. ${questionData.question}`;
    if(currentLevel.includes('nivel2') || currentLevel === 'prova_rpa') {
        questionText.classList.add('level-2');
    }
    questionBlock.appendChild(questionText);
    const optionsList = document.createElement('ul');
    optionsList.classList.add('options');
    optionsList.classList.remove('disabled');
    questionData.options.forEach(option => {
        const optionItem = document.createElement('li');
        optionItem.innerHTML = `<label><input type="radio" name="question${currentQuestion}" value="${option}"> ${option}</label>`;
        if (userAnswers[currentQuestion] === option) {
            optionItem.classList.add('selected');
            optionItem.querySelector('input').checked = true;
        }
        optionItem.addEventListener('click', () => {
            if (optionsList.classList.contains('disabled')) return;
            document.querySelectorAll(`#quiz-body ul li`).forEach(li => li.classList.remove('selected'));
            optionItem.classList.add('selected');
            selectAnswer(option);
        });
        optionsList.appendChild(optionItem);
    });
    questionBlock.appendChild(optionsList);
    quizBody.appendChild(questionBlock);
    updateNavigation();
    updateProgress();
}

function selectAnswer(answer) {
    userAnswers[currentQuestion] = answer;
    saveProgress();
    updateProgress();
}

function updateNavigation() {
    prevBtn.style.display = currentQuestion === 0 ? 'none' : 'inline-block';
    nextBtn.innerText = currentQuestion === currentQuizData.length - 1 ? 'Finalizar' : 'Próximo';
    questionCounter.innerText = `Questão ${currentQuestion + 1} de ${currentQuizData.length}`;
}

function updateProgress() {
    const answeredCount = userAnswers.filter(answer => answer !== undefined && answer !== null).length;
    const progressPercentage = (answeredCount / currentQuizData.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function nextQuestion() {
    const buttonText = nextBtn.innerText;

    if (buttonText === 'Continuar') {
        currentQuestion++;
        showQuestion();
        return;
    }

    if (buttonText === 'Ver Resultados') {
        showResults();
        return;
    }

    const userAnswer = userAnswers[currentQuestion];
    if (userAnswer === undefined || userAnswer === null) {
        alert("Por favor, selecione uma resposta para continuar.");
        return;
    }

    const optionsList = quizBody.querySelector('.options');
    optionsList.classList.add('disabled');
    prevBtn.style.display = 'none';

    const correctAnswer = currentQuizData[currentQuestion].answer;
    const liElements = optionsList.querySelectorAll('li');

    liElements.forEach(li => {
        const radioValue = li.querySelector('input').value;
        if (radioValue === userAnswer) {
            if (userAnswer === correctAnswer) {
                li.classList.add('correct-feedback');
            } else {
                li.classList.add('incorrect-feedback');
                const correctLi = Array.from(liElements).find(el => el.querySelector('input').value === correctAnswer);
                if (correctLi) correctLi.classList.add('actual-answer');
            }
        }
    });

    if (currentQuestion === currentQuizData.length - 1) {
        nextBtn.innerText = 'Ver Resultados';
    } else {
        nextBtn.innerText = 'Continuar';
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function saveProgress() {
    if (!currentLevel) return;
    const progress = {
        answers: userAnswers,
        currentQuestion: currentQuestion
    };
    localStorage.setItem(`quizProgress_${currentLevel}`, JSON.stringify(progress));
}

function loadProgress() {
    const savedProgress = localStorage.getItem(`quizProgress_${currentLevel}`);
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        userAnswers = progress.answers || Array(currentQuizData.length).fill(undefined);
        currentQuestion = progress.currentQuestion || 0;
        
        if (userAnswers.length !== currentQuizData.length) {
            userAnswers = Array(currentQuizData.length).fill(undefined);
            currentQuestion = 0;
        }
    } else {
        userAnswers = Array(currentQuizData.length).fill(undefined);
        currentQuestion = 0;
    }
}

function resetQuiz() {
    if (confirm('Tem certeza de que deseja resetar o progresso deste quiz? Suas respostas serão apagadas.')) {
        localStorage.removeItem(`quizProgress_${currentLevel}`);
        startQuiz(currentLevel);
    }
}

function showResults() {
    saveProgress();
    quizBody.classList.add('hidden');
    navigation.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    let score = 0;
    currentQuizData.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });

    const scorePercentage = (score / currentQuizData.length) * 100;
    const scoreText = document.getElementById('score-text');
    scoreText.innerText = `Você acertou ${score} de ${currentQuizData.length} questões. (${scorePercentage.toFixed(1)}%)`;
    
    if (scorePercentage < 70) {
        scoreText.classList.add('low-score');
    }

    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '<h3>Revisão Completa das Questões</h3>';
    
    currentQuizData.forEach((question, index) => {
        const reviewBlock = document.createElement('div');
        reviewBlock.classList.add('review-question');
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.answer;

        reviewBlock.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        let answerHtml;
        if (isCorrect) {
            answerHtml = `<div class="review-answer">Sua resposta: <span class="correct-answer">${userAnswer || 'Não respondida'}</span></div>`;
        } else {
            answerHtml = `
                <div class="review-answer">Sua resposta: <span class="wrong-answer">${userAnswer || 'Não respondida'}</span></div>
                <div class="review-answer">Resposta correta: <span class="correct-answer">${question.answer}</span></div>
            `;
        }
        
        reviewBlock.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${answerHtml}
        `;
        reviewContainer.appendChild(reviewBlock);
    });
}