//2 (Uncommon) instanceof
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toLocaleDateString());
  } else {
    console.log(x.toUpperCase());
  }
}
