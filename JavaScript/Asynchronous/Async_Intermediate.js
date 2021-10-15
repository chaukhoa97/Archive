function resolveAfter2Seconds() {
  console.log('Starting slow promise');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('slow');
      // console.log("slow promise is done");
    }, 2000);
  });
}
function resolveAfter1Second() {
  console.log('Starting fast promise');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('fast');
      // console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log('===== SEQUENTIAL START =====');

  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds();
  console.log(slow); // 2. this runs 2 seconds after 1.

  const fast = await resolveAfter1Second();
  console.log(fast); // 3. this runs 3 seconds after 1.
}

async function concurrentStart() {
  console.log('===== CONCURRENT START with await =====');
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second(); // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow); // 2. this runs 2 seconds after 1.
  console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

function concurrentPromise() {
  console.log('===== CONCURRENT START with Promise.all =====');
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
    (resolveValues) => {
      console.log(resolveValues[0]); // slow
      console.log(resolveValues[1]); // fast
    }
  );
}

async function parallel() {
  console.log('===== PARALLEL with await Promise.all =====');
  // Start 2 "jobs" in parallel and wait for both of them to complete
  Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
setTimeout(concurrentStart, 5000); // after 2 seconds, logs "slow" and then "fast"
setTimeout(concurrentPromise, 10000); // same as concurrentStart
setTimeout(parallel, 15000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"
