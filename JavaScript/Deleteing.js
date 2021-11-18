let arr1 = [1, 2];
const arr2 = arr1;
arr1 = []; // arr2 = [1, 2];
arr1.length = 0; // arr2 = []
arr1.splice(0, arr1.length); // arr2 = []
