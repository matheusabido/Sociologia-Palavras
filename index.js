const container = document.querySelector('.container')
const buscar = document.querySelector('#buscar-palavra')

function loadContainer() {
    for (let i = 0; i < 35; i++) {
        for (let j = 0; j < 20; j++) {
            const element = document.createElement('span')
            element.innerText = `${data[i][j]}`
            element.id = `${i}:${j}`
            element.className = 'letra'
            container.appendChild(element)
        }
    }
}

function loadPalavras() {
    const p = document.querySelector('.palavras-container').querySelector('p')
    p.innerText = `${palavras.join(', ')}.`
}

function destacarPalavra(palavra) {
    palavra = palavra.replaceAll(' ', '').toUpperCase()
    resetLetras()
    const results = buscarPalavra(palavra)
    for (const result of results) {
        if (results) {
            let i = result.i
            let j = result.j
            const dirOff = directionOffset[result.direction]
            for (let current = 0; current < palavra.length; current++) {
                document.getElementById(`${i}:${j}`).style.backgroundColor = 'yellow'
                i += dirOff[0]
                j += dirOff[1]
            }
        }
    }
}

function resetLetras() {
    for (let i = 0; i < 35; i++) {
        for (let j = 0; j < 20; j++) {
            document.getElementById(`${i}:${j}`).style.backgroundColor = 'rgb(210, 210, 210)'
        }
    }
}

loadContainer()
loadPalavras()

buscar.oninput = () => {
    destacarPalavra(buscar.value)
}