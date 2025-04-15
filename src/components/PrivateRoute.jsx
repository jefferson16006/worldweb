import { Navigate } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'

const PrivateRoute = ({ children }) => {
    const isTokenValid = () => {
        const token = localStorage.getItem('token')
        if (!token) {
            return false
        }
        try {
            const { exp } = jwtDecode(token)
            return exp > Date.now() / 1000
        } catch (error) {
            return false
        }
    }
  return isTokenValid() ? children : <Navigate to='/auth/login'/>
}

export default PrivateRoute