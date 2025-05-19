function convertToBinary() {
    input = document.getElementById("decimalInput")
    decimalNumber = Number(input.value)
    const restes = []
    while (decimalNumber > 0) {
        restes.push(decimalNumber - Math.trunc(decimalNumber / 2) * 2)
        decimalNumber = Math.trunc(decimalNumber / 2)
    }
    binaryResult = document.getElementById("binaryResult")
    binaryResult.innerHTML = restes.reverse().join("")
}