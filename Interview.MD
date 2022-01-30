# HTML

```html
<!DOCTYPE html>: HTML5, HTML cũ hơn thì dài hơn rất nhiều
<html lang="en" dir="rtl">
  <head>
  Set character encoding for the document
    <meta charset="UTF-8" />
  Viewport for responsive web design
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  Allows control over where resources are loaded from.
  Place as early as possible,
  as the tag only applies to resources that are declared after it.
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  Control the behavior of search engine crawling and indexing
    <meta name="robots" content="noindex,nofollow">
    <meta name="googlebot" content="index,follow">
  -------------------------------------------
    <meta name="google" content="nositelinkssearchbox">
    <meta name="google" content="notranslate">
    <link rel="canonical" href="https://example.com/products/phone" />
  Name of web application (only should be used if the website is used as an app)
    <meta name="application-name" content="Application Name" />
    <link> ... Links to external CSS & JS files </script>
  </head>
</html>
```

- `<meta robots />`(line 16)

  - `noindex`: To not show this page in search results. Omitting `noindex` will indicate the page can be indexed and shown in search results.
    In a website, u might not want to index certain pages. Common use cases include settings pages, internal search pages, policies, and more.

  - `nofollow`: To not follow links on this page. Omitting this will allow robots to crawl and follow links on this page. Links found on other pages may enable crawling, so if link `A` appears in pages `X` and `Y`, and `X` has a nofollow robots tag, but `Y` doesn't, Google may decide to crawl the link.

- `meta googlebot`(line 17): Use this tag if you want to have a separate rule for Googlebot, and a general one for the rest of the search bots.

- `canonical`(line 21): Content của `example.com/products/phone` trùng với `example.com/phone` -> Chọn link này để Google ko crawl trùng

- Semantic: `section(A group of content, typically with a heading)`, `header, nav, main, footer, aside`, article, address, figure.

## SEO

**_The most important thing for SEO is that page data and metadata is available on page load without JavaScript. In this case SSG or SSR are going to be your best options._**

![](https://nextjs.org/_next/image?url=%2Fstatic%2Fimages%2Flearn%2Fseo%2Fgooglebot.png&w=1920&q=75)

1. **Find URLs**: Google sources URLs from many places, including Google Search Console, links between websites, or XML sitemaps.
2. **Add to Crawl Queue**: These URLs are added to the Crawl Queue for the Googlebot to process. URLs in the Crawl Queue usually last seconds there, but it can be up to a few days depending on the case, especially if the pages need to be rendered, indexed, or – if the URL is already indexed – refreshed. The pages will then enter the **_Render Queue_**.
3. **HTTP Request**: The crawler makes an HTTP request to get the headers and acts according to the returned status code:

   - 200 - it crawls and parses the HTML.
   - 30X - it follows the redirects.
   - 40X - it will note the error and not load the HTML
   - 50X - it may come back later to check if the status code has changed.

4. **Render Queue**: The different services and components of the search system process the HTML and parse the content. If the page has some JavaScript client-side based content, the URLs might be added to a Render Queue. Render Queue is more costly for Google as it needs to use more resources to render JavaScript and therefore URLs rendered are a smaller percentage over the total pages out there on the internet. Some other search engines might not have the same rendering capacity as Google, and this is where Next.js can help with your rendering strategy.
5. **Ready to be indexed**: If all criteria are met, the pages may be eligible to be indexed and shown in search results.

## Core Web Vitals

### Largest Contentful Paint (LCP)

LCP measures the time it takes to get the largest element on the page visible within the viewport. This could be a large text block, video, or image that takes up the primary real estate on the page.  
-> LCP measures the **_loading performance_** of a web page.

    Note: This is not First Contentful Paint (FCP), which measures the time from
    when the page begins to load to when the first element is rendered on screen.

### First Input Delay (FID) == Total Blocking Time

FID measures the **_interactivity_** of a web page.

### Cumulative Layout Shift (CLS)

CLS occurs when elements have been shifted after initially being rendered by the DOM. Ex: A `button` is rendered after the `text block`, causing the `text` to shift downward.  
-> CLS measure your site’s **_overall layout stability_**
![](https://nextjs.org/static/images/learn/seo/cls-example.png)

### [Lighthouse Weights for Vitals](https://web.dev/performance-scoring/#lighthouse-8): How to improve

```js
import Image from `next/image`
```

#### [Dynamic Import](https://nextjs.org/docs/advanced-features/dynamic-import):

```js
<input
  type="text"
  placeholder="Search"
  onChange={async (e) => {
    const { value } = e.currentTarget;
    // Only load the module dynamically in the browser
    // after the user types in the search input
    const Fuse = (await import('fuse.js')).default;
    const fuse = new Fuse(names);
    setResults(fuse.search(value));
  }}
/>
```

#### [Dynamic Import for Components](https://nextjs.org/learn/seo/improve/dynamic-import-components): Dynamically render React component that is not needed on the initial page load.

```js
import dynamic from 'next/dynamic';
const CodeSample = dynamic(() => import('../components/CodeSample'), {
  ssr: false,
});
// Now, when `isModalOpen` is toggled to true for the first time, the JavaScript required will be requested.
isModalOpen && (
  <CodeSample isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
);
```

#### [Optimizing Third-Party Scripts](https://nextjs.org/learn/seo/improve/third-party-scripts)

**_Load `script` sớm có thể delay việc render page content_**
-> With the Next.js `Script` component, you can add it anywhere in the component without needing to use `next/head`:

```js
import Head from 'next/head'
import Script from 'next/script';

function IndexPage() {
  return (
     <Head>
        <script src="https://early-load.com" />
      </Head>
    <div>
      <Script
        // allows u to decide when to fetch and execute a script for optimal loading.
        strategy="afterInteractive"
        src="https://load-later.com"
      />
    </div>
  );
}
```

# CSS

- Flexbox: Main(`justify-content`)/Cross(`align-items`) Axis
  - `flex-grow` - `MAX`: Chỉ định tỷ lệ kích thước to nhất mà phần tử nên có so với các phần tử còn lại.
    - `Default 0`: Kích thước của các phần tử sẽ khớp với nội dung bên trong -> có thể ko lắp đầy hết `Parent`.
    - `> 1`: Ví dụ có 2 phần tử: Child1: `grow: 1`, Child2: `grow: 3` -> Cả 2 sẽ lấp đầy `Parent` nhưng Child2 sẽ chiếm nhiều hơn.
  - `flex-shrink` - `MIN`: Kích thước nhỏ nhất mà phần tử nên có. Giá trị càng lớn thì phần tử càng nhỏ.
    - `Default 1`: Take up the same amount of space at all times.
    - `0`: Bất chấp giữ nguyên kích thước, dẫu có phá vỡ layout.
  - `flex-basis` - `IDEAL`: Kích thước lý tưởng của phần tử.
    - `Default auto`: Dc tính toán theo nội dung và cá phần tử khác.
    - `1000px`: Trình duyệt sẽ hiểu là "Hãy cố gắng dành ra `1000px` cho phần tử này". Cái này còn phụ thuộc vào nội dung của những phần tử khác - Nếu nội dung mấy phần tử khác mà to quá thì cũng chịu.
- Box model: [Content + (Padding + Border)] + Margin
  - `box-sizing: border-box` : Width/Height = `Content` + `Padding` + `Border
  - `box-sizing: content-box` : Width/Height = `Content` -> `Padding` & `Border` làm width to hơn so với ý muốn.
- Display: `flex`, `grid`, `none`
  - `inline`(span): ignore `width` & `height`, accept `margin` & `padding` but only push other elements horizontally away, not vertically.
  - `inline-block`(button, select, input): Similar to inline, but `width` & `height` are accepted.
    ![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2011/09/inline-block.png?w=526&ssl=1)
  - `block`(div, h3, p): Take up as much horizontal space as they can.
- Position: `fixed`, `sticky`(`relative` + `fixed`), `static`
  - `absolute`: If a child element has `absolute` then the parent element will behave as if the child isn’t there at all. Để children absolutely position theo parent thì parent phải có position là `relative` hoặc `absolute`.
  - `relative`: Ở chỗ cũ như `static`, nhưng khác với `static` là bây giờ `left/right/top/bottom/z-index` sẽ hoạt động.
- Unit: px vw vh rem em %
- `@media screen and (max-width: 768px)`: Tương đương width <= 768px
- `transform: translateX(100px)` -> `transistion: width 2s, transform 1s ease`
- `@keyframes dance { 0% {...} 100% {...} }` -> `animation: dance 1s infinite;`
- `::before { content: '', color:... } `

## SASS -> Dùng SCSS

- Nested Routes

- Variable: `$sm: 576px`

- Mixin: Có thể dùng variable -> hợp với flexible style, như ở đây là phụ thuộc vào variable `$bgColor`, file css ra lê thê hơn.

  ```scss
  @mixin error($bgColor) {
    border: 1px solid $bgColor;
    background-color: #fff;
  }
  // Use the mixin in another `scss` file
  .someClass {
    @include error(#000);
  }
  ```

- Extend: Ko dùng variable -> hợp cho static style, file css ra cũng gọn hơn
  ```scss
  .error {
    border: 1px #f00;
    background-color: #fdd;
  }
  .seriousError {
    @extend .error;
    border-width: 3px;
  }
  ```

## Bootstrap

- 12 columns
- `container`: Responsive fixed-width container.

# JavaScript

- `Hoisting`: Là quá trình đưa các khai báo hàm (function declaration) và khai báo biến lên trên đầu trang, nó được thực hiện tự động bởi JavaScript Engine.

  ```js
  add(3, 4); //* returns 7
  // Function declaretion -> hoisting lên đầu
  function add(num1, num2) {
    return num1 + num2;
  }

  //* Function expression -> ko hoisting
  subtract(7, 4); //! Uncaught TypeError: subtract is not a function
  var subtract = function (num1, num2) {
    return num1 - num2;
  };
  ```

- `Closure` bao gồm: Function và References tới các biến ở outer scope của function đó (Lexical Environment). Trong JS, closures của 1 function dc tạo ra ở thời điểm declare function đó.

  ```js
  function f1() {
    let x = 0; // Dc giữ lại trong closure
    let y = 0; // Dc dọn dẹp bởi garbage collector
    return function f2() {
      // f2 truy cập dc variables ở outer scope
      x += 2;
      console.log(x);
      return x;
    };
  }
  const f3 = f1(); // execute f1() returns f2 -> những biến ở outer scope của f2 sẽ dc giữ lại.
  f3(); //1 2
  f3(); //1 4
  console.log(x); // ReferenceError: Biến x chỉ dc sử dụng trong f1
  ```

- Shallow Copy vs Deep Copy:

  ```js
  var obj = [{ a: 1 }, { b: 2 }]; // _isEqual -> true; == -> false
  var shallow = _.clone(obj);
  console.log(shallow[0] === obj[0]); // => true
  var deep = _.cloneDeep(obj);
  console.log(deep[0] === obj[0]); // => false
  ```

## Array Methods

```js
//! Basics
const numbers = [3, 4];
numbers.push(5, 6); // Thêm vào cuối - [3, 4, 5, 6]
numbers.pop(); // Xóa số cuối - [3, 4, 5]
numbers.unshift(1, 2); // Thêm vào đầu - [1, 2, 3, 4, 5]
numbers.shift(); // Xóa số đầu - [2, 3, 4, 5]
numbers.reverse(); // Đảo ngược - [5, 4, 3, 2]
numbers.splice(2, 1, 'a', 'b'); // (fromIndex, deleteCount, item1, item2, ...)

//* Set
uniqueArray = [...new Set(array)];

//* Filters, every, some - Same arguments: .filter((value,index,array)=>{...})
let numbers = [1, 2, 3, 4];
const allPositive = numbers.every((value) => value >= 0); // true
const atLeastOneNegative = numbers.some((value) => value <= 0); // false
const f = numbers.filter((n) => n > 5); //* New array

//* .concat & .slice Array
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second); // [1, 2, 3, 4, 5, 6]
const sliced = combined.slice(2, 5); // Ko tính end; cũng có thể dùng .slice(`omit`) để shallow copy

//1 Map & forEach
const arr = [1, 2, 3, 4, 5];
//* Map: Creating a NEW array containing output of some processing done on each element of the array.
const mappedArray = arr.map((value, index, array) => element.children);

//! forEach: Executes a provided function once per array element. For example, saving all elements in the database.
arr.forEach(
  (currentValue, index, arr) => arr[index] === currentValue, //! Dummy callback
  thisValue // The value used as the function's "this" value
); // returns undefined

//! Sort
// a - b <= 0 -> a, b giữ nguyên vị trí (vẫn a xếp trước b), còn > 0 thì đổi chỗ
anotherCombined.sort((a, b) => a - b);
// Sort theo text alphabet
users.sort((a, b) => a.firstname.localeCompare(b.firstname));
```

## Typescript

## ES6

# React

Core things in React ecosystem: Basic & Custom Hooks, Component re-render concept,

## Hooks

## Redux: State management tool

1. Component lấy dữ liệu từ Store để thể hiện trên UI (View)
2. Người dùng tương tác lên UI (Ex: onClick button ….)
3. Component đóng vai trò là Action Creator, tạo ra action obj bằng cách tự declare 1 action object (slice2 line 40) hoặc bằng THUNK: 1 async fn that returns the action object (slice2 line 18)
4. Component gọi hàm dispatch với tham số là action obj vừa tạo từ 1 trong 2 cách trên, bao gồm 2 property là type (để store biết nên gọi reducer nào) và payload (tham số cho hàm reducer).
5. Redux store dựa theo type của action object để gọi reducerFn tương ứng
6. Update Store data dựa theo storeState & payload

## react-hook-form

# UI

## Tailwind

## Ant Design

- 24 columns

# ETC

## Git

- Cách review PR
- Các bước push 1 commit
- Các lệnh hay dùng

## Eslint: Ứng dụng của Eslint, nguồn của các rules, cách config.

## Packages

- `react-router`

JS:
var, let, const
Kiểu dữ liệu nguyên thủy và object
toán tử optional chaining ?. với toán tử ??
phân biệt null, undefined
async await
local storage, session, cookies
callback function
so sánh giữa axios với fetch
array method như map, filter, reduce, some, every,...
HOF, currying, closure
Xem thêm các method liên quan tới Object như Object.keys, values, entries. Object.seal vs Object.freeze
Khái niệm mutate và immutate
Truthy falsy
Promise

React:
redux flow (các state management library tương tự redux, VD: mobx)
generator function như trong redux saga
custom hooks
styled components
createPortal
lifecycle
props, state drilling
Giống như HOF thì react có HOC
virtual DOM

```

```
