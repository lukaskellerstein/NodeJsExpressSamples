// ------------------------------------------
// EXACT PATTERN SEARCH
// ------------------------------------------

const search = (txt, pat) => {
    let M = pat.length;
    let N = txt.length;

    /* A loop to slide pat one by one */
    for (let i = 0; i <= N - M; i++) {
        let j;

        /* For current index i, check for pattern  
        match */
        for (j = 0; j < M; j++)
            if (txt[i + j] != pat[j])
                break;

        // if pat[0...M-1] = txt[i, i+1, ...i+M-1] 
        if (j == M)
            console.log("Pattern found at index " + i);
    }
}

const txt = "AABAACAADAABAAABAA";
const pat = "AABA";
search(txt, pat); 