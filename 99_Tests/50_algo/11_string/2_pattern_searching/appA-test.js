function main() {
    // ------------------------------------------
    // "NAIVE" PATTERN SEARCH
    // ------------------------------------------

    // -------------------------------------
    // implement here
    const search = (searchedText, searchText) => {
        let resultIndexes = [];
        for (let i = 0; i < searchedText.length; i++) {

            let result = true;
            for (let ii = 0; ii < searchText.length; ii++) {
                const el1 = searchedText[i + ii];
                const el2 = searchText[ii];

                if (el1 !== el2) result = false;
            }

            if (result) resultIndexes.push(i);
        }

        return resultIndexes;
    }

    // -------------------------------------
    // TEST data
    const txt = "AABAACAADAABAAABAA";
    const pat = "AABA";
    console.log(search(txt, pat));

};
main();