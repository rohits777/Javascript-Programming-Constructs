function getMinMax() {
    // Generate an array of 5 random 3-digit values
    let values = [];
    for (let i = 0; i < 5; i++) {
      values.push(Math.floor(Math.random() * 900) + 100);
    }
  
    // Find the minimum and maximum value in the array
    let min = Math.min(...values);
    let max = Math.max(...values);
  
    // Output the results
    console.log(`The minimum value is: ${min}`);
    console.log(`The maximum value is: ${max}`);
  }
  
  // Test the function
  getMinMax();
  