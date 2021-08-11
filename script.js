let toggle = document.getElementById("toggle")
let body = document.querySelector("body")

toggle.addEventListener("click", function(event) {
    event.preventDefault();
    body.classList.toggle("corps");
})

let signup = document.querySelector("#signup")
let bulle = document.getElementById("bulle")
let Moda = document.getElementById("Moda")
signup.addEventListener("click", function(event) {
    event.preventDefault();
    bulle.classList.add("bullet")
    Moda.classList.add("Modalit")
    Moda.classList.replace("ferme", "Modalit")
    bulle.classList.replace("ferme", "bullet")
    body.classList.remove("corps");
})


let Ferm = document.getElementById("close")


Ferm.addEventListener("click", function(event) {
    Moda.classList.replace("Modalit", "ferme");
    bulle.classList.replace("bullet", "ferme");

})

let form = document.querySelector("#form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#confirm_password");
// const expression = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const expression = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;


form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (username.value.length < 3 || username.value === "") {
        let confirmation1 = document.getElementById("confirmation1")
        confirmation1.textContent = "Veuillez entrez un username de minimum 3 caracteres"
        confirmation1.style.color = "#e74c3c"
        username.style.border = "2px solid #e74c3c"
    } else if (username.value.length > 15) {
        let confirmation1 = document.getElementById("confirmation1")
        confirmation1.textContent = "Veuillez entrez un username qui ne dépasse pas 15 caracteres "
        confirmation1.style.color = "#e74c3c"
        username.style.border = "2px solid #e74c3c"
    } else {
        username.style.border = "2px solid #2ecc71"
        confirmation1.textContent = ""

    }


    if (expression.test(email.value)) {
        let confirmation2 = document.getElementById("confirmation2")
        email.style.border = "2px solid #2ecc71"
        confirmation2.textContent = ""

    } else {
        let confirmation2 = document.getElementById("confirmation2")
        confirmation2.textContent = "Veuillez entrez une adresse E-mail valide"
        confirmation2.style.color = "#e74c3c"
        email.style.border = "2px solid #e74c3c"
    }

    if (password.value === "" || password.value.length < 6) {
        let confirmation3 = document.getElementById("confirmation3");
        confirmation3.textContent = "Veuillez entrez un mot de passe d'au moins 6 caracteres";
        confirmation3.style.color = "#e74c3c";
        password.style.border = "2px solid #e74c3c"
    } else {
        password.style.border = "2px solid #2ecc71"
        confirmation3.textContent = ""
    }

    if (password.value !== password2.value || password2.value == "") {
        let confirmation4 = document.getElementById("confirmation4");
        confirmation4.textContent = " Veuillez confirmer avec le mot de passe saisi plus haut"
        confirmation4.style.color = "#e74c3c";
        password2.style.border = "2px solid #e74c3c"
    } else {
        password2.style.border = "2px solid #2ecc71"
        confirmation4.textContent = ""
    }


    if (username.value.length >= 3 && username.value.length <= 15 && expression.test(email.value) && password.value.length >= 6 && password.value == password2.value) {
        Moda.classList.replace("Modalit", "ferme");
        bulle.classList.replace("bullet", "ferme");
        window.open("./signup.html");

    }

})