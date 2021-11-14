import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
      <Link to="/1">
        <h3 style={{ color: 'red' }}>Wrong: to = '/1' -{'>'} Link tới /1</h3>
      </Link>
      <Link to="2">
        <h3 style={{ color: 'green' }}>
          Right: Relative Link(not begin with an /) --- to = '2' -{'>'} Link tới
          Products/2
        </h3>
      </Link>
      <Link to="../3">
        <h3 style={{ color: 'blue' }}>
          Vip: Cũng có thể dùng dấu '..' để up 1 route --- to = '../3' -{'>'}{' '}
          Link tới /3
        </h3>
      </Link>
      <Outlet />
    </>
  );
};

export default Products;
