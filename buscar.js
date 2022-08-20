const CIMA = 1, BAIXO = 2, ESQUERDA = 3, DIREITA = 4, CIMA_DIREITA = 5, CIMA_ESQUERDA = 6, BAIXO_DIREITA = 7, BAIXO_ESQUERDA = 8
const directionOffset = {
    1: [-1, 0],
    2: [1, 0],
    3: [0, -1],
    4: [0, 1],
    5: [-1, 1],
    6: [-1, -1],
    7: [1, 1],
    8: [1, -1]
}

function buscarPalavra(palavra) {
    const palavras = []
    for (let i = 0; i < 35; i++) {
        for (let j = 0; j < 20; j++) {
            const resultCima = buscarCima(palavra, i, j)
            const resultBaixo = buscarBaixo(palavra, i, j)
            const resultDireita = buscarDireita(palavra, i, j)
            const resultEsquerda = buscarEsquerda(palavra, i, j)

            const resultCimaDireita = buscarCimaDireita(palavra, i, j)
            const resultCimaEsquerda = buscarCimaEsquerda(palavra, i, j)
            const resultBaixoDireita = buscarBaixoDireita(palavra, i, j)
            const resultBaixoEsquerda = buscarBaixoEsquerda(palavra, i, j)
            
            const results = [resultCima, resultBaixo, resultDireita, resultEsquerda, resultCimaDireita, resultCimaEsquerda, resultBaixoDireita, resultBaixoEsquerda]
            results.filter(current => current).forEach(direction => palavras.push({direction, i, j}))
        }
    }
    return palavras
}

function buscarCima(palavra, i, j) {
    let current = 0
    for (let offset = 0; offset < palavra.length; offset++) {
        const offsettedI = i - offset
        if (offsettedI <= 0 || data[offsettedI][j] !== palavra[current++]) return 0
    }
    return CIMA
}

function buscarBaixo(palavra, i, j) {
    let current = 0
    for (let offset = 0; offset < palavra.length; offset++) {
        const offsettedI = i + offset
        if (offsettedI >= data.length || data[offsettedI][j] !== palavra[current++]) return 0
    }
    return BAIXO
}

function buscarDireita(palavra, i, j) {
    let current = 0
    for (let offset = 0; offset < palavra.length; offset++) {
        const offsettedJ = j + offset
        if (offsettedJ >= data[0].length || data[i][offsettedJ] !== palavra[current++]) return 0
    }
    return DIREITA
}

function buscarEsquerda(palavra, i, j) {
    let current = 0
    for (let offset = 0; offset < palavra.length; offset++) {
        const offsettedJ = j - offset
        if (offsettedJ < 0 || data[i][offsettedJ] !== palavra[current++]) return 0
    }
    return ESQUERDA
}

function buscarCimaEsquerda(palavra, i, j) {
    let current = 0
    for (let offset = 0; offset < palavra.length; offset++) {
        const offsettedI = i - offset
        const offsettedJ = j - offset
        if ((offsettedI < 0 || offsettedJ < 0) || data[offsettedI][offsettedJ] !== palavra[current++]) return 0
    }
    return CIMA_ESQUERDA
}

function buscarBaixoEsquerda(palavra, i, j) {
    let current = 0
    for (let offset = 0; offset < palavra.length; offset++) {
        const offsettedI = i + offset
        const offsettedJ = j - offset
        if ((offsettedI >= data.length || offsettedJ < 0) || data[offsettedI][offsettedJ] !== palavra[current++]) return 0
    }
    return BAIXO_ESQUERDA
}

function buscarBaixoDireita(palavra, i, j) {
    let current = 0
    for (let offset = 0; offset < palavra.length; offset++) {
        const offsettedI = i + offset
        const offsettedJ = j + offset
        if ((offsettedI >= data.length || offsettedJ >= data[0].length) || data[offsettedI][offsettedJ] !== palavra[current++]) return 0
    }
    return BAIXO_DIREITA
}

function buscarCimaDireita(palavra, i, j) {
    let current = 0
    for (let offset = 0; offset < palavra.length; offset++) {
        const offsettedI = i - offset
        const offsettedJ = j + offset
        if ((offsettedI < 0 || offsettedJ >= data.length) || data[offsettedI][offsettedJ] !== palavra[current++]) return 0
    }
    return CIMA_DIREITA
}