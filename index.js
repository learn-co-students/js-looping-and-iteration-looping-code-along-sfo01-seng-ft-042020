// Code your solutions in this file
    
    
    const array = ["Ada", "Brendan", "Ali"];
    const name = "birthday";
    function writeCards( array , name ){
        const arr = [];
        for (let i = 0; i < array.length; i++){
            arr.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
        }
        return arr;
    }
    writeCards(array, str);

    function countDown(num){
        let i = num;
        while ( i >= 0){
            console.log(i);
            i--;
        }
    }
    countDown(10);
