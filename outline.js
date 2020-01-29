import mallData from './mallData.js';


const mallData = products.slice()
//keep track of ow many times a user has voted, period (up to 25)
//keep track of the votes for a given product

let totalVotes;
let productVoteDetails;

/* 
Store some id's (i.e. the number of votes given to a specific product)
you will pull form an array of secific objects. 

*/
let productVoteDetails = []; 


//display three random NON-dupilcated products
//display three New Non-duplicated Producs and refresh products



const displayThreeProducts = () => {
    
    //Get three random products from our data.

    const product1 = getRandomProduct(productsData);
    let product2 = getRandomProduct(productsData);
    const product3 = getRandomProduct(productsData);

    //make sure the products are unique. 

    while (product1.id === product2.id || product2.id === product3.id || product1.id === product3.id)
    {
        product2 = getRandomProduct(productsData)
        product3 = getRandomProduct(productsData)

    }

    const randomIndex = Math.floor(Math.random() * productsData.length);
    const randomProduct = productsData[randomIndex];

    
    //Render these three items on the screen as radio buttons with the same name and different values. 

    const radio1 = document.getElementById('product1')
    const radio2 = document.getElementById('product2')
    const radio3 = document.getElementById('product3')
    const radio1Span = document.getElementById(products1)


    //EVENT LISTENER -----------------------------------------------------------
    
    //add event listener to each radio button to select one of the three products.
    //when they select, update the total votes, 
    //update the product Vote Detials 
    // if there is coffee in teh array, incremment the votes for coffee in the array, if there's no coffe in the votes array, push some coffee into the array
    
};

const reset = () =>{
    initializeState();
};

const initialzeState = () => {

    tota
}
//reset the whole app when finished
    //reset the votes array ([]) and total votes(0) to their initial states. 

// STRETCH keep track of how many times a product appears so we can build a percentat (times clicked / times shown)
//STRETCH don't show the same product twice ina row

//make votes array
 myVotes = [
    {id: 'coffee', votes: 3},
    {id: 'icecream', votes: 7
    {id: 'coffe', votes: 5},
    {id: 'coffe', votes: 6},
    {id: 'coffe', votes: 9}
]


const votes = []
const labes = []

myVotes.forEach(item => {
    votes.push(item.votes);
    labesl
})

myVotes.forEach(vote => )