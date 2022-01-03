let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let bill1 = [[22, 295, 176, 440, 37, 105], [15, 25, 35], [10, 1100, 86, 52]];
let bill2 = [11, 22, 33, [56, 66, 77], 45, 76]

let sumOfBill = bill.reduce((acc, curr) => acc + curr, 0)
let averageOfBills = sumOfBill / bill.length;
let individualTips = bill.map(item => {
    if (item >= 50 && item <= 400) {
        return item * 0.15 + item
    } else if (item < 50 || item > 400) {
        return item * 0.2 + item
    }
})

let individualTipsAverage = individualTips.reduce((acc, curr) => acc + curr, 0) / individualTips.length

console.log(individualTipsAverage);

console.log(individualTips);

console.log(averageOfBills, sumOfBill);
let result =[];
let result1 = [] ;

function sumOfBill1(arr) {
    return arr.reduce((acc, curr) => {
       return acc + curr.reduce((acc,curr)=> acc + curr,0);
    }, 0)
}

console.log(sumOfBill1(bill1));
console.log(bill1.sort());



let array = [ "Samsung's mobile is better than Apple"];

function arrayHolder() {
    
    let items = prompt("please write item needed to add:");
    if (array != null) {
        document.getElementById("arrayHolder").innerHTML = array.toString().split("").reverse().join("+");
    }
}

console.log(arrayHolder());