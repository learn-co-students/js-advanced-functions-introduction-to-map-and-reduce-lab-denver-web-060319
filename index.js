// our own map-like methods

const mapToNegativize = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(- + array[i])
    };
    return newArray;
};

const mapToNoChange = (array) => {
    let originalArray = []
    for (let i = 0; i < array.length; i++) {
        originalArray.push(array[i])
    };
    return originalArray;
};

const mapToDouble = (array) => {
    let count = 0
    let arrayDoubled = []
    while (count < array.length) {
        arrayDoubled.push(2 * array[count])
        count += 1;
    };
    return arrayDoubled;
};

const mapToSquare = (array) => {
    let count = 0;
    let squaredArray = []
    do {
        squaredArray.push(Math.pow(array[count], 2))
        count += 1;
    } while (count < array.length)
    return squaredArray;    
};

// our own reduce-like methods

const reduceToTotal = (array, startingPoint) => {
    let total = 0;
    if (startingPoint) {
        for (let i = 0; i < array.length; i++) {
            total = startingPoint += array[i]
        };
        return total;
    } else
        for (let i = 0; i < array.length; i++) {
            total += array[i]
        }; 
    return total;
};

const reduceToAllTrue = (array) =>  {
    for  (let i = 0; i < array.length; i++) {
        if (array[i] == false) {
            return false;
        };
    } return true;
};

const reduceToAnyTrue = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == true) {
            return true;
        }
    } return false;
};