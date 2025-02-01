document.getElementById("dateForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let d = parseInt(document.getElementById("day").value);
    let m = parseInt(document.getElementById("month").value);
    let y = parseInt(document.getElementById("year").value);

    if (y < 1000) {
        alert("กรุณากรอกปีเป็น ค.ศ. (เช่น 2024)");
        return;
    }

    let remainder = y % 4;
    let baseResult = y;
    let additionSequence = [];

    if (d === 29 && m === 2) {
        additionSequence = [28, 28, 28, 28];
    } else if (m === 1 || m === 2) {
        if (remainder === 0) additionSequence = [6, 11, 6, 5, 6, 11, 6, 5];
        else if (remainder === 1) additionSequence = [6, 5, 6, 11, 6, 5, 6, 11];
        else if (remainder === 2) additionSequence = [11, 6, 5, 6, 11, 6, 5, 6];
        else if (remainder === 3) additionSequence = [5, 6, 11, 6, 5, 6, 11, 6];
    } else {
        if (remainder === 0) additionSequence = [6, 5, 6, 11, 6, 5, 6, 11];
        else if (remainder === 1) additionSequence = [11, 6, 5, 6, 11, 6, 5, 6];
        else if (remainder === 2) additionSequence = [5, 6, 11, 6, 5, 6, 11, 6];
        else if (remainder === 3) additionSequence = [6, 11, 6, 5, 6, 11, 6, 5];
    }

    let results = [];
    for (let i of additionSequence) {
        baseResult += i;
        results.push(baseResult);
    }

    let resultList = document.getElementById("resultList");
    resultList.innerHTML = "";
    results.forEach(year => {
        let listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = year;
        resultList.appendChild(listItem);
    });
});