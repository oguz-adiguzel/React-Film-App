import { createContext, useContext, useState } from "react";

const EmailContext = createContext();
export const EmailProvider = ({ children }) => {
    const [email, setEmail] = useState('');

    const values = {
        email,
        setEmail
    }

    return <EmailContext.Provider value={values}>
        {children}
    </EmailContext.Provider>
}
export const useEmail = () => {
    return useContext(EmailContext);
}