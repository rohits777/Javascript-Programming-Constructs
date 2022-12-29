// parse the command-line argument
const n = parseInt(process.argv[2], 10);

// print the header
console.log("n\t2^n");

// print the rows of the table
for (let i = 0; i <= n; i++) {
  console.log(`${i}\t${Math.pow(2, i)}`);
}
