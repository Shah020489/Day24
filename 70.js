"use strict";
function loopWithLetKeyword() {
    //Let is a block level variable
    let x = 75;
    for (let x = 1; x <= 5; x++) {
        //Let is a block level variable and visible inside loop
        console.log("This x is only visible inside the loop = " + x);
    }
    console.log("This x is only accessible in this function but id not visible outside the function =" + x);
}
//We do not have x after the function code.
//console.log("x="+x);
loopWithLetKeyword();
