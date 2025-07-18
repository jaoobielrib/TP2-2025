document.getElementById("forma").addEventListener("change", att)

function calcularA() {
    const forma = document.getElementById("forma").value
    const dados = document.getElementById("dados")
    dados.innerHTML = ""

switch (forma) {
    case 'Quadrado':
        dados.innerHTML = "a"
}
}
