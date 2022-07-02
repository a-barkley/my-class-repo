// Write Your Code Below
function comparison(x,y) {
    if (x === y) {
        console.log("They are equal in type and value");
    }
    else if (x == y) {
        console.log("They are equal in value");
    }
    else {
        console.log("The values are not equal");
    }
}

comparison(1, 1);
comparison(1, "1");
comparison(1, "Hi");