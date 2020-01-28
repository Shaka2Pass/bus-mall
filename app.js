import { mallData } from './mallData';
import { productArray } from './productArray';

const productImageTags = document.querySelectorAll('img');
const treeRadioTags = document.querySelectorAll ('input');
const productName = document.getElementById('product-name');
const products = new productArray(mallData);
 

const generateNewProductButton = () =>
{

    const randomProduct = products.getRandomProduct();
    let randomProduct2 = products.getRandomProduct();
    let randomProduct3 = products.getRandomProduct();

};

document.querySelector('button').addEventListener('click', generateNewProductButton);

generateNewProductButton();