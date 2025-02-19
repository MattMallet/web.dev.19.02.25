import nomes from "./nomes.js"
import sobreFake from "./sobrenome.js"

function rg() {
    return Math.random().toString().slice(3, 12)
}

//console.log(nomes);

function nomeFake(){
    let idx =  parseInt (Math.random()*nomes.length)
    return nomes[idx]
}

function sobreFake(){
    let idx =  parseInt (Math.random()*sobreFake.length)
    return sobreFake[idx]
}

export { rg }
