var sortedArray = [92, 94, 97, 98, 102];
const searchValue = 94;
let lowerIndex = 0;
let higherIndex = sortedArray.length - 1;
let isFound = false;

while (lowerIndex <= higherIndex) {
    let midIndex = (lowerIndex + higherIndex) / 2;
    if (searchValue === sortedArray[midIndex]) {
        isFound = true;
        console.log(`${searchValue} is found at index ${midIndex}`);
        break;
    }
    else if (sortedArray[midIndex] < searchValue) {
        lowerIndex = midIndex - 1;
    }
    else {
        higherIndex = midIndex + 1;
    }
}

    if (!isFound) console.log(`${searchValue} is not found`);

    //output: 94 is found at index 1