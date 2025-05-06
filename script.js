let campoCPF = document.querySelector("#cpf")

let campoRG = document.querySelector("#rg")

let campoTEL = document.querySelector("#tel")

let campoCNPJ = document.querySelector("#cnpj")

campoCNPJ.addEventListener("keypress", () => {
    let tamanhoCNPJ = campoCNPJ.value.length

    if (tamanhoCNPJ == 3 || tamanhoCNPJ == 7) {
        campoCNPJ.value += "."
    }
    if (tamanhoCNPJ == 11) {
        campoCNPJ.value += "/"
    }
    if (tamanhoCNPJ == 16) {
        campoCNPJ.value += "-"
    }
})

campoTEL.addEventListener("keypress", () => {
    let tamanhoTEL = campoTEL.value.length

    if (tamanhoTEL == 0) {
        campoTEL.value += "("
    }
    if (tamanhoTEL == 3) {
        campoTEL.value += ") "
    }
    if (tamanhoTEL == 10) {
        campoTEL.value += "-"
    }
})



campoRG.addEventListener("keypress", () => {
    let tamanhoRG = campoRG.value.length

    if (tamanhoRG == 2 || tamanhoRG == 6) {
        campoRG.value += "."
    }
    if (tamanhoRG == 10) {
        campoRG.value += "-"
    }

})


campoCPF.addEventListener("keypress", () => {
    let tamanhoCPF = campoCPF.value.length

    if (tamanhoCPF == 3 || tamanhoCPF == 7) {
        campoCPF.value += "."
    }
    if (tamanhoCPF == 11) {
        campoCPF.value += "-"
    }
})