function generateNumber() {
  // generate a random integer(hint : Math.random)
  const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Update the 'number' div with the generated number
    document.getElementById('number').textContent = `Generated Number: ${randomNumber}`;

    // Call the checkOddEven function with the generated number
    checkOddEven(randomNumber);
}

function checkOddEven(num) {
  // logic for even / odd
  // Determine if the number is odd or even and update the 'odd-even' div
  const result = (num % 2 === 0) ? "The number is even" : "The number is odd";
  document.getElementById('odd-even').textContent = result;
}

window.onload = function () {
  // add event listeners to the button here
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
