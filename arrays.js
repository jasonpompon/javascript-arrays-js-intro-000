var chocolateBars = ["sickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArr, newElem) {
    return [newElem, ...myArr]
}

function destructivelyAddElementToBeginningOfArray(myArr, newElem) {
    return myArr.unshift(newElem);
}