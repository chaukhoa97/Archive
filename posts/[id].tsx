import { useRouter } from 'next/router';

export default function Post({ post }) {
  const router = useRouter(); //* dùng cho fallback
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1 className="text-5xl">{post.id}</h1>
      <p>{post.title}</p>
    </>
  );
}

// This function also gets called at build time
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: { id: string }) => ({
    params: { id: String(post.id) },
  }));

  // We'll pre-render only these paths at build time.
  // return { paths, fallback: true };

  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true,
  };
}

//1 Fallback: Khi không tìm thấy trang, sẽ có 3 trường hợp
//2 `fallback: false` -> 404
//2 `fallback: true` -> fallback page: page props will be empty, can use `router.isFallback` to render skeleton. In the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.
//2 `fallback: 'blocking'` -> new paths will be server-side rendered with getStaticProps, and cached for future requests so it only happens once per path.

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  console.log(post);

  // The `Post` component will receive `post` as a prop at build time
  return { props: { post } };
}
