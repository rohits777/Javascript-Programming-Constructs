const n = process.argv[2];  // get the value of n from the command line

let i = 0;  // initialize the counter variable
let result = 1;  // initialize the result variable to 2^0

// print the table header
console.log("n\t2^n");

while (result <= 256) {
  console.log(i + "\t" + result);  // print the current value of n and 2^n
  result *= 2;  // multiply the result by 2 to get the next power of 2
  i++;  // increment the counter
}
