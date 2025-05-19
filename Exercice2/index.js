// Créez votre fonction ici
// Créez une fonction JavaScript appelée `calculate` qui prend deux nombres entiers 
// et un opérateur en tant que paramètres (`+`, `-`, `*`, `/`). 
// La fonction doit effectuer l'opération mathématique correspondante 
// (addition, soustraction, multiplication ou division) et retourner le résultat.

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default function calculate(number1, number2, operator) {
    number1 = Number(number1)
    number2 = Number(number2)
    switch (operator) {
        case '+':
            return number1 + number2
        case '-':
            return number1 - number2
        case '*':
            return number1 * number2
        case '/':
            if (number2 === 0) {
                return "Division by zero is not allowed"
            } else {
                return number1/number2
            }
        default:
         return "Invalid operator"
    }
}

