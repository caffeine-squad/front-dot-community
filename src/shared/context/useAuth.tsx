import { createContext, ReactNode, useContext, useState } from "react"

import { auth } from "../services/authenticateService";
import { LoginRequest, User } from "../Types/types"
import { useLocation, useNavigate } from "react-router-dom";

type AuthContextProps = {
  user?: User,
  authenticated: boolean,
  token: string,
  onLogin: (Login: LoginRequest) => void,
  logout: () => void
}

const LoginContext = createContext<AuthContextProps>({} as AuthContextProps)

interface LoginProviderProps {
  children: ReactNode,
}

export function LoginProvider({ children }: LoginProviderProps) {
  const [authenticated, setAutheticated] = useState(false);
  const [user, setUser] = useState<User | undefined>();
  const [token, setToken] = useState("");

  const navigate = useNavigate();
  const { state } = useLocation();


  function onLogin(loginParams: LoginRequest) {
    const login = async () => {
      try {
        const data = await auth(loginParams.email, loginParams.password)
        localStorage.setItem("token", data.token)
        setAutheticated(true)
        setUser(data.user)
        setToken(data.token)

        navigate(state?.path || "/menu");
      }
      catch (err) {
        setToken("")
        setUser(undefined)
        setAutheticated(false)
        localStorage.removeItem("token")
      }

    }
    login()
  };
  const logout = () => {
    setToken("")
    setUser(undefined)
    setAutheticated(false)
    localStorage.removeItem("token")
  }

  return (<LoginContext.Provider value={{ authenticated, user, token, onLogin, logout }}>{children}</LoginContext.Provider>)
}

export function useAuth(){return( useContext(LoginContext) )};