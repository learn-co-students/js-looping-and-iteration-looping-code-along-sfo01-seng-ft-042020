// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i<gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

const names = ['Lisa', 'Kaitlin', 'Jan'];
const event = 'surprise';
let array = []
function writeCards(names, event) {
    for (let i = 0; i<names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}

function countDown(number){
    for (let i = number; i >= 0; i--){
        console.log(i);
    }

}

