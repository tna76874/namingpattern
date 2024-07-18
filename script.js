function generateYearRange() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var nextYear = currentYear + 1;
    var isFirstYearCurrent = currentDate.getMonth() < 10;

    var firstYear = isFirstYearCurrent ? currentYear - 1 : currentYear;
    var secondYear = isFirstYearCurrent ? currentYear : nextYear;

    var yearRange = firstYear.toString().slice(-2) + "-" + secondYear.toString().slice(-2);
    return yearRange;
}

function handleInputChange() {
    const stufe = document.getElementById('stufe').value;
    const fach = document.getElementById('fach').value;
    const kuerzel = document.getElementById('kuerzel').value;
    const zug = document.getElementById('zug').value;
    const zeitraum = generateYearRange();
    let pattern;
    if (stufe && fach && kuerzel) {
        if (zug === "_") {
            pattern = `${stufe}_${fach}_${kuerzel}_${zeitraum}`;
        } else {
            pattern = `${stufe}${zug}_${fach}_${kuerzel}_${zeitraum}`;
        }
        
        document.getElementById('pattern').textContent = `${pattern}`;
    }
}

function copyToClipboard() {
    var copyText = document.getElementById("pattern");
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    setTimeout(function() {
        overlay.style.display = "none";
    }, 2000);
}

document.getElementById("pattern").addEventListener("click", copyToClipboard);

// Eventlistener für Änderungen in den Eingabefeldern
document.getElementById('stufe').addEventListener('change', handleInputChange);
document.getElementById('fach').addEventListener('change', handleInputChange);
document.getElementById('kuerzel').addEventListener('input', handleInputChange);
document.getElementById('zug').addEventListener('change', handleInputChange);