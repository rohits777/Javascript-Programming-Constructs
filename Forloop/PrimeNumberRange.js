function isPrime(num) {
    // if num is less than 2, it is not a prime number
    if (num < 2) {
      return false;
    }
  
    // check if num is divisible by any number between 2 and the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    // if num is not divisible by any number between 2 and the square root of num, it is a prime number
    return true;
  }
  
  // get user input for the range of numbers
  const start = prompt("Enter the start of the range:");
  const end = prompt("Enter the end of the range:");
  
  // initialize an empty array to store the prime numbers
  const primeNumbers = [];
  
  // iterate over the range of numbers
  for (let i = start; i <= end; i++) {
    // check if the current number is a prime number
    if (isPrime(i)) {
      // if it is a prime number, add it to the array
      primeNumbers.push(i);
    }
  }
  
  // output the prime numbers
  console.log("The prime numbers in the range " + start + "-" + end + " are: " + primeNumbers.join(", "));
  