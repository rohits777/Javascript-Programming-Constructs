const year = process.argv[2];  // get year from command line argument

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  } else {
    console.log(`${year} is a leap year.`);
  }
} else {
  console.log(`${year} is not a leap year.`);
}
