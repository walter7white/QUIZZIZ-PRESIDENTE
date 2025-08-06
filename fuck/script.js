const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da cadeia, por crimes de corrupção passiva e lavagem de dinheiro, decide voltar a presidência, afinal, o país sofre de alzheimer constante. Qual seu plano para consertar essa doença cerebral massiva?",
        alternativas: [
            {
                texto: "Estocar Vento!",
                afirmacao: "Parábens! Você fez a escolha certa. "
            },
            {
                texto: "Propor uma educação funcional para todos em prol do desenvolvimento do país, visando assim a diminuição da desigualdade social e alienação alheia.",
                afirmacao: "Errado ERRADO ERRADO ERRO ERRO ERRO"
            }
        ]
    },
    {
        enunciado: "Devido a circustancias externas as quais não possui controle, muito menos poder para 'debater' a oposição, é confrontado com a seguinte situação; seu país sofre uma taxa enorme, relativamente parecida com a qual havia por conta própria ingessado no País, o presidente que fez isso tem muito poder, tem cultura, tem controle sobre toda a economia do seu país. Qual decição você toma?",
        alternativas: [
            {
                texto: "Grunir feito uma puta ameaçando alguém claramente mais forte que você, projetando que ele impoem taxas abusivas(você nunca fez isso), propor 'guerra econômica', dizer que o PrEsIdent TramP VaI sofRee Comsekuencias",
                afirmacao: "Parábens! Você fez a escolha certa. "
            },
            {
                texto: "Ficar calado, afinal, em sua atual situação toda sua econômia vem desse presidente, (algo que você mesmo cometeu após retirar a cultura do país, do ''''samba'''' ao funk putrefato",
                afirmacao: "ERRADO, VOCÊ É BURRO, BURRO, BURRO."
            }
        ]
    },
    {
        enunciado: "Dado o seguinte contexto, você é um presidente patriota que não contém intelecto algum, é confrontado com a seguinte situação; 'Uma nova doença altamente transmissivel e danosa é exposta ao ar, o covid-19 acaba de chegar ao brasil com toda potência.' Quais medidas protetivas você toma?",
        alternativas: [
            {
                texto: "Se se Vacina é marica TÁ OK? Vai VIRA CROCODILO, VAI VIRAR CROCODILO",
                afirmacao: "Parábens, sua negligência acaba matar 162 mil pessoas no Brasil"
            },
            {
                texto: "Gerir Propagandas a favor da vacinação, usar máscaras, manter isolamento social.",
                afirmacao: "Burro burro burro burro"
            }
        ]
    },
    {
        enunciado: "Ao discursar sobre a independência feminina durante a cerimônia de anúncio da construção de 100 novos campi de institutos federais no país, você acaba esquecendo seu discurso em casa, embaixo de uma lata de Brahma. Decide improvisar seu discurso então diz:",
        alternativas: [
            {
                texto: "Não depende do pai para comprar batom e calcinha.",
                afirmacao: "Correto!"
            },
            {
                texto: "Defende a independẽncia e a Parabeniza",
                afirmacao: "Erro"
            }
        ]
    },
    {
        enunciado: "Em meio ao crescimento populacional, precisa tomar medidas que vissem salvar a economia do páis. Logo Propoe o seguinte",
        alternativas: [
            {
                texto: " Veja aquela menina que vem aqui com três crianças. Aquela moça tem 25 anos de idade, ela tem três filhos. Falei para ela: 'Minha filha, a primeira coisa que você tem que fazer é parar de ter filho, porque você já tem três'. E falei para ela que tem que estudar, porque ela tem três filhos para cuidar. Eu tenho cinco, não é mole ",
                afirmacao: "Correto"
            },
            {
                texto: "Buscar medidas contra-ceptivas a todos os brasileiros, de forma gratuita.",
                afirmacao: "ERRRO "
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
    caixaPerguntas.textContent = "Em um futuro próximo....";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
