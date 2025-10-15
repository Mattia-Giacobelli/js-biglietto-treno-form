console.log('It works');

/*
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: 
usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. La risposta finale (o output) 
sarà anch’essa da scrivere in console. 

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora 
realizzeremo un form in pagina in cui l’utente potrà inserire i dati e 
visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati 
in pagina (il prezzo dovrà essere formattato con massimo due decimali, 
per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile,
raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

*/


//Save ticket price, inputs and button in variables

const pricePerKm = 0.21

const nameInput = document.getElementById('name')
const ageInput = document.getElementById('age')
const kilometersInput = document.getElementById('kilometers')
const buttonEl = document.querySelector('button')
const form = document.querySelector('form')

//In page results variables
let nameEl = document.getElementById('nome')
let ageEl = document.getElementById('eta')
let routeEl = document.getElementById('percorso')
let priceEl = document.getElementById('prezzo')
let carriageEl = document.getElementById('carrozza')
let 

//Save user info in variables

let age = 0;
let kilometers = 0

form.addEventListener('submit', (event) => {
    event.preventDefault()
    age = ageInput.value
    kilometers = kilometersInput.value
    console.log(age, kilometers);
    //Calc the ticket cost

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

    //Stamp in console calc result
    console.log(finalPrice.toFixed(2));

    //Stamp data and results in html
    nameEl.innerHTML = nameInput.value
    routeEl.innerHTML = `Km da percorrere: ${kilometers}Km`
    priceEl.innerHTML = `€${finalPrice.toFixed(2)}`
    
    //Stamp age based offer

     if (age > 0 && age < 18) {
        ageEl.innerHTML = 'Biglietto minorenni'
    } else if (age > 65) {
        ageEl.innerHTML = 'Biglietto Over 65'
    } else {
        ageEl.innerHTML = 'Biglietto maggiorenni'
    }
    
    
}
)





