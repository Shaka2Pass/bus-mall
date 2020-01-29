export class productArray {
    constructor(products) {
        this.products = products.slice();
    }

    getRandomProduct(someId){
        const randomProductIndex = Math.floor(Math.random() * this.products.length);

        return this.products[randomProductIndex];

