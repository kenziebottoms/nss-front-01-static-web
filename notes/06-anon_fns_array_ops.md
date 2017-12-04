## Anonymous Functions

The two below code snippets are equivalent.

```Javascript
function() {
    console.log("Hello world!");
};
```
```Javascript
() => {
    console.log("Hello world!");
};
```

Here is another example of an anonymous function.

```Javascript
document.getElementById("btn").addEventListener("click", e => {
    e.preventDefault();
    alert("Button!!");
});
```
**Note:** `(e) => {}` is equivalent to `e => {}`

### One-liners

If it's a one-liner, you can leave out the `{}`.

```Javascript
document.getElementById("btn").addEventListener("click", e => alert("Button!!"));
```

### `forEach`

```Javascript
myArr.forEach((element, index) => {
    console.log(`${element}, ${index}.`);
});
```

### `map`

```Javascript
let squares = nums.map(element => {
    return Math.pow(element, 2);
});
```

### `filter`

```Javascript
let evens = nums.filter(element => {
    return element % 2 == 0;
});
```

### `reduce`

Collapses `i[0]` and `i[1]` according to the passed function.

```Javascript
let sum = nums.reduce((x, y) => x+y);
```

### `sort`

Sort works out of the box for strings, but numbers have to be sorted explicitly with this function.

```Javascript
let ordered = nums.sort((a,b) => a-b);
```