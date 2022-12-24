function getRandomInt(min, max) {
    // Generates a random integer between min (inclusive) and max (exclusive)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function main(){
    let sum=0;
  
  for (let i = 0; i < 5; i++) {
    let randomNumber = getRandomInt(10, 100); // generate a random 2-digit number
    console.log(randomNumber);
    sum+=randomNumber;
  }
  console.log("Sum of 2 digit random number:" +sum);
  let average=sum/5;
  console.log("Average of numbers:" +average)
}
main();