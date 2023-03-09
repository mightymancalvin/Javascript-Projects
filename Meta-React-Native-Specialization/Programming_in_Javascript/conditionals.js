// Task 1 - Are you old enough 
var age = 10;

if (age >= 65){
    console.log("You get your income from your pension.")
} else if ((age < 65) && (age >= 18)){
    console.log("Each month you get a salary")
} else if (age < 18){
    console.log("You get an allowance")
} else {
    console.log("The Value of age is not numerical")
}


// Task 2 - days of the week 
var day = "Sunday";

switch(day){
    case "Monday":
        console.log("Born on Monday")
        break;
    case "Tuesday":
        console.log("Married on Tuesday")
        break;
    case "Wednesday":
        console.log("Died on Wednesday")
        break;
    case "Thursday":
        console.log("Buried on Thursday")
        break;
    case "Friday":
        console.log("Sick on Friday")
        break;
    case "Saturday":
        console.log("Woke up on Saturday")
        break;
    case "Sunday":
        console.log("That's the end of Solomon Grandy-- Sunday")
        break;
    default:
        console.log("There's no such day")
}