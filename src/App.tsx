import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';

import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

import Layout from './components/Layout';

import './App.css';
import Home from './pages/Home';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='auth' element={<Auth />} />
    <Route path='register' element={<Register />} />
    <Route path='dashboard' element={<Dashboard />} />
  </Route>
))

function App() {
  return (
    // <AuthProvider>
      <RouterProvider router={router} />
    // </AuthProvider>
  )
}

export default App;
