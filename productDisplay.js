export default function displayProduct(productImage) {

    const img = productImage.querySelector('img');

    img.src = productImage.image;
    img.alt = 'Tree Choice';

}
   