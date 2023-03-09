// Task 1 
var i;

function letterFinder(word, match){
    for (i=0; i<word.length; i++){
        if(word[i] == match){
            console.log("Found the", match, "at", i);
        } else {
            console.log("---No match founf at", i);
        }
    }
}

letterFinder("test", "t");