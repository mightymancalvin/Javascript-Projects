// check if the person is old enough 
// log a suitable message to the console in both cases 

let age = Math.floor(Math.random() * 100)
console.log(age)

if (age < 21) {
    console.log("You cannot enter the club !!!")
} else {
    console.log("You can enter the club !!!")
}


// Another if else try 
if (age < 100) {
    console.log("You are not eligible !!!")
} else if (age === 100) {
    console.log("Here is your birthday card !!!")
} else {
    console.log("You're not eligible, you already have a card !!!")
}

