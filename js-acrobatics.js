// How many hours in a year?
let hrsInYr = (365*24);
document.getElementById('hours-in-year').innerHTML = hrsInYr;

// How many minutes in a decade?
let secsInDec = (10*hrsInYr*60*60);
document.getElementById('seconds-in-decade').innerHTML = secsInDec;

// How many seconds old am I?
let ageInSecs = (23*hrsInYr*60*60);
document.getElementById('age-in-seconds').innerHTML = ageInSecs;

// If I am older than some number, log “I am wise”
// If not, log “I am Green”
if (ageInSecs > 730000000) {
    document.getElementById('conclusion').innerHTML = "I am wise.";
} else {
    document.getElementById('conclusion').innerHTML = "I am green.";
}