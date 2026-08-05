const botaoModoEscuro = document.querySelector("#btn-modo-escuro")

botaoModoEscuro.addEventListener("click", function(){

    const cartao = document.querySelector("#card")
    cartao.style.backgroundColor = "black"

    const nome = document.querySelector("#nome")
    nome.style.color = "white"

    const bio = document.querySelector("#bio")
    bio.style.color = "white"
})

const botaoModoClaro = document.querySelector("#btn-modo-claro")

botaoModoClaro.addEventListener("click", function(){

    const cartao = document.querySelector("#card")
    cartao.style.backgroundColor = "white"

    const nome = document.querySelector("#nome")
    nome.style.color = "gray"

    const bio = document.querySelector("#bio")
    bio.style.color = "gray"

})


const btnTraduzir = document.querySelector("#btn-traduzir")
const btnOriginal = document.querySelector("#btn-original")

btnTraduzir.addEventListener("click", function(){

    const cargo = document.querySelector("#cargo")
    const bio = document.querySelector("#bio")

    cargo.textContent = "wen programmer"
    bio.textContent = "paasionate about creating amazing websites and applications"
})

