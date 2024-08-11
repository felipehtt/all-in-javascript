import prompt from 'prompt-sync'
let ler = prompt ()

console.log('\nQual a sua temperatura?')
let t = Number(ler())

if (t >= 41) {
    console.log('\nA situação para sua temperatura é Hipertemia')
}
else if (t >= 39.6 && t < 41) {
    console.log('\nA situação para sua temperatura é Febre Alta')
}
else if (t >= 37.6 && t < 39.6) {
    console.log('\nA situação para sua temperatura é Febre')
}
else if (t >= 36 && t < 37.6) {
    console.log('\nA situação para sua temperatura é Normal')
}
else if (t < 36) {
    console.log('\nA situação para sua temperatura é Hipotermia')
}