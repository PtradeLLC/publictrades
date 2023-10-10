// authContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
    authStatus: false,
    setAuthStatus: () => { },
});

export const AuthProvider = ({ children }) => {
    const [authStatus, setAuthStatus] = useState(false);

    return (
        <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;



// import { createContext } from "react";

// export const AuthContext = createContext({
//     authStatus: false,
//     setAuthStatus: () => { },
// });

// export const AuthProvider = AuthContext.Provider;

// export default AuthContext;
