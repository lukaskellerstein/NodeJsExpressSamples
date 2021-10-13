

const reverseSentence = (text) => {
    const arr = text.split(' ');
    let result = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        result += element + " ";
    }
    return result;
}


const testSentence = "Prepare for your technical interview using Byte by Byte";
console.log(testSentence);
const result = reverseSentence(testSentence);
console.log(result);