const caixaprincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você conhece a mente criativa por trás da série Drakengard/NieR?",
        alternativas: [
            {
                texto: "Sim, Yoko Taro e sua equipe",
                afirmacao: "Muito bem, Yoko Taro pode ser o mais conhecido, mas sem seus colegas e amigos a série não seria o mesmo."
            },
            {
                texto: "Sim! Yoko Taro é um gênio",
                afirmacao: "Voce está certe até certo ponto, mesmo que Yoko Taro seja o mais conhecido, sem seus colegas e amigos a série não seria o mesmo."
            }
        ]
    },
    {
        enunciado: "Falando sobre a divisão do mundo de Drakengard e Nier, como ocorreu?",
        alternativas: [
            {
                texto: "Ocorre quando a dragoa Angelus se sacrifica pela humanidade se tornando o último selo para impedir as sementes da destruição nascerem.",
                afirmacao: "Amigo... Você errou feio, errou rude, esse acontecimento ocorre na segmentação A de Drakengard 1, sendo apenas o começo do jogo."
            },
            {
                texto: "Ocorre quando Caim e a dragoa Angelus tentam impedir a destruição de seu mundo combatendo o mal pela raiz, sendo a Mãe Besta enviando ela para o Japão em 2003.",
                afirmacao: "Exatamente, o final E de Drakengard se conecta e cria o universo de NieR"
            }
        ]
    },
    {
        enunciado: "Pergunta rápida!!! Kainé ou 2B?",
        alternativas: [
            {
                texto: "Kainé!!!",
                afirmacao: "Kinder ovo do bom, tem meu respeito."
            },
            {
                texto: "2B!!!",
                afirmacao: "É um rôbo... Tendi."
            } 
        ]
    },
    {
        enunciado: "Quem é o responsável por ",
        alternativas: [
            {
                texto: "Sim, falo abertamente",
                afirmacao: "Sua missão é promover conversas abertas sobre bullying dentro do seu círculo social. Ao normalizar o diálogo, você ajuda a criar um ambiente onde as pessoas se sintam seguras para compartilhar suas experiências e buscar ajuda."
            },
            {
                texto: "Não, evito o assunto",
                afirmacao: "Sua missão é escolher uma pessoa de confiança para iniciar uma conversa sobre bullying. Entender melhor o tema e aprender a falar sobre ele pode ser o primeiro passo para ajudar alguém que esteja sofrendo em silêncio."
            }
        ]
    },
    {
        enunciado: "Você acredita que pequenas ações podem fazer a diferença na luta contra o bullying?",
        alternativas: [
            {
                texto: "Sim, toda ação conta!",
                afirmacao: "Sua missão é implementar pequenas ações diárias, como oferecer apoio a quem precisa, promover gentileza e estar atento ao comportamento de colegas. Lembre-se de que até os menores gestos podem ter um impacto significativo na vida de alguém."
            },
            {
                texto: "Não, apenas grandes ações fazem a direrença!",
                afirmacao: "Sua missão é aprender sobre o poder das pequenas atitudes no combate ao bullying. Veja exemplos de como simples gestos de empatia e apoio têm ajudado a transformar ambientes e considere aplicar essas práticas no seu dia a dia."
            } 
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Agorinha...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();