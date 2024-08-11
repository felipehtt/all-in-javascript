import prompt from 'prompt-sync'
let ler = prompt()

console.log('Informe a primeira idade')
let idade1 = Number(ler())

let idade2 = Number(ler())

let idade3 = Number(ler())


if (idade2 >= idade1 && idade2 < idade3) {
    console.log(idade2)
}
else if (idade1 >= idade2 && idade1 < idade3) {
    console.log(idade1)
}
else if (idade3 >= idade1 && idade3 < idade2) {
    console.log(idade3)
}
else if (idade1 > idade2 && idade2 < idade1) {
    console.log(idade2)
}
else {
    console.log(idade1)
}