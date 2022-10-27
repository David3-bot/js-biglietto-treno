const kmViaggio = parseInt(prompt("Quanti kilometri di distanza devi percorrere?"));
console.log(kmViaggio);
console.log("Distanza")

const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge);
console.log("Età");

const priceTicket = kmViaggio * 0.21;
console.log(priceTicket);
console.log(Math.round(priceTicket * 100) / 100)
console.log("Prezzo intero");

if (userAge < 18) {
    let calcoloScontoJunior = ((priceTicket * 20) / 100);
    let ticketUnder = priceTicket - calcoloScontoJunior;
    console.log(ticketUnder);
    console.log(Math.round(ticketUnder * 100) / 100);
    console.log("Prezzo scontato");
}

else if (userAge > 65) {
    let calcoloScontoSenior = ((priceTicket * 40 / 100));
    let ticketOver = priceTicket - calcoloScontoSenior;
    console.log(ticketOver);
    console.log(Math.round(ticketOver * 100) / 100);
    console.log("Prezzo scontato");
}

