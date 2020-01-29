export function findProduct(someArray, someId) {

    for (let i = 0; i < someArray.length; i++) {
        if (someId === someArray[i]) {
            return someArray[i];

        }

    }
    
    return null;
}