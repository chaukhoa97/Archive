import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

function csr() {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}

export default csr;
