## [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

Each pair of lines is practically equivalent.

#### Multiline Strings

```Javascript
console.log('string text line 1\n' +
'string text line 2');
console.log(`string text line 1
string text line 2`);
```

#### Expression Interpolation

```Javascript
console.log(`Ho${" ho".repeat(2)}, Merry Christmas`);
console.log("Ho"+ " ho".repeat(2)+", Merry Christmas");
```

```Javascript
var a = 5;
var b = 10;

console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
```