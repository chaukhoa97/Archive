import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  //* Hoặc const params = useParams(); -> <span>{params.id}</span>
  const { id } = useParams();
  return (
    <h2>
      Product Detail - Number <span style={{ color: 'red' }}>{id}</span>
    </h2>
  );
};

export default ProductDetail;
