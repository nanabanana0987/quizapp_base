import {trocarTema, verificarTema} from "./helpers/tema-helprs.js"



const botaoTema = document.querySelector(".tema button");
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema( body, botaoTema)
});

verificarTema(body, botaoTema)


const botoesAssunto = documet.querySelectorAll(.assuntos button)
botoesAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto(evento) {
  const assunto = evento.taget.innerText
  localStorage.setting("assunto", assunto)
  window.location.href = "./pages/quiz/quiz.html"
}



