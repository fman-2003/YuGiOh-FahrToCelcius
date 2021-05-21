let n = 100;


function checkYuGiOh(n) {
    let oneToHundred = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            oneToHundred.push("yu-gi-oh");
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            oneToHundred.push("gi-oh");
        }
        else if (i % 2 === 0 && i % 5 === 0) {
            oneToHundred.push("yu-oh");
        }
        else if (i % 2 === 0 && i % 3 === 0) {
            oneToHundred.push("yu-gi");
        }
       else if (i % 2 === 0) {
           oneToHundred.push("yu")
       }
       else if (i % 3 === 0) {
           oneToHundred.push("gi")
       }
       else if (i % 5 === 0) {
           oneToHundred.push("oh")
       }
        else {
            oneToHundred.push(i);
        }
    }
    return oneToHundred
}

