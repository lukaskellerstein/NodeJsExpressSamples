function main() {
    // --------------------------------------------------
    // REVERSE SENTENCE
    //
    // Write a method which will reverse order of words in sentence.
    // The method will not reverse the words itself.
    // --------------------------------------------------

    // -------------------------------------
    // implement here
    const reverseSentence = (text) => {
        return text.split(' ').reverse().join(' ');
    }

    // -------------------------------------
    // TEST data
    const testSentence = "Prepare for your technical interview using Byte by Byte";
    console.log(testSentence);
    console.log(reverseSentence(testSentence));

};
main();