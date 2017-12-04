// document.getElementById("btn").addEventListener("click", () => {
//     alert("yo");
// });

document.getElementById("btn").addEventListener("click", () => alert("yo"));

let name = "Scooby Doo";
let job = () => "Amateur Sleuth";
let number = 220;

// let myCollection = {
//     name: name,
//     job: job,
//     number: number
// };

// object literal shorthand
let myCollection = { name, job, number };

let myArr = [name, job, number, "this array is a disaster"];

let types = myArr.map(element => {
    return typeof(element);
});

let weeded = myArr.filter(element => {
    return typeof(element) == "string";
});

let nums = [1,2,3,4,5,6,7,8];

let total = nums.reduce((x,y) => x+y);