
form = document.querySelector("form")
console.log(form)

inputName = document.querySelector("form #name")
inputName.setAttribute("aria-label", "Entrer votre nom")

inputEmail = document.querySelector("form #email")
inputEmail.setAttribute("aria-label", "Entrer votre email")

img = document.querySelector("img")
img.setAttribute("alt", "image")

labelName = document.createElement("label")
labelName.innerHTML = 'Name'
labelName.setAttribute("for", "name")
form.insertBefore(labelName, inputName)

labelMail = document.createElement("label")
labelMail.innerHTML = 'email'
labelMail.setAttribute("for", "email")
form.insertBefore(labelMail, inputEmail)
