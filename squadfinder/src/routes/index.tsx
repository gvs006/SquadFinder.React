import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Home from '../pages/home';
import ErrorPage from '../pages/error/Error';

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/home" element={<Home></Home>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/erro" element={<ErrorPage></ErrorPage>} />
      
      <Route path="*" element={<Navigate to="/erro" />} />
    </Routes>
  );
}