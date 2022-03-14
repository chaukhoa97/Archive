//1 TRAVERSAL
// Function đổi màu để test
function changeColor(element) {
  element.style.backgroundColor = '#333';
}
//1 Selector
const grandparent = document.querySelector('#grandparent--id'); // Hoặc = document.getElementById("grandparent--id");
const parents = document.querySelectorAll('.parent'); // Hoặc = Array.from(document.getElementsByClassName("parent"));
//! Get all <input> with the attribute "value" and has the attribute "value" that is not blank; and all <div class = 'yolo>
var test = document.querySelectorAll(
  'input[value][type="checkbox"]:not([value=""]), .yolo'
);
let dataQuery = document.querySelector("button[data-id='" + a + "']");

parents.forEach(function (parent) {
  changeColor(parent);
});
// Selecting childrens:
const child1 = parents[0].children[0];
const child4 = grandparent.querySelectorAll('.child')[3];
// Selecting parent:
const parent1 = child1.parentElement;
// Selecting ancestor: Tương tự như .querySelector nhưng mà đi lên, trả về MỘT element gần nhất.
const anotherGrandparent = child1.closest('.grandparent');
// Selecting siblings:
const children2 = child1.nextElementSibling;
const anotherChildren1 = children2.previousElementSibling;
//! Các selector NHIỀU element đều Return a NodeList collection (NOT AN ARRAY)

//1 element.addEventListener( 'click', callbackFunction(e) )
//* Theo thứ tự xuất hiện khi click vào Child1: Capture từ trên xuống dưới -> Bubble từ dưới lên trên
document.addEventListener(
  'click',
  (e) => {
    console.log('1. Document Capture');
    e.stopPropagation(); // Dừng chạy tiếp, nhưng do có once ở dưới nên chỉ dừng 1 lần thôi
  },
  { capture: true, once: true }
);
child1.addEventListener(
  'click',
  () => {
    console.log('2. Child1 Capture');
  },
  { capture: true, once: true }
);
child1.addEventListener('click', printHi);
document.addEventListener('click', (e) => {
  console.log('4. Document Bubble');
});
// .removeEventListener
function printHi() {
  console.log('3. Biến mất sau 3s');
  setTimeout(() => child1.removeEventListener('click', printHi), 3000);
}
//! Nếu khai báo div sau khi addEventListener vào document.querySelectorAll('div') thì div mới không nhận event đó
function addGlobalEventListener(eventType, selector, callbackFunction) {
  // Cả document sẽ dc addEventListener, nếu phần bị click trùng với selector thì sẽ thực hiện callbackFunction
  document.addEventListener(eventType, (e) => {
    if (e.target.matches(selector)) callbackFunction(e);
  });
}
addGlobalEventListener('click', 'div', (e) => {
  console.log('5. Global Event Listener');
});

//1 MANIPULATION
const body = document.body; // Chọn <body> element, NOTE: Nếu muốn chọn hết cả file thì dùng document.documentElement
//* Creating, Adding, Modyfying elements
const strong = document.createElement('strong');
strong.innerText = 'A strong text'; //.textContent khá giống, xem khác nhau ở dưới
body.append(strong); // .appendChild gần như giống hệt, chỉ có thể thêm element, k thêm string được -> NÊN DÙNG APPEND
//! Deleting element: strong.remove()
//* Changing Attribute using classList
const anotherDiv = document.querySelector('.anotherDiv');
anotherDiv.classList.add('2ndClass'); // Mỗi line chỉ add dc một class
anotherDiv.classList.remove('2ndClass');
anotherDiv.classList.toggle('2ndClass'); // Bật tắt
anotherDiv.classList.contains('aposdjopasj'); // false
{
  // Cả hai đều hiện "anotherDiv 2ndClass"
  console.log(anotherDiv.classList.value);
  anotherDiv.classList.forEach((className) => {
    console.log(className);
  });
}
//* Alternatively
anotherDiv.removeAttribute('class'); // Del luôn cả attribute class
anotherDiv.setAttribute('class', 'anotherDiv 2ndClass'); // Delete luôn các property trước của attribute class, rồi thêm vào

//* MODIFYING STYLE NOTE: Bên CSS là background-color, nhưng ở bên JS sửa dấu '-' thành camelCase
anotherDiv.style.backgroundColor = 'blue';

//* Node.dataset.giaTri
anotherDiv.dataset.giaTri = '50'; // Ở bên file html: <div data-gia-tri="0">
console.log(anotherDiv.dataset.conSo); // Returns 50

// Sự khác nhau giữa .innerText và .textContent
console.log(
  '.innerText: Print ONLY the text that actually appear on the page (ví dụ nếu display:none thì không hiện)',
  anotherDiv.innerText
);
console.log(
  '.textContent: Print out i hệt bên file HTML (all spacing, all identation of all the content inside the div)',
  anotherDiv.textContent
);
