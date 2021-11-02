import axios from 'axios';
// 1xx -> 5xx response: Information, Succeed, Redirection, Client Err, Server Err

//? Concurrent
const alo = async function () {
  const response1 = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Returns a Response obj
  const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
  const responses = await Promise.all([response1, response2]); // [Response obj, Response obj]
  responses.forEach((res) => console.log(res.ok, res.status)); // true/false; 2xx/4xx
  responses.forEach(async (res) => {
    const a = await res.json(); //! Return data, response1 & response2 chỉ mới là header, phải fetch thêm phần body -> phải có await
    console.log(a);
  });
};
alo();

Promise.all([
  axios.get('https://jsonplaceholder.typicode.com/posts/1'),
  axios.get('https://jsonplaceholder.typicode.com/posts/2'),
]).then((res) => res.forEach((i) => console.log(i.data)));

//? GET
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

axios
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => console.log('response', response.data));

//? POST - Creating a Resource
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Title of post',
    body: 'Post Body',
  }),
})
  .then((response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

axios
  .post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Title of post',
    body: 'Body of post',
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));

//? PUT - Replace a resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//? PATCH - Modify a resource thay vì replace như PUT
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'Vip pro',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//? Deleting a Resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});

//? Filtering resources
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));

//? Listing nested resources
// This is equivalent to /comments?postId=1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));
