const menorValor = 1
const maiorValor = 10
const numeroRandom = getRandom()

function getRandom() {
    return parseInt( (Math.random() * maiorValor + 1 ) )
  }

const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML = maiorValor

