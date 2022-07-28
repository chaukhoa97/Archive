// Async function always return a promise. If not, it will be wrapped in a Promise
async function foo() {
  return 1;
} // Equalivent to...
function foo2() {
  return Promise.resolve(1);
}

function oneSec(a) {
  return new Promise((resolve, reject) => {
    // We call resolve() when what we do WAS succesful and reject() when it was failed
    if (a === 1) setTimeout(() => resolve("Ok bro"), 1000);
    else reject(new RangeError("Lỗi: a !== 1"));
  });
}

oneSec(2)
  .then(
    // Thông thường .then() chỉ cần 1 param - hàm resolve là đủ, không cần param thứ 2 - hàm reject, trừ những lỗi phải dc xử lý ngay lập tức.
    (resolveValue) => console.log(resolveValue) //* resolveValue ở đây là giá trị resolve của Promise được gọi - ở đây là hàm `setTimeout`
    // ,(rejectValue) => { doing something to deal with the error immediately }
  )
  .catch((err) => console.log(err.name, err.message));

// Await
async function asyncCall() {
  try {
    const result = await oneSec(1);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
