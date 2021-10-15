//* Getting Resource, using Async Function
const alo = async function () {
  const response1 = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Returns a Response object
  const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/2'); // Returns a Response object
  const responses = await Promise.all([response1, response2]); // [Response obj, Response obj]
  responses.forEach((res) => console.log(res.ok)); // Returns true/false; Hoặc console.log(response.status) --> Returns 2xx/4xx
  responses.forEach(async (res) => {
    const a = await res.json(); //! Return data, response1 & response2 chỉ mới là header, phải fetch thêm phần body -> phải có await
    console.log(a);
  });
};
alo();

//* Creating a Resource
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
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
/**
  @output
  {
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
  }
*/

//* Updating a Resource (method: 'PUT') - Replace a resource
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
/**
 @output
 {
   id: 1,
   title: 'foo',
   body: 'bar',
   userId: 1
  }
  */

//* Patching a Resource (method: 'PATCH') - Modify a resource thay vì replace như PUT
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
/**
 @output
 {
   id: 1,
   title: 'Vip pro',
   body: '(như cũ)',
   userId: 1
  }
  */

//* Deleting a Resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});

//* Filtering resources
// This will return all the posts that belong to the first user
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));

//? Listing nested resources
// This is equivalent to /comments?postId=1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));
