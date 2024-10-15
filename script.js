// Variáveis globais
let tempoRestante = 119 * 60; // 1 hora e 59 minutos em segundos
let interval;
let nomeUsuario = ""; // Variável global para o nome do usuário
let perguntasSelecionadas = []; // Variável global para armazenar as perguntas selecionadas

// Função que inicia o exame
function iniciarExame() {
    nomeUsuario = document.getElementById("userName").value; // Obtém o nome do usuário a partir do input
    if (!nomeUsuario) { // Verifica se o nome foi inserido
        alert("Por favor, insira seu nome.");
        return;
    }

    // Atualiza o título do simulado com o nome do usuário
    document.getElementById("simuladoTitle").textContent = `Boa sorte!`;

    // Exibe a tela do simulado e esconde a inicial
    document.getElementById("telaSimulado").classList.remove("hidden");
    document.querySelector(".cont-1").classList.add("hidden");
    document.querySelector(".cont-ger2").classList.add("hidden");
    document.querySelector(".tit-ger-2").classList.add("hidden");
    document.querySelector(".name-input").classList.add("hidden");

    // Iniciar o cronômetro
    iniciarCronometro();

    // Seleciona perguntas aleatórias e exibe
    perguntasSelecionadas = selecionarPerguntasAleatorias();
    exibirPerguntas(perguntasSelecionadas);
}

// Função para iniciar o cronômetro
function iniciarCronometro() {
    interval = setInterval(() => {
        const minutos = Math.floor(tempoRestante / 60);
        const segundos = tempoRestante % 60;
        const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
        const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;

        document.getElementById("simuladoTitle").textContent = `${nomeUsuario}, você tem ${minutosFormatados}:${segundosFormatados} para finalizar seu teste.`;
        tempoRestante--;

        if (tempoRestante < 0) {
            clearInterval(interval);
            finalizarSimulado();
            alert("O tempo acabou! O simulado foi finalizado automaticamente.");
        }
    }, 1000);
}

// Função para selecionar 5 perguntas aleatórias
function selecionarPerguntasAleatorias() {
    const shuffled = perguntas.sort(() => 0, 5 - Math.random());
    return shuffled.slice(0, 15);
}

// Função para exibir as perguntas selecionadas com numeração de 1 a 10
function exibirPerguntas(perguntas) {
    const perguntasContainer = document.getElementById("perguntasContainer");
    perguntasContainer.innerHTML = ""; // Limpa o conteúdo anterior

    perguntas.forEach((pergunta, index) => {
        const questionElement = document.createElement("div");
        questionElement.className = "question";
        questionElement.innerHTML = `<p><strong>${index + 1}. </strong>${pergunta.question}</p>`; // Adiciona a numeração

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
    clearInterval(interval);

    let acertos = 0;
    let erros = 0;

    perguntasSelecionadas.forEach((pergunta, index) => {
        if (pergunta.options) {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && parseInt(selectedOption.value) === pergunta.correct) {
                acertos++;
            } else {
                erros++;
            }
        } else {
            const userAnswer = document.getElementById(`textAnswer${index}`).value.trim().toLowerCase();
            if (userAnswer === pergunta.correctAnswer.toLowerCase()) {
                acertos++;
            } else {
                erros++;
            }
        }
    });

    const totalPerguntas = perguntasSelecionadas.length;
    const pontuacao = (acertos / totalPerguntas) * 100;

    document.getElementById("finalNome").textContent = `Parabéns, ${nomeUsuario}`;
    document.getElementById("acertos").textContent = acertos;
    document.getElementById("erros").textContent = erros;
    document.getElementById("pontuacao").textContent = pontuacao.toFixed(2);

    document.getElementById("telaSimulado").classList.add("hidden");
    document.getElementById("telaResultado").classList.remove("hidden");
}

// Função para voltar à tela inicial e reiniciar o simulado
function voltarTelaInicial() {
    document.getElementById("telaResultado").classList.add("hidden");
    document.querySelector(".cont-1").classList.remove("hidden");
    document.querySelector(".cont-ger2").classList.remove("hidden");
    document.querySelector(".tit-ger-2").classList.remove("hidden");
    document.querySelector(".name-input").classList.remove("hidden");

    // Resetar variáveis
    tempoRestante = 119 * 60;
    perguntasSelecionadas = [];
    document.getElementById("perguntasContainer").innerHTML = "";
}
