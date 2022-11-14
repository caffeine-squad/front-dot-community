import { Routes, Route, Navigate} from 'react-router-dom'
import { Home } from '../pages'
import { RegisterUser } from '../pages/Register'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/"/>} />
      <Route path="/cadastro" element={<RegisterUser/>} />
    </Routes>
  )
}
