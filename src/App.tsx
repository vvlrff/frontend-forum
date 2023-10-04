import { useEffect } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import PostsPage from './pages/PostsPage/PostsPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Layout from './components/Layout';
import { useAppDispatch } from './app/hooks';
import { setUser } from "./features/authSlice";
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='auth' element={<AuthPage />} />
    <Route path='register' element={<RegisterPage />} />
    <Route path='posts' element={<PostsPage />} />
  </Route>
));

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
