// How many hours in a year?
const secsInMin = 60;
const minsInHr = 60;
const hrsInDay = 24;
const daysInYr = 365;
const yrsInDec = 10;

let hrsInYr = hrsInDay*daysInYr;
document.getElementById('hours-in-year').innerHTML = hrsInYr;

// How many minutes in a decade?
let secsInDec = (secsInMin*minsInHr*hrsInYr*yrsInDec);
document.getElementById('seconds-in-decade').innerHTML = secsInDec;

// How many seconds old am I?
let ageInYrs = prompt("How old are you in Terran years?");
let ageInSecs = (secsInMin*minsInHr*hrsInYr*ageInYrs);
document.getElementById('age-in-seconds').innerHTML = ageInSecs;

// If I am older than some number, log “I am wise”
// If not, log “I am Green”
if (ageInYrs > 150) {
    document.getElementById('conclusion').innerHTML = "I am a fuckin liar.";
} else if (ageInYrs > 30) {
    document.getElementById('conclusion').innerHTML = "I am wise.";
} else {
    document.getElementById('conclusion').innerHTML = "I am green.";
}