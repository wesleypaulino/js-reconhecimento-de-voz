const numeroRandom = getRandom()
const menorValor = 1
const maiorValor = 10

function getRandom() {
    return parseInt( (Math.random() * maiorValor + 1 ) )
  }

  console.log(numeroRandom)

const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML = maiorValor

