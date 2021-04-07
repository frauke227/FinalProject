console.log("Welcome to Melkam Ethiopia's Online Shop")
//defining the objects
let shiro = {
    price: 10.99,
    availableOptions: ['vegetarian', 'vegan'],
    description: 'Shiro',
}

let misrWot = {
    price: 10.99,
    availableOptions: ['vegetarian', 'vegan'],
    description: 'Misr',
}

let kikWot = {
    price: 9.99,
    description: 'Kik',
}

let keyWot = {
    price: 10.99,
    description: 'KeyWot'
}

let doroWot = {
    price: 11.99,
    description: 'DoroWot',
}

let beyaynetu = {
    price: 24.99,
    availableOptions: ['vegetarian', 'vegan'],
    description: 'Beyaynetu',
}

let mehaberawi = {
    price: 24.99,
    description: 'Mehaberawi'
}

let giftCard = {
    price:10.00,
    description: 'giftCard'
}
// setting the products from the objects
let products = [shiro, misrWot, kikWot, keyWot, doroWot, beyaynetu, mehaberawi, giftCard]

let basket = []

//Functions
//defining the arrow function
const addToBasket = (item) => {
    //push the item to shopping basket
    basket.push(item)
}

//function to calculate the sum of the products:
const calculateSum = (someBasket) => {
    let totalSum = 0
    //look trough the basket and calculate totalSum by the price
    for(product of someBasket) {
        totalSum = totalSum + product.price
    }
    return totalSum
}

// Callback function for Event listener function:
const addToCartOnClick = (event) => {
    let clickedItem = products.find((item) => {
        return item.description == event.target.id
    })
    //adding the item to the basket array by calling the function
    addToBasket (clickedItem)
    // adding item to the page
    let listItem = document.createElement('li')
    listItem.innerText = clickedItem.description
    document.querySelector('.listOfItems').append(listItem)
}

//find the buttons:
let addToCartButtons = document.querySelectorAll('.products .btn')

addToCartButtons.forEach((button) => {
    button.addEventListener('click', (event) => addToCartOnClick(event))
})

// Function to display the sum:
const displaySum = () => {
    let p = document.createElement('p')
    let sum = calculateSum(basket)
    p.innerText = `Total amount: ${sum} €`
    //pick out the div with the class checkout, and add the p-element 
    document.querySelector('.checkout').append(p)
}

//click on the "Go to check out" button and display the amount to pay:
let checkoutButton = document.querySelector('.buy')
checkoutButton.addEventListener('click', () => displaySum())