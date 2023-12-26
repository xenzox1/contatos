M.AutoInit();

const form = document.querySelector("form");
const ls = localStorage;
const tabela = document.querySelector("tbody");
let contatos = [];

if (localStorage.getItem("contatos")) {
    contatos = JSON.parse(ls.getItem('contatos'));
} else {
    ls.clear();
}

function limparTabela() {
    tabela.innerHTML = "";
}

function formarTabela() {
    limparTabela();
    for (let i = 0; i < contatos.length; i++) {
        const contato = contatos[i];

        let row = tabela.insertRow(i);
        let cel1 = row.insertCell(0);
        let cel2 = row.insertCell(1);
        let cel3 = row.insertCell(2);

        cel1.innerHTML = contato.nome;
        cel2.innerHTML = contato.tel;
        cel3.innerHTML = '<button class="waves-effect waves-purple btn-flat" onClick="removerLinha('+i+')"><i class="material-icons">close</i></button>';

    }
}

function inserirContato () {
    ls.clear();
    ls.setItem('contatos', JSON.stringify(contatos));
}

function removerContato(c) {
    contatos.splice(c, 1);
}

function removerLinha (e) {
    removerContato(e);
    inserirContato();
    formarTabela();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const tel = document.getElementById('telefone').value;

    let con = {nome, tel};

    contatos.push(con);
    inserirContato();
    formarTabela();
})

formarTabela();