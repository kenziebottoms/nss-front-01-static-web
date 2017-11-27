// foreach

let myArr = [1, 2, 3, 4, 5, 6];

myArr.forEach(function(number) {
    // WARNING: you can't break out of this
    console.log("can't touch this", number);
});

// regular expressions

var phrase = "one more day";
console.log(phrase);
console.log(phrase.replace(/day/, "dawn"));

var phrase = "what in the fucking fuck";
console.log(phrase);
console.log(phrase.replace(/fuck/, "shit"));
console.log(phrase.replace(/fuck/g, "shit"));

// Javascript in strings/string template literals

// wrap the whole thing in `ticks`, wrap the Javascript in ${}
console.log(`Ho${" ho".repeat(2)}, Merry Christmas`);
console.log("Ho"+ " ho".repeat(2)+", Merry Christmas");

console.log(`7 is equal to ${3+4}`);