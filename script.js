// Select the form and results container
const form = document.getElementById("calculate-form");
const resultsContainer = document.getElementById("results");

// Main calculation function
function calculateYear(y, m = null) {
  let isLeapYear = y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);
  let baseResult;
  let output = `<strong>Calculating for year:</strong> ${y}<br>`;

  if (isLeapYear) {
    output += `<strong>${y} is a Leap Year (366 days).</strong><br>`;
    baseResult = y; // Initial value for leap year

    if (m === 1) {
      const additionSequence = [5, 6, 11, 6, 5, 6, 11, 6, 5, 6, 11, 6];
      const results = [];
      for (let i of additionSequence) {
        baseResult += i;
        results.push(baseResult);
      }
      output += `Additional years for January in Leap Year: ${results.join(", ")}<br>`;
    } else if (m === 2) {
      const additionSequence = [5, 6, 11, 6, 5, 6, 11, 6, 5, 6, 11, 6];
      const results = [];
      for (let i of additionSequence) {
        baseResult += i;
        results.push(baseResult);
      }
      output += `Additional years for February: ${results.join(", ")}<br>`;
    }
  } else {
    const xMod4 = y % 4;
    let t;
    const additionSequence = [5, 6, 11, 6, 5, 6, 11, 6, 5, 6, 11, 6];
    if (xMod4 === 0) {
      t = 6;
    } else if (xMod4 === 1) {
      t = 11;
    } else if (xMod4 === 2) {
      t = 5;
    } else {
      t = 6;
    }
    baseResult = y + t;
    const results = [];
    for (let i of additionSequence) {
      baseResult += i;
      results.push(baseResult);
    }
    output += `Additional years for non-Leap Year: ${results.join(", ")}<br>`;
  }

  if (m !== null) {
    if (m >= 1 && m <= 12) {
      output += `<strong>Month provided:</strong> ${m}<br>`;
    } else {
      output += `<strong>Invalid month:</strong> ${m}. Month should be between 1 and 12.<br>`;
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