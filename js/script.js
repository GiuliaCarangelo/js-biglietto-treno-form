// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.1976 € al km)
// va applicato uno sconto del 17.65% per i minorenni
// va applicato uno sconto del 53.27% per gli over 65.

const userLength = Number(parseFloat(prompt('Inserisci il numero di chilometri (km) che dovrai percorrere')));
const userAge = parseInt(prompt('Inserisci l\'età del passeggero'));
console.log(userLength);
console.log(userAge);

let ticketPrice = Number(parseFloat(userLength * 0.21));

if (userAge < 18) {
    let discount = (ticketPrice * 17.65) / 100;
    ticketPrice = ticketPrice - discount;
    
    console.log('Hai ottenuto lo sconto del 17.65%! -' + discount + '€.\n Ora il ticket costa: ' + ticketPrice + '€');
}else if (userAge >= 65) {
    let discount = (ticketPrice * 53.27) / 100;
    ticketPrice = ticketPrice - discount;

    console.log('Hai ottenuto lo sconto del 53.27%! -' + discount + '€.\n Ora il ticket costa: ' + ticketPrice + '€');
}

document.getElementById('finalprice').innerHTML = ticketPrice.toFixed(2) + " €";
