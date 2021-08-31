import React, { createContext, useState } from 'react'

export const AlertContext = createContext();

const ToastContext = ({ children }) => {

    const [ toasts, setToasts ] = useState([]);

    return (
        <AlertContext.Provider value={{ 
                toasts, 
                dispatchToast: toast => setToasts(prevState => [
                ...prevState,
                toast
            ]) 
        }}>
            { children }
        </AlertContext.Provider>
    )
}

export default ToastContext
