import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <Link to='/'>Home </Link>
        <Link to='/auth'>Auth </Link>
        <Link to='/register'>Register </Link>
      </header>
      <Outlet />
    </>
  )
}

export default Layout