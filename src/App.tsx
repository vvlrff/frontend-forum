import { useEffect } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Layout from './components/Layout';
import { useAppDispatch } from './app/hooks';
import { setUser } from "./features/authSlice";
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='auth' element={<Auth />} />
    <Route path='register' element={<Register />} />
    <Route path='dashboard' element={<Dashboard />} />
  </Route>
));

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
