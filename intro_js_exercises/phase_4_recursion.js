
// function range(start, end, array = []) {
//   array.push(start);
//   if (start === end) {
//     return array;
//   }
//   range(start + 1, end, array);
//   return array;
// }

function range(start, end) {
  if (start === end) {
    return [];
  }
  let array = range(start, end - 1);
  array.push(end - 1);
  return array;
}

console.log(range(5, 22));


function sumRec(arr) {
  if (arr.length < 2) {
    return arr[0];
  }
  let num = arr[0];
  num += sumRec(arr.slice(1));
  // You must invoke the function in this case. And also -1 doesn't work in Javascript,
  // the slice method automatically assumes you mean the last element (unless you pass something in).
  return num;
}

console.log(sumRec([1,2,3]));


function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
}

console.log(exponent(10,1));


function exponent2(base, exp) {
  if (exp === 0 ) {
    return 1;
  }
  if (exp % 2 === 0) {
    let result = exponent2(base, exp / 2);
    return result * result;
  } else {
    let result = base * exponent2(base, (exp-1)/ 2);
    return result * result;
  }
}

console.log(exponent(10,3));

function fibonnaci(n) {
  const result = [];
  if (n < 3) {
    return [0, 1].slice(0, n);
  }

  let fibs = fibonnaci(n - 1);
  fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);

  return fibs;
}

console.log(fibonnaci(7));
