import { Routes, Route, Navigate, Outlet, useLocation} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Forum } from '../pages/Forum'
import { Login } from '../pages/Login'
import { RegisterUser } from '../pages/Register'
import { Topic } from '../pages/Topic'
import { EditUsers } from '../pages/EditUser'
import { useAuth } from '../shared/context/useAuth'
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/"/>} />
      <Route path="/cadastro" element={<RegisterUser/>} />
      <Route path="/login" element={<Login/>}/>
      <Route element={<RequireAuth />}>
        <Route path="/forum/topico/:id" element={<Topic/>}/>
        <Route path="/user" element={<EditUsers/>}/>
        <Route path="/forum" element={<Forum/>}/>
      </Route>
    </Routes>
  )
}
function RequireAuth(): JSX.Element {
  const { authenticated } = useAuth();
  const location = useLocation();
  return authenticated === true ? <Outlet /> : <Navigate to='/' replace state={{ path: location.pathname }} />;
}
