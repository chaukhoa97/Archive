import { gql, useQuery } from "@apollo/client";

const getDogPhotoQuery = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const { loading, error, data, refetch } = useQuery(getDogPhotoQuery, {
    variables: { breed },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  return (
    <>
      <button
        onClick={() =>
          refetch({
            breed: "dalmatian", // Always refetches the query with "dalmatian" as the arg, instead of `breed` variable
          })
        }
      >
        Refetch!
      </button>
      <img src={data.dog.displayImage} />
    </>
  );
}
