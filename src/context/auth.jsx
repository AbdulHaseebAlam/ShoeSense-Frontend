import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        userData: null,
        token: ''
    });
    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            const parsedData = JSON.parse(data);
            setAuth({
                ...auth,
                userData: parsedData.user,
                token: parsedData.token
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };