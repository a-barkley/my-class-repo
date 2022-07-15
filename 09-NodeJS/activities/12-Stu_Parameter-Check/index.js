function compare() {
    var input = process.argv
    input.splice(0, 2)
    console.log(input)
    
    if (input[0] === input[1]) {
        console.log('true');
    } else {
        console.log('false');
    }
}

compare()