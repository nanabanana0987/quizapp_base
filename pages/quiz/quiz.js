import {verificarTema, trocarTema } from "../../helpers/tema-helper.js"





const botaoTema = document.querySelector(".tema button");
const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")

let quiz = {}
let onyos = 0
let pergunta = 1 
let resposta = ""
let idInputResposta = ""
let respostaCorretaId = ""


botaoTema.addEventListener("click", () => {
    trocarTema( body, botaoTema)
});

verificarTema(body, botaoTema)



function alterarAssunto() {
const div = document.querySelector(".assunto_icone")
const iconeImg = document.querySelector(".assunto_icone img")
const assuntoTitulo = document.querySelector(".assunto h1")


    divIcone.classList.add(assunto.toLowerCase())
iconeImg.setAttibute("src", '../../assets/images/icon-$(assunto.toLowerCase()).svg ' )
iconeImg.setAttribute('alt', 'icone de ${assunto}')
assuntoTitulo.innerText = assunto 
}

alterarAssunto()

async function buscarPerguntas {}
    const urlDados = "../../data.json"
  await  fetch(urlDados).them(resposta => resposta.json)
    urlDados.quizzes.forEach(dado =>)

    if (dado.title === assunto)






function alterarSinais(texto) {
    return texto.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function guardarResposta(evento) {}
    resposta = evento.target.value
    idInputResposta = evento.target.id

    const botaoenviar = document.querySelector(".alternativas button")
    botaoEnviar.addEventListener("click", validarResposta)

    function validarResposta() {}
        const botaoEnviar = document.querySelector(".alternativas button")
        botaoEnviar.innerText = "proxima"
         if (pergunta === 10) {
        botaoEnviar.innerText = "Finalizar"
        botaoEnviar.removeEventListener("click", proximaPergunta)  // Corrigido: remover o evento de "próxima pergunta"
        botaoEnviar.addEventListener("click", finalizar)
    } else {
        if (resposta === quiz.questions[pergunta - 1].answer) {
            document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id", "correta")
            pontos + 1
        } else {
            document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id", "errada")
            document.querySelector(`label[for='${respostaCorretaId}']`).setAttribute("id", "correta")
        }
}

montarPerguntas()

 async function iniciar(){
    alterarAssunto()
    buscarPerguntas()
    montarPerguntas()

    const inputRespostas = document.querySelectorAll(".alternativas input")
    inputsResposta.forEach(input => )
    input.addEventListener('click', guardarResposta)
} 
