import { Routes, Route, Navigate} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Forum } from '../pages/Forum'
import { Login } from '../pages/Login'
import { RegisterUser } from '../pages/Register'
import { Topic } from '../pages/Topic'
import { ManageUser } from '../pages/ManageUsers'



export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/"/>} />
      <Route path="/cadastro" element={<RegisterUser/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/forum" element={<Forum/>}/>
      <Route path="/forum/topico" element={<Topic/>}/>
      <Route path="/gerenciar/usuario" element={<ManageUser/>}/>
    </Routes>
  )
}
