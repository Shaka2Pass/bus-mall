import { mallData } from './mallData.js';
import { findProduct } from './util.js';

const productsData = mallData.slice();

let totalVotes;
let productVoteDetails = []; 

// //const setState = () => {
//     totalVotes = 0;
//     productVoteDetails = [];
 
// };

//setState();

const displayThreeProducts = () => {

    const randomProduct1 = getRandomProduct(productsData);
    let randomProduct2 = getRandomProduct(productsData);
    let randomProduct3 = getRandomProduct(productsData);

    while (randomProduct1.id === randomProduct2.id || randomProduct2.id === randomProduct3.id || randomProduct1.id === randomProduct3.id
    ) {
        randomProduct2 = getRandomProduct(productsData);
        randomProduct3 = getRandomProduct(productsData);

    }

    const radio1 = document.getElementById('product1');
    const radio2 = document.getElementById('product2');
    const radio3 = document.getElementById('product3');
    const radio1Span = document.getElementById('product1Span');
    const radio2Span = document.getElementById('product2Span');
    const radio3Span = document.getElementById('product3Span'); 
    const radioImg1 = document.getElementById('img1');
    const radioImg2 = document.getElementById('img2');
    const radioImg3 = document.getElementById('img3');
    

    radio1.value = randomProduct1.id;
    radio2.value = randomProduct2.id;
    radio3.value = randomProduct3.id;
    radio1Span.textContent = randomProduct1.name;
    radio2Span.textContent = randomProduct2.name;
    radio3Span.textContent = randomProduct3.name;
    radioImg1.src = randomProduct1.image;
    radioImg2.src = randomProduct2.image;    
    radioImg3.src = randomProduct3.image;
};

function getRandomProduct(someData){
    const randomProductIndex = Math.floor(Math.random() * someData.length);
    const randomProducts = productsData[randomProductIndex];

    return randomProducts;
}

displayThreeProducts();

//Add event listener to submit button that records total votes and nubmer of votes per choice.

const submitChoiceButton = document.getElementById('submit-button');

submitChoiceButton.addEventListener('click', () => {

    const userChoice = document.querySelector('input:checked').value;
    console.log(userChoice);

    const individualProductTally = findProduct(productVoteDetails, userChoice);

    if (individualProductTally) {
        individualProductTally.votes++;

    }

    else {
        const newVote = {
            name: userChoice,
            votes: 1

        };
    }


    if (userChoice === 'product1') {
        totalVotes ++;
        console.log('vote 1');
    }

    else if (userChoice === 'product2'){
        totalVotes ++;
        console.log('vote 2');

    } else if (userChoice === 'product3') {
        totalVotes ++;
        console.log('vote 3');
    }

});





































