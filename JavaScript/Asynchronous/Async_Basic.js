// Async function always return a promise. If it's not, it will be wrapped in a Promise
async function foo() {
  return 1;
} // Equalivent to...
function foo2() {
  return Promise.resolve(1);
}

function oneSec(a) {
  return new Promise((resolve, reject) => {
    if (a === 1) setTimeout(() => resolve('Ok bro'), 1000);
    else reject(new RangeError('Lỗi: a !== 1'));
  });
}

//* oneSec(1) --> result = oneSec(1) --> oneSec(2) --> Error
async function asyncCall() {
  try {
    const result = await oneSec(1); //* Sau await luôn là 1 Promise object
    console.log(result);
    const result2 = await oneSec(2); // Error
    console.log(result2);
  } catch (err) {
    console.log(err);
  }
}
asyncCall(); // Ok bro --> Error
