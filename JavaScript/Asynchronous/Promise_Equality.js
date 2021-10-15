/* eslint-disable no-unused-expressions */
const p = new Promise((resolve) => resolve(100));
const dotResolve = Promise.resolve(p); // NOTE: Không cần "new" như expression thông thường
async function asyncF() {
  return p;
}
// Check
dotResolve === p; // true
asyncF === p; // false
