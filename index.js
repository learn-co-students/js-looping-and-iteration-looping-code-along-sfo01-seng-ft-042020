function writeCards(names, event) {
    let thanks_array = [];
    for (let i = 0; i < names.length; i++) {
        thanks_array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }  
    return thanks_array;
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
