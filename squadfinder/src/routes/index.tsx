import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Home from '../pages/home';
import ErrorPage from '../pages/error/Error';
import { Register } from '../pages/register/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import { RequireAuth } from '../shared/contexts/Auth/RequireAuth';


export const AppRoutes = () => {

  // const auth = useContext(AuthContext);

  // const handleLogout = async () => {
  //   await auth.signout();
  //   window.location.href = window.location.href;
  // }


  return (
    <Routes>
      <Route path="/home" element={<Home></Home>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/register" element={<Register></Register>} />
      <Route path="/erro" element={<ErrorPage></ErrorPage>} />

      {/* DASHBOARD */}
      <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
    
      
      
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}