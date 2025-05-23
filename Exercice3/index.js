// Créez une fonction JavaScript appelée `calculateAverage` 
// qui prend un tableau de nombres en tant que paramètre 
// et retourne la moyenne de ces nombres. 
// Si le tableau est vide, il faudra retourner un message 
// `No numbers to calculate average`.

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default function calculateAverage(numbersArray) {
    if(!numbersArray || numbersArray.length === 0) {
        return "No numbers to calculate average"
    } else {
        numbersArray = numbersArray.map((number) => Number(number))
        const result = numbersArray.reduce((acc, number) => acc + number) / numbersArray.length
        return result
    }
}
