// initialize count as 0
let catCount = 0

// grab object to change
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

function increment(){
    // update count 
    catCount += 1
    // alert("The button was clicked !!! : ")

    // change text to update
    countEl.innerText = catCount
}

function reset() {
    // reset to Zero
    catCount = 0

    // change to zero
    countEl.innerText = catCount

}

//save function 
function save (){
    saveEl.innerText += " " + catCount + " - "

    // can also use textContent
    // saveEl.textContent += catCount + " - "

    console.log(catCount)
    reset()
}