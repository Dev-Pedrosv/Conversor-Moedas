let button = document.getElementById("button")
let select = document.getElementById("select-bandeira")


async function preco() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(function (resposta) {

        return resposta.json()

    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high
    let bitcoin = moedas.BTCBRL.high


    let valorReais = Number(document.getElementById("input").value)
    let result = document.getElementById("result")
    let valor = document.getElementById("valor")
    let nomeReal = document.getElementById("nome-real")



    if (select.value === "$ Dólar Americano") {
        let resultadoDolares = valorReais / dolar
        result.innerHTML = resultadoDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
    if (select.value === "€ Euro") {
        let resultadoEuros = valorReais / euro
        result.innerHTML = resultadoEuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }
    if (select.value === "₿ Bitcoin") {
        let resultadoDolares = valorReais / bitcoin
        result.innerHTML = resultadoDolares.toLocaleString('en-US', { style: 'currency', currency: 'BTC' })
    }

    valor.innerHTML = valorReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    if (valorReais > 1) {
        nomeReal.innerHTML = `Reais`
    } else {
        nomeReal.innerHTML = `Real`
    }


}

function trocaDeMoeda() {

    let textoMoedas = document.getElementById("texto-moedas")
    let moedaImagem = document.getElementById("moeda-img")

    if (select.value === "$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        moedaImagem.src = "./img/eua.jpg"
        preco()

    }
    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        moedaImagem.src = "./img/euro.png"
        preco()
    }
    if (select.value === "₿ Bitcoin") {
        textoMoedas.innerHTML = "Bitcoin"
        moedaImagem.src = "./img/bitcoin.jpg"
        preco()
    }

}

button.addEventListener('click', preco)
select.addEventListener("change", trocaDeMoeda)

