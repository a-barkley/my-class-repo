// Logging everything in the window to the console
console.log(this);

// ALso refers to the global object
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// It would console log 20 as it is only local
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

// Console logs the result of the initialInvestment key multiplied by 1.15, 5750
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};
