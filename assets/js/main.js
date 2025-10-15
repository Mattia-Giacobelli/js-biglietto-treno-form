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

/*
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: 
usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. La risposta finale (o output) 
sarà anch’essa da scrivere in console. 
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
    //Create a function to calc the ticket cost

    //Multiply kilometers by price/km
    const basePrice = kilometers * pricePerKm
    console.log(basePrice);

    //Apply discount based on age

    let finalPrice = 0

    if (age > 0 && age < 18) {
        finalPrice = basePrice * 0.8
    } else if (age > 65) {
        finalPrice = basePrice * 0.6
    } else {
        finalPrice = basePrice
    }

    console.log(finalPrice.toFixed(2));
}
    //Stamp calc result

)




