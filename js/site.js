// get the start and end numbers from the page
// Entry point of application AKA Controller function
function getValues() {
    // declared that below variables are to to pull and "hold" string values from HTML user input
    let sodaNumber = document.getElementById('sodaNumber').value; // ex: sodaNumber = '3' from user/HTML
    let popNumber = document.getElementById('popNumber').value; // ex: popNumber = '5' from user/HTML
    let endNumber = document.getElementById('endNumber').value; // ex: endNumber = '45' from user input/HTML 
   
    let sodaNum = parseInt(sodaNumber);
    let popNum = parseInt(popNumber);
    let endNum = parseInt(endNumber);
    // checks that all number values given by user are valid integers,
    if (Number.isInteger(sodaNum) && Number.isInteger(popNum) && Number.isInteger(endNum)) {
        // if variables sodaNum, popNum,and endNum are integers, it's true, 
        // and will generate numbers and store them in array 'numberArray'
        let numberArray = generateNumbers(sodaNum, popNum, endNum);
        // if it's not a number (NaN), it's false, will display error msg
        displayNumbers(numberArray);
    } else {
        // display an error
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Please enter valid numbers.',
            backdrop: false
        });
    }

}
// generate the range of numbers to display
// Business/logic function
function generateNumbers(sodaNum, popNum, endNum) {
    // declare empty new array 'basketOfNumbers' 
    // to hold values for use in the for loop below
    let basketOfNumbers = [];
    // for loop starts at integer at index position 1
    // since 'endNum' is at index position 0, and already
    // in use and accounted for inside the for loop,
    // for loop keeps running until the conditions 
    // of the else if statement below are met
    for (let i = 1; i <= endNum; i = i + 1) {
        // if the current index in array basketOfNumbers 
        // is divisible by sodaNum & popNum,
        // the index integer is removed from the array
        // and replaced with the string 'Soda Pop'
        if (i % sodaNum == 0 && i % popNum == 0) {
            basketOfNumbers.push('Soda Pop');
            // if the current index in array basketOfNumbers 
            // is divisible by sodaNum,the index integer
            //  is removed from the array and
            //  replaced with the string 'Soda' 
        } else if (i % sodaNum == 0) { 
            basketOfNumbers.push('Soda');
            // if the current index in array basketOfNumbers 
            // is divisible by popNum,the index integer
            // is removed from the array and
            // replaced with the string 'Pop'
        } else if (i % popNum == 0) {
            basketOfNumbers.push('Pop');
            // otherwise it replaces the integer with 
            // itself, integer is unchanged in array
        } else {
            basketOfNumbers.push(i);
        }
    }
    // since for loop is no longer running, the
    // return statement immediately exits a function, 
    // returning or passing back the value of the 
    // expression that follows to be stored in
    // the array 'basketOfNumbers'
    return basketOfNumbers; // => [0, 2, 3,..., 100]
}

// placing the generated numbers  on the page AND bold coloring the even numbers
// View function
function displayNumbers(numbers) { //[0, 2, 3,..., 100] => length = example: 101 digits or spaces
    let results = '';
    // for loop adds 1 to index number, then calculates if index numner is divisible by 2,
    // if remainder equals "0" exactly, ifna match it applies the CSS class of "evenNumber" 
    // coloring the even integers,else/otherwise it returns the (odd) integers with normal 
    // table row styling. 
    for (let index = 0; index < numbers.length; index = index + 1) {
        let currentNumber = numbers[index];
        // if 'if' condition is met, below css class styling
        // is applied to table data
        if (currentNumber % 2 == 0) {

			results = results + `<tr><td class="evenNumber">${currentNumber}</td></tr>`;

		} else {
            results = results + `<tr><td>${currentNumber}</td></tr>`;
		}
	}
    // results are passed back into HTML ID "results" 
    // and displayed inside the table
    let tableBody = document.getElementById('results');
    tableBody.innerHTML = results;
}


