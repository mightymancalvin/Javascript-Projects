// create two cariables, firstCard and SecondCard
// set their values to a random number between 2-11
// grab start game button 
let cards = document.getElementById("cards-el")
let sumCards = document.getElementById("sum-el")

function startGame() {
    cards.textContent = "Cards : "
    sumCards.textContent = "Sum : "


    function generate_val() {
        val = Math.floor(Math.random() * 10) + 2
        return val
    }
    function sum_cards(first, Second) {
        result = firstCard + SecondCard
        sumCards.textContent += result
    }

    let firstCard = generate_val(), SecondCard = generate_val()
    cards.textContent += firstCard + ", " + SecondCard

    sum_cards(firstCard, SecondCard)
}


// state of game is alive
let hasBlackJack = false
let isAlive = true

// create a message variable 
let msg = ""



// check for winner 
if (sum <= 20) {
    // ask to draw new card 
    msg = "Do you want to draw another card ? : "
} else if (sum === 21) {
    // declare winner 
    msg = "You've won. yaaaaaaaaaaaaaaaaaa !!!"
    hasBlackJack = true
} else {
    // declare as looser 
    msg = "Sorry, you've lost .... Try again !!!"
    isAlive = false
}


// check and confirm
console.log(isAlive)
console.log(msg)

if (hasBlackJack) {
    console.log("You can cash out now.")
} else if (!isAlive) {
    console.log("Sorry you lost!!!")
}

