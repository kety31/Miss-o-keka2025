const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelecto(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado:"Quem foi a primeira modelo mundial?",
    alternativas:[
        {
            texto:"Lisa Fonssagrives",
            afirmação:"Resposta correta",
            pontos:1
        },
        {
            texto:"Gisele Bündchen",
            afirmação:"Resposta errada",
            pontos:0
        },
        {
            texto:"Adriana Lima",
            afirmação:"Resposta errada",
            pontos:0
        }
    ]
},

    {
    enunciado:"Qual é a marca mais famosa no mundo da moda?",
    alternativas:[
        {
            texto:"Adidas",
            afirmação:"Resposta errada",
            pontos:0
        },
        {
            texto:"Nike",
            afirmação:"Resposta correta",
            pontos:1
        },
        {
            texto:"Louis Vuitton",
            afirmação:"Resposta errada",
            pontos:0
        }
    ]
},

    {
    enunciado:"Em que ano Gisele bundchen ganhou o premio de modelo do ano no Vogue Fashion?",
    alternativas:[
        {
            texto:"1999",
            afirmação:"Resposta correta",
            pontos:1
        },
        {
            texto:"2000",
            afirmação:"Resposta errada",
            pontos:0
        },
        {
            texto:"1986",
            afirmação:"Resposta errada",
            pontos:0
        }
    ]
},
    {
    enunciado:"Quais são os 7 tipos de moda?",
    alternativas:[
        {
            texto:"Sensual, Vulgar, Vibrantes, Clássico, Exagerado, Natural e Vintage",
            afirmação:"Resposta errada",
            pontos:0
        },
        {
            texto:"Casual, Elegante, Clássico, Romântico, sexy, Dramático e Criativo",
            afirmação:"Resposta correta",
            pontos:1
        }
    ]
},
    {
    enunciado:"Qual estilo está na moda entre os jovens em 2025?",
    alternativas:[
        {
            texto:"Estilo streetwear",
            afirmação:"resporta correta",
            pontos:1
        },
        {
            texto:"Estilo Minimalista",
            afirmação:"Resposta errada",
            pontos:0
        },
        {
            texto:"Estilo Animal Print",
            afirmação:"Resposta errada",
            pontos:0
        }
    ]
},
]
let atual = 0; 
let perguntaAtual; 
let historiaFinal = ""; 
let pontos = 0;  

function mostraPergunta(){ 
    perguntaAtual = perguntas[atual]; 
    caixaPerguntas.textContent = perguntaAtual.enunciado; 
    caixaAlternativas.textContent = ""; 
    mostraAlternativas(); 
}

function mostraAlternativas(){ 
    for(const alternativa of perguntaAtual.alternativas){ 
        const botaoAlternativas = document.createElement("button"); 
        botaoAlternativas.textContent = alternativa.texto; 
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); 
        caixaAlternativas.appendChild(botaoAlternativas); 
    }
}

function respostaSelecionada(alternativa) { 
    const afirmacao = alternativa.afirmacao; 
    historiaFinal = afirmacao; 
    pontos += alternativa.pontos;  
    atual++; 

    if (atual < perguntas.length) { 
        mostraPergunta();  
    } else {
        exibeResultado();  
    }
}

function exibeResultado() { 
    caixaPerguntas.textContent = "Fim do Quiz!"; 
    caixaAlternativas.textContent = "";  
    textoResultado.textContent = `Sua pontuação final é: ${pontos} pontos.`; 

    if (pontos === perguntas.length) { 
        textoResultado.textContent += " Parabéns! Você acertou todas as questões!"; 
    } else if (pontos > perguntas.length / 2) { 
        textoResultado.textContent += " Bom trabalho, você teve um desempenho legal!"; 
    } else { 
        textoResultado.textContent += " Você pode melhorar! Tente novamente!"; 
    }
}

mostraPergunta();