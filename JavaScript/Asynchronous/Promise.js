function createPromise(a) {
  return new Promise((resolve, reject) => {
    // We call resolve(any value) when what we do WAS succesful and reject(any value) when it was failed
    if (a === 1) resolve('a = 1');
    else reject(new RangeError('a !== 1'));
  });
}

//* .then(resolveHandler, rejectHandler)
createPromise(2)
  .then(
    // Thông thường .then() chỉ cần 1 param - hàm resolve là đủ, không cần param thứ 2 - hàm reject, trừ những lỗi phải dc xử lý ngay lập tức.
    (resolveValue) => console.log(resolveValue) //* resolveValue ở đây là giá trị resolve của Promise được gọi - ở đây là string "a = 1"
    // ,(rejectValue) => { doing something to deal with the error immediately }
  )
  .catch((err) => console.log(err.name, err.message));
// .catch() cũng same same với .then(); chỉ khác là .catch(rejectHandlerForAllErrors) - không có resolveHandler.

//* .all & .race
const recordVideoOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Video 1 Recorded');
  }, 200);
});
const recordVideoTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Video 2 Recorded');
  }, 100);
});

Promise.all([recordVideoOne, recordVideoTwo]).then((messages) => {
  console.log(messages); // ["Video 1 Recorded", "Video 2 Recorded"]
});

Promise.race([recordVideoOne, recordVideoTwo]).then((message) => {
  console.log(message); // Video 2 Recorded
});
