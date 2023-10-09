import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Home from '../pages/home';
import ErrorPage from '../pages/error/Error';
import { Register } from '../pages/register/Register';
import Dashboard from '../pages/dashboard/Dashboard';


export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/home" element={<Home></Home>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/register" element={<Register></Register>} />
      <Route path="/erro" element={<ErrorPage></ErrorPage>} />
    
      
      
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}