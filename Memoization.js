function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
// console.log(fib(2))

function fibWithMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibWithMemo(n - 1) + fibWithMemo(n - 2);
  return memo[n];
}
// console.log(fibWithMemo(6))

function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
// console.log(factorial(4))
function factorialWithMemo(n, memo = {}) {
  if (n in memo) return n;
  if (n == 0) {
    return 1;
  }
  memo[n] = n * factorialWithMemo(n - 1);
  return memo[n];
}
// console.log(factorialWithMemo(15))

function sum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sum(4))
function sumWIthMemo() {
  const cache = {};
  return function (n) {
    if (n in cache) {
      return ` sum from ${cache[n]}`;
    }
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    cache[n] = sum;
    return cache[n];
  };
}
let sumFunc = sumWIthMemo();
// console.log(sumFunc(4));
// console.log(sumFunc(4));

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = args.join(",");

    if (cache[key]) {
      console.log("Fetching from cache");
      return cache[key];
    }

    const result = fn.apply(this, args);

    cache[key] = result;

    return result;
  };
}

function slowSquare(n) {
  console.log("Calculating...");
  return n * n;
}

const memoSquare = memoize(slowSquare);

memoSquare(5);
memoSquare(5)