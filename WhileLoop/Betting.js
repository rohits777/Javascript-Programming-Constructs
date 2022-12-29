const startingMoney = 100; // starting amount of money
const goal = 200; // goal amount of money
const betAmount = 1; // amount of money gambled each time

let money = startingMoney; // current amount of money
let bets = 0; // number of bets made
let wins = 0; // number of times won

while (money > 0 && money < goal) {
  bets++; // increase number of bets by 1

  // simulate a win or loss
  if (Math.random() > 0.5) {
    money += betAmount; // increase money by bet amount
    wins++; // increase number of wins by 1
  } else {
    money -= betAmount; // decrease money by bet amount
  }
}

if (money === goal) {
  console.log(`Reached goal of Rs ${goal} in ${bets} bets. Won ${wins} times.`);
} else {
  console.log(`Lose  with ${bets} bets. Won ${wins} times.`);
}
