function countWordOccurrences (sentence:string,word: string):number{
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();

    const splitSentence = lowerCaseSentence.split(" ");
    return splitSentence.filter(word=>word===lowerCaseWord).length;
}

// console.log(countWordOccurrences("I love typescript", "typescript"));
