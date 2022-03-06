// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
// }


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

let cards = ["Lisa", "Kaitlin", "Jan"];

function writeCards(message, value) {
    const newArray = [];
    for (let i = 0; i < message.length; i++) {
         newArray[i] = `Thank you, ${message[i]}, for the wonderful ${value} gift!`;
        }
    return newArray;
}

writeCards(cards, 'surprise');

function countDown(integer) {
    let i = integer;
    while (i != -1) {
        console.log(i);
        i--;
    }
}


// Thank you, Lisa, for the wonderful surprise gift!