console.log('It works');

/*
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

//Save ticket price, inputs and button in variables

const pricePerKm = 0.21

const ageInput = document.getElementById('age')
const kilometersInput = document.getElementById('kilometers')
const buttonEl = document.querySelector('button')

//Save user info in variables

let age = 0;
let kilometers = 0

buttonEl.addEventListener('click', () => {
    age = ageInput.value 
    kilometers = kilometersInput.value
    console.log(age, kilometers);
}
)

//Create a function to calc the ticket cost

//Multiply kilometers by price/km

//Apply discount based on age

//Stamp calc result