// NOTE: THE BEST BASIC SORT, thích hợp với các small lists and mostly sorted lists
// Bắt đầu từ phần tử thứ 2, so sánh với phần tử đứng trước nó.
function insertionSort(array) {
  let temp;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    for (var j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

insertionSort([4, 2, 6, 5, 1, 3]);
