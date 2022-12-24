//Write a program that takes day and month from the command line and prints true if
//day of month is between March 20 and June 20, false otherwise.

const month = process.argv[2];  // get month from command line argument
const day = process.argv[3];  // get day from command line argument

if (month == 'March' && day >= 20) {
  console.log(true);
} else if (month == 'April' || month == 'May') {
  console.log(true);
} else if (month == 'June' && day <= 20) {
  console.log(true);
} else {
  console.log(false);
}
