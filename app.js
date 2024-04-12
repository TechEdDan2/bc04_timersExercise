// countdown

// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

function countDown(startNum) {
    let ct = setInterval(function () {
        console.log(`Count... ${startNum}`);
        startNum--;
        if (startNum === 0) {
            console.log("DONE!");
            clearInterval(ct);
        }
    }, 1000);
}

// randomGame
//
// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

function randomGame() {
    let counter = 0;
    let myRanNum = 0;

    //start an interval
    let myRan = setInterval(function () {
        myRanNum = Math.random();
        if (myRanNum > 0.75) {
            console.log(`It took ${counter} attempts`);
            clearInterval(myRan);
        } else {
            counter++;
        }

    }, 1000);

    //pick a random number

    //check if it is greater than .75
    //if true stop interval and print the counter
    //else keep going

}