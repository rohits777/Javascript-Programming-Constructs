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
  
  // get user input
  const num = prompt("Enter a number:");
  
  // check if the number is prime
  if (isPrime(num)) {
    console.log(num + " is a prime number.");
  } else {
    console.log(num + " is not a prime number.");
  }
  