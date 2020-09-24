# Exercise 1

In this exercise, we'll create a function that can take in a promise and a transformer function and return a new transformed promise.

In the previous exercise, we used .then(cb) in an imperative way, responding to its resolution by triggering a side effect. But what if we want to create a new promise based on that resolution, but one that changed the value somehow?

It's similar to arrays in this way: sometimes we use .then(cb) the way we would use .forEach(cb), which helps us perform some action, some side effect based on the value. For instance:

```JS
const result = [2, 5, 3].forEach((num) => {
  console.log(num);
});
```

will print "2", "5", and "3" to the terminal, but result will be undefined. We did some stuff, and nothing was returned. Classic imperative code.

But what if we wanted a new array with all these number squared? We could write the following, of course:

```JS
const squares = [];
[2, 5, 3].forEach((num) => {
  squares.push(num * num);
});
```

But there's already a common array function that does just this: .map(cb), which lets us write that as a one-liner:

```JS
const squares = [2, 5, 3].map(num => num * num)
```

The squares array now contains [4, 25, 9]. But why discuss arrays? Because promises are similar. Sometimes, you want to perform a side effect when that resolves, but sometimes, you'd like that result to be formatted in some different way.

So, we're going to create a function that does just that to promises. It's called mapPromise. it takes in a promise and a transformer callback, and returns a new promise that follows these rules:

If the first promise rejects with an error, the new promise rejects with that error.
If the first promise resolves with a result, it calls the transformer with the value as an argument.
If the transformer returns with a value, the new promise resolves with that value.
If the transformer throws an error, the new promise rejects with that error.

