/*
create function that will return only the even numbers ;
return the sum of the even numbers;
*/


function evenNumbersOnly(numbers) {
    const even = [];
    // console.log(numbers);
    for (const number of numbers) {
        if (number %2 === 0 ) {
            console.log(number);
            even.push(number);
        }
        }
        return even;
}

const numbers = [5, 8, 91, 24, 8];
// const evens = evenNumbersOnly(numbers);
// console.log('even numbers are', evens )

function sumOfEvenNumbers(numbers) {
    let sum= 0;
    for(const number of numbers){
        if (number %2 ===0) {
            console.log(number)
            sum+=number;
        }
    }
// return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log('sum of the even number are', sum)