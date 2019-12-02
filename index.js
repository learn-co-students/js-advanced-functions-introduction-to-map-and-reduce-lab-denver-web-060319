function mapToNegativize(sourceArray) {
    return sourceArray.map(i => i*(-1))
}
function mapToNoChange(sourceArray){
    return sourceArray.map( i => i)
}
function mapToDouble(sourceArray) {
    return sourceArray.map(i => i*2)
}
function mapToSquare(sourceArray) {
    return sourceArray.map(i => i**2)
}
function reduceToTotal(sourceArray, startingPoint=0){
    return sourceArray.reduce((a,b) => a+b, startingPoint)
}

//finish reduce()
