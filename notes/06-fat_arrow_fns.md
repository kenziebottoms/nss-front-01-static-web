### Anonymous Functions

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

If it's a one-liner return function, you can leave out the `{}`.

```Javascript
document.getElementById("btn").addEventListener("click", e => alert("Button!!"));
```