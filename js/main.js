M.AutoInit();

const formulario = document.querySelector("form");
const text = document.querySelector("p"); 

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const a = document.querySelector("#num_1").valueAsNumber;
    const b = document.querySelector("#num_2").valueAsNumber;
    const c = a < b && a != b;

    text.innerHTML = "";

    if (c) {
        text.innerHTML = "O número é maior!!!"
        setTimeout(() => text.innerHTML = "Você precisa inserir dois números no formulário ao lado. Verificaremos se o segundo é maior que o primeiro.", 2000);
    } else {
        text.innerHTML = "Tente colocar outros valores."
        setTimeout(() => text.innerHTML = "Você precisa inserir dois números no formulário ao lado. Verificaremos se o segundo é maior que o primeiro.", 2000);
    }
})