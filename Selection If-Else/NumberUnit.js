function readNumber(num) {
  if (num < 0) {
    return "Negative " + readNumber(-num);
  }
  if (num === 0) {
    return "zero";
  }
  if (num < 20) {
    return ONES[num];
  }
  if (num < 100) {
    return TENS[Math.floor(num / 10)] + (num % 10 ? " " + ONES[num % 10] : "");
  }
  if (num < 1000) {
    return ONES[Math.floor(num / 100)] + " hundred" + (num % 100 ? " and " + readNumber(num % 100) : "");
  }
  if (num < 1000000) {
    return readNumber(Math.floor(num / 1000)) + " thousand" + (num % 1000 ? " " + readNumber(num % 1000) : "");
  }
  if (num < 1000000000) {
    return readNumber(Math.floor(num / 1000000)) + " million" + (num % 1000000 ? " " + readNumber(num % 1000000) : "");
  }
  return readNumber(Math.floor(num / 1000000000)) + " billion" + (num % 1000000000 ? " " + readNumber(num % 1000000000) : "");
}

const ONES = [
  "", "one", "two", "three", "four", "five", "six", "seven", "eight",
  "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
  "sixteen", "seventeen", "eighteen", "nineteen"
];

const TENS = [
  "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
];
