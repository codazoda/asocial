function textSave() {
    // Grab todays date
    let date = new Date();
    // Add a date stamp to the text
    let dateString = dayjs().format("MMMM M, YYYY [at] h:mma");
    let smsText = "*" + dateString + "*\n\n" + sms.value;
    // Append the text to the other textarea
    history.value = smsText + "\n\n\n" + history.value;
    //localStorage.setItem("file-" + currentFileNumber, fullText);
    //console.log("saved: " + currentFileNumber);
}

function textClear() {
    sms.value = "";
}

function askSubject() {
    window.prompt 
}

function checkKey(e) {
    //console.log(e.shiftKey + " " + e.keyCode);
    // If it's enter (but not shift enter)
    if (e.keyCode == 13 && e.shiftKey == false) {
        textSave();
        textClear();
        // Prevent the key from firing
        e.preventDefault();
    }
}

// TODO: Prompt user for a title
// TODO: Save it to the other text area
// TODO: Save it to localStorage too
// TODO: Clear the main area


// TODO: When you click shift-enter
onkeyup="checkKey(event)"

// Global because we'll use these in most functions
let sms = document.getElementById("sms");
let history = document.getElementById("history");

// Listen to key events with "capture" instead of "bubbling"
sms.addEventListener("keypress", checkKey, false);
