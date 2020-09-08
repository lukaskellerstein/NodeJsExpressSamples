// ------------------------------------------
// PATTERN SEARCH + permutations of the string
// ------------------------------------------

// This function returns true if   
// contents of arr1[] and arr2[]  
// are same, otherwise false.  
const compare = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};


const findAnagrams = (str, ptr) => {
    //Get the length of string and anagarm 
    const S = str.length;
    const P = ptr.length;
    if (S < P) {
        return [];
    }

    //Create two empty arrays
    const sCount = new Array(256).fill(0);
    const pCount = new Array(256).fill(0);

    //Array to store found indexes
    const arr = [];

    //Initally count the characters of pattern and substring of length P in str
    for (let i = 0; i < P; i++) {
        sCount[str[i].charCodeAt()]++;
        pCount[ptr[i].charCodeAt()]++;
    }

    //Get substring of length P by sliding remove first character and adding new character at the window of P.
    for (let i = P; i < S; i++) {
        if (compare(sCount, pCount)) {
            arr.push(i - P);
        }

        //Add the next character count;
        sCount[str[i].charCodeAt()]++;

        //Remove the first charater count;
        sCount[str[i - P].charCodeAt()]--;
    }

    //Compare the last substring
    if (compare(sCount, pCount)) {
        arr.push(S - P);
    }

    //Return the array
    return arr;
};

let txt2 = "BACDGABCDA";
let pat2 = "ABCD";
console.log(findAnagrams(txt2, pat2)); 