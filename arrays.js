var chocolateBars = ["sickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArr, newElem) {
    return [newElem, ...myArr]
}

function destructivelyAddElementToBeginningOfArray(myArr, newElem) {
    myArr.unshift(newElem);
    return myArr
}

function addElementToEndOfAray(myArr, newElem) {
    return [...myArr, newElem]
}

function destructivelyAddElementToEndOfArray(myArr, newElem) {
    myArr.push(newElem);
    return myArr
}
