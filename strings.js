// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// Examples:
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
function removeBlanks(str){
    // converts a string to an array
    wordArray = str.split(" ");
    console.log(wordArray);
    // splits the fourth index into individual letters
    console.log(wordArray[3].split(""))
    // converts an array to a string
    console.log(wordArray.join(""));
    return wordArray;
}
removeBlanks(" Pl ayTha tF u nkyM usi c ");
removeBlanks("Words and phrases that go here");

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
// Examples:
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
function getDigits(str){
    let arr = str.split("");
    let newArr=[]
    // console.log(arr);
    for(let i=0;i<arr.length;i++){
        if(!isNaN(arr[i])){
            // console.log(arr[i]);
            newArr.push(arr[i]);
        }
    }
    // console.log(newArr);
    console.log(newArr.join(""));
    // console.log(arr.join(""));
}
getDigits("abc8c0d1ngd0j0!8"); // expecting 801008

getDigits("0s1a3y5w7h9a2t4?6!8?0"); // expecting 1357924680



// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
function acronyms(str){
    let arr= str.split(" ");
    let newArr = [];
    // console.log("start",arr);
    for(let i=0;i<arr.length;i++){
        // console.log("loop first letter", arr[i][0]);
        newArr.push(arr[i][0]);
        
    }
    console.log(newArr.join("").toUpperCase());
}
acronyms("there's no free lunch - gotta pay yer way. ");
acronyms("Live from New York, it's Saturday Night!");
acronyms("I would like to have some brownies with a glass of milk!");


// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 
// Examples:
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11
function finalSpace(str){
    let start = str.length;
    // console.log("start leng", str.length);
    let arr = str.split(" ");
    let end = arr.length;
    // console.log(arr);
    // console.log("total words",arr.length);
    const answer = start-end;
    console.log("answer", answer);
    return answer;
} 
finalSpace("Drink coffee, you will succeed");
finalSpace("Hello world !");

// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
// Examples:
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']
function removeShorterStrings(arrStr, val){
    // console.log(arrStr);
    let final=[];
    for(let i=0; i<arrStr.length;i++){
        // console.log(arrStr[i]);
        let size = arrStr[i].length;
        if(size >= val){
            // console.log(size);
            final.push(arrStr[i]);
        }
    }
    console.log(final);
    return final;
}
removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4);
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3);