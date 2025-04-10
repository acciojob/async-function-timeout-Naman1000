//your JS code here. If required.
// Get references to HTML elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Utility function that returns a Promise which resolves after "ms" milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle button click
async function handleClick() {
  const message = textInput.value;
  const delay = Number(delayInput.value); // Convert delay input to number

  // Optional: Handle invalid input
  if (!message || isNaN(delay) || delay < 0) {
    output.textContent = "Please enter a valid message and delay.";
    return;
  }

  output.textContent = "Waiting...";

  // Wait for the specified delay
  await wait(delay);

  // Show the message after the delay
  output.textContent = message;
}

// Attach event listener
btn.addEventListener("click", handleClick);
