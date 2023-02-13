// create two cariables, firstCard and SecondCard
// set their values to a random number between 2-11

function generate_val() {
    val = Math.floor(Math.random() * 10) + 2
    return val
}


let firstCard = generate_val(), SecondCard = generate_val()


console.log(firstCard, SecondCard)


// create a variable, sum and set it to the sum of the two cards 
let sum = firstCard + SecondCard
console.log(sum)


// check for winner 
if (sum <= 20) {
    // ask to draw new card 
    console.log("Do you want to draw another card ? : ")
} else if (sum === 21) {
    // declare winner 
    console.log("You've won. yaaaaaaaaaaaaaaaaaa !!!")
} else {
    // declare as looser 
    console.log("Sorry, you've lost .... Try again !!!")
}