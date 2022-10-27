const kmViaggio = parseInt(prompt("Quanti kilometri di distanza devi percorrere?"));
console.log(kmViaggio);
console.log("Distanza")

const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);
console.log("Eta");

var priceTicket = kmViaggio * 0.21;
console.log(priceTicket);
console.log(Math.round(priceTicket * 100) / 100)
console.log("Prezzo intero");

if (userAge <= 18) {
    var calcoloScontoJunior = ((priceTicket * 20) / 100);
    var ticketUnder = priceTicket - calcoloScontoJunior;
    console.log(ticketUnder);
    console.log(Math.round(ticketUnder * 100) / 100);
    console.log("Prezzo scontato");
}

    else if (userAge >= 65) {
    var calcoloScontoSenior = ((priceTicket * 40 / 100));
    var ticketOver = priceTicket - calcoloScontoSenior;
    console.log(ticketOver);
    console.log(Math.round(ticketOver * 100) / 100);
    console.log("Prezzo scontato");
}
