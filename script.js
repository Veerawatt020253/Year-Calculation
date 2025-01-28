// Select the form and results container
const form = document.getElementById("calculate-form");
const resultsContainer = document.getElementById("results");

// Main calculation function
function calculateYear(y, m = null) {
  let isLeapYear = y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);
  let baseResult;
  let output = `Calculating for year: ${y}<br>`;

  if (isLeapYear) {
    output += `${y} is a Leap Year (366 days).<br>`;
    baseResult = y + 6;
  } else {
    let xMod4 = (y - 3) % 4;
    let t = xMod4 === 0 ? 6 : xMod4 === 1 ? 11 : xMod4 === 2 ? 5 : 6;
    baseResult = y + t;
    output += `First matching year (f(y)): ${baseResult}<br>`;
  }

  // Add sequence of results
  const additionSequence = [5, 6, 11, 6, 5, 6, 11, 6, 5, 6, 11, 6, 5, 6, 11, 6];
  const results = [];
  for (let i of additionSequence) {
    baseResult += i;
    results.push(baseResult);
  }

  if (!isLeapYear) {
    output += `Additional years: ${results.join(", ")}<br>`;
  } else {
    const selectedResults = [results[2], results[6], results[10], results[14]];
    output += `Years for 366-day case (3rd, 7th, 11th, 15th): ${selectedResults.join(", ")}<br>`;
  }

  if (m !== null) {
    if (m >= 1 && m <= 12) {
      output += `Output with month: ${y + 28}<br>`;
    } else {
      output += `Invalid month: ${m}. Month should be between 1 and 12.<br>`;
    }
  }

  return output;
}

// Form submission handler
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get inputs
  const year = parseInt(document.getElementById("year").value);
  const monthInput = document.getElementById("month").value;
  const month = monthInput ? parseInt(monthInput) : null;

  // Calculate results
  const results = calculateYear(year, month);

  // Display results
  resultsContainer.innerHTML = results;
  resultsContainer.style.display = "block";
});