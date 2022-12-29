function flipCoin() {
    let headsCount = 0;
    let tailsCount = 0;
    let result;
  
    while (headsCount < 11 && tailsCount < 11) {
      result = Math.random() < 0.5 ? 'Heads' : 'Tails';
      if (result === 'Heads') {
        headsCount++;
      } else {
        tailsCount++;
      }
    }
  
    console.log(`Heads won ${headsCount} times, Tails won ${tailsCount} times`);
  }
  
  flipCoin();
  