let age  = 64;
let isChild = age <= 7;
let isSenior = age >= 65 && !isChild;
let isAdult  = !isChild && !isSenior;

if(isChild){
    console.log("Ages under 7 have discounts applied.");

}
else if(isSenior){
    console.log("Ages 65 and over have discounts applied.");
}
else if(isAdult){
    console.log(" No discount fool");

}