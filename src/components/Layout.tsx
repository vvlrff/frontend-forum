import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to='/'>Главная </Link>
        <Link to='/auth'>Авторизироваться </Link>
        <Link to='/register'>Зарегистрироваться </Link>
        <Link to='/posts'>Посты </Link>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;