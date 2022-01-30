import FirstPost from './note';
const ssr = ({ posts }) => {
  return (
    <div>
      <FirstPost />
      <h1>{posts.length}</h1>
    </div>
  );
};

// This gets called on every request instead of on build time
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  // Pass data to the page via props
  return {
    props: {
      posts,
    },
  };
}

export default ssr;
