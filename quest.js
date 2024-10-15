// Lista de perguntas do simulado, cada uma com suas opções e a resposta correta
const perguntas = [
    {
        question: "O que é uma broca de perfuração?",
        options: [
            "Uma ferramenta rotativa usada para cortar rochas",
            "Uma válvula de segurança",
            "Uma plataforma móvel",
            "Uma bomba de pressão",
            "Uma ferramenta usada para medir a profundidade <br>do poço"
        ],
        correct: 0 // Resposta correta na opção 0
    },
    {
        question: "Explique o que é perfuração direcional.", // Pergunta aberta
        correctAnswer: "Perfuração realizada em ângulo para alcançar um alvo específico" // Resposta correta esperada
    },
    {
        question: "Qual é a função do fluido de perfuração?",
        options: [
            "Medir a pressão do poço",
            "Servir como combustível para a broca",
            "Manter a temperatura do poço",
            "Resfriar a broca e remover detritos",
            "Aumentar a profundidade do poço"
        ],
        correct: 3 // Resposta correta na opção 3
    },
    {
        question: "Explique o que é um poço de monitoramento.", // Pergunta aberta
        correctAnswer: "Um poço usado para monitorar a qualidade e a quantidade de água ou outros fluidos."
    },
    {
        question: "Quais são os principais componentes de uma torre de perfuração?",
        options: [
            "Broca, tubo de revestimento e fluido",
            "Cimentação, cascalho e água",
            "Válvula, motor e tanque",
            "Mastro, cabos de içamento e plataforma",
            "Tanque, compressor e broca"
        ],
        correct: 3 // Resposta correta na opção 3
    },
    {
        question: "Explique o que é cimentação em operações de perfuração.", // Pergunta aberta
        correctAnswer: "É o processo de revestir o poço com cimento para fixar o tubo de revestimento e evitar colapsos."
    },
    {
        question: "O que são formações geológicas?",
        options: [
            "Estruturas de rocha que influenciam o fluxo de petróleo",
            "Tipos de ferramentas usadas na perfuração",
            "Equipamentos de segurança",
            "Sistemas de monitoramento",
            "Técnicas de perfuração"
        ],
        correct: 0 // Resposta correta na opção 0
    },
    {
        question: "Quais são os riscos associados à perfuração de poços?", // Pergunta aberta
        correctAnswer: "Os riscos incluem explosões, vazamentos, colapsos de poço e contaminação de águas subterrâneas."
    },
    {
        question: "O que é um sistema de perfuração automatizado?",
        options: [
            "Um sistema que utiliza tecnologia para controlar o processo",
            "Um tipo de broca especial",
            "Um método manual de perfuração",
            "Um equipamento de segurança",
            "Um sistema de monitoramento"
        ],
        correct: 0 // Resposta correta na opção 0
    },
    {
        question: "Descreva o impacto ambiental das operações de perfuração.", // Pergunta aberta
        correctAnswer: "As operações podem causar poluição, destruição de habitats, e contaminação de solo e água."
    },
    {
        question: "O que é um teste de pressão em um poço?",
        options: [
            "Um procedimento para avaliar a integridade do poço",
            "Um dispositivo de segurança",
            "Um tipo de broca de perfuração",
            "Um sistema de controle",
            "Um método de perfuração"
        ],
        correct: 0 // Resposta correta na opção 0
    },
    {
        question: "Qual é a finalidade de um tubo de revestimento?",
        options: [
            "Servir como broca de perfuração",
            "Transportar o petróleo",
            "Proteger a estrutura do poço",
            "Medir a pressão no fundo do poço",
            "Aumentar a profundidade do poço"
        ],
        correct: 2 // Resposta correta na opção 2
    },
    {
        question: "O que é um poço de gás?", // Pergunta aberta
        correctAnswer: "Um poço que contém gás natural."
    },
    {
        question: "Qual é a função do reservatório de fluido?",
        options: [
            "Armazenar o fluido de perfuração",
            "Facilitar a perfuração",
            "Regular a temperatura da broca",
            "Controlar o fluxo de gás",
            "Medir a pressão do poço"
        ],
        correct: 0 // Resposta correta na opção 0
    },
    {
        question: "Explique o que é um sistema de controle de fluxo.", // Pergunta aberta
        correctAnswer: "Um sistema que regula o fluxo de fluido de perfuração."
    },
    {
        question: "Qual a importância da broca de perfuração?",
        options: [
            "Mede a temperatura do fundo do poço",
            "Controla a pressão do poço",
            "Corta a rocha para criar o poço",
            "Monitora a qualidade da água",
            "Transporte de petróleo"
        ],
        correct: 2 // Resposta correta na opção 2
    },
    {
        question: "O que é um caminhão tanque?", // Pergunta aberta
        correctAnswer: "Um veículo usado para transportar fluido de perfuração."
    },
    {
        question: "Qual é a função de um filtro de lama?",
        options: [
            "Transportar fluidos",
            "Regular a pressão do poço",
            "Facilitar a perfuração",
            "Separar sólidos do fluido de perfuração",
            "Medir a temperatura do fluido"
        ],
        correct: 3 // Resposta correta na opção 3
    },
    {
        question: "O que caracteriza a perfuração rotativa?", // Pergunta aberta
        correctAnswer: "O uso de uma broca que gira e avança."
    },
    {
        question: "O que é um sistema de monitoramento de pressão?",
        options: [
            "Um sistema que mede a pressão no poço",
            "Um dispositivo de segurança",
            "Um método de perfuração",
            "Um tipo de broca de perfuração",
            "Um sistema de transporte"
        ],
        correct: 0 // Resposta correta na opção 0
    },
    {
        question: "O que é um método de perfuração em contrafluxo?",
        options: [
            "Um método que perfura contra a pressão do poço",
            "Um método manual",
            "Um método de perfuração horizontal",
            "Um método que usa o fluido de perfuração para remover detritos",
            "Um método que utiliza brocas especiais"
        ],
        correct: 3 // Resposta correta na opção 3
    },
    {
        question: "Explique o que é um poço de injeção.", // Pergunta aberta
        correctAnswer: "Um poço utilizado para injetar água ou outros fluidos."
    },
    {
        question: "Qual é a função do monitor de vazão?",
        options: [
            "Controlar a pressão do poço",
            "Remover a água do fluido de perfuração",
            "Facilitar a perfuração",
            "Proteger contra explosões",
            "Medir o fluxo de fluido de perfuração"
        ],
        correct: 4 // Resposta correta na opção 4
    },
    {
        question: "O que é um ponto de perfuração?",
        options: [
            "A profundidade máxima alcançada",
            "O local onde a broca começa a perfuração",
            "O ângulo de inclinação da broca",
            "A temperatura do fundo do poço",
            "O tipo de rocha encontrada"
        ],
        correct: 1 // Resposta correta na opção 1
    },
    {
        question: "Qual a função do sistema de transporte de petróleo?", // Pergunta aberta
        correctAnswer: "Levar o petróleo do poço para a superfície."
    },
    {
        question: "Qual é a função do sistema de segurança em uma perfuração?",
        options: [
            "Facilitar a perfuração",
            "Controlar a pressão do poço",
            "Monitorar a qualidade da água",
            "Prevenir acidentes durante o processo",
            "Aumentar a profundidade do poço"
        ],
        correct: 3 // Resposta correta na opção 3
    },
    {
        question: "Explique o que é perfuração a ar.", // Pergunta aberta
        correctAnswer: "Um método que utiliza ar comprimido para remover detritos durante a perfuração."
    },
    {
        question: "O que é um sistema de controle de fluxo?",
        options: [
            "Um dispositivo de segurança",
            "Um tipo de broca de perfuração",
            "Uma técnica de perfuração horizontal",
            "Um sistema que regula o fluxo de fluido de perfuração",
            "Um método de medição de pressão"
        ],
        correct: 3 // Resposta correta na opção 3
    },
    {
        question: "Quais são os componentes de um sistema de perfuração?", // Pergunta aberta
        correctAnswer: "Os componentes incluem a torre de perfuração, broca, tubo de revestimento e fluido."
    },
    {
        question: "O que é um poço de exploração?",
        options: [
            "Um poço utilizado para monitoramento",
            "Um poço usado para injeção",
            "Um poço perfurado para encontrar recursos naturais",
            "Um poço de água potável",
            "Um poço de gás"
        ],
        correct: 2 // Resposta correta na opção 2
    },
    {
        question: "O que é perfuração sem trado?", // Pergunta aberta
        correctAnswer: "Um método de perfuração que não utiliza trado para a remoção de rochas."
    },
    {
        question: "Quais são os riscos da perfuração em águas profundas?",
        options: [
            "Menor eficiência na perfuração",
            "Menor custo",
            "Menor profundidade",
            "Maior pressão e riscos de explosão",
            "Menor risco ambiental"
        ],
        correct: 3 // Resposta correta na opção 3
    },
    {
        question: "Explique a diferença entre perfuração vertical e horizontal.", // Pergunta aberta
        correctAnswer: "A perfuração vertical vai diretamente para baixo, enquanto a horizontal avança lateralmente."
    },
    {
        question: "O que caracteriza a perfuração em rochas duras?",
        options: [
            "O uso de brocas especiais e maior força de perfuração",
            "Menor profundidade",
            "O uso de água",
            "O uso de ar comprimido",
            "A velocidade de perfuração"
        ],
        correct: 0 // Resposta correta na opção 0
    },
    {
        question: "Qual a importância do registro de dados durante a perfuração?", // Pergunta aberta
        correctAnswer: "Os dados ajudam a monitorar o progresso e a tomar decisões informadas."
    },
    {
        question: "O que é um sistema de perfuração com circulação reversa?",
        options: [
            "Um sistema onde o fluido retorna pela broca",
            "Um sistema que utiliza brocas manuais",
            "Um sistema que não utiliza fluido",
            "Um sistema com brocas de alta pressão",
            "Um sistema que utiliza ar comprimido"
        ],
        correct: 0 // Resposta correta na opção 0
    },
    {
        question: "O que caracteriza a perfuração de poços verticais?",
        options: [
            "A perfuração é realizada em ângulos",
            "A perfuração é feita em águas profundas",
            "A perfuração utiliza ar comprimido",
            "A perfuração é realizada em linha reta para baixo",
            "A perfuração é mais rápida"
        ],
        correct: 3 // Resposta correta na opção 3
    },
    {
        question: "Quais são as técnicas utilizadas na perfuração de poços de gás?", // Pergunta aberta
        correctAnswer: "As técnicas incluem perfuração rotativa e uso de fluidos especiais."
    },
    {
        question: "Qual é a função de uma bomba de lama?",
        options: [
            "Monitorar a temperatura",
            "Regular a pressão do poço",
            "Facilitar a perfuração",
            "Proteger contra explosões",
            "Fornecer fluido de perfuração"
        ],
        correct: 4 // Resposta correta na opção 4
    },
    {
        question: "O que é um poço de produção?",
        options: [
            "Um poço utilizado para extrair petróleo ou gás",
            "Um poço de monitoramento",
            "Um poço de água",
            "Um poço de injeção",
            "Um poço de exploração"
        ],
        correct: 0 // Resposta correta na opção 0
    },
    {
        question: "Explique o que é um sistema de ventilação em operações de perfuração.", // Pergunta aberta
        correctAnswer: "É um sistema que remove gases e vapores do local de perfuração."
    },
    {
        question: "Qual é a função de uma sonda de perfuração?",
        options: [
            "Medir a profundidade do poço",
            "Controlar a pressão do poço",
            "Fornecer fluido de perfuração",
            "Facilitar a perfuração",
            "Realizar testes de pressão"
        ],
        correct: 0 // Resposta correta na opção 0
    },
    {
        question: "Qual é o impacto das operações de perfuração na fauna local?", // Pergunta aberta
        correctAnswer: "As operações podem causar destruição de habitats e impactos negativos na fauna."
    },
    {
        question: "O que é um sistema de perfuração automatizado?",
        options: [
            "Um método manual de perfuração",
            "Um sistema de segurança",
            "Um tipo de broca",
            "Um sistema de monitoramento",
            "Um sistema que utiliza tecnologia para controlar a perfuração"
        ],
        correct: 4 // Resposta correta na opção 5
    }
];
