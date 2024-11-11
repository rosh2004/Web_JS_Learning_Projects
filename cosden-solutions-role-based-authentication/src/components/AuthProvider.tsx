import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { User } from "../types/user";
import { login } from "../api/auth";

type AuthContext = {
  authToken?: string | null;
  currentUser?: User | null;
  handleLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);
type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({children}: AuthProviderProps){
  const [authToken, setAuthToken] = useState<string | null>();
  const [currentUser, setCurrentUser] = useState<User | null>();
  
  useEffect(() => {
    async function fetchUser(){
      try {
        const response = await login();
        const {authToken, user} = response[1];
        setAuthToken(authToken);
        setCurrentUser(user);
      } catch {
        setAuthToken(null);
        setCurrentUser(null);
      }
    }

    fetchUser();
  }, [])

  const  handleLogin = async (): Promise<void> => {
    try {
      const response = await login();
      const {authToken, user} = response[1];
      setAuthToken(authToken);
      setCurrentUser(user);
    } catch {
      setAuthToken(null);
      setCurrentUser(null);
    }
  }
  const handleLogout = async () => {
    setAuthToken(null);
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider value={{authToken, currentUser, handleLogin, handleLogout}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext);
  if(context === undefined){
    throw new Error("useAuth must be used inside of an AuthProvider");
  }
  return context;
}