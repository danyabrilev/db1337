const getMaxNumber = (a, b) => {
    let maxNumber;
    if (a > b) {
        maxNumber = a;
    } else {
        maxNumber = b;
    }
    return maxNumber;
};
console.log(getMaxNumber(150, 15)); 

