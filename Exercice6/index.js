function appendToDisplay(event) {
    input = document.getElementById("display")
    input.value += `${event.target.innerHTML}` 
}

function clearDisplay() {
    input = document.getElementById("display")
    input.value = ""

}
    
function calculateResult() {
    input = document.getElementById("display")
    result = eval(input.value)
    input.value =  result != "Infinity" ? result : "Division by zero is not allowed"
}

