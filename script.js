// Lista de perguntas do simulado, cada uma com suas opções e a resposta correta
const perguntas = [
    {
        question: "1. O que é uma plataforma de perfuração?",
        options: [
            "Um tipo de embarcação para transporte de petróleo",
            "Um equipamento usado para perfurar o solo em busca de petróleo",
            "Uma torre de observação em alto-mar",
            "Um tipo de duto de transporte de gás",
            "Um reservatório para armazenamento de petróleo"
        ],
        correct: 1
    },
    {
        question: "2. Qual é a função principal do fluido de perfuração?",
        options: [
            "Lubrificar a broca",
            "Aumentar a velocidade de perfuração",
            "Resfriar a broca e controlar a pressão",
            "Armazenar petróleo durante a perfuração",
            "Evitar o desmoronamento do poço"
        ],
        correct: 2
    },
    {
        question: "3. O que é uma broca de perfuração?",
        options: [
            "Uma ferramenta usada para medir a profundidade do poço",
            "Uma ferramenta rotativa usada para cortar rochas",
            "Uma válvula de segurança",
            "Uma plataforma móvel",
            "Uma bomba de pressão"
        ],
        correct: 1
    },
    {
        question: "4. Explique o que é perfuração direcional.", // Pergunta aberta
        correctAnswer: "Perfuração realizada em ângulo para alcançar um alvo específico" // Resposta correta esperada
    },
    {
        question: "5. O que é blowout (erupção descontrolada)?",
        options: [
            "A saída descontrolada de petróleo do poço",
            "O uso excessivo de fluido de perfuração",
            "A perda da plataforma de perfuração",
            "O aumento do nível de água no poço",
            "A falha no equipamento de bombeamento"
        ],
        correct: 0
    },
    {
        question: "6. O que significa o termo 'kick' na perfuração de poços?", // Pergunta aberta
        correctAnswer: "A entrada indesejada de fluidos no poço" // Resposta correta esperada
    },
    {
        question: "7. Descreva brevemente o que é uma coluna de perfuração.", // Pergunta aberta
        correctAnswer: "Uma sequência de tubos conectados que conduzem a broca" // Resposta correta esperada
    },
    {
        question: "8. Qual dos seguintes é um método de perfuração comum?",
        options: [
            "Perfuração rotativa",
            "Perfuração por explosão",
            "Perfuração manual",
            "Perfuração a vapor",
            "Perfuração com laser"
        ],
        correct: 0
    },
    {
        question: "9. Qual é a função do preventor de blowout (BOP)?",
        options: [
            "Aumentar a velocidade de perfuração",
            "Prevenir a erupção descontrolada de fluidos",
            "Armazenar petróleo",
            "Transportar petróleo para a refinaria",
            "Medir a pressão interna do poço"
        ],
        correct: 1
    },
    {
        question: "10. O que significa o termo 'kick' na perfuração de poços?",
        options: [
            "Uma interrupção na rotação da broca",
            "A entrada indesejada de fluidos no poço",
            "Um aumento da pressão no poço",
            "A troca de broca durante a perfuração",
            "A retirada de gás natural"
        ],
        correct: 1
    }
];


// Variáveis globais
let tempoRestante = 119 * 60; // 1 hora e 59 minutos em segundos
let interval;
let nomeUsuario = ""; // Variável global para o nome do usuário
let perguntasSelecionadas = []; // Variável global para armazenar as perguntas selecionadas

// Função que inicia o exame
function iniciarExame() {
    nomeUsuario = document.getElementById("userName").value; // Obtém o nome do usuário a partir do input
    if (!nomeUsuario) { // Verifica se o nome foi inserido
        alert("Por favor, insira seu nome."); // Alerta o usuário se não houver nome
        return; // Interrompe a execução da função
    }

    // Atualiza o título do simulado com o nome do usuário e a duração do teste
    document.getElementById("simuladoTitle").textContent = `Boa sorte!`;

    // Exibe a tela do simulado
    document.getElementById("telaSimulado").classList.remove("hidden");

    // Esconde a tela inicial
    document.querySelector(".cont-1").classList.add("hidden");
    document.querySelector(".cont-ger2").classList.add("hidden");
    document.querySelector(".tit-ger-2").classList.add("hidden");
    document.querySelector(".name-input").classList.add("hidden");

    // Iniciar o cronômetro
    iniciarCronometro();

    // Seleciona perguntas aleatórias e exibe
    perguntasSelecionadas = selecionarPerguntasAleatorias(); // Armazena as perguntas selecionadas em uma variável global
    exibirPerguntas(perguntasSelecionadas); // Passa essas perguntas para serem exibidas
}

// Função para iniciar o cronômetro
function iniciarCronometro() {
    interval = setInterval(() => {
        const minutos = Math.floor(tempoRestante / 60); // Calcula os minutos restantes
        const segundos = tempoRestante % 60; // Calcula os segundos restantes

        // Formata os minutos e segundos para sempre aparecerem com dois dígitos (ex: 01:05)
        const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
        const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;

        // Atualiza o título com o cronômetro
        document.getElementById("simuladoTitle").textContent = `Boa sorte, ${nomeUsuario}! Você tem ${minutosFormatados}:${segundosFormatados} para finalizar seu teste.`;

        // Reduz o tempo restante
        tempoRestante--;

        // Se o cronômetro chegar a zero, finaliza o simulado automaticamente
        if (tempoRestante < 0) {
            clearInterval(interval); // Para o cronômetro
            finalizarSimulado(); // Finaliza o simulado
            alert("O tempo acabou! O simulado foi finalizado automaticamente.");
        }
    }, 1000); // Atualiza a cada segundo
}

// Função para selecionar 5 perguntas aleatórias
function selecionarPerguntasAleatorias() {
    const shuffled = perguntas.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5); // Retorna as primeiras 5 perguntas
}

// Função para exibir as perguntas selecionadas
function exibirPerguntas(perguntas) {
    const perguntasContainer = document.getElementById("perguntasContainer");
    perguntasContainer.innerHTML = ""; // Limpa o conteúdo anterior

    perguntas.forEach((pergunta, index) => {
        const questionElement = document.createElement("div");
        questionElement.className = "question";
        questionElement.innerHTML = `<p>${pergunta.question}</p>`;

        // Verifica se a pergunta tem opções (múltipla escolha) ou se é uma pergunta aberta (com campo de texto)
        if (pergunta.options) {
            pergunta.options.forEach((opcao, i) => {
                const optionElement = document.createElement("div");
                optionElement.className = "option";
                optionElement.innerHTML = `
                    <input type="radio" name="question${index}" value="${i}" id="question${index}option${i}">
                    <label for="question${index}option${i}">${opcao}</label>
                `;
                questionElement.appendChild(optionElement);
            });
        } else {
            // Se for uma pergunta aberta, exibe um campo de texto
            const textInput = document.createElement("input");
            textInput.type = "text";
            textInput.id = `textAnswer${index}`;
            textInput.placeholder = "Digite sua resposta";
            questionElement.appendChild(textInput);
        }

        perguntasContainer.appendChild(questionElement);
    });
}

// Função para finalizar o simulado e mostrar os resultados
function finalizarSimulado() {
    clearInterval(interval); // Para o cronômetro

    let acertos = 0;
    let erros = 0;

    perguntasSelecionadas.forEach((pergunta, index) => {
        if (pergunta.options) {
            // Verifica as perguntas de múltipla escolha
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && parseInt(selectedOption.value) === pergunta.correct) {
                acertos++;
            } else {
                erros++;
            }
        } else {
            // Verifica as perguntas abertas
            const userAnswer = document.getElementById(`textAnswer${index}`).value.trim().toLowerCase();
            if (userAnswer === pergunta.correctAnswer.toLowerCase()) {
                acertos++;
            } else {
                erros++;
            }
        }
    });

    const pontuacao = ((acertos / perguntasSelecionadas.length) * 100).toFixed(2);
    document.getElementById("acertos").innerText = acertos;
    document.getElementById("erros").innerText = erros;
    document.getElementById("pontuacao").innerText = pontuacao;

    let mensagemFinal;
    if (pontuacao > 69) {
        mensagemFinal = `Parabéns, ${nomeUsuario}! Você está no caminho da aprovação!`;
    } else if (pontuacao >= 50 && pontuacao <= 68) {
        mensagemFinal = `${nomeUsuario}, você foi bem, mas precisa melhorar para ser aprovado.`;
    } else {
        mensagemFinal = `${nomeUsuario}, sua média está abaixo do esperado, você precisa estudar mais.`;
    }

    document.getElementById("finalNome").innerText = mensagemFinal;

    document.getElementById("telaSimulado").style.display = "none";
    document.getElementById("telaResultado").style.display = "block";
}

// Função para voltar à tela inicial
function voltarTelaInicial() {
    // Esconde a tela de resultado
    document.getElementById("telaResultado").style.display = "none";

    // Reseta as perguntas e limpa os campos
    document.getElementById("perguntasContainer").innerHTML = "";
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');

    // Exibe os elementos da tela inicial
    document.querySelector(".cont-1").classList.remove("hidden");
    document.querySelector(".cont-ger2").classList.remove("hidden");
    document.querySelector(".tit-ger-2").classList.remove("hidden");
    document.querySelector(".name-input").classList.remove("hidden");

    // Limpa o título do simulado
    document.getElementById("simuladoTitle").textContent = '';

    // Reseta o cronômetro e as variáveis globais
    tempoRestante = 119 * 60; // 1 hora e 59 minutos em segundos
    nomeUsuario = ""; // Limpa o nome do usuário
}