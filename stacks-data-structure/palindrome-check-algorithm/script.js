const word = 'girl'
let wordLettersDismantled = []
let secondWord = ''

//create a function that returns ' secondWord ' as an array of ' word ' written backwards
function dismantleWord(){

    //create an array containing single letters of 'word' from the end to the start of 'word'
    for(let i = 0; i < word.length; i++){
        wordLettersDismantled.push(word[i])
    }

    //change secondWord to be a string of 'word' written backwards by adding the letters from 'wordLettersDismantled' array with pop() 
    while(wordLettersDismantled.length > 0){
        secondWord += wordLettersDismantled.pop()
    }

    return new Promise((resolve) => {
        resolve(secondWord)
    })

}

//create the final function that checks if ' secondWord ' and ' word ' match
const checkPalindrome = async () => {

    //Get ' secondWord ' from dismantleWord() results which is a promise hence the async...await structure of this function
    const secondWord = await dismantleWord()

    if(secondWord !== word){
        console.log(`${secondWord} is not equal to ${word}`)
    }
    else{
        console.log(`${secondWord} is exactly the same as ${word}`)
    }
  
}

checkPalindrome()