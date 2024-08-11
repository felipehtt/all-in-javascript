function encontrarMenor(num1, num2, num3) {
    
    if (num1 <= num2 && num1 <= num3) {
        return num1;
    }
    
    else if (num2 <= num1 && num2 <= num3) {
        return num2;
    }
    
    else {
        return num3;
    }
}

let menorNumero = encontrarMenor(10, 5, 8);
console.log("O menor número é:", menorNumero);
