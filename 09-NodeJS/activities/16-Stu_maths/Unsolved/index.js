const maths = require('./maths');


// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`


operation = process.argv[2]
numOne = process.argv[3]
numTwo = process.argv[4]
    
console.log(operation)



// TODO: Create a `switch` statement that accepts an `operation` parameter

switch(operation) {
    case 'sum':
        numOne + numTwo;
        break;
    case difference:

}

// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
