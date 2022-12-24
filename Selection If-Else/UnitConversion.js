// Function to convert feet to inches
function feetToInches(feet) {
    return feet * 12;
  }
  
  // Function to convert inches to feet
  function inchesToFeet(inches) {
    return inches / 12;
  }
  
  // Function to convert feet to meters
  function feetToMeters(feet) {
    return feet * 0.3048;
  }
  
  // Function to convert meters to feet
  function metersToFeet(meters) {
    return meters / 0.3048;
  }
  
  // Get user input
  let length = prompt("Enter the length in feet or inches: ");
  let unit = prompt("Enter the unit (ft or in): ");
  let convertedLength;
  
  // Perform conversion based on user input
  if (unit == "ft") {
    let inches = feetToInches(length);
    convertedLength = inches + " inches";
  } else if (unit == "in") {
    let feet = inchesToFeet(length);
    convertedLength = feet + " feet";
  }
  
  // Display result
  console.log(length + " " + unit + " is equal to " + convertedLength);
  