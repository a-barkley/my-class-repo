//WRITE YOUR CODE BELOW
var customerOrder = {
    "drink name": "latte",
    "num of sugars": 20,
    isOrderReady: false
}

console.log("This customers order is " + customerOrder["drink name"] + " with " + customerOrder["num of sugars"] + " sugars.");

if (customerOrder.isOrderReady) {
    console.log("Ready for pick-up.")
}

else {
    console.log("Still in order queue.")
}