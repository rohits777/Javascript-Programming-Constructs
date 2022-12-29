// Get the number from the user
var number = prompt("Enter a number to compute the factorial:");

// Convert the number to an integer
number = parseInt(number);

// Initialize the factorial variable to 1
var factorial = 1;

// Use a for loop to compute the factorial
for (var i = 1; i <= number; i++) {
  factorial = factorial * i;
}

// Output the result to the console
console.log("The factorial of " + number + " is " + factorial);
