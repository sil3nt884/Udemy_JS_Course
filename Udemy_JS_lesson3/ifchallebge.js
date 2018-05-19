let temp = 450;
let isHot =  temp >= 110;
let isFreeze =  temp <=32;
let isOkay  = !isHot && !isFreeze;

if(isHot){
    console.log("It is hot outside!");
}
else if(isOkay){
    console.log("Its Okay outside!");
}
else if(isFreeze){
    console.log("Its Freezing outside!");
}
