import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') || 'false');

    useEffect(() => {
        if (isAuth === 'true') {
            localStorage.setItem('isAuth', isAuth);
        }
    }, [isAuth]);

    const values = {
        isAuth,
        setIsAuth
    }

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
}
export const useAuth = () => {
    return useContext(AuthContext);
}