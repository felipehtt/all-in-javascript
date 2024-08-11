import prompt from "prompt-sync"
let ler = prompt()
console.clear()

let a = []
let p = []
let i = 0

for(let cont = 0; cont < 15; cont ++){
    console.log(`Insira um valor ao indice ${cont}`)
    let valor = Number(ler())
    a[cont] = valor

    if(valor >= 10){
        p[i] = valor
        i++
    
    }

}

console.log(p)

