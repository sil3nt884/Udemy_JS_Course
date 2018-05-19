let age = 65;
let isChild = age <= 7;
let isSenior = age >= 65 && !isChild;
let isAdult  = !isChild && !isSenior;
console.log("Child :"+isChild);
console.log("Senior :"+isSenior);
console.log("Adult : "+isAdult);
