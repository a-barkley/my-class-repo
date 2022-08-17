const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    price: Number
})

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function() {
    discount = this.price / 2
    console.log(`${this.title} has a discounted price of ${discount}`)
}

// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema)

// TODO: Create a new instance of the model
const oldYeller = new Book({ title: 'Old Yeller', author: 'Someone', price: 10 })

// TODO: Call the custom instance method on the instance
oldYeller.getDiscount();

module.exports = Book;
