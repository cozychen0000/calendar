/** let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1]; Please write down a function to console log unique value from this array. **/
// output: [1, 5, 2, 3, 4, 7, 8, 9, 0, 6]
const items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
function getUniqueNumber (items) {
    const newArray = new Set(items)
    const resultArray = [...newArray]
    return resultArray
}

const uniqueNumberList = getUniqueNumber(items)
console.log(uniqueNumberList)