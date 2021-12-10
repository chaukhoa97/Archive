import { useLocation } from 'react-router-dom';
const MainSider = () => {
  const location = useLocation();
  console.log(location.pathname);
  const handleClick = (e) => {
    console.log(e.key);
  };
  return (
    <Menu onClick={handleClick} mode="inline" selectedKeys={location.pathname}>
      <Menu.Item key="/profile">
        <Link to="/profile">Thông tin cá nhân</Link>
      </Menu.Item>
      <Menu.Item key="/health-declaration">
        <Link to="/health-declaration">Khai báo y tế</Link>
      </Menu.Item>
    </Menu>
  );
};
