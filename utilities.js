function numOptions(numStart, numEnd) {
    const optionArr = []
    for(let i = numStart; i <= numEnd; i++) {
      optionArr.push(i)
    }
    return optionArr
}

function getRandomNum (min, max) {
    if (min >= max) return ('Min should be less than max')
    else return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumDiffFromLast (min, max) {
    
        let previousNum = null; 

        return function innerFunc() {
            if (min >= max) return ('Min should be less than max')
            else {
            let ranNum;
            do {
                ranNum = getRandomNum(min, max)
            } while (ranNum === previousNum);

            previousNum = ranNum;
            return ranNum;
        };
    }
};

function createPlaceholderTextArr(obj, numParagraphs, numWords, loremIpsum) {

    const normalFillerArr = ['to', 'will', 'from', 'there', 'where', 'a', 'the', 'which', 'you', 'for', 'any', 'they', 'it']
    const loremIpsumFillerArr = ['ut', 'ad', 'quis', 'duis', 'aute', 'in', 'eu', 'es', 'elit', 'sed', 'do', 'sit']
    const loremIpsumEndingArr = ['or', 'ur', 'it', 'od', 'am', 'is', 'um', 'em', 'at', 'do', 'et']
    const punctuation = [",", '.', '?', ';', ',', ' ', ' ', ',']

    // select which filler arr to use
    const arr = loremIpsum ? loremIpsumFillerArr : normalFillerArr 

    // create arr from imported data
    const strArr = [] 
    
    for (const key in obj) {
        strArr.push(`${key}${loremIpsum ? 'em': ''}`) 
    }
    
    // random number generators
    const kidismRandomNumGen = getRandomNumDiffFromLast(0, strArr.length - 1)
    const fillerRandomNumGen = getRandomNumDiffFromLast(0, arr.length - 1)
    const puncRandomNumGen = getRandomNumDiffFromLast(0, punctuation.length - 1)

    let placeHolderTextStr
    const placeHolderTextArr = []

    // Loop for paragraphs
    for (let i = 1; i <= Number(numParagraphs); i ++) {

        // If 1st paragraph includ opening words, and add lorem ipsum endings if loremIpsum is true
        placeHolderTextStr = i === 1 ? `Your${loremIpsum ? 'em' : ''} kids${loremIpsum ? 'um' : ''} kidism${loremIpsum ? '' : "'s"} lorem Ipsum, ` : ''
        
        // Start count at 5 if 1st paragraph to take into account opening words
        let count = i === 1 ? 5 : 0

        const limit = Number(numWords)

        // Loop for num of words
        while (count < limit) {

            // if not last word and is not factor of 13 add a space
            count !== limit && count % 13 !== 0 && (placeHolderTextStr += ' ')
            // if it is a factor of 13 add punctuation
            if (count % 13 === 0 && count !== 0) {
                const strToAdd = punctuation[puncRandomNumGen()]
                placeHolderTextStr += strToAdd + ' '
            }
            
            // Gerate random num
            const ranNum = getRandomNum(1, 2)
            // Use random num to decide between filler or kidism 
            if ( ranNum === 1 ) {
                // Get random kidism
                let strToAdd = strArr[kidismRandomNumGen()]
                // if 1st word capitalise it
                if (count === 0) strToAdd = strToAdd.slice(0, 1).toUpperCase() + strToAdd.slice(1)
                // if it follows . or ? capitalise it
                else if (placeHolderTextStr[placeHolderTextStr.length - 2] === '.' || placeHolderTextStr[placeHolderTextStr.length -2] === '?') {
                    strToAdd = strToAdd.slice(0, 1).toUpperCase() + strToAdd.slice(1)
                }
                placeHolderTextStr += strToAdd
                count ++
                count === limit && (placeHolderTextStr += '.')
            }
            else {
                // get random filler
                let strToAdd = arr[fillerRandomNumGen()]
                // if 1st word capitalise it
                if (count === 0) strToAdd = strToAdd.slice(0, 1).toUpperCase() + strToAdd.slice(1)
                // if it follows . or ? capitalise it
                else if (placeHolderTextStr[placeHolderTextStr.length -2] === '.' || placeHolderTextStr[placeHolderTextStr.length -2] === '?') {
                    strToAdd = strToAdd.slice(0, 1).toUpperCase() + strToAdd.slice(1)
                }
                // add generated word to string
                placeHolderTextStr += strToAdd
                // add 1 to count
                count ++
                // if last word to be generated add a .
                count === limit && (placeHolderTextStr += '.')
            }
        }
        // add to the arr
        placeHolderTextArr.push(placeHolderTextStr)
    }
    
    return placeHolderTextArr
}

module.exports = {numOptions, getRandomNum, getRandomNumDiffFromLast, createPlaceholderTextArr}
// export {numOptions, getRandomNum, getRandomNumDiffFromLast, createPlaceholderTextArr}