

const search = (txt, searchValue) => {

    let txtLength = txt.length;
    let searchValueLength = searchValue.length;

    for (let i = 0; i <= txtLength - searchValueLength; i++) {

        let j;

        for (j = 0; j < searchValueLength; j++) {
            if (txt[i + j] != searchValue[j]) break;
        }

        if (j == searchValueLength)
            console.log('Pattern found at index ' + i);
    }
}


const txt = "AABAACAADAABAAABAA";
const pat = "AABA";
search(txt, pat); 