document.getElementById("calculate-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const year = parseInt(document.getElementById("year").value);
  const monthInput = document.getElementById("month").value;
  const dayInput = document.getElementById("day").value;
  
  const month = monthInput ? parseInt(monthInput) : null;
  const day = dayInput ? parseInt(dayInput) : null;

  const resultText = calculateYear(year, month, day);
  displayResult(resultText);
});

function calculateYear(y, m, d) {
  let output = `<strong>Calculating for year:</strong> ${y}<br>`;
  let isLeapYear = (y - 3) % 4 === 0;

  if (isLeapYear) {
      output += `<strong>${y} is a Leap Year (366 days).</strong><br>`;
      let baseResult = y;

      if (m === 1) {
          output += getAdditionalYears(baseResult, [5, 6, 11, 6, 5, 6, 11, 6, 5, 6, 11, 6], "January");
      } else if (m === 2) {
          if (d === 29) {
              output += getAdditionalYears(baseResult, [28, 28, 28, 28], "February 29");
          } else {
              output += getAdditionalYears(baseResult, [5, 6, 11, 6, 5, 6, 11, 6, 5, 6, 11, 6], "February (excluding 29)");
          }
      }
  } else {
      output += calculateNonLeapYear(y);
  }

  return output;
}

function calculateNonLeapYear(y) {
  let xMod4 = y % 4;
  let output = `<strong>${y} is NOT a Leap Year.</strong><br>`;
  let baseResult = y;
  let additionSequence;

  if (xMod4 === 0) {
      additionSequence = [6, 5, 6, 11, 6, 5, 6, 11, 6, 5, 6, 11];
  } else if (xMod4 === 1) {
      additionSequence = [11, 6, 5, 6, 11, 6, 5, 6, 11, 6, 5, 6];
  } else if (xMod4 === 2) {
      additionSequence = [5, 6, 11, 6, 5, 6, 11, 6, 5, 6, 11, 6];
  } else {
      additionSequence = [6, 11, 6, 5, 6, 11, 6, 5, 6, 11, 6, 5];
  }

  output += getAdditionalYears(baseResult, additionSequence, "Non-Leap Year");
  return output;
}

function getAdditionalYears(baseResult, additionSequence, category) {
  let results = [];
  for (let i of additionSequence) {
      baseResult += i;
      results.push(baseResult);
  }
  return `<strong>${category} - Additional Years:</strong> ${results.join(", ")}<br>`;
}

function displayResult(resultText) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = resultText;
  resultsContainer.style.display = "block";
}