import FirstPost from './note';

const ssg = ({ posts }) => {
  return (
    <ul>
      <FirstPost />
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

// This function gets called at build time on server-side. It won't be called on client-side, so you can even do direct database queries. Feel like telling Next.js: “Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default ssg;
