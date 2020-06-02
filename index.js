
arr = ['Lisa', 'Kaitlin', 'Jan']

// const writeCards = (arr, event) => arr.map(x => `Thank you ${x},Ada, for the wonderful ${event} gift!`)

// writeCards(arr, "surprise")

function writeCards(arr, event) {
  let message = []
  for(let i = 0; i < arr.length; i++){
    message.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
  }
  return message
}

writeCards(arr, "surprise");

function countDown(x){
  let countdown = x
  while (countdown >= 0 ) {
    console.log(countdown--);
  }
}