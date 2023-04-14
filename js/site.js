// get the start and end numbers from the page
// Entry point of application AKA Controller function
function fizzBuzz(fizzBuzzNumber) {
    // declared that fizzBuzzNumber string is to pull and "hold" 
    // the values from the HTMl ID "fizzBuzzNumber"
        let fizzBuzzNumber = document.getElementById('fizzBuzzNumber').value; // fetch fizzBuzzNumber from user/HTML
    // convert value from string to integer/value ex: fizzBuzzNumber
        let fizzBuzzNumber = parseInt(fizzBuzzNumber);  
    /* it is valid numbers - not "NaN"*/
    // if fizzBuzzNumber is an integer it's true, 
    // if it's not a number, it's false
        if (fizzBuzzNumber.isInteger(fizzBuzzNumber)) {
            let numberArray = generateNumbers(fizzBuzzNumber);
            // displays numberArray values
            displayNumbers(numberArray);
        } else {
            //display an error
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Please enter valid numbers for the start and end values.'
            });
        }
    }
    // generate the range of numbers to display
    // Business/logic function
    function generateNumbers(start, end) {
    // basketOfNumbers will accept/hold values from for loop
        let basketOfNumbers = [];
        // for loop starts at integer number; 
        // keep running as long as (it's less than or equal to endNumber); 
        // start at index number and add plus 1 each time 
        // until previous <= statement is no longer true
        
        function fizzBuzz(FizzBuzz) {
            for (let i = 1; i <= FizzBuzz; i = i + 1) {
                if (i % 3 === 0 && i % 5 === 0) {
                    console.log('Fizz Buzz')
                } else if (i % 3 === 0) {
                    console.log('Fizz')
                } else if (i % 5 === 0) {
                    console.log('Buzz')
                }
                else {
                    console.log(i)
                }
            }
        }    
              
        
        for (let number = start; number <= end; number = number + 1) {
            number;
            basketOfNumbers.push(number); //[0, 2, 3,..., 100]
        }
    // returns or passes back out values from basketOfNumbers
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
            if (currentNumber % 2 == 0) {
                results = results + `<tr><td class="evenNumber">${currentNumber}</td></tr>`;
            } else {
            results = results + `<tr><td>${currentNumber}</td></tr>`;
            }
        }
    // results = "<tr><td>10</tr></td>11<tr><td>12</tr></td>..."
    // results are passed back into HTML ID "results" into table
        let tableBody = document.getElementById('results');
        tableBody.innerHTML = results;
    }



// // get the fizz and buzz numbers from the page
// function fizzBuzz() {
//     // declared that fizz/buzz string is to pull and "hold" 
//     // the values from the HTMl ID "fizz, buzz"
//     let fizz = document.getElementById('fizz').value; // fetch fizz from user/HTML
//     let buzz = document.getElementById('buzz').value; // fetch fizz from user/HTML
//     // convert value from string to integer/value ex: fizz, buzz
//     let fizzBuzzNumber = parseInt(fizzBuzzNuber);  
//     /* they are valid numbers - not "NaN"*/
//     // if start is an integer it's true, 
//     // if it's not a number, it's false