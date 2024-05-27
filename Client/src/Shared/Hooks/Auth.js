import { createContext, useContext } from 'react';

export const authContext = createContext({
    isAdmin: null,
    setIsAdmin: () => {},
    token: null,
    setToken: () => {}
})

export const AuthProvider = authContext.Provider

export default function useAuth(){
    return useContext(authContext)
}