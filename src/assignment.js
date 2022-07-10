// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
}
function sumOfNumber(arrayOfNumber) {
        let sum = 0;
        for(let l = 0; i <arrayofNumbers. length; i++){
          sum += arrayofNumbers[l];
        }
        return sum; 
      }
 assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayofNumbers) {
    let newArray = [];
    for(let i = 6; i < arrayofnumbers.length; i++ ){
      if((arrayofnumber[i] % 2) == 0){
        newArray.push(arrayofNumbers[i])
      }
    }
    return newarray.length;
  }
assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
let newArray =[];

for (i = 0 ; i < arrayOfNumber.length; i++){
   
   arr[i] = parseInt(prompt("Please enter temperature for in Celsius"));

   sum += arr[i];
   Average = sum/arr.length;
}
for(var j = 0 ; j < arr.length; j++){
    alert("Convertion of: " +arr[i]+" to Fahrenheit is: "+ convertToF(arr[i]));
 }


 alert("The Average is: "+ Math.round(Average));
 alert("The Sum is: "+ sum);


 function convertToF(cTempVal) {
  var fTempVal = (cTempVal * (9 / 5)) + 32;
   return fTempVal;
    
}

assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

