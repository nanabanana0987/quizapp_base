import {verificarTema, trocarTema } from "../../helpers/tema-helper.js"





const botaoTema = document.querySelector(".tema button");
const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")

let quiz = {}
let onyos = 0
let pergunta = 1 

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

async function buscarPerguntas{
    const urlDados = "../../data.json"
  await  fetch(urlDados).them(resposta => resposta.json)
    urlDados.quizzes.forEach(dado =>)
    if (dado.title === assunto)
}

buscarPerguntas{}


function montarPerguntas() {
    const main = document.querySelector("main")

main.innerHTML =  ''


function alterarSinais(texto)
return texto.replace(/</g, "&lt;").replace(/>/g, "&gt;)

}

montarPerguntas()

 async function iniciar(){
    alterarAssunto()
    buscarPerguntas()
    montarPerguntas()
}

iniciar()
