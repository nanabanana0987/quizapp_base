let tema = "claro"

export function trocarTema(body, botaoTema) {
    if (localStorage.getItem("tema")) 
        tema = localStorage.getItem("tema")
    }

    if (tema === "claro") {
        body.classList.add("escuro")
        localStorage.setItem("tema", "escuro")
        botaoTema.style.justifyCotent = "flex-end"
    } else {
        body.classList.remove("escuro");
        localStorage.setItem("tema", "claro")
        botaoTema.style.justifyCotent = "flex-end"
    }

   export function verificarTema(){
        if (localStorage.getItem("tema")) 
            tema = localStorage.getItem("tema")
    }

    if (tema === "escuro") {
        body.classList.add("escuro")
        botaoTema.style.justifyCotent = "flex-end"
    }
    