const myButton = document.getElementById("myButton")
myButton.addEventListener('click', () => {
    messageDiv = document.createElement("p")
    messageDiv.innerHTML = `Bonjour, vous avez cliqué sur le bouton !`
    body = document.querySelector("body")
    body.appendChild(messageDiv)
})