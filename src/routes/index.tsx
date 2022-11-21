import { Routes, Route, Navigate} from 'react-router-dom'
import { Home } from '../pages'
import { Forum } from '../pages/Forum'
import { Login } from '../pages/Login'
import { RegisterUser } from '../pages/Register'
import { Topic } from '../pages/Topic'



export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/"/>} />
      <Route path="/cadastro" element={<RegisterUser/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/forum" element={<Forum/>}/>
      <Route path="/forum/topico" element={<Topic/>}/>
    </Routes>
  )
}
